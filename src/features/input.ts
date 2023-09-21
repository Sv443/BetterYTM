import { getUnsafeWindow } from "@sv443-network/userutils";
import { error, getVideoTime, info, log, warn } from "../utils";
import type { Domain } from "../types";
import { isMenuOpen } from "../menu/menu_old";

//#MARKER arrow key skip

export function initArrowKeySkip() {
  document.addEventListener("keydown", (evt) => {
    if(!["ArrowLeft", "ArrowRight"].includes(evt.code))
      return;
    // discard the event when a (text) input is currently active, like when editing a playlist
    if(["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName ?? "_"))
      return info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);

    onArrowKeyPress(evt);
  });
  log("Added arrow key press listener");
}

/** Called when the user presses any key, anywhere */
function onArrowKeyPress(evt: KeyboardEvent) {
  log(`Captured key '${evt.code}' in proxy listener`);

  // ripped this stuff from the console, most of these are probably unnecessary but this was finnicky af and I am sick and tired of trial and error
  const defaultProps = {
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    target: document.body,
    currentTarget: document.body,
    originalTarget: document.body,
    explicitOriginalTarget: document.body,
    srcElement: document.body,
    type: "keydown",
    bubbles: true,
    cancelBubble: false,
    cancelable: true,
    isTrusted: true,
    repeat: false,
    // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
    view: getUnsafeWindow(),
  };

  let invalidKey = false;
  let keyProps = {};

  switch(evt.code) {
  case "ArrowLeft":
    keyProps = {
      code: "KeyH",
      key: "h",
      keyCode: 72,
      which: 72,
    };
    break;
  case "ArrowRight":
    keyProps = {
      code: "KeyL",
      key: "l",
      keyCode: 76,
      which: 76,
    };
    break;
  default:
    invalidKey = true;
    break;
  }

  if(!invalidKey) {
    const proxyProps = { code: "", ...defaultProps, ...keyProps };

    document.body.dispatchEvent(new KeyboardEvent("keydown", proxyProps));

    log(`Dispatched proxy keydown event: [${evt.code}] -> [${proxyProps.code}]`);
  }
  else
    warn(`Captured key '${evt.code}' has no defined behavior`);
}

//#MARKER site switch

/** switch sites only if current video time is greater than this value */
const videoTimeThreshold = 3;

/** Initializes the site switch feature */
export function initSiteSwitch(domain: Domain) {
  document.addEventListener("keydown", (e) => {
    if(e.key === "F9")
      switchSite(domain === "yt" ? "ytm" : "yt");
  });
  log("Initialized site switch listener");
}

/** Switches to the other site (between YT and YTM) */
async function switchSite(newDomain: Domain) {
  try {
    if(newDomain === "ytm" && !location.href.includes("/watch"))
      return warn("Not on a video page, so the site switch is ignored");

    let subdomain;
    if(newDomain === "ytm")
      subdomain = "music";
    else if(newDomain === "yt")
      subdomain = "www";

    if(!subdomain)
      throw new Error(`Unrecognized domain '${newDomain}'`);

    disableBeforeUnload();

    const { pathname, search, hash } = new URL(location.href);

    const vt = await getVideoTime();

    log(`Found video time of ${vt} seconds`);

    const cleanSearch = search.split("&")
      .filter((param) => !param.match(/^\??t=/))
      .join("&");

    const newSearch = typeof vt === "number" && vt > videoTimeThreshold ?
      cleanSearch.includes("?")
        ? `${cleanSearch.startsWith("?")
          ? cleanSearch
          : "?" + cleanSearch
        }&t=${vt - 1}`
        : `?t=${vt - 1}`
      : cleanSearch;
    const newUrl = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;

    info(`Switching to domain '${newDomain}' at ${newUrl}`);
    location.assign(newUrl);
  }
  catch(err) {
    error("Error while switching site:", err);
  }
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
export function initBeforeUnloadHook() {
  Error.stackTraceLimit = 1000; // default is 25 on FF so this should hopefully be more than enough

  (function(original: typeof window.addEventListener) {
    // @ts-ignore
    window.__proto__.addEventListener = function(...args: Parameters<typeof window.addEventListener>) {
      const origListener = typeof args[1] === "function" ? args[1] : args[1].handleEvent;
      args[1] = function(...a) {
        if(!beforeUnloadEnabled && args[0] === "beforeunload")
          return info("Prevented beforeunload event listener from being called");
        else
          return origListener.apply(this, a);
      };
      original.apply(this, args);
    };
    // @ts-ignore
  })(window.__proto__.addEventListener);
}

//#MARKER number keys skip to time

/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
export function initNumKeysSkip() {
  document.addEventListener("keydown", (e) => {
    if(!e.key.trim().match(/^[0-9]$/))
      return;
    if(isMenuOpen)
      return;
    // discard the event when a (text) input is currently active, like when editing a playlist or when the search bar is focused
    if(
      document.activeElement !== document.body
      && !["progress-bar"].includes(document.activeElement?.id ?? "_")
      && !["BUTTON", "A"].includes(document.activeElement?.tagName ?? "_")
    )
      return info("Captured valid key to skip video to but an unexpected element is focused, so the keypress is ignored");

    skipToTimeKey(Number(e.key));
  });
  log("Added number key press listener");
}

/** Returns the x position as a fraction of timeKey in maxWidth */
function getX(timeKey: number, maxWidth: number) {
  if(timeKey >= 10)
    return maxWidth;
  return Math.floor((maxWidth / 10) * timeKey);
}

/** Calculates DOM-relative offsets of the bounding client rect of the passed element - see https://stackoverflow.com/a/442474/11187044 */
function getOffsetRect(elem: HTMLElement) {
  let left = 0;
  let top = 0;
  const rect = elem.getBoundingClientRect();
  while(elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
    left += elem.offsetLeft - elem.scrollLeft;
    top += elem.offsetTop - elem.scrollTop;
    elem = elem.offsetParent as HTMLElement;
  }
  return {
    top,
    left,
    width: rect.width,
    height: rect.height,
  };
}

/** Emulates a click on the video progress bar at the position calculated from the passed time key (0-9) */
function skipToTimeKey(key: number) {
  // not technically a progress element but behaves pretty much the same
  const progressElem = document.querySelector<HTMLProgressElement>("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar");
  if(!progressElem)
    return;

  const rect = getOffsetRect(progressElem);

  const x = getX(key, rect.width);
  const y = rect.top - rect.height / 2;

  log(`Skipping to time key ${key} (x-offset: ${x}px of ${rect.width}px)`);

  const evt = new MouseEvent("mousedown", {
    clientX: x,
    clientY: Math.round(y),
    // @ts-ignore
    layerX: x,
    layerY: Math.round(rect.height / 2),
    target: progressElem,
    bubbles: true,
    shiftKey: false,
    ctrlKey: false,
    altKey: false,
    metaKey: false,
    button: 0,
    buttons: 1,
    which: 1,
    isTrusted: true,
    offsetX: 0,
    offsetY: 0,
    // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
    view: getUnsafeWindow(),
  });

  progressElem.dispatchEvent(evt);
}
