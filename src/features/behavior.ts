import { clamp, interceptWindowEvent, pauseFor } from "@sv443-network/userutils";
import { domLoaded, error, getDomain, getVideoTime, getWatchId, info, log, getVideoSelector, waitVideoElementReady } from "../utils";
import { getFeatures } from "../config";
import { addSelectorListener } from "../observers";
import { LogLevel } from "../types";

//#region beforeunload popup

let beforeUnloadEnabled = true;

/** Disables the popup before leaving the site */
export function disableBeforeUnload() {
  beforeUnloadEnabled = false;
  info("Disabled popup before leaving the site");
}

/** (Re-)enables the popup before leaving the site */
export function enableBeforeUnload() {
  beforeUnloadEnabled = true;
  info("Enabled popup before leaving the site");
}

/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site */
export async function initBeforeUnloadHook() {
  interceptWindowEvent("beforeunload", () => !beforeUnloadEnabled);
}

//#region auto close toasts

/** Closes toasts after a set amount of time */
export async function initAutoCloseToasts() {
  try {
    const animTimeout = 300;

    addSelectorListener("popupContainer", "tp-yt-paper-toast#toast", {
      all: true,
      continuous: true,
      listener: async (toastElems) => {
        for(const toastElem of toastElems) {
          if(!toastElem.hasAttribute("allow-click-through"))
            continue;

          if(toastElem.classList.contains("bytm-closing"))
            continue;
          toastElem.classList.add("bytm-closing");

          const closeTimeout = Math.max(getFeatures().closeToastsTimeout * 1000 + animTimeout, animTimeout);
          await pauseFor(closeTimeout);

          toastElem.classList.remove("paper-toast-open");
          log(`Automatically closed toast '${toastElem.querySelector<HTMLDivElement>("#text-container yt-formatted-string")?.textContent}' after ${getFeatures().closeToastsTimeout * 1000}ms`);

          // wait for the transition to finish
          await pauseFor(animTimeout);

          toastElem.style.display = "none";
        }
      },
    });

    log("Initialized automatic toast closing");
  }
  catch(err) {
    error("Error in automatic toast closing:", err);
  }
}

//#region remember song time

interface RemSongObj {
  /** Watch ID */
  watchID: string;
  /** Time of the song in seconds */
  songTime: number;
  /** Timestamp this entry was last updated */
  updateTimestamp: number;
}

let remSongsCache: RemSongObj[] = [];

/**
 * Remembers the time of the last played song and resumes playback from that time  
 * CALLED BEFORE DOM IS READY!
 */
export async function initRememberSongTime() {
  if(getFeatures().rememberSongTimeSites !== "all" && getFeatures().rememberSongTimeSites !== getDomain())
    return;

  const storedDataRaw = await GM.getValue("bytm-rem-songs");
  if(!storedDataRaw)
    await GM.setValue("bytm-rem-songs", "[]");

  remSongsCache = JSON.parse(String(storedDataRaw ?? "[]")) as RemSongObj[];

  log(`Initialized song time remembering with ${remSongsCache.length} initial entries`);

  if(location.pathname.startsWith("/watch"))
    await restoreSongTime();

  if(!domLoaded)
    document.addEventListener("DOMContentLoaded", remSongUpdateEntry);
  else
    remSongUpdateEntry();
}

/** Tries to restore the time of the currently playing song */
async function restoreSongTime() {
  if(location.pathname.startsWith("/watch")) {
    const watchID = new URL(location.href).searchParams.get("v");
    if(!watchID)
      return;

    const entry = remSongsCache.find(entry => entry.watchID === watchID);
    if(entry) {
      if(Date.now() - entry.updateTimestamp > getFeatures().rememberSongTimeDuration * 1000) {
        await delRemSongData(entry.watchID);
        return;
      }
      else {
        if(isNaN(entry.songTime))
          return;
        const doRestoreTime = async () => {
          const vidElem = await waitVideoElementReady();
          const vidRestoreTime = entry.songTime - (getFeatures().rememberSongTimeReduction ?? 0);
          vidElem.currentTime = clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
          await delRemSongData(entry.watchID);
          info(`Restored song time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
        };
        if(!domLoaded)
          document.addEventListener("DOMContentLoaded", doRestoreTime);
        else
          doRestoreTime();
      }
    }
  }
}

/** Only call once as this calls itself after a timeout! - Updates the currently playing song's entry in GM storage */
async function remSongUpdateEntry() {
  if(location.pathname.startsWith("/watch")) {
    const watchID = getWatchId();
    if(!watchID)
      return;

    const songTime = await getVideoTime() ?? 0;

    const paused = document.querySelector<HTMLVideoElement>(getVideoSelector())?.paused ?? false;

    // don't immediately update to reduce race conditions and only update if the video is playing
    // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
    if(songTime > getFeatures().rememberSongTimeMinPlayTime && !paused) {
      const entry = {
        watchID,
        songTime,
        updateTimestamp: Date.now(),
      };
      await setRemSongData(entry);
    }
    // if the song is rewound to the beginning, delete the entry
    else {
      const entry = remSongsCache.find(entry => entry.watchID === watchID);
      if(entry && songTime <= getFeatures().rememberSongTimeMinPlayTime)
        await delRemSongData(entry.watchID);
    }
  }

  const expiredEntries = remSongsCache.filter(entry => Date.now() - entry.updateTimestamp > getFeatures().rememberSongTimeDuration * 1000);
  for(const entry of expiredEntries)
    await delRemSongData(entry.watchID);

  // for no overlapping calls and better error handling
  setTimeout(remSongUpdateEntry, 1000);
}

/** Adds an entry or updates it if it already exists */
async function setRemSongData(data: RemSongObj) {
  const foundIdx = remSongsCache.findIndex(entry => entry.watchID === data.watchID);
  if(foundIdx >= 0)
    remSongsCache[foundIdx] = data;
  else
    remSongsCache.push(data);

  await GM.setValue("bytm-rem-songs", JSON.stringify(remSongsCache));
}

/** Deletes an entry */
async function delRemSongData(watchID: string) {
  remSongsCache = [...remSongsCache.filter(entry => entry.watchID !== watchID)];
  await GM.setValue("bytm-rem-songs", JSON.stringify(remSongsCache));
}

//#region disable darkreader

/** Disables Dark Reader if it is present */
export function disableDarkReader() {
  if(getFeatures().disableDarkReaderSites !== getDomain() && getFeatures().disableDarkReaderSites !== "all")
    return;

  const metaElem = document.createElement("meta");
  metaElem.name = "darkreader-lock";
  metaElem.classList.add("bytm-disable-darkreader");
  document.head.appendChild(metaElem);

  info("Disabled Dark Reader");
}
