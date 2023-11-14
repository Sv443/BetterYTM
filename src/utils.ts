import { clamp, getUnsafeWindow } from "@sv443-network/userutils";
import { onSelectorOld } from "./onSelector";
import { branch, repo, scriptInfo } from "./constants";
import { Domain, LogLevel, ResourceKey } from "./types";
import langMapping from "../assets/locales.json" assert { type: "json" };
import { TrLocale } from "./translations";
import { setGlobalProp } from "./interface";
import { randomId } from "@sv443-network/userutils";

//#SECTION logging

let curLogLevel = LogLevel.Info;

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
  return LogLevel.Debug;
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

export const videoSelector = getDomain() === "ytm" ? "ytmusic-player video" : "#content ytd-player video";

/**
 * Returns the current video time in seconds  
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
export function getVideoTime() {
  return new Promise<number | null>((res) => {
    const domain = getDomain();

    try {
      if(domain === "ytm") {
        const vidElem = document.querySelector<HTMLVideoElement>(videoSelector);
        if(vidElem)
          return res(Math.floor(vidElem.currentTime));

        onSelectorOld<HTMLProgressElement>("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
          listener: (pbEl) =>
            res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
        });
      }
      else if(domain === "yt") {
        const vidElem = document.querySelector<HTMLVideoElement>(videoSelector);
        if(vidElem)
          return res(Math.floor(vidElem.currentTime));

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
            res(Math.floor(videoTime));
            mut.disconnect();
          }
          else
            setTimeout(() => {
              res(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
              mut.disconnect();
            }, 500);
        };

        onSelectorOld<HTMLProgressElement>(pbSelector, { listener: observe });
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

/**
 * Returns the URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl)  
 * Falls back to a `raw.githubusercontent.com` URL or base64-encoded data URI if the resource is not available in the GM resource cache
 */
export async function getResourceUrl(name: ResourceKey | "_") {
  let url = await GM.getResourceUrl(name);
  if(!url || url.length === 0) {
    const resource = GM.info.script.resources?.[name].url;
    if(typeof resource === "string") {
      const resourceUrl = new URL(resource);
      const resourcePath = resourceUrl.pathname;
      if(resourcePath)
        return `https://raw.githubusercontent.com/${repo}/${branch}${resourcePath}`;
    }
    warn(`Couldn't get blob URL nor external URL for @resource '${name}', trying to use base64-encoded fallback`);
    // @ts-ignore
    url = await GM.getResourceUrl(name, false);
  }
  return url;
}

/**
 * Returns the preferred locale of the user, provided it is supported by the userscript.  
 * Prioritizes `navigator.language`, then `navigator.languages`, then `"en_US"` as a fallback.
 */
export function getPreferredLocale(): TrLocale {
  const navLang = navigator.language.replace(/-/g, "_");
  const navLangs = navigator.languages
    .filter(lang => lang.match(/^[a-z]{2}(-|_)[A-Z]$/) !== null)
    .map(lang => lang.replace(/-/g, "_"));

  if(Object.entries(langMapping).find(([key]) => key === navLang))
    return navLang as TrLocale;

  for(const loc of navLangs) {
    if(Object.entries(langMapping).find(([key]) => key === loc))
      return loc as TrLocale;
  }

  // if navigator.languages has entries that aren't locale codes in the format xx_XX
  if(navigator.languages.some(lang => lang.match(/^[a-z]{2}$/))) {
    for(const lang of navLangs) {
      const foundLoc = Object.entries(langMapping).find(([key]) => key.startsWith(lang))?.[0];
      if(foundLoc)
        return foundLoc as TrLocale;
    }
  }

  return "en_US";
}

/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
export function clearInner(element: Element) {
  while(element.hasChildNodes())
    clearNode(element!.firstChild as Element);
}

function clearNode(element: Element) {
  while(element.hasChildNodes())
    clearNode(element!.firstChild as Element);
  element.parentNode!.removeChild(element);
}

export function getSessionId(): string {
  let sesId = window.sessionStorage.getItem("bytm-session-id");

  if(!sesId || !window.name) {
    window.name = sesId = randomId(8, 36);
    window.sessionStorage.setItem("bytm-session-id", sesId);
  }

  return window.name = sesId;
}
