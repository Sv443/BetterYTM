import { clamp, pauseFor } from "@sv443-network/userutils";
import { onSelectorOld } from "../onSelector";
import { error, getDomain, getVideoTime, info, log, videoSelector } from "../utils";
import { LogLevel, type FeatureConfig } from "../types";

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

    onSelectorOld("tp-yt-paper-toast#toast", {
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
  watchID: string;
  /** Time of the song */
  songTime: number;
  /** Timestamp this entry was last updated */
  updateTimestamp: number;
}

/** After how many milliseconds a remembered entry should expire */
const remSongEntryExpiry = 1000 * 60 * 1;
/** Minimum time a song has to be played before it is committed to GM storage */
const remSongMinTime = 10;

let remSongsCache: RemSongObj[] = [];

/** Remembers the time of the last played song and resumes playback from that time */
export async function initRememberSongTime() {
  if(features.rememberSongTimeSites !== "all" && features.rememberSongTimeSites !== getDomain())
    return;

  const storedDataRaw = await GM.getValue("bytm-rem-songs");
  if(!storedDataRaw)
    await GM.setValue("bytm-rem-songs", "[]");

  remSongsCache = JSON.parse(String(storedDataRaw ?? "[]")) as RemSongObj[];

  log(`Initialized song time remembering with ${remSongsCache.length} initial entries`);

  if(location.pathname.startsWith("/watch"))
    await restoreSongTime();

  remSongUpdateEntry();
  setInterval(remSongUpdateEntry, 1000);
}

/** Tries to restore the time of the currently playing song */
async function restoreSongTime() {
  if(location.pathname.startsWith("/watch")) {
    const { searchParams } = new URL(location.href);
    const watchID = searchParams.get("v");
    if(!watchID)
      return;

    const entry = remSongsCache.find(entry => entry.watchID === watchID);
    if(entry) {
      if(Date.now() - entry.updateTimestamp > remSongEntryExpiry) {
        await delRemSongData(entry.watchID);
        return;
      }
      else {
        onSelectorOld<HTMLVideoElement>(videoSelector, {
          listener: async (vidElem) => {
            if(vidElem) {
              const applyTime = async () => {
                if(isNaN(entry.songTime))
                  return;
                vidElem.currentTime = clamp(Math.max(entry.songTime, 0), 0, vidElem.duration);
                await delRemSongData(entry.watchID);
                info(`Restored song time to ${Math.floor(entry.songTime / 60)}m, ${(entry.songTime % 60).toFixed(1)}s`, LogLevel.Info);
              };

              if(vidElem.readyState === 4)
                applyTime();
              else
                vidElem.addEventListener("canplay", applyTime, { once: true });
            }
          },
        });
      }
    }
  }
}

/** Updates the currently playing song's entry in GM storage */
async function remSongUpdateEntry() {
  if(location.pathname.startsWith("/watch")) {
    const { searchParams } = new URL(location.href);
    const watchID = searchParams.get("v");
    if(!watchID)
      return;

    const songTime = await getVideoTime() ?? 0;

    const paused = document.querySelector<HTMLVideoElement>(videoSelector)?.paused ?? false;

    // don't immediately update to reduce race conditions and only update if the video is playing
    // also it just sounds better if the song starts at the beginning if only a couple seconds have passed
    if(songTime > remSongMinTime && !paused) {
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
      if(entry && songTime <= remSongMinTime)
        await delRemSongData(entry.watchID);
    }
  }

  const expiredEntries = remSongsCache.filter(entry => Date.now() - entry.updateTimestamp > remSongEntryExpiry);
  for(const entry of expiredEntries)
    await delRemSongData(entry.watchID);
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

//#MARKER disable darkreader

/** Disables Dark Reader if it is enabled */
export function disableDarkReader() {
  if(document.querySelector(".darkreader")) {
    const metaElem = document.createElement("meta");
    metaElem.name = "darkreader-lock";
    metaElem.classList.add("bytm-disable-darkreader");
    document.head.appendChild(metaElem);

    info("Sent hint to Dark Reader to disable itself");
  }
}
