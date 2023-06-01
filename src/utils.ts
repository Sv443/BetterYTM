import { EventEmitter, EventHandler } from "@billjs/event-emitter";
import { dbg } from "./constants";
import type { Domain } from "./types";

//#SECTION BYTM-specific

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
    console.error("BetterYTM: Couldn't get video time due to error:", err);
    return null;
  }
}

/** Sends events that force the video controls to become visible for about 3 seconds */
function ytForceShowVideoTime() {
  const player = document.querySelector("#movie_player");
  if(!player)
    return false;

  player.dispatchEvent(new MouseEvent("mouseenter", {
    view: window,
    bubbles: true,
    cancelable: false,
  }));

  const { x, y, width, height } = player.getBoundingClientRect();
  const screenY = Math.round(y + height / 2);
  const screenX = x + Math.min(50, Math.round(width / 3));

  player.dispatchEvent(new MouseEvent("mousemove", {
    view: window,
    bubbles: true,
    cancelable: false,
    screenY,
    screenX,
    movementX: 5,
    movementY: 0
  }));

  setTimeout(() => {
    player.dispatchEvent(new MouseEvent("mouseleave", {
      view: window,
      bubbles: true,
      cancelable: false,
    }));
  }, 4000);

  return true;
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
  document.querySelector("head")!.appendChild(styleElem);

  dbg && console.log(`BetterYTM: Inserted global style with ref '${ref}':`, styleElem);
}

//#SECTION site events

export interface SiteEvents extends EventEmitter {
  /** Emitted whenever a song is added to or removed from the queue */
  on(event: "queueChanged", listener: EventHandler): boolean;
}

export const siteEvents = new EventEmitter() as SiteEvents;

let observers: MutationObserver[] = [];

export function initSiteEvents() {
  const queueObserver = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
    if(addedNodes.length > 0 || removedNodes.length > 0) {
      dbg && console.info("BetterYTM: Detected queue change - added nodes:", addedNodes.length, "- removed nodes:", removedNodes.length);
      siteEvents.fire("queueChanged", target);
    }
  });
  // only observe added or removed elements
  queueObserver.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue")!, {
    childList: true,
  });

  dbg && console.info("BetterYTM: Successfully initialized SiteEvents observers");

  observers = [
    queueObserver,
  ];
}

export function removeObservers() {
  observers.forEach((observer) => observer.disconnect());
  observers = [];
}
