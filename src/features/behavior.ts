import { autoPlural, createRecurringTask, clamp, pauseFor, setImmediateInterval } from "@sv443-network/coreutils";
import { getUnsafeWindow, interceptWindowEvent, isDomLoaded } from "@sv443-network/userutils";
import { getFeature } from "@/config.ts";
import { addSelectorListener } from "@/observers.ts";
import { initialParams } from "@/constants.ts";
import { siteEvents } from "@/siteEvents.ts";
import { loggers } from "@util/logging.ts";
import { clearNode, getCurrentMediaType, getVideoElement, getVideoTime, waitVideoElementReady } from "@util/dom.ts";
import { getDomain, getWatchId, scrollToCurrentSongInQueue } from "@util/misc.ts";
import { LogLevel } from "@/types.ts";

//#region beforeunload popup

let discardBeforeUnloadOverride: boolean | undefined;

/** Disables the popup before leaving the site */
export function enableDiscardBeforeUnload() {
  discardBeforeUnloadOverride = true;
  loggers.behavior.info("Disabled popup before leaving the site");
}

/** (Re-)enables the popup before leaving the site */
export function disableDiscardBeforeUnload() {
  discardBeforeUnloadOverride = false;
  loggers.behavior.info("Enabled popup before leaving the site");
}

/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` event listeners before they can be called by the site */
export async function initBeforeUnloadHook() {
  try {
    interceptWindowEvent("beforeunload", () => typeof discardBeforeUnloadOverride !== "undefined" ? discardBeforeUnloadOverride : getFeature("disableBeforeUnloadPopup"));
  }
  catch(err) {
    loggers.behavior.error("Error in beforeunload hook:", err);
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

            if(toastElem.parentNode) {
              clearNode(toastElem);
              loggers.behavior.log(`Automatically closed toast after ${getFeature("closeToastsTimeout") * 1000}ms`);
            }
          }, { once: true });
        }
      }
      catch(err) {
        loggers.behavior.error("Error in automatic toast closing:", err);
      }
    },
  });

  loggers.behavior.log("Initialized automatic toast closing");
}

//#region auto scroll to active

let initialAutoScrollToActiveSong = true;

let prevVidMaxTime = Infinity;
let prevTime = -1;

/** Initializes the autoScrollToActiveSong feature */
export async function initAutoScrollToActiveSong() {
  createRecurringTask({
    timeout: 50,
    async task() {
      // since tasks don't overlap, this will pause until the element is ready
      const vidEl = await waitVideoElementReady();
      prevTime = vidEl.currentTime ?? -1;
      prevVidMaxTime = vidEl.duration ?? Infinity;
    },
  });

  // TODO: refactor to trigger on queue changes instead of watchID

  siteEvents.on("watchIdChanged", (_, oldId) => {
    // only trigger on subsequent video changes (oldId is null initially):
    if(!oldId || !getFeature("autoScrollToActiveSongEnabled"))
      return;
    const isManualChange = prevTime < prevVidMaxTime - 1;
    if(["videoChangeManual", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && isManualChange)
      scrollToCurrentSongInQueue();
    else if(["videoChangeAuto", "videoChangeAll"].includes(getFeature("autoScrollToActiveSongMode")) && !isManualChange)
      scrollToCurrentSongInQueue();
  });

  if(getFeature("autoScrollToActiveSongEnabled") && initialAutoScrollToActiveSong) {
    initialAutoScrollToActiveSong = false;
    scrollToCurrentSongInQueue();
  }
}

//#region remember times

type RemTimeObj = {
  /** Video ID */
  id: string;
  /** Time of the song/video in seconds */
  time: number;
  /** Timestamp this entry was last updated */
  updated: number;
};

/**
 * Remembers the time of the last played video and resumes playback from that time when the site is reloaded or the video is revisited.  
 * *Needs to be called **before** DOM is ready!*
 */
export async function initRememberVideoTime() {
  if(getFeature("rememberSongTimeSites") !== "all" && getFeature("rememberSongTimeSites") !== getDomain())
    return;

  const remTimesRaw = await GM.getValue("bytm-remember-times");
  if(!remTimesRaw)
    await GM.setValue("bytm-remember-times", "[]");

  let remTimeEntries: RemTimeObj[];

  try {
    remTimeEntries = JSON.parse(String(remTimesRaw ?? "[]")) as RemTimeObj[];
  }
  catch(err) {
    loggers.behavior.error("Error parsing stored video time data, defaulting to empty cache:", err);
    await GM.setValue("bytm-remember-times", "[]");
    remTimeEntries = [];
  }

  if(remTimeEntries.some(e => "watchID" in e)) {
    remTimeEntries = remTimeEntries.filter(e => "id" in e);
    await GM.setValue("bytm-remember-times", JSON.stringify(remTimeEntries));
    loggers.behavior.log(`Removed ${remTimeEntries.length} ${autoPlural("entry", remTimeEntries)} with an outdated format from the video time cache`);
  }

  loggers.behavior.log(`Initialized video time restoring with ${remTimeEntries.length} initial ${autoPlural("entry", remTimeEntries)}:`, remTimeEntries);

  await remTimeTryRestoreTime();

  try {
    if(!isDomLoaded())
      document.addEventListener("DOMContentLoaded", remTimeStartUpdateLoop, { once: true });
    else
      remTimeStartUpdateLoop();
  }
  catch(err) {
    loggers.behavior.error("Error in video time remembering update loop:", err);
  }
}

/** Tries to restore the time of the currently playing video. Resolves to a boolean. Only rejects on caught error */
export function remTimeTryRestoreTime(force = false) {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]")) as RemTimeObj[];

      if(location.pathname.startsWith("/watch")) {
        let videoID: string | null = getWatchId();

        if(!videoID) {
          const thumbEl = document.querySelector<HTMLImageElement>("ytmusic-player-bar .thumbnail-image-wrapper img[src]");
          if(thumbEl && thumbEl.src.includes("/vi/"))
            videoID = thumbEl.src.split("/vi/")[1].split("/")[0];
        }

        if(!videoID) {
          loggers.behavior.error("Could not determine the video ID of the current video - not restoring time");
          return resolve(false);
        }

        if(initialParams.has("t") && !force) {
          loggers.behavior.info("Not restoring song time because the page was loaded with the '&t' parameter", LogLevel.Info);
          return resolve(false);
        }

        const entry = remVids.find(entry => entry.id === videoID);
        if(entry) {
          if(Date.now() - entry.updated > getFeature("rememberSongTimeDuration") * 1000) {
            await remTimeDeleteEntry(entry.id);
            return resolve(false);
          }
          else if(isNaN(Number(entry.time)) || entry.time < 0) {
            loggers.behavior.warn("Invalid time in remembered song time entry:", entry);
            return resolve(false);
          }
          else {
            let vidElem: HTMLVideoElement;
            const doRestoreTime = async () => {
              if(!vidElem)
                vidElem = await waitVideoElementReady();
              const vidRestoreTime = entry.time - (getFeature("rememberSongTimeReduction", 0));
              vidElem.currentTime = clamp(Math.max(vidRestoreTime, 0), 0, vidElem.duration);
              await remTimeDeleteEntry(entry.id);
              loggers.behavior.info(`Restored ${getDomain() === "ytm" ? getCurrentMediaType() : "video"} time to ${Math.floor(vidRestoreTime / 60)}m, ${(vidRestoreTime % 60).toFixed(1)}s`, LogLevel.Info);
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
      loggers.behavior.error("Uncaught error when trying to restore video time:", err);
      return reject(err);
    }
  });
}

let lastSongTime = -1;
let remVidCheckTimeout: ReturnType<typeof setTimeout> | undefined;

/** Only call once as this calls itself after a timeout! - Updates the currently playing video's entry in GM storage */
async function remTimeStartUpdateLoop() {
  const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]")) as RemTimeObj[];

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
  remVidCheckTimeout = setTimeout(remTimeStartUpdateLoop, 250);
}

/** Updates an existing or inserts a new entry to be remembered */
async function remTimeUpsertEntry(data: RemTimeObj, force = false) {
  const remVids = JSON.parse(await GM.getValue("bytm-remember-times", "[]")) as RemTimeObj[];
  const foundIdx = remVids.findIndex(entry => entry.id === data.id);

  // only upsert when no previous entry exists or its time is lower than the provided data
  if(foundIdx > -1 && !force && data.time <= remVids[foundIdx].time)
    return;

  if(foundIdx >= 0)
    remVids[foundIdx] = data;
  else
    remVids.push(data);

  await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
}

/** Deletes an entry in the "remember cache" */
async function remTimeDeleteEntry(videoID: string) {
  const remVids = (JSON.parse(await GM.getValue("bytm-remember-times", "[]")) as RemTimeObj[])
    .filter(entry => entry.id !== videoID);
  await GM.setValue("bytm-remember-times", JSON.stringify(remVids));
}

//#region dismiss "are you still there"

let curSongTitle: string | undefined;

let isDragging = false;
let lastClick = 0;

const lastInteractionTimeout = 5_000;

document.addEventListener("dragstart", () => isDragging = true);
document.addEventListener("dragend", () => isDragging = false);
document.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("click", () => lastClick = Date.now());

let isInFullscreen = false;
siteEvents.on("fullscreenToggled", (val) => isInFullscreen = val);

// TODO:FIXME: disable movement events while in fullscreen

/** Initializes the "Are you still there?" popup dismissing feature */
export async function initStillThere() {
  siteEvents.on("songTitleChanged", (newTitle) => curSongTitle = newTitle);

  let firstCheck = true;
  let obs: MutationObserver | undefined;

  const checkStillThere = (youThereCont: HTMLElement) => {
    const dialogCont = youThereCont.closest("tp-yt-paper-dialog");

    if(!dialogCont)
      return loggers.behavior.warn("Could not find the dialog container to dismiss the \"Are you still there?\" popup");

    const doCheck = () => {
      if(!getFeature("yesImStillThere") || !dialogCont || dialogCont.hasAttribute("aria-hidden") || getComputedStyle(dialogCont).display === "none")
        return;

      const btn = youThereCont.querySelector<HTMLButtonElement>(".actions button");

      if(!btn)
        return loggers.behavior.warn("Could not find the \"Yes\" button to dismiss the \"Are you still there?\" popup");

      btn.click();
      if(obs) {
        obs.disconnect();
        obs = undefined;
      }
      loggers.behavior.info("Automatically dismissed the \"Are you still here?\" dialog on the song", curSongTitle, LogLevel.Info);
    };

    if(firstCheck) {
      firstCheck = false;
      doCheck();
    }

    if(obs)
      return;

    obs = new MutationObserver(doCheck);

    obs.observe(dialogCont, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  };

  addSelectorListener("popupContainer", "tp-yt-paper-dialog ytmusic-you-there-renderer", {
    listener: (el) => checkStillThere(el),
  });

  siteEvents.on("watchIdChanged", () => {
    const youThereCont = document.querySelector<HTMLElement>("ytmusic-popup-container ytmusic-you-there-renderer");
    if(youThereCont) {
      checkStillThere(youThereCont);
      let i = 0;
      const iv = setInterval(() => {
        checkStillThere(youThereCont);
        i++;
        if(i > 10)
          clearInterval(iv);
      }, 1_000);
    }
  });

  // dispatch on interval

  const tryClick = () => {
    if(isInFullscreen)
      return loggers.behavior.warn("Fullscreen is active - not dispatching \"Are you still there?\" events");
    if(isDragging || Date.now() - lastClick < lastInteractionTimeout)
      return loggers.behavior.warn("Click is currently held down - not dispatching \"Are you still there?\" events");

    // click the navbar
    const navBar = document.querySelector<HTMLElement>("ytmusic-nav-bar .center-content");

    navBar?.dispatchEvent(new MouseEvent("click", {
      // @ts-expect-error
      altitudeAngle: 1 + Math.random(),
      cancelable: true,
      clientX: 975,
      clientY: 13,
      composed: true,
      explicitOriginalTarget: navBar,
      isPrimary: true,
      isTrusted: true,
      layerX: 615,
      layerY: 13,
      movementX: 0,
      movementY: 0,
      offsetX: 615,
      offsetY: 13,
      originalTarget: navBar,
      pageX: 975,
      pageY: 13,
      screenX: 975,
      screenY: 70,
      srcElement: navBar,
      target: navBar,
      timeStamp: 44955,
      x: 975,
      y: 13,
      // see https://github.com/Sv443/BetterYTM/issues/18
      view: getUnsafeWindow(),
    }));
  };

  const tryMove = async () => {
    if(isInFullscreen)
      return loggers.behavior.warn("Fullscreen is active - not dispatching \"Are you still there?\" events");
    if(isDragging || Date.now() - lastClick < lastInteractionTimeout)
      return loggers.behavior.warn("Click is currently held down - not dispatching \"Are you still there?\" events");

    // dispatch mousemoves with random vector for a second
    const incX = (Math.random() * 2 - 1) / 10,
      incY = (Math.random() * 2 - 1) / 10;
    const vidEl = getVideoElement();

    if(!vidEl)
      return;

    for(let i = 0; i < 20; i++) {
      const x = Math.random() * clamp(window.innerWidth, 100, Math.max(200, window.innerWidth) - 100);
      const y = Math.random() * clamp(window.innerHeight, 100, Math.max(200, window.innerHeight) - 100);

      vidEl?.dispatchEvent(new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        clientX: x + incX * i,
        clientY: y + incY * i,
        screenX: x + incX * i,
        screenY: y + incY * i,
        movementX: incX,
        movementY: incY,
        // see https://github.com/Sv443/BetterYTM/issues/18
        view: getUnsafeWindow(),
      }));
      await pauseFor(10);
    }
  };

  setImmediateInterval(async () => {
    if(!getFeature("yesImStillThere"))
      return;

    tryClick();
    await tryMove();
  }, 30_000);
}
