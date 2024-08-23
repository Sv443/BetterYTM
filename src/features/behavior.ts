import { clamp, interceptWindowEvent, pauseFor } from "@sv443-network/userutils";
import { domLoaded, error, getDomain, getVideoTime, getWatchId, info, log, waitVideoElementReady, clearNode, currentMediaType, dbg, getVideoElement } from "../utils/index.js";
import { getFeature } from "../config.js";
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

          const closeTimeout = Math.max(getFeature("closeToastsTimeout") * 1000 + animTimeout, animTimeout);
          await pauseFor(closeTimeout);

          toastElem.classList.remove("paper-toast-open");

          toastElem.addEventListener("transitionend", () => {
            toastElem.classList.remove("bytm-closing");
            toastElem.style.display = "none";

            clearNode(toastElem);
            log(`Automatically closed toast after ${getFeature("closeToastsTimeout") * 1000}ms`);
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
  if(getFeature("rememberSongTimeSites") !== "all" && getFeature("rememberSongTimeSites") !== getDomain())
    return;

  const storedDataRaw = await GM.getValue("bytm-rem-songs");
  if(!storedDataRaw)
    await GM.setValue("bytm-rem-songs", "[]");

  try {
    remVidsCache = JSON.parse(String(storedDataRaw ?? "[]")) as RemVidObj[];
  }
  catch(err) {
    error("Error parsing stored video time data, defaulting to empty cache:", err);
    await GM.setValue("bytm-rem-songs", "[]");
    remVidsCache = [];
  }

  log(`Initialized video time restoring with ${remVidsCache.length} initial entr${remVidsCache.length === 1 ? "y" : "ies"}`);

  await remTimeRestoreTime();

  try {
    if(!domLoaded)
      document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop);
    else
      remTimeStartUpdateLoop();
  }
  catch(err) {
    error("Error in video time remembering update loop:", err);
  }
}

/** Tries to restore the time of the currently playing video */
async function remTimeRestoreTime() {
  if(location.pathname.startsWith("/watch")) {
    const watchID = new URL(location.href).searchParams.get("v");
    if(!watchID)
      return;

    if(initialParams.has("t"))
      return info("Not restoring song time because the URL has the '&t' parameter", LogLevel.Info);

    const entry = remVidsCache.find(entry => entry.watchID === watchID);
    if(entry) {
      if(Date.now() - entry.updateTimestamp > getFeature("rememberSongTimeDuration") * 1000) {
        await remTimeDeleteEntry(entry.watchID);
        return;
      }
      else if(isNaN(Number(entry.songTime)))
        return;
      else {
        let vidElem: HTMLVideoElement;
        const doRestoreTime = async () => {
          dbg("Restoring time to", entry.songTime);
          if(!vidElem)
            vidElem = await waitVideoElementReady();
          const vidRestoreTime = entry.songTime - (getFeature("rememberSongTimeReduction") ?? 0);
          vidElem.currentTime = clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
          await remTimeDeleteEntry(entry.watchID);
          info(`Restored ${currentMediaType()} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
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
let remVidCheckTimeout: ReturnType<typeof setTimeout> | undefined;

/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
async function remTimeStartUpdateLoop() {
  if(location.pathname.startsWith("/watch")) {
    const songTime = await getVideoTime() ?? 0;

    if(songTime === lastSongTime)
      return;
    lastSongTime = songTime;

    // TODO:FIXME: stops looping after a while
    dbg("># looped, different songTime:", songTime);

    const watchID = getWatchId();
    if(!watchID)
      return;

    const paused = getVideoElement()?.paused ?? false;

    // don't immediately update to reduce race conditions and only update if the video is playing
    // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
    if(songTime > getFeature("rememberSongTimeMinPlayTime") && !paused) {
      const entry = {
        watchID,
        songTime,
        updateTimestamp: Date.now(),
      };
      await remTimeUpsertEntry(entry);
    }
    // if the song is rewound to the beginning, update the entry accordingly
    else if(!paused) {
      const entry = remVidsCache.find(entry => entry.watchID === watchID);
      if(entry && songTime <= entry.songTime)
        await remTimeUpsertEntry({ ...entry, songTime, updateTimestamp: Date.now() });
    }
  }

  const expiredEntries = remVidsCache.filter(entry => Date.now() - entry.updateTimestamp > getFeature("rememberSongTimeDuration") * 1000);
  for(const entry of expiredEntries)
    await remTimeDeleteEntry(entry.watchID);

  // for no overlapping calls and better error handling:
  if(remVidCheckTimeout)
    clearTimeout(remVidCheckTimeout);
  remVidCheckTimeout = setTimeout(remTimeStartUpdateLoop, 1000);
}

/** Updates an existing or inserts a new entry to be remembered */
async function remTimeUpsertEntry(data: RemVidObj) {
  const foundIdx = remVidsCache.findIndex(entry => entry.watchID === data.watchID);
  if(foundIdx >= 0)
    remVidsCache[foundIdx] = data;
  else
    remVidsCache.push(data);

  await GM.setValue("bytm-rem-songs", JSON.stringify(remVidsCache));
}

/** Deletes an entry in the "remember cache" */
async function remTimeDeleteEntry(watchID: string) {
  dbg("Deleting entry with watchID", watchID);
  remVidsCache = [...remVidsCache.filter(entry => entry.watchID !== watchID)];
  await GM.setValue("bytm-rem-songs", JSON.stringify(remVidsCache));
}
