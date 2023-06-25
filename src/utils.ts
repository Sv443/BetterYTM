import { Event as EventParam, EventEmitter, EventHandler } from "@billjs/event-emitter";
import type { Domain, LogLevel } from "./types";
import { scriptInfo } from "./constants";

//#MARKER BYTM-specific

let curLogLevel: LogLevel = 1;

/** Sets the current log level. 0 = Debug, 1 = Info */
export function setLogLevel(level: LogLevel) {
  curLogLevel = level;
}

function getLogLevel(args: unknown[]): number {
  if(typeof args.at(-1) === "number")
    return args.splice(args.length - 1, 1)[0] as number;
  return 0;
}

/** Common prefix to be able to tell logged messages apart */
const consPrefix = `[${scriptInfo.name}]`;

/**
 * Logs string-compatible values to the console, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info)
 */
export function log(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.log(consPrefix, ...args);
}

/**
 * Logs string-compatible values to the console as info, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info)
 */
export function info(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.info(consPrefix, ...args);
}

/**
 * Logs string-compatible values to the console as a warning, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info)
 */
export function warn(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.warn(consPrefix, ...args);
}

/** Logs string-compatible values to the console as an error. */
export function error(...args: unknown[]): void {
  console.error(consPrefix, ...args);
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

//#MARKER DOM

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

//#MARKER site events

export interface SiteEvents extends EventEmitter {
  /** Emitted whenever child nodes are added to or removed from the song queue */
  on(event: "queueChanged", listener: EventHandler): boolean;
  /** Emitted whenever carousel shelf containers are added or removed from their parent container */
  on(event: "carouselShelvesChanged", listener: EventHandler): boolean;
  /** Emitted once the home page is filled with content */
  on(event: "homePageLoaded", listener: EventHandler): boolean;
}

export const siteEvents = new EventEmitter() as SiteEvents;

/**
 * Returns the data of an event from the `@billjs/event-emitter` library.  
 * This function is used to assert the type passed in `<T>`
 * @param evt Event object from the `.on()` or `.once()` method
 * @template T Type of the data passed by `.fire(type: string, data: T)`
 */
export function getEvtData<T>(evt: EventParam): T {
  return evt.data as T;
}

let observers: MutationObserver[] = [];

/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
export async function initSiteEvents() {
  try {
    //#SECTION queue
    // the queue container always exists so it doesn't need the extra init function
    const queueObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
      if(addedNodes.length > 0 || removedNodes.length > 0) {
        info("Detected queue change - added nodes:", addedNodes.length, "- removed nodes:", removedNodes.length);
        siteEvents.fire("queueChanged", target);
      }
    });
    // only observe added or removed elements
    queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue")!, {
      childList: true,
    });

    //#SECTION home page observers
    initHomeObservers();

    info("Successfully initialized SiteEvents observers");

    observers = [
      queueObs,
    ];
  }
  catch(err) {
    error("Couldn't initialize SiteEvents observers due to an error:\n", err);
  }
}

/** Disconnects and deletes all observers. Run `initSiteEvents()` again to create new ones. */
export function removeAllObservers() {
  observers.forEach((observer) => observer.disconnect());
  observers = [];
}

/**
 * The home page might not exist yet if the site was accessed through any path like /watch directly.  
 * This function will keep waiting for when the home page exists, then create the necessary MutationObservers.
 */
async function initHomeObservers() {
  let interval: NodeJS.Timer | undefined;

  // hidden="" attribute is only present if the content of the page doesn't exist yet
  // so this resolves only once that attribute is removed
  if(document.querySelector("ytmusic-browse-response#browse-page")?.hasAttribute("hidden")) {
    await new Promise<void>((res) => {
      interval = setInterval(() => {
        if(!document.querySelector("ytmusic-browse-response#browse-page")?.hasAttribute("hidden")) {
          info("found home page");
          res();
        }
      }, 50);
    });
  }
  interval && clearInterval(interval);

  siteEvents.fire("homePageLoaded");

  info("Initialized home page observers");

  //#SECTION carousel shelves
  const shelfContainerObs = new MutationObserver(([ { addedNodes, removedNodes } ]) => {
    if(addedNodes.length > 0 || removedNodes.length > 0) {
      info("Detected carousel shelf container change - added nodes:", addedNodes.length, "- removed nodes:", removedNodes.length);
      siteEvents.fire("carouselShelvesChanged", { addedNodes, removedNodes });
    }
  });

  shelfContainerObs.observe(document.querySelector("#contents.ytmusic-section-list-renderer")!, {
    childList: true,
  });

  observers.concat([ shelfContainerObs ]);
}
