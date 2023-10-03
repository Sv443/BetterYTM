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

const rememberSongTimeout = 1000 * 60 * 1;
let curSongId: string | undefined;

/** Remembers the time of the last played song and resumes playback from that time */
export async function initRememberSongTime() {
  log("Initialized song time remembering");

  const params = new URL(location.href).searchParams;
  curSongId = params.get("v")!;

  if(location.pathname.startsWith("/watch") && await GM.getValue("bytm-rem-song-id", null) === curSongId) {
    const songTime = Number(await GM.getValue("bytm-rem-song-time", 0));
    const songTimestamp = Number(await GM.getValue("bytm-rem-song-timestamp", 0));
    if(songTimestamp > 0 && songTime > 0 && Date.now() - songTimestamp < rememberSongTimeout) {
      onSelector<HTMLVideoElement>(ytmVideoSelector, {
        listener: async (vidElem) => {
          await deletePersistentSongTimeValues();

          const applyTime = () => vidElem.currentTime = clamp(Math.max(songTime - 1, 0), 0, vidElem.duration);

          if(vidElem.readyState === 4)
            applyTime();
          else
            vidElem.addEventListener("canplay", applyTime, { once: true });
        },
      });
    }
  }

  GM.getValue("bytm-rem-song-timestamp").then(async (ts) => {
    const time = Number(ts);
    if(Date.now() - time < rememberSongTimeout)
      await deletePersistentSongTimeValues();
  });

  onSelector<HTMLProgressElement>("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
    listener: (progressElem) => {
      const progressObserver = new MutationObserver(async () => {
        const songTime = isNaN(Number(progressElem.value)) ? 0 : Number(progressElem.value);
        const newSongId = new URL(location.href).searchParams.get("v");

        GM.setValue("bytm-rem-song-timestamp", Date.now());
        GM.setValue("bytm-rem-song-time", songTime);

        GM.getValue("bytm-rem-song-id").then((storedId) => {
          if(!storedId && newSongId) {
            GM.setValue("bytm-rem-song-id", newSongId);
          }
        });

        if(newSongId === curSongId || !newSongId)
          return;

        GM.setValue("bytm-rem-song-id", curSongId = newSongId);
      });

      progressObserver.observe(progressElem, {
        attributes: true,
      });
    },
  });
}

function deletePersistentSongTimeValues() {
  return Promise.all([
    GM.deleteValue("bytm-rem-song-id"),
    GM.deleteValue("bytm-rem-song-time"),
    GM.deleteValue("bytm-rem-song-timestamp"),
  ]);
}
