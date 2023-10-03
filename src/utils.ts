import { clamp, getUnsafeWindow, onSelector } from "@sv443-network/userutils";
import { scriptInfo } from "./constants";
import type { Domain, LogLevel, ResourceKey } from "./types";
import langMapping from "../assets/locales.json" assert { type: "json" };
import { TrLocale } from "./translations";
import { setGlobalProp } from "./interface";

//#SECTION logging

let curLogLevel: LogLevel = 1;

/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${scriptInfo.name}]`;
const consPrefixDbg = `[${scriptInfo.name}/#DEBUG]`;

/** Sets the current log level. 0 = Debug, 1 = Info */
export function setLogLevel(level: LogLevel) {
  if(curLogLevel !== level)
    console.log(consPrefix, "Setting log level to", level === 0 ? "Debug" : "Info");
  curLogLevel = level;
  setGlobalProp("logLevel", level);
}

/** Extracts the log level from the last item from spread arguments - returns 0 if the last item is not a number or too low or high */
function getLogLevel(args: unknown[]): number {
  const minLogLvl = 0, maxLogLvl = 1;
  if(typeof args.at(-1) === "number")
    return clamp(
      args.splice(args.length - 1)[0] as number,
      minLogLvl,
      maxLogLvl,
    );
  return 0;
}

/**
 * Logs all passed values to the console, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
 */
export function log(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.log(consPrefix, ...args);
}

/**
 * Logs all passed values to the console as info, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
 */
export function info(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.info(consPrefix, ...args);
}

/** Logs all passed values to the console as a warning, no matter the log level. */
export function warn(...args: unknown[]): void {
  console.warn(consPrefix, ...args);
}

/** Logs all passed values to the console as an error, no matter the log level. */
export function error(...args: unknown[]): void {
  console.error(consPrefix, ...args);
}

/** Logs all passed values to the console with a debug-specific prefix */
export function dbg(...args: unknown[]): void {
  console.log(consPrefixDbg, ...args);
}

//#SECTION video time

export const ytmVideoSelector = "ytmusic-player video";
export const ytVideoSelector = "#content ytd-player video";

/**
 * Returns the current video time in seconds  
 * Dispatches mouse movement events in case the video time can't be estimated
 * @returns Returns null if the video time is unavailable
 */
export function getVideoTime() {
  return new Promise<number | null>((res) => {
    const domain = getDomain();

    try {
      if(domain === "ytm") {
        const vidElem = document.querySelector<HTMLVideoElement>(ytmVideoSelector);
        if(vidElem)
          return res(vidElem.currentTime);

        onSelector<HTMLProgressElement>("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
          listener: (pbEl) =>
            res(!isNaN(Number(pbEl.value)) ? Number(pbEl.value) : null)
        });
      }
      else if(domain === "yt") {
        const vidElem = document.querySelector<HTMLVideoElement>(ytVideoSelector);
        if(vidElem)
          return res(vidElem.currentTime);

        // YT doesn't update the progress bar when it's hidden (contrary to YTM which never hides it)
        ytForceShowVideoTime();

        const pbSelector = ".ytp-chrome-bottom div.ytp-progress-bar[role=\"slider\"]";
        let videoTime = -1;

        const mut = new MutationObserver(() => {
          // .observe() is only called when the element exists - no need to check for null
          videoTime = Number(document.querySelector<HTMLProgressElement>(pbSelector)!.getAttribute("aria-valuenow")!);
        });

        const observe = (progElem: HTMLProgressElement) => {
          mut.observe(progElem, {
            attributes: true,
            attributeFilter: ["aria-valuenow"],
          });

          if(videoTime >= 0 && !isNaN(videoTime)) {
            res(videoTime);
            mut.disconnect();
          }
          else
            setTimeout(() => {
              res(videoTime >= 0 && !isNaN(videoTime) ? videoTime : null);
              mut.disconnect();
            }, 500);
        };

        onSelector<HTMLProgressElement>(pbSelector, { listener: observe });
      }
    }
    catch(err) {
      error("Couldn't get video time due to error:", err);
      res(null);
    }
  });
}

/**
 * Sends events that force the video controls to become visible for about 3 seconds.  
 * This only works once, then the page needs to be reloaded!
 */
function ytForceShowVideoTime() {
  const player = document.querySelector("#movie_player");
  if(!player)
    return false;

  const defaultProps = {
    // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
    view: getUnsafeWindow(),
    bubbles: true,
    cancelable: false,
  };

  player.dispatchEvent(new MouseEvent("mouseenter", defaultProps));

  const { x, y, width, height } = player.getBoundingClientRect();
  const screenY = Math.round(y + height / 2);
  const screenX = x + Math.min(50, Math.round(width / 3));

  player.dispatchEvent(new MouseEvent("mousemove", {
    ...defaultProps,
    screenY,
    screenX,
    movementX: 5,
    movementY: 0,
  }));

  return true;
}

//#SECTION misc

/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
export function getDomain(): Domain {
  if(location.hostname.match(/^music\.youtube/))
    return "ytm";
  else if(location.hostname.match(/youtube\./))
    return "yt";
  else
    throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}

/** Returns the URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl) */
export function getResourceUrl(name: ResourceKey | "_") {
  return GM.getResourceUrl(name);
}

/**
 * Returns the preferred locale of the user, provided it is supported by the userscript.  
 * Prioritizes `navigator.language`, then `navigator.languages`, then `"en_US"` as a fallback.
 */
export function getPreferredLocale(): TrLocale {
  if(Object.entries(langMapping).find(([key]) => key === navigator.language))
    return navigator.language as TrLocale;

  for(const loc of navigator.languages) {
    if(Object.entries(langMapping).find(([key]) => key === loc))
      return loc as TrLocale;
  }

  // if navigator.languages has entries that aren't locale codes in the format xx_XX
  if(navigator.languages.some(lang => lang.match(/^\w{2}$/))) {
    for(const lang of navigator.languages) {
      if(Object.entries(langMapping).find(([key]) => key.startsWith(lang)))
        return lang as TrLocale;
    }
  }

  return "en_US";
}
