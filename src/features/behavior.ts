import { autoPlural, clamp, interceptWindowEvent, isDomLoaded, pauseFor } from "@sv443-network/userutils";
import { error, getDomain, getVideoTime, getWatchId, info, log, waitVideoElementReady, clearNode, getCurrentMediaType, getVideoElement, scrollToCurrentSongInQueue, warn } from "../utils/index.js";
import { getFeature } from "../config.js";
import { addSelectorListener } from "../observers.js";
import { initialParams } from "../constants.js";
import { siteEvents } from "../siteEvents.js";
import { LogLevel } from "../types.js";

//#region beforeunload popup

let discardBeforeUnload = false;

/** Disables the popup before leaving the site */
export function enableDiscardBeforeUnload() {
  discardBeforeUnload = true;
  info("Disabled popup before leaving the site");
}

/** (Re-)enables the popup before leaving the site */
export function disableDiscardBeforeUnload() {
  discardBeforeUnload = false;
  info("Enabled popup before leaving the site");
}

/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site */
export async function initBeforeUnloadHook() {
  try {
    interceptWindowEvent("beforeunload", () => discardBeforeUnload);
  }
  catch(err) {
    error("Error in beforeunload hook:", err);
  }
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
        if(!getFeature("autoCloseToasts"))
          return;

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

//#region auto scroll to active

let initialAutoScrollToActiveSong = true;

let prevVidMaxTime = Infinity;
let prevTime = -1;

/** Initializes the autoScrollToActiveSong feature */
export async function initAutoScrollToActiveSong() {
  setInterval(() => {
    prevTime = getVideoElement()?.currentTime ?? -1;
    prevVidMaxTime = getVideoElement()?.duration ?? Infinity;
  }, 50);

  siteEvents.on("watchIdChanged", (_, oldId) => {
    if(!oldId)
      return;
    const isManualChange = prevTime < prevVidMaxTime - 1;
    if(["videoChangeManual", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && isManualChange)
      scrollToCurrentSongInQueue();
    else if(["videoChangeAuto", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && !isManualChange)
      scrollToCurrentSongInQueue();
  });

  if(getFeature("autoScrollToActiveSongMode") !== "never" && initialAutoScrollToActiveSong) {
    initialAutoScrollToActiveSong = false;
    scrollToCurrentSongInQueue();
  }
}

//#region remember song time

type RemVidObj = {
  /** Watch ID */
  id: string;
  /** Time of the song/video in seconds */
  time: number;
  /** Timestamp this entry was last updated */
  updated: number;
};

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

  let remVids: RemVidObj[];

  try {
    remVids = JSON.parse(String(storedDataRaw ?? "[]")) as RemVidObj[];
  }
  catch(err) {
    error("Error parsing stored video time data, defaulting to empty cache:", err);
    await GM.setValue("bytm-rem-songs", "[]");
    remVids = [];
  }

  if(remVids.some(e => "watchID" in e)) {
    remVids = remVids.filter(e => "id" in e);
    await GM.setValue("bytm-rem-songs", JSON.stringify(remVids));
    log(`Removed ${remVids.length} ${autoPlural("entry", remVids)} with an outdated format from the video time cache`);
  }

  log(`Initialized video time restoring with ${remVids.length} initial ${autoPlural("entry", remVids)}:`, remVids);

  await remTimeTryRestoreTime();

  try {
    if(!isDomLoaded())
      document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop, { once: true });
    else
      remTimeStartUpdateLoop();
  }
  catch(err) {
    error("Error in video time remembering update loop:", err);
  }
}

/** Tries to restore the time of the currently playing video. Resolves to a boolean. Only rejects on caught error */
export function remTimeTryRestoreTime(force = false) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const remVids = JSON.parse(await GM.getValue("bytm-rem-songs", "[]")) as RemVidObj[];

      if(location.pathname.startsWith("/watch")) {
        const videoID = new URL(location.href).searchParams.get("v");
        if(!videoID)
          return resolve(false);

        if(initialParams.has("t") && !force) {
          info("Not restoring song time because the URL has the '&t' parameter", LogLevel.Info);
          return resolve(false);
        }

        const entry = remVids.find(entry => entry.id === videoID);
        if(entry) {
          if(Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1000) {
            await remTimeDeleteEntry(entry.id);
            return resolve(false);
          }
          else if(isNaN(Number(entry.time)) || entry.time < 0) {
            warn("Invalid time in remembered song time entry:", entry);
            return resolve(false);
          }
          else {
            let vidElem: HTMLVideoElement;
            const doRestoreTime = async () => {
              if(!vidElem)
                vidElem = await waitVideoElementReady();
              const vidRestoreTime = entry.time - (getFeature("rememberSongTimeReduction") ?? 0);
              vidElem.currentTime = clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
              await remTimeDeleteEntry(entry.id);
              info(`Restored ${getDomain() === "ytm" ? getCurrentMediaType() : "video"} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
              return resolve(true);
            };

            if(!isDomLoaded())
              document.addEventListener("DOMContentLoaded", doRestoreTime, { once: true });
            else
              doRestoreTime();
          }
        }
      }
      return resolve(false);
    }
    catch(err) {
      error("Uncaught error when trying to restore video time:", err);
      return reject(err);
    }
  });
}

let lastSongTime = -1;
let remVidCheckTimeout: ReturnType<typeof setTimeout> | undefined;

/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
async function remTimeStartUpdateLoop() {
  const remVids = JSON.parse(await GM.getValue("bytm-rem-songs", "[]")) as RemVidObj[];

  if(location.pathname.startsWith("/watch")) {
    const id = getWatchId();
    const songTime = await getVideoTime() ?? 0;

    if(id && songTime !== lastSongTime) {
      lastSongTime = songTime;
      const paused = getVideoElement()?.paused ?? false;

      // don't immediately update to reduce race conditions and only update if the video is playing
      // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
      if(songTime > getFeature("rememberSongTimeMinPlayTime") && !paused) {
        const entry = {
          id,
          time: songTime,
          updated: Date.now(),
        };
        await remTimeUpsertEntry(entry);
      }
      // if the song is rewound to the beginning, update the entry accordingly
      else if(!paused) {
        const entry = remVids.find(entry => entry.id === id);
        if(entry && songTime <= entry.time)
          await remTimeUpsertEntry({ ...entry, time: songTime, updated: Date.now() });
      }
    }
  }

  const expiredEntries = remVids.filter(entry => Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1000);
  for(const entry of expiredEntries)
    await remTimeDeleteEntry(entry.id);

  // for no overlapping calls and better error handling:
  if(remVidCheckTimeout)
    clearTimeout(remVidCheckTimeout);
  remVidCheckTimeout = setTimeout(remTimeStartUpdateLoop, 500);
}

/** Updates an existing or inserts a new entry to be remembered */
async function remTimeUpsertEntry(data: RemVidObj, force = false) {
  const remVids = JSON.parse(await GM.getValue("bytm-rem-songs", "[]")) as RemVidObj[];
  const foundIdx = remVids.findIndex(entry => entry.id === data.id);

  // only upsert when no previous entry exists or its time is lower than the provided data
  if(foundIdx > -1 && !force && data.time <= remVids[foundIdx].time)
    return;

  if(foundIdx >= 0)
    remVids[foundIdx] = data;
  else
    remVids.push(data);

  await GM.setValue("bytm-rem-songs", JSON.stringify(remVids));
}

/** Deletes an entry in the "remember cache" */
async function remTimeDeleteEntry(videoID: string) {
  const remVids = (JSON.parse(await GM.getValue("bytm-rem-songs", "[]")) as RemVidObj[])
    .filter(entry => entry.id !== videoID);
  await GM.setValue("bytm-rem-songs", JSON.stringify(remVids));
}
