import { createNanoEvents } from "nanoevents";
import { error, info } from "./utils";
import { FeatureConfig } from "./types";
import { emitInterface } from "./interface";
import { addSelectorListener } from "./observers";

export interface SiteEventsMap {
  // misc:
  /** Emitted whenever the feature config is changed - initialization is not counted */
  configChanged: (config: FeatureConfig) => void;
  // TODO: implement
  /** Emitted whenever a config option is changed - contains the old and the new values */
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
   * Emitted whenever the current song title changes
   * @param newTitle The new song title
   * @param oldTitle The old song title, or `null` if no previous title was found
   * @param initialPlay Whether this is the first played song
   */
  songTitleChanged: (newTitle: string, oldTitle: string | null, initialPlay: boolean) => void;
  /** Emitted whenever the current song's watch ID changes - `oldId` is `null` if this is the first song played in the session */
  watchIdChanged: (newId: string, oldId: string | null) => void;
  /** Emitted whenever the player enters or exits fullscreen mode */
  fullscreenToggled: (isFullscreen: boolean) => void;
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
] as const;

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
    let initialPlay = true;

    addSelectorListener("playerBarInfo", "yt-formatted-string.title", {
      continuous: true,
      listener: (titleElem) => {
        const oldTitle = lastTitle;
        const newTitle = titleElem.textContent;
        if(newTitle === lastTitle || !newTitle)
          return;
        lastTitle = newTitle;
        info(`Detected song change - old title: "${oldTitle}" - new title: "${newTitle}" - initial play: ${initialPlay}`);
        emitSiteEvent("songTitleChanged", newTitle, oldTitle, initialPlay);
        initialPlay = false;
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
      emitSiteEvent("fullscreenToggled", isFullscreen);
    });

    addSelectorListener("mainPanel", "ytmusic-player#player", {
      listener: (el) => {
        playerFullscreenObs.observe(el, {
          attributeFilter: ["player-ui-state"],
        });
      },
    });

    //#region other

    let lastWatchId: string | null = null;

    const checkWatchId = () => {
      if(location.pathname.startsWith("/watch")) {
        const newWatchId = new URL(location.href).searchParams.get("v");
        if(newWatchId && newWatchId !== lastWatchId) {
          info(`Detected watch ID change - old ID: "${lastWatchId}" - new ID: "${newWatchId}"`);
          emitSiteEvent("watchIdChanged", newWatchId, lastWatchId);
          lastWatchId = newWatchId;
        }
      }
      setTimeout(checkWatchId, 200);
    };
    window.addEventListener("bytm:ready", checkWatchId, { once: true });
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
