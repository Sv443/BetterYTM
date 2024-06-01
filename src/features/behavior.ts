import { clamp, interceptWindowEvent, pauseFor } from "@sv443-network/userutils";
import { domLoaded, error, getDomain, getVideoTime, getWatchId, info, log, getVideoSelector, waitVideoElementReady, clearNode } from "../utils/index.js";
import { getFeatures } from "../config.js";
import { addSelectorListener } from "../observers.js";
import { initialParams } from "../constants.js";
import { LogLevel } from "../types.js";

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
  const animTimeout = 300;

  addSelectorListener("popupContainer", "ytmusic-notification-action-renderer", {
    all: true,
    continuous: true,
    listener: async (toastContElems) => {
      try {
        for(const toastContElem of toastContElems) {
          const toastElem = toastContElem.querySelector<HTMLElement>("tp-yt-paper-toast#toast");
          if(!toastElem || !toastElem.hasAttribute("allow-click-through"))
            continue;

          if(toastElem.classList.contains("bytm-closing"))
            continue;
          toastElem.classList.add("bytm-closing");

          const closeTimeout = Math.max(getFeatures().closeToastsTimeout * 1000 + animTimeout, animTimeout);
          await pauseFor(closeTimeout);

          toastElem.classList.remove("paper-toast-open");

          toastElem.addEventListener("transitionend", () => {
            toastElem.classList.remove("bytm-closing");
            toastElem.style.display = "none";

            clearNode(toastElem);
            log(`Automatically closed toast after ${getFeatures().closeToastsTimeout * 1000}ms`);
          }, { once: true });
        }
      }
      catch(err) {
        error("Error in automatic toast closing:", err);
      }
    },
  });

  log("Initialized automatic toast closing");
}

//#region remember song time

interface RemVidObj {
  /** Watch ID */
  watchID: string;
  /** Time of the song/video in seconds */
  songTime: number;
  /** Timestamp this entry was last updated */
  updateTimestamp: number;
}

let remVidsCache: RemVidObj[] = [];

/**
 * Remembers the time of the last played video and resumes playback from that time.  
 * **Needs to be called *before* DOM is ready!**
 */
export async function initRememberSongTime() {
  if(getFeatures().rememberSongTimeSites !== "all" && getFeatures().rememberSongTimeSites !== getDomain())
    return;

  const storedDataRaw = await GM.getValue("bytm-rem-songs");
  if(!storedDataRaw)
    await GM.setValue("bytm-rem-songs", "[]");

  remVidsCache = JSON.parse(String(storedDataRaw ?? "[]")) as RemVidObj[];

  log(`Initialized video time restoring with ${remVidsCache.length} initial entr${remVidsCache.length === 1 ? "y" : "ies"}`);

  if(location.pathname.startsWith("/watch"))
    await restVidRestoreTime();

  if(!domLoaded)
    document.addEventListener("DOMContentLoaded", restVidStartUpdateLoop);
  else
    restVidStartUpdateLoop();
}

/** Tries to restore the time of the currently playing video */
async function restVidRestoreTime() {
  if(location.pathname.startsWith("/watch")) {
    const watchID = new URL(location.href).searchParams.get("v");
    if(!watchID)
      return;

    if(initialParams.has("t"))
      return info("Not restoring song time because the URL has the '&t' parameter", LogLevel.Info);

    const entry = remVidsCache.find(entry => entry.watchID === watchID);
    if(entry) {
      if(Date.now() - entry.updateTimestamp > getFeatures().rememberSongTimeDuration * 1000) {
        await restVidDeleteEntry(entry.watchID);
        return;
      }
      else if(isNaN(Number(entry.songTime)))
        return;
      else {
        const doRestoreTime = async () => {
          const vidElem = await waitVideoElementReady();
          const vidRestoreTime = entry.songTime - (getFeatures().rememberSongTimeReduction ?? 0);
          vidElem.currentTime = clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
          await restVidDeleteEntry(entry.watchID);
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

let lastSongTime = -1;
let remVidCheckTimeout: NodeJS.Timeout | undefined;

/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
async function restVidStartUpdateLoop() {
  if(location.pathname.startsWith("/watch")) {
    const songTime = await getVideoTime() ?? 0;

    if(songTime === lastSongTime)
      return;
    lastSongTime = songTime;

    const watchID = getWatchId();
    if(!watchID)
      return;

    const paused = document.querySelector<HTMLVideoElement>(getVideoSelector())?.paused ?? false;

    // don't immediately update to reduce race conditions and only update if the video is playing
    // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
    if(songTime > getFeatures().rememberSongTimeMinPlayTime && !paused) {
      const entry = {
        watchID,
        songTime,
        updateTimestamp: Date.now(),
      };
      await restVidSetEntry(entry);
    }
    // if the song is rewound to the beginning, delete the entry
    else {
      const entry = remVidsCache.find(entry => entry.watchID === watchID);
      if(entry && songTime <= getFeatures().rememberSongTimeMinPlayTime)
        await restVidDeleteEntry(entry.watchID);
    }
  }

  const expiredEntries = remVidsCache.filter(entry => Date.now() - entry.updateTimestamp > getFeatures().rememberSongTimeDuration * 1000);
  for(const entry of expiredEntries)
    await restVidDeleteEntry(entry.watchID);

  // for no overlapping calls and better error handling:
  if(remVidCheckTimeout)
    clearTimeout(remVidCheckTimeout);
  remVidCheckTimeout = setTimeout(restVidStartUpdateLoop, 1000);
}

/** Updates an existing or creates a new entry */
async function restVidSetEntry(data: RemVidObj) {
  const foundIdx = remVidsCache.findIndex(entry => entry.watchID === data.watchID);
  if(foundIdx >= 0)
    remVidsCache[foundIdx] = data;
  else
    remVidsCache.push(data);

  await GM.setValue("bytm-rem-songs", JSON.stringify(remVidsCache));
}

/** Deletes an entry */
async function restVidDeleteEntry(watchID: string) {
  remVidsCache = [...remVidsCache.filter(entry => entry.watchID !== watchID)];
  await GM.setValue("bytm-rem-songs", JSON.stringify(remVidsCache));
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
