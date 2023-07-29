import { branch, scriptInfo } from "./constants";
import type { Domain, LogLevel } from "./types";

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
          return onSelectorExists(pbSelector, observe);
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

//#SECTION DOM

/**
 * Inserts `afterNode` as a sibling just after the provided `beforeNode`
 * @returns Returns the `afterNode`
 */
export function insertAfter(beforeNode: HTMLElement, afterNode: HTMLElement) {
  beforeNode.parentNode?.insertBefore(afterNode, beforeNode.nextSibling);
  return afterNode;
}

/** Adds a parent container around the provided element - returns the new parent node */
export function addParent(element: HTMLElement, newParent: HTMLElement) {
  const oldParent = element.parentNode;

  if(!oldParent)
    throw new Error("Element doesn't have a parent node");

  oldParent.replaceChild(newParent, element);
  newParent.appendChild(element);

  return newParent;
}

/**
 * Adds global CSS style through a `<style>` element in the document's `<head>`
 * @param style CSS string
 * @param ref Reference name that is included in the `<style>`'s ID - prefixed with `betterytm-style-` - no ID is given if it's `undefined`
 */
export function addGlobalStyle(style: string, ref?: string) {
  const styleElem = document.createElement("style");
  if(ref)
    styleElem.id = `betterytm-style-${ref}`;
  styleElem.innerHTML = style;
  document.head.appendChild(styleElem);

  log(`Inserted global style${ref ? ` with ref '${ref}'` : ""}:`, styleElem);
}

const selectorExistsMap = new Map<string, Array<(element: HTMLElement) => void>>();

/**
 * Calls the `listener` as soon as the `selector` exists in the DOM.  
 * Listeners are deleted as soon as they are called once.  
 * Multiple listeners with the same selector may be registered.
 */
export function onSelectorExists(selector: string, listener: (element: HTMLElement) => void) {
  const el = document.querySelector<HTMLElement>(selector);

  if(el)
    listener(el);
  else {
    if(selectorExistsMap.get(selector))
      selectorExistsMap.set(selector, [...selectorExistsMap.get(selector)!, listener]);
    else
      selectorExistsMap.set(selector, [listener]);
  }
}

/** Initializes the MutationObserver responsible for checking selectors registered in `onSelectorExists()` */
export function initSelectorExistsCheck() {
  const observer = new MutationObserver(() => {
    for(const [selector, listeners] of selectorExistsMap.entries()) {
      const el = document.querySelector<HTMLElement>(selector);
      if(el) {
        listeners.forEach(listener => listener(el));
        selectorExistsMap.delete(selector);
      }
    }
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
  });

  log("Initialized \"selector exists\" MutationObserver");
}

/** Preloads an array of image URLs so they can be loaded instantly from cache later on */
export function precacheImages(srcUrls: string[], rejects = false) {
  const promises = srcUrls.map(src => new Promise((res, rej) => {
    const image = new Image();
    image.src = src;
    image.addEventListener("load", () => res(image));
    image.addEventListener("error", () => rejects && rej(`Failed to preload image with URL '${src}'`));
  }));

  return Promise.allSettled(promises);
}

//#SECTION misc

type FetchOpts = RequestInit & {
  timeout: number;
};

/** Calls the fetch API with special options */
export async function fetchAdvanced(url: string, options: Partial<FetchOpts> = {}) {
  const { timeout = 10000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const res = await fetch(url, {
    ...options,
    signal: controller.signal,
  });

  clearTimeout(id);
  return res;
}

/**
 * Creates an invisible anchor with _blank target and clicks it.  
 * This has to be run in relatively quick succession to a user interaction event, else the browser rejects it.
 */
export function openInNewTab(href: string) {
  try {
    const openElem = document.createElement("a");
    Object.assign(openElem, {
      className: "betterytm-open-in-new-tab",
      target: "_blank",
      rel: "noopener noreferrer",
      href,
    });
    openElem.style.visibility = "hidden";

    document.body.appendChild(openElem);
    openElem.click();
    // timeout just to be safe
    setTimeout(() => openElem.remove(), 200);
  }
  catch(err) {
    error("Couldn't open URL in a new tab due to an error:", err);
  }
}

/**
 * Returns `unsafeWindow` if it is available, otherwise falls back to just `window`  
 * unsafeWindow is sometimes needed because otherwise YTM errors out - see [this issue](https://github.com/Sv443/BetterYTM/issues/18#show_issue)
 */
export function getUnsafeWindow() {
  try {
    // throws ReferenceError if the "@grant unsafeWindow" isn't present
    return unsafeWindow;
  }
  catch(e) {
    return window;
  }
}

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

/** Returns the URL of the asset hosted on GitHub at the specified relative `path` (starting at `{root}/assets/`) */
export function getAssetUrl(path: string) {
  return `https://raw.githubusercontent.com/Sv443/BetterYTM/${branch}/assets/${path}`;
}

/**
 * Automatically appends an `s` to the passed `word`, if `num` is not equal to 1
 * @param word A word in singular form, to auto-convert to plural
 * @param num If this is an array, the amount of items is used
 */
export function autoPlural(word: string, num: number | unknown[]) {
  if(Array.isArray(num))
    num = num.length;
  return `${word}${num === 1 ? "" : "s"}`;
}

/** Ensures the passed `value` always stays between `min` and `max` */
export function clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min);
}

/** Pauses async execution for the specified time in ms */
export function pauseFor(time: number) {
  return new Promise((res) => {
    setTimeout(res, time);
  });
}
