import { clamp, onSelector, pauseFor } from "@sv443-network/userutils";
import { error, info, log, ytmVideoSelector } from "../utils";
import type { FeatureConfig } from "../types";

let features: FeatureConfig;

export function preInitBehavior(feats: FeatureConfig) {
  features = feats;
}

//#MARKER beforeunload popup

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

/**
 * Adds a spy function into `window.__proto__.addEventListener` to selectively discard `beforeunload` 
 * event listeners before they can be called by the site.
 */
export async function initBeforeUnloadHook() {
  Error.stackTraceLimit = 1000; // default is 25 on FF so this should hopefully be more than enough

  (function(original: typeof window.addEventListener) {
    // @ts-ignore
    window.__proto__.addEventListener = function(...args: Parameters<typeof window.addEventListener>) {
      const origListener = typeof args[1] === "function" ? args[1] : args[1].handleEvent;
      args[1] = function(...a) {
        if(!beforeUnloadEnabled && args[0] === "beforeunload") {
          info("Prevented beforeunload event listener from being called");
          return false;
        }
        else
          return origListener.apply(this, a);
      };
      original.apply(this, args);
    };
    // @ts-ignore
  })(window.__proto__.addEventListener);
}

//#MARKER auto close toasts

/** Closes toasts after a set amount of time */
export async function initAutoCloseToasts() {
  try {
    const animTimeout = 300;
    const closeTimeout = Math.max(features.closeToastsTimeout * 1000 + animTimeout, animTimeout);

    onSelector("tp-yt-paper-toast#toast", {
      all: true,
      continuous: true,
      listener: async (toastElems) => {
        for(const toastElem of toastElems) {
          if(!toastElem.hasAttribute("allow-click-through"))
            continue;

          if(toastElem.classList.contains("bytm-closing"))
            continue;
          toastElem.classList.add("bytm-closing");

          await pauseFor(closeTimeout);

          toastElem.classList.remove("paper-toast-open");
          log(`Automatically closed toast '${toastElem.querySelector<HTMLDivElement>("#text-container yt-formatted-string")?.innerText}' after ${features.closeToastsTimeout * 1000}ms`);

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

//#MARKER remember song time

interface RemSongObj {
  /** Watch ID */
  id: string;
  /** Time of the song */
  time: number;
  /** Timestamp of last save */
  timestamp: number;
}

const rememberSongTimeout = 1000 * 60 * 1;
let curSongId: string | undefined;

/** Remembers the time of the last played song and resumes playback from that time */
export async function initRememberSongTime() {
  log("Initialized song time remembering");

  const params = new URL(location.href).searchParams;
  curSongId = params.get("v")!;

  const remData = await getRemSongData();
  const curRemData = remData?.find(d => d.id === curSongId);

  if(location.pathname.startsWith("/watch") && curRemData) {
    const songTime = Number(curRemData.time);
    const songTimestamp = Number(curRemData.timestamp);
    if(songTimestamp > 0 && songTime > 0 && Date.now() - songTimestamp < rememberSongTimeout) {
      onSelector<HTMLVideoElement>(ytmVideoSelector, {
        listener: async (vidElem) => {
          await delRemSongData(curRemData.id);

          const applyTime = () => {
            if(isNaN(songTime))
              return;
            vidElem.currentTime = clamp(Math.max(songTime - 1, 0), 0, vidElem.duration);
            info(`Restored song time to ${Math.floor(songTime / 60)}m, ${(songTime % 60).toFixed(1)}s`);
          };

          if(vidElem.readyState === 4)
            applyTime();
          else
            vidElem.addEventListener("canplay", applyTime, { once: true });
        },
      });
    }
  }

  if(curRemData) {
    (async () => {
      const time = Number(curRemData.timestamp);
      if(Date.now() - time < rememberSongTimeout)
        await delRemSongData(curRemData.id);
    })();
  }

  onSelector<HTMLProgressElement>("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
    listener: (progressElem) => {
      let prevSongData: RemSongObj | undefined;

      const progressObserver = new MutationObserver(async () => {
        const songTime = isNaN(Number(progressElem.value)) ? 0 : Number(progressElem.value);
        const newSongId = new URL(location.href).searchParams.get("v");

        if(newSongId === curSongId || !newSongId)
          return;
        if(prevSongData?.id === newSongId && prevSongData.time === songTime)
          return;

        curSongId = newSongId;

        await setRemSongData({
          id: newSongId,
          time: songTime,
          timestamp: Date.now(),
        });
      });

      progressObserver.observe(progressElem, {
        attributes: true,
      });
    },
  });
}

async function getRemSongData(): Promise<RemSongObj[] | undefined> {
  try {
    const val = await GM.getValue("bytm-rem-song");
    if(typeof val !== "string")
      return undefined;
    const json = JSON.parse(val);
    if(!json.id || !json.time || !json.timestamp)
      return undefined;
    return json;
  }
  catch(err) {
    return undefined;
  }
}

async function setRemSongData(data: RemSongObj) {
  try {
    let storedData = await getRemSongData();
    if(!storedData)
      storedData = [];
    const foundIdx = storedData.findIndex(d => d.id === data.id);
    if(foundIdx >= 0)
      storedData[foundIdx] = data;
    else
      storedData.push(data);
    await GM.setValue("bytm-rem-song", JSON.stringify(storedData));
  }
  catch(err) {
    return;
  }
}

async function delRemSongData(id: string) {
  try {
    const data = await getRemSongData();
    if(!data)
      return;
    const newData = data.filter(d => d.id !== id);
    await GM.setValue("bytm-rem-song", JSON.stringify(newData));
  }
  catch(err) {
    return;
  }
}

//#MARKER disable darkreader

/** Disables Dark Reader if it is enabled */
export function disableDarkReader() {
  if(document.querySelector(".darkreader")) {
    const metaElem = document.createElement("meta");
    metaElem.name = "darkreader-lock";
    document.head.appendChild(metaElem);

    info("Sent hint to Dark Reader to disable itself");
  }
}
