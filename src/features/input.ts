import { getVideoTime } from "../utils";
import { dbg } from "../constants";
import type { Domain } from "../types";
import { getFeatures } from "../config";

//#MARKER arrow key skip

export function initArrowKeySkip() {
  document.addEventListener("keydown", onKeyDown);
  dbg && console.log("BetterYTM: Added key press listener");
}

/** Called when the user presses any key, anywhere */
function onKeyDown(evt: KeyboardEvent) {
  if(["ArrowLeft", "ArrowRight"].includes(evt.code)) {
    // discard the event when a (text) input is currently active, like when editing a playlist
    if(["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName ?? "_"))
      return dbg && console.info(`BetterYTM: Captured valid key but the current active element is <${document.activeElement!.tagName.toLowerCase()}>, so the keypress is ignored`);

    dbg && console.log(`BetterYTM: Captured key '${evt.code}' in proxy listener`);

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
      view: window,
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
      // TODO: check if the code prop is correct
      const proxyProps = { code: "", ...defaultProps, ...keyProps };

      document.body.dispatchEvent(new KeyboardEvent("keydown", proxyProps));

      dbg && console.log(`BetterYTM: Dispatched proxy keydown event: [${evt.code}] -> [${proxyProps.code}]`);
    }
    else if(dbg)
      console.warn(`BetterYTM: Captured key '${evt.code}' has no defined behavior`);
  }
}

//#MARKER site switch

/** Initializes the site switch feature */
export function initSiteSwitch(domain: Domain) {
  // TODO:
  // extra features:
  // - keep video time
  // - configurable hotkey

  document.addEventListener("keydown", (e) => {
    if(e.key === "F9")
      switchSite(domain === "yt" ? "ytm" : "yt");
  });
  dbg && console.log("BetterYTM: Initialized site switch listener");
}

/** Switches to the other site (between YT and YTM) */
function switchSite(newDomain: Domain) {
  try {
    let subdomain;
    if(newDomain === "ytm")
      subdomain = "music";
    else if(newDomain === "yt")
      subdomain = "www";

    if(!subdomain)
      throw new TypeError(`Unrecognized domain '${newDomain}'`);


    const { pathname, search, hash } = new URL(location.href);

    const vt = getVideoTime() ?? 0;

    dbg && console.log(`BetterYTM: Found video time of ${vt} seconds`);

    const newSearch = search.includes("?") ? `${search}&t=${vt}` : `?t=${vt}`;

    const url = `https://${subdomain}.youtube.com${pathname}${newSearch}${hash}`;

    console.info(`BetterYTM - switching to domain '${newDomain}' at ${url}`);

    disableBeforeUnload();
    setImmediate(() => location.href = url);
  }
  catch(err) {
    console.error("BetterYTM: Error while switching site:", err);
  }
}

//#MARKER beforeunload popup

let beforeUnloadEnabled = true;

/** Disables the popup before leaving the site */
export function disableBeforeUnload() {
  beforeUnloadEnabled = false;
  dbg && console.info("BetterYTM: Disabled popup before leaving the site");
}

/** (Re-)enables the popup before leaving the site */
export function enableBeforeUnload() {
  beforeUnloadEnabled = true;
  dbg && console.info("BetterYTM: Enabled popup before leaving the site");
}

/** Adds a spy function into `window.__proto__.addEventListener` to selectively discard events before they can be captured by the original site's listeners */
export function initBeforeUnloadHook() {
  Error.stackTraceLimit = Infinity;

  (function(original) {
    // @ts-ignore
    window.__proto__.addEventListener = function(...args) {
      const [type, listener, ...rest] = args;
      if(type === "beforeunload") {
        return original.apply(this, [
          type,
          // @ts-ignore
          (...a) => {
            if(beforeUnloadEnabled)
              listener(...a);
          },
          ...rest,
        ]);
      }
      else
        return original.apply(this, args);
    };
    // @ts-ignore
  })(window.__proto__.addEventListener);

  getFeatures().then(feats => {
    if(feats.disableBeforeUnloadPopup)
      disableBeforeUnload();
  });

  // (function(original) {
  //   window.__proto__.removeEventListener = function(type, listener, useCapture) {
  //     if(evtNames.includes(type)){
  //       console.log("------> removeEventListener " + type, listener, useCapture);
  //     }

  //     return original.apply(this, arguments);
  //   };
  // })(window.__proto__.removeEventListener);
}
