import { clamp, getUnsafeWindow, onSelector } from "@sv443-network/userutils";
import { scriptInfo } from "./constants";
import type { Domain, LogLevel } from "./types";
import * as resources from "../assets/resources.json" assert { type: "json" };

//#SECTION logging

let curLogLevel: LogLevel = 1;

/** Sets the current log level. 0 = Debug, 1 = Info */
export function setLogLevel(level: LogLevel) {
  curLogLevel = level;
}

/** Extracts the log level from the last item from spread arguments - returns 1 if the last item is not a number or too low or high */
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

/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${scriptInfo.name}]`;
const consPrefixDbg = `[${scriptInfo.name}/#DEBUG]`;

/**
 * Logs string-compatible values to the console, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
 */
export function log(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.log(consPrefix, ...args);
}

/**
 * Logs string-compatible values to the console as info, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
 */
export function info(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.info(consPrefix, ...args);
}

/**
 * Logs string-compatible values to the console as a warning, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
 */
export function warn(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.warn(consPrefix, ...args);
}

/** Logs string-compatible values to the console as an error, no matter the log level. */
export function error(...args: unknown[]): void {
  console.error(consPrefix, ...args);
}

/** Logs string-compatible values to the console, intended for debugging only */
export function dbg(...args: unknown[]): void {
  console.log(consPrefixDbg, ...args);
}

//#SECTION video time

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
        const pbEl = document.querySelector("#progress-bar") as HTMLProgressElement;
        return res(!isNaN(Number(pbEl.value)) ? Number(pbEl.value) : null);
      }
      else if(domain === "yt") {
        // YT doesn't update the progress bar when it's hidden (contrary to YTM which never hides it)

        ytForceShowVideoTime();

        const pbSelector = ".ytp-chrome-bottom div.ytp-progress-bar[role=\"slider\"]";
        const progElem = document.querySelector<HTMLProgressElement>(pbSelector);
        let videoTime = progElem ? Number(progElem.getAttribute("aria-valuenow")!) : -1;

        const mut = new MutationObserver(() => {
          // .observe() is only called when the element exists - no need to check for null
          videoTime = Number(document.querySelector<HTMLProgressElement>(pbSelector)!.getAttribute("aria-valuenow")!);
        });

        const observe = (progElem: HTMLElement) => {
          mut.observe(progElem, {
            attributes: true,
            attributeFilter: ["aria-valuenow"],
          });

          setTimeout(() => {
            res(videoTime >= 0 && !isNaN(videoTime) ? videoTime : null);
          }, 500);
        };

        if(!progElem)
          return onSelector(pbSelector, { listener: observe });
        else
          return observe(progElem);
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

// /** Parses a video time string in the format `[hh:m]m:ss` to the equivalent number of seconds - returns 0 if input couldn't be parsed */
// function parseVideoTime(videoTime: string) {
//   const matches = /^((\d{1,2}):)?(\d{1,2}):(\d{2})$/.exec(videoTime);
//   if(!matches)
//     return 0;

//   const [, , hrs, min, sec] = matches as unknown as [string, string | undefined, string | undefined, string, string];

//   let finalTime = 0;
//   if(hrs)
//     finalTime += Number(hrs) * 60 * 60;
//   finalTime += Number(min) * 60 + Number(sec);

//   return isNaN(finalTime) ? 0 : finalTime;
// }

// const selectorExistsMap = new Map<string, Array<(element: HTMLElement) => void>>();

// /**
//  * Calls the `listener` as soon as the `selector` exists in the DOM.  
//  * Listeners are deleted as soon as they are called once.  
//  * Multiple listeners with the same selector may be registered.
//  */
// export function onSelectorExists(selector: string, listener: (element: HTMLElement) => void) {
//   const el = document.querySelector<HTMLElement>(selector);

//   if(el)
//     listener(el);
//   else {
//     if(selectorExistsMap.get(selector))
//       selectorExistsMap.set(selector, [...selectorExistsMap.get(selector)!, listener]);
//     else
//       selectorExistsMap.set(selector, [listener]);
//   }
// }

// /** Initializes the MutationObserver responsible for checking selectors registered in `onSelectorExists()` */
// export function initSelectorExistsCheck() {
//   const observer = new MutationObserver(() => {
//     for(const [selector, listeners] of selectorExistsMap.entries()) {
//       const el = document.querySelector<HTMLElement>(selector);
//       if(el) {
//         listeners.forEach(listener => listener(el));
//         selectorExistsMap.delete(selector);
//       }
//     }
//   });

//   observer.observe(document.body, {
//     subtree: true,
//     childList: true,
//   });

//   log("Initialized \"selector exists\" MutationObserver");
// }

/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
export function getDomain(): Domain {
  const { hostname } = new URL(location.href);

  if(hostname.includes("music.youtube"))
    return "ytm";
  else if(hostname.includes("youtube"))
    return "yt";
  else
    throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}

/** Returns the URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl) */
export function getResourceUrl(name: keyof typeof resources) {
  return GM.getResourceUrl(name);
}
