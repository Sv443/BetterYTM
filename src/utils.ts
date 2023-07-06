import { branch, scriptInfo } from "./constants";
import type { Domain, LogLevel } from "./types";

//#MARKER BYTM-specific

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
    return Math.max(
      Math.min(
        args.splice(args.length - 1)[0] as number,
        minLogLvl,
      ),
      maxLogLvl,
    );
  return 1;
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

/** Logs string-compatible values to the console as an error. */
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
 * @param force Set to true to dispatch mouse movement events in case the video time can't be estimated
 * @returns Returns null if the video time is unavailable
 */
export function getVideoTime(force = false) {
  const domain = getDomain();

  try {
    if(domain === "ytm") {
      const pbEl = document.querySelector("#progress-bar") as HTMLProgressElement;
      return !isNaN(Number(pbEl.value)) ? Number(pbEl.value) : null;
    }
    else if(domain === "yt") {
      // YT doesn't update the progress bar when it's hidden (YTM doesn't hide it) so TODO: come up with some solution here

      // Possible solution:
      // - Use MutationObserver to detect when attributes of progress bar (selector `div.ytp-progress-bar[role="slider"]`) change
      // - Wait until the attribute increments, then save the value of `aria-valuenow` and the current system time to memory
      // - When site switch hotkey is pressed, take saved `aria-valuenow` value and add the difference between saved system time and current system time
      //   - If no value is present, use the script from `dev/ytForceShowVideoTime.js` to simulate mouse movement to force the element to update
      // - Subtract one or two seconds to make up for rounding errors
      // - profit

      // if(!ytCurrentVideoTime) {
      //   ytForceShowVideoTime();
      //   const videoTime = document.querySelector("#TODO")?.getAttribute("aria-valuenow") ?? null;
      // }
      void [ force, ytForceShowVideoTime ];

      return null;
    }

    return null;
  }
  catch(err) {
    error("Couldn't get video time due to error:", err);
    return null;
  }
}

/** Sends events that force the video controls to become visible for about 3 seconds */
function ytForceShowVideoTime() {
  const player = document.querySelector("#movie_player");
  if(!player)
    return false;

  const defaultProps = {
    // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
    view: unsafeWindow ?? window,
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
    movementY: 0
  }));

  setTimeout(() => {
    player.dispatchEvent(new MouseEvent("mouseleave", defaultProps));
  }, 4000);

  return true;
}

/**
 * Creates an invisible anchor with _blank target and clicks it.  
 * This has to be run in relatively quick succession to a user interaction event, else the browser rejects it.
 */
export function openInNewTab(href: string) {
  const openElem = document.createElement("a");
  Object.assign(openElem, {
    className: "betterytm-open-in-new-tab",
    target: "_blank",
    rel: "noopener noreferrer",
    href,
    style: {
      visibility: "hidden",
    },
  });
  document.body.appendChild(openElem);
  openElem.click();
  // timeout just to be safe
  setTimeout(() => openElem.remove(), 200);
}

//#SECTION DOM

/**
 * Inserts `afterNode` as a sibling just after the provided `beforeNode`
 * @param beforeNode
 * @param afterNode
 * @returns Returns the `afterNode`
 */
export function insertAfter(beforeNode: HTMLElement, afterNode: HTMLElement) {
  beforeNode.parentNode?.insertBefore(afterNode, beforeNode.nextSibling);
  return afterNode;
}

/**
 * Adds global CSS style through a `<style>` element in the document's `<head>`
 * @param style CSS string
 * @param ref Reference name that is included in the `<style>`'s ID - prefixed with `betterytm-style-` - defaults to a random number if left undefined
 */
export function addGlobalStyle(style: string, ref?: string) {
  if(typeof ref !== "string" || ref.length === 0)
    ref = String(Math.floor(Math.random() * 10_000));

  const styleElem = document.createElement("style");
  styleElem.id = `betterytm-style-${ref}`;
  styleElem.innerHTML = style;
  document.head.appendChild(styleElem);

  log(`Inserted global style with ref '${ref}':`, styleElem);
}

//#SECTION misc

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

/** Returns the URL of the asset hosted on GitHub at the specified relative `path` (starting at `ROOT/assets/`) */
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
