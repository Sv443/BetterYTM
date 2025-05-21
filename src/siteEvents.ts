import { NanoEmitter } from "@sv443-network/userutils";
import { error, getDomain, info } from "./utils/index.js";
import { FeatureConfig } from "./types.js";
import { emitInterface } from "./interface.js";
import { addSelectorListener, globserversReady } from "./observers.js";

/** Map of all site events and their arguments */
export type SiteEventsMap = {
  //#region misc:
  /** Emitted whenever the feature config is changed - initialization is not counted */
  configChanged: (newConfig: FeatureConfig) => void;
  /** Emitted whenever a config option is changed - contains the old and new value */
  configOptionChanged: <TFeatKey extends keyof FeatureConfig>(key: TFeatKey, oldValue: FeatureConfig[TFeatKey], newValue: FeatureConfig[TFeatKey]) => void;
  /** Emitted whenever the config menu should be rebuilt, like when a config was imported */
  rebuildCfgMenu: (newConfig: FeatureConfig) => void;
  /** Emitted whenever the config menu should be unmounted and recreated in the DOM */
  recreateCfgMenu: () => void;
  /** Emitted whenever the config menu is closed */
  cfgMenuClosed: () => void;
  /** Emitted when the welcome menu is closed */
  welcomeMenuClosed: () => void;
  /** Emitted whenever the user interacts with a hotkey input, used so other keyboard input event listeners don't get called while mid-input */
  hotkeyInputActive: (active: boolean) => void;

  //#region DOM:
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
   * Emitted whenever the current song's watch/video ID changes.  
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

  //#region features:
  /** Emitted whenever a channel was added, edited or removed from the auto-like list */
  autoLikeChannelsUpdated: () => void;
};

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

/** EventEmitter instance that is used to detect various changes to the site and userscript */
export const siteEvents = new NanoEmitter<SiteEventsMap>({
  publicEmit: true,
});

let observers: MutationObserver[] = [];

/** Disconnects and deletes all observers. Run `initSiteEvents()` again to create new ones. */
export function removeAllObservers() {
  observers.forEach((ob) => ob.disconnect());
  observers = [];
}

let lastVidId: string | null = null;
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
          runIntervalChecks();
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

      if(getDomain() === "ytm") {
        const registerFullScreenObs = () => addSelectorListener("mainPanel", "ytmusic-player#player", {
          listener: (el) => {
            playerFullscreenObs.observe(el, {
              attributeFilter: ["player-ui-state"],
            });
          },
        });

        if(globserversReady)
          registerFullScreenObs();
        else
          window.addEventListener("bytm:observersReady", registerFullScreenObs, { once: true });
      }
    }

    window.addEventListener("bytm:ready", () => {
      runIntervalChecks();
      setInterval(runIntervalChecks, 100);

      if(getDomain() === "ytm") {
        addSelectorListener<HTMLAnchorElement>("mainPanel", "ytmusic-player #song-video #movie_player .ytp-title-text > a", {
          listener(el) {
            const urlRefObs = new MutationObserver(([ { target } ]) => {
              if(!target || !(target as HTMLAnchorElement)?.href?.includes("/watch"))
                return;
              const videoID = new URL((target as HTMLAnchorElement).href).searchParams.get("v");
              checkVideoIdChange(videoID);
            });

            urlRefObs.observe(el, {
              attributeFilter: ["href"],
            });
          }
        });
      }
      if(getDomain() === "ytm") {
        setInterval(checkVideoIdChange, 250);
        checkVideoIdChange();
      }
    }, {
      once: true,
    });
  }
  catch(err) {
    error("Couldn't initialize site event observers due to an error:\n", err);
  }
}

let bytmReady = false;
window.addEventListener("bytm:ready", () => bytmReady = true, { once: true });

/** Emits a site event with the given key and arguments - if `bytm:ready` has not been emitted yet, all events will be queued until it is */
export function emitSiteEvent<TKey extends keyof SiteEventsMap>(key: TKey, ...args: Parameters<SiteEventsMap[TKey]>) {
  try {
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
  catch(err) {
    error(`Couldn't emit site event "${key}" due to an error:\n`, err);
  }
}

//#region other

/** Checks if the watch ID has changed and emits a `watchIdChanged` siteEvent if it has */
function checkVideoIdChange(newID?: string | null) {
  const newVidID = newID ?? new URL(location.href).searchParams.get("v");
  if(newVidID && newVidID !== lastVidId) {
    info(`Detected watch ID change - old ID: "${lastVidId}" - new ID: "${newVidID}"`);
    emitSiteEvent("watchIdChanged", newVidID, lastVidId);
    lastVidId = newVidID;
  }
}

/** Periodically called to check for changes in the URL and emit associated siteEvents */
export function runIntervalChecks() {
  if(!lastVidId)
    checkVideoIdChange();

  if(location.pathname !== lastPathname) {
    emitSiteEvent("pathChanged", String(location.pathname), lastPathname);
    lastPathname = String(location.pathname);
  }
};
