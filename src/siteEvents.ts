import { NanoEmitter, error, getDomain, info } from "./utils";
import { FeatureConfig } from "./types";
import { emitInterface } from "./interface";
import { addSelectorListener } from "./observers";

export interface SiteEventsMap {
  // misc:
  /** Emitted whenever the feature config is changed - initialization is not counted */
  configChanged: (config: FeatureConfig) => void;
  // TODO: implement
  /** Emitted whenever a config option is changed - contains the old and new value */
  configOptionChanged: <TKey extends keyof FeatureConfig>(key: TKey, oldValue: FeatureConfig[TKey], newValue: FeatureConfig[TKey]) => void;
  /** Emitted whenever the config menu should be rebuilt, like when a config was imported */
  rebuildCfgMenu: (config: FeatureConfig) => void;
  /** Emitted whenever the config menu should be unmounted and recreated in the DOM */
  recreateCfgMenu: () => void;
  /** Emitted whenever the config menu is closed */
  cfgMenuClosed: () => void;
  /** Emitted when the welcome menu is closed */
  welcomeMenuClosed: () => void;
  /** Emitted whenever the user interacts with a hotkey input, used so other keyboard input event listeners don't get called while mid-input */
  hotkeyInputActive: (active: boolean) => void;

  // DOM:
  /** Emitted whenever child nodes are added to or removed from the song queue */
  queueChanged: (queueElement: HTMLElement) => void;
  /** Emitted whenever child nodes are added to or removed from the autoplay queue underneath the song queue */
  autoplayQueueChanged: (queueElement: HTMLElement) => void;
  /**
   * Emitted whenever the current song title changes.  
   * Uses the DOM element `yt-formatted-string.title` to detect changes and emit instantaneously.  
   * If `oldTitle` is `null`, this is the first song played in the session.
   */
  songTitleChanged: (newTitle: string, oldTitle: string | null) => void;
  /**
   * Emitted whenever the current song's watch ID changes.  
   * If `oldId` is `null`, this is the first song played in the session.
   */
  watchIdChanged: (newId: string, oldId: string | null) => void;
  /**
   * Emitted whenever the URL path (`location.pathname`) changes.  
   * If `oldPath` is `null`, this is the first path in the session.
   */
  pathChanged: (newPath: string, oldPath: string | null) => void;
  /** Emitted whenever the player enters or exits fullscreen mode */
  fullscreenToggled: (isFullscreen: boolean) => void;

  /** Emitted whenever a channel was added, edited or removed from the auto-like list */
  autoLikeChannelsUpdated: () => void;
}

/** Array of all site events */
export const allSiteEvents = [
  "configChanged",
  "configOptionChanged",
  "rebuildCfgMenu",
  "recreateCfgMenu",
  "cfgMenuClosed",
  "welcomeMenuClosed",
  "hotkeyInputActive",
  "queueChanged",
  "autoplayQueueChanged",
  "songTitleChanged",
  "watchIdChanged",
  "pathChanged",
  "fullscreenToggled",
  "autoLikeChannelsUpdated",
] as const;

/** EventEmitter instance that is used to detect changes to the site */
export const siteEvents = new NanoEmitter<SiteEventsMap>({ publicEmit: true });

let observers: MutationObserver[] = [];

/** Disconnects and deletes all observers. Run `initSiteEvents()` again to create new ones. */
export function removeAllObservers() {
  observers.forEach((observer, i) => {
    observer.disconnect();
    delete observers[i];
  });
  observers = [];
}

let lastWatchId: string | null = null;
let lastPathname: string | null = null;
let lastFullscreen: boolean;

/** Creates MutationObservers that check if parts of the site have changed, then emit an event on the `siteEvents` instance. */
export async function initSiteEvents() {
  try {
    if(getDomain() === "ytm") {
      //#region queue
      // the queue container always exists so it doesn't need an extra init function
      const queueObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
        if(addedNodes.length > 0 || removedNodes.length > 0) {
          info(`Detected queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
          emitSiteEvent("queueChanged", target as HTMLElement);
        }
      });

      // only observe added or removed elements
      addSelectorListener("sidePanel", "#contents.ytmusic-player-queue", {
        listener: (el) => {
          queueObs.observe(el, {
            childList: true,
          });
        },
      });

      const autoplayObs = new MutationObserver(([ { addedNodes, removedNodes, target } ]) => {
        if(addedNodes.length > 0 || removedNodes.length > 0) {
          info(`Detected autoplay queue change - added nodes: ${[...addedNodes.values()].length} - removed nodes: ${[...removedNodes.values()].length}`);
          emitSiteEvent("autoplayQueueChanged", target as HTMLElement);
        }
      });

      addSelectorListener("sidePanel", "ytmusic-player-queue #automix-contents", {
        listener: (el) => {
          autoplayObs.observe(el, {
            childList: true,
          });
        },
      });

      //#region player bar

      let lastTitle: string | null = null;

      addSelectorListener("playerBarInfo", "yt-formatted-string.title", {
        continuous: true,
        listener: (titleElem) => {
          const oldTitle = lastTitle;
          const newTitle = titleElem.textContent;
          if(newTitle === lastTitle || !newTitle)
            return;
          lastTitle = newTitle;
          info(`Detected song change - old title: "${oldTitle}" - new title: "${newTitle}"`);
          emitSiteEvent("songTitleChanged", newTitle, oldTitle);
        },
      });

      info("Successfully initialized SiteEvents observers");

      observers = observers.concat([
        queueObs,
        autoplayObs,
      ]);

      //#region player

      const playerFullscreenObs = new MutationObserver(([{ target }]) => {
        const isFullscreen = (target as HTMLElement).getAttribute("player-ui-state")?.toUpperCase() === "FULLSCREEN";
        if(lastFullscreen !== isFullscreen || typeof lastFullscreen === "undefined") {
          emitSiteEvent("fullscreenToggled", isFullscreen);
          lastFullscreen = isFullscreen;
        }
      });

      addSelectorListener("mainPanel", "ytmusic-player#player", {
        listener: (el) => {
          playerFullscreenObs.observe(el, {
            attributeFilter: ["player-ui-state"],
          });
        },
      });
    }

    //#region other

    const runIntervalChecks = () => {
      if(location.pathname.startsWith("/watch")) {
        const newWatchId = new URL(location.href).searchParams.get("v");
        if(newWatchId && newWatchId !== lastWatchId) {
          info(`Detected watch ID change - old ID: "${lastWatchId}" - new ID: "${newWatchId}"`);
          emitSiteEvent("watchIdChanged", newWatchId, lastWatchId);
          lastWatchId = newWatchId;
        }
      }

      if(location.pathname !== lastPathname) {
        emitSiteEvent("pathChanged", String(location.pathname), lastPathname);
        lastPathname = String(location.pathname);
      }
    };

    window.addEventListener("bytm:ready", () => {
      runIntervalChecks();
      setInterval(runIntervalChecks, 100);
    }, {
      once: true,
    });
  }
  catch(err) {
    error("Couldn't initialize SiteEvents observers due to an error:\n", err);
  }
}

let bytmReady = false;
window.addEventListener("bytm:ready", () => bytmReady = true, { once: true });

/** Emits a site event with the given key and arguments - if `bytm:ready` has not been emitted yet, all events will be queued until it is */
export function emitSiteEvent<TKey extends keyof SiteEventsMap>(key: TKey, ...args: Parameters<SiteEventsMap[TKey]>) {
  if(!bytmReady) {
    window.addEventListener("bytm:ready", () => {
      bytmReady = true;
      emitSiteEvent(key, ...args);
    }, { once: true });
    return;
  }
  siteEvents.emit(key, ...args);
  emitInterface(`bytm:siteEvent:${key}`, args as unknown as undefined);
}
