import { createNanoEvents } from "nanoevents";
import { error, info } from "./utils";

export interface SiteEventsMap {
  /** Emitted whenever child nodes are added to or removed from the song queue */
  queueChanged: (queueElement: HTMLElement) => void;
  /** Emitted whenever child nodes are added to or removed from the autoplay queue underneath the song queue */
  autoplayQueueChanged: (queueElement: HTMLElement) => void;
  /** Emitted whenever carousel shelf containers are added or removed from their parent container */
  carouselShelvesChanged: (elementMutations: Record<"addedNodes" | "removedNodes", NodeListOf<HTMLElement> | null>) => void;
  /** Emitted once the home page is filled with content */
  homePageLoaded: () => void;
}

/** EventEmitter instance that is used to detect changes to the site */
export const siteEvents = createNanoEvents<SiteEventsMap>();

let observers: MutationObserver[] = [];

/** Disconnects and deletes all observers. Run `initSiteEvents()` again to create new ones. */
export function removeAllObservers() {
  observers.forEach((observer, i) => {
    observer.disconnect();
    delete observers[i];
  });
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
        siteEvents.emit("queueChanged", target as HTMLElement);
      }
    });

    // only observe added or removed elements
    queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue")!, {
      childList: true,
    });

    const autoplayObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
      if(addedNodes.length > 0 || removedNodes.length > 0) {
        info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
        siteEvents.emit("autoplayQueueChanged", target as HTMLElement);
      }
    });

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
          clearInterval(interval as unknown as number);
          res();
        }
      }, 50);
    });
  }

  siteEvents.emit("homePageLoaded");

  info("Initialized home page observers");

  //#SECTION carousel shelves
  const shelfContainerObs = new MutationObserver(([ { addedNodes, removedNodes } ]) => {
    if(addedNodes.length > 0 || removedNodes.length > 0) {
      info("Detected carousel shelf container change - added nodes:", addedNodes.length, "- removed nodes:", removedNodes.length);
      siteEvents.emit("carouselShelvesChanged", { addedNodes, removedNodes } as Record<"addedNodes" | "removedNodes", NodeListOf<HTMLElement> | null>);
    }
  });

  shelfContainerObs.observe(document.querySelector("#contents.ytmusic-section-list-renderer")!, {
    childList: true,
  });

  observers.push(shelfContainerObs);
}
