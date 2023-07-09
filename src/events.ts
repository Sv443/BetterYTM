import { Event as EventParam, EventEmitter, EventHandler } from "@billjs/event-emitter";
import { error, info } from "./utils";

interface SiteEvents extends EventEmitter {
  /** Emitted whenever child nodes are added to or removed from the song queue */
  on(event: "queueChanged", listener: EventHandler): boolean;
  /** Emitted whenever child nodes are added to or removed from the autoplay queue underneath the song queue */
  on(event: "autoplayQueueChanged", listener: EventHandler): boolean;
  /** Emitted whenever carousel shelf containers are added or removed from their parent container */
  on(event: "carouselShelvesChanged", listener: EventHandler): boolean;
  /** Emitted once the home page is filled with content */
  on(event: "homePageLoaded", listener: EventHandler): boolean;
}

/** EventEmitter instance that is used to detect changes to the site */
export const siteEvents = new EventEmitter() as SiteEvents;

/**
 * Returns the data of an event from the `@billjs/event-emitter` library.
 * This function is used as a shorthand to extract the data and assert it with the type passed in `<T>`
 * @param evt Event object from the `.on()` or `.once()` method
 * @template T Type of the data passed by `.fire(type: string, data: T)`
 */
export function getEvtData<T>(evt: EventParam): T {
  return evt.data as T;
}

let observers: MutationObserver[] = [];

/** Disconnects and deletes all observers. Run `initSiteEvents()` again to create new ones. */
export function removeAllObservers() {
  observers.forEach((observer) => observer.disconnect());
  observers = [];
}

/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
export async function initSiteEvents() {
  try {
    //#SECTION queue
    // the queue container always exists so it doesn't need the extra init function
    const queueObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
      if(addedNodes.length > 0 || removedNodes.length > 0) {
        info(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
        siteEvents.fire("queueChanged", target);
      }
    });

    // only observe added or removed elements
    queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue")!, {
      childList: true,
    });

    const autoplayObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
      if(addedNodes.length > 0 || removedNodes.length > 0) {
        info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
        siteEvents.fire("autoplayQueueChanged", target);
      }
    });

    // TODO: check if this works since autoplay seems to be lazy-loaded
    autoplayObs.observe(document.querySelector(".side-panel.modular ytmusic-player-queue #automix-contents")!, {
      childList: true,
    });

    //#SECTION home page observers
    initHomeObservers();

    info("Successfully initialized SiteEvents observers");

    observers = observers.concat([
      queueObs,
      autoplayObs,
    ]);
  }
  catch(err) {
    error("Couldn't initialize SiteEvents observers due to an error:\n", err);
  }
}

/**
 * The home page might not exist yet if the site was accessed through any path like /watch directly.
 * This function will keep waiting for when the home page exists, then create the necessary MutationObservers.
 */
async function initHomeObservers() {
  let interval: NodeJS.Timer | undefined;

  // hidden="" attribute is only present if the content of the page doesn't exist yet
  // so this pauses execution until that attribute is removed
  if(document.querySelector("ytmusic-browse-response#browse-page")?.hasAttribute("hidden")) {
    await new Promise<void>((res) => {
      interval = setInterval(() => {
        if(!document.querySelector("ytmusic-browse-response#browse-page")?.hasAttribute("hidden")) {
          clearInterval(interval);
          res();
        }
      }, 50);
    });
  }

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

  observers = observers.concat([ shelfContainerObs ]);
}
