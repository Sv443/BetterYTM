import { createNanoEvents } from "nanoevents";
import { error, info } from "./utils";
import { FeatureConfig } from "./types";
import { emitInterface } from "./interface";

export interface SiteEventsMap {
  // misc:
  /** Emitted whenever the feature config is changed - initialization is not counted */
  configChanged: (config: FeatureConfig) => void;
  /** Emitted whenever the config menu should be rebuilt, like when a config was imported */
  rebuildCfgMenu: (config: FeatureConfig) => void;
  /** Emitted whenever the config menu is closed */
  cfgMenuClosed: () => void;
  /** Emitted when the welcome menu is closed */
  welcomeMenuClosed: () => void;

  // DOM:
  /** Emitted whenever child nodes are added to or removed from the song queue */
  queueChanged: (queueElement: HTMLElement) => void;
  /** Emitted whenever child nodes are added to or removed from the autoplay queue underneath the song queue */
  autoplayQueueChanged: (queueElement: HTMLElement) => void;
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
    // the queue container always exists so it doesn't need an extra init function
    const queueObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
      if(addedNodes.length > 0 || removedNodes.length > 0) {
        info(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
        emitSiteEvent("queueChanged", target as HTMLElement);
      }
    });

    // only observe added or removed elements
    queueObs.observe(document.querySelector(".side-panel.modular #contents.ytmusic-player-queue")!, {
      childList: true,
    });

    const autoplayObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
      if(addedNodes.length > 0 || removedNodes.length > 0) {
        info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
        emitSiteEvent("autoplayQueueChanged", target as HTMLElement);
      }
    });

    autoplayObs.observe(document.querySelector(".side-panel.modular ytmusic-player-queue #automix-contents")!, {
      childList: true,
    });

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

/** Emits a site event with the given key and arguments */
export function emitSiteEvent<TKey extends keyof SiteEventsMap>(key: TKey, ...args: Parameters<SiteEventsMap[TKey]>) {
  siteEvents.emit(key, ...args);
  emitInterface(`bytm:siteEvent:${key}`, args as unknown as undefined);
}
