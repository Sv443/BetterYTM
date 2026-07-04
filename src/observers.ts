import { clamp, getUnsafeWindow, SelectorListenerOptions, SelectorObserver, SelectorObserverOptions } from "@sv443-network/userutils";
import { emitInterface } from "@/interface.ts";
import { getDomain } from "@util/misc.ts";
import { getSelector } from "@util/data.ts";
import { loggers } from "@util/logging.ts";
import type { Domain, FeatureConfig } from "@/types.ts";

// !> If you came here looking for which observer to use, start out by looking at the types `SharedObserverName`, `YTMObserverName` and `YTObserverName`.
// !> Once you found a fitting observer, go to the `initObservers()` function and search for `observerName = new SelectorObserver`.
// !> Just above that line, you'll find the selector to that observer's base element, whose children will be observed using the MutationObserver API.
// !> **Make sure all your selectors start at a child of that base element!**


//#region types

/** Names of all available Observer instances across all sites. */
export type ObserverName = SharedObserverName | YTMObserverName | YTObserverName;

/** Observer names available to the site passed in the `TDomain` generic. */
export type ObserverNameByDomain<TDomain extends Domain> = SharedObserverName | (TDomain extends "ytm" ? YTMObserverName : YTObserverName);

/** Union of observer names that are available on both sites. */
export type SharedObserverName =
  | "body"                 // the entire <body> element
  | "bytmDialogContainer"; // the container for all BytmDialog instances

/** Union of YTM-only observer names. */
export type YTMObserverName =
  | "browseResponse"         // the /channel/UC... page
  | "searchPage"             // the search page
  | "navBar"                 // the navigation / title bar at the top of the page
  | "mainPanel"              // the main content panel - includes things like the video element
  | "sideBar"                // the sidebar on the left side of the page
  | "sidePanel"              // the side panel on the right side of the /watch page
  | "playerBar"              // media controls bar at the bottom of the page
  | "playerBarInfo"          // song title, artist, album, etc. inside the player bar
  | "playerBarMiddleButtons" // the buttons inside the player bar (like, dislike, lyrics, etc.)
  | "playerBarRightControls" // the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
  | "popupContainer";        // the container for popups (e.g. the queue popup)

/** Union of YT-only observer names. */
export type YTObserverName =
  | "ytMasthead"       // the masthead (title bar) at the top of the page
  | "ytGuide"          // the left sidebar menu
  | "ytdBrowse"        // channel pages for example
  | "ytAppHeader"      // header of the page
  | "ytWatchFlexy"     // the main content of the /watch page
  | "ytWatchMetadata"; // the metadata section of the /watch page

//#region vars

/** Global SelectorObserver instances usable throughout the script for improved performance */
export const globservers = {} as Record<ObserverName, SelectorObserver>;
/** Whether all observers have been initialized */
export let globserversReady = false;

//#region add listener func

/**
 * Interface function for adding listeners to the {@linkcode globservers}  
 * If the observers haven't been initialized yet, the function will queue calls until the `bytm:observersReady` event is emitted
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 * @param options Options for the listener
 * @template TElem The type of the element that the listener will be attached to. If set to `0`, the default type `HTMLElement` will be used.
 * @template TDomain This restricts which observers are available with the current domain
 */
export function addSelectorListener<
  TElem extends HTMLElement | 0 = HTMLElement,
  TDomain extends Domain = "ytm"
> (
  observerName: ObserverNameByDomain<TDomain>,
  selector: string,
  options: SelectorListenerOptions<
    TElem extends 0
      ? HTMLElement
      : TElem
  >,
) {
  try {
    if(!globserversReady) {
      window.addEventListener("bytm:observersReady", () => addSelectorListener(observerName, selector, options), { once: true });
      return;
    }
    globservers[observerName].addListener(selector, options);
  }
  catch(err) {
    loggers.observer.error(`Couldn't add listener to globserver '${observerName}':`, err);
  }
}

/** Returns a proxy function that enables and bootstraps the SelectorObserver instance. */
function getEnableFn(observerName: ObserverName): () => void {
  return () => {
    const observer = globservers[observerName];
    observer.enable();
    loggers.observer.log(`Enabled SelectorObserver instance '${observerName}' with base element:`, observer.baseElement);
  };
}

//#region init

/** Call after DOM load to initialize all SelectorObserver instances */
export function initObservers(cfg: FeatureConfig) {
  /** Options that are applied to every SelectorObserver instance */
  const defaultObserverOptions = {
    disableOnNoListeners: false, // keepalive for plugins and opportunistic features
    enableOnAddListener: false,  // important because of strict init order
    defaultDebounce: cfg.defaultObserverDebounce,
    defaultDebounceType: "immediate",
  } satisfies Required<Pick<SelectorObserverOptions, "disableOnNoListeners" | "enableOnAddListener" | "defaultDebounce" | "defaultDebounceType">>;

  for(const observer of Object.values(globservers))
    observer.on("enabled", () => loggers.observer.info("Observer enabled for base element", observer.baseElement));

  try {
    //#region # both sites

    //#region body
    // -> the entire <body> element - use sparingly due to performance impacts!
    //    enabled immediately
    globservers.body = new SelectorObserver(document.body, {
      ...defaultObserverOptions,
      defaultDebounce: clamp(defaultObserverOptions.defaultDebounce, 100, 500),
      subtree: false,
    });

    globservers.body.enable();

    //#region bytmDialogContainer
    // -> the container for all BytmDialog instances
    //    enabled immediately
    const bytmDialogContainerSelector = getSelector("observer", "bytmDialogContainer");
    globservers.bytmDialogContainer = new SelectorObserver(bytmDialogContainerSelector, {
      ...defaultObserverOptions,
      defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 1.5),
      subtree: true,
    });

    globservers.bytmDialogContainer.enable();

    switch(getDomain()) {
    case "ytm": {
      //#region # YTM only

      //#region browseResponse
      // -> for example the /channel/UC... page
      //    enabled by "body"
      const browseResponseSelector = getSelector("observer", "browseResponse");
      globservers.browseResponse = new SelectorObserver(browseResponseSelector, {
        ...defaultObserverOptions,
        defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
        subtree: true,
      });

      globservers.body.addListener(browseResponseSelector, {
        listener: getEnableFn("browseResponse"),
      });

      //#region searchPage
      // -> the search page
      //    enabled by "body"
      const searchPageSelector = getSelector("observer", "searchPage");
      globservers.searchPage = new SelectorObserver(searchPageSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(searchPageSelector, {
        listener: getEnableFn("searchPage"),
      });

      //#region navBar
      // -> the navigation / title bar at the top of the page
      //    enabled by "body"
      const navBarSelector = getSelector("observer", "navBar");
      globservers.navBar = new SelectorObserver(navBarSelector, {
        ...defaultObserverOptions,
        subtree: false,
      });

      globservers.body.addListener(navBarSelector, {
        listener: getEnableFn("navBar"),
      });

      //#region mainPanel
      // -> the main content panel - includes things like the video element
      //    enabled by "body"
      const mainPanelSelector = getSelector("observer", "mainPanel");
      globservers.mainPanel = new SelectorObserver(mainPanelSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(mainPanelSelector, {
        listener: getEnableFn("mainPanel"),
      });

      //#region sideBar
      // -> the sidebar on the left side of the page
      //    enabled by "body"
      const sidebarSelector = getSelector("observer", "sideBar");
      globservers.sideBar = new SelectorObserver(sidebarSelector, {
        ...defaultObserverOptions,
        attributes: true,
        childList: true,
        subtree: true,
      });

      globservers.body.addListener(sidebarSelector, {
        listener: getEnableFn("sideBar"),
      });

      //#region sidePanel
      // -> the side panel on the right side of the /watch page
      //    enabled by "body"
      const sidePanelSelector = getSelector("observer", "sidePanel");
      globservers.sidePanel = new SelectorObserver(sidePanelSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(sidePanelSelector, {
        listener: getEnableFn("sidePanel"),
      });

      //#region playerBar
      // -> media controls bar at the bottom of the page
      //    enabled by "body"
      const playerBarSelector = getSelector("observer", "playerBar");
      globservers.playerBar = new SelectorObserver(playerBarSelector, {
        ...defaultObserverOptions,
      });

      globservers.body.addListener(playerBarSelector, {
        listener: () => {
          globservers.playerBar.enable();
        },
      });

      //#region playerBarInfo
      // -> song title, artist, album, etc. inside the player bar
      //    enabled by "playerBar"
      const playerBarInfoSelector = getSelector("observer", "playerBarInfo");
      globservers.playerBarInfo = new SelectorObserver(playerBarInfoSelector, {
        ...defaultObserverOptions,
        attributes: true,
        attributeFilter: ["title"],
      });

      globservers.playerBar.addListener(playerBarInfoSelector, {
        listener: getEnableFn("playerBarInfo"),
      });

      //#region playerBarMiddleButtons
      // -> the buttons inside the player bar (like, dislike, lyrics, etc.)
      //    enabled by "playerBar"
      const playerBarMiddleButtonsSelector = getSelector("observer", "playerBarMiddleButtons");
      globservers.playerBarMiddleButtons = new SelectorObserver(playerBarMiddleButtonsSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.playerBar.addListener(playerBarMiddleButtonsSelector, {
        listener: getEnableFn("playerBarMiddleButtons"),
      });

      //#region playerBarRightControls
      // -> the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
      //    enabled by "playerBar"
      const playerBarRightControls = getSelector("observer", "playerBarRightControls");
      globservers.playerBarRightControls = new SelectorObserver(playerBarRightControls, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.playerBar.addListener(playerBarRightControls, {
        listener: getEnableFn("playerBarRightControls"),
      });

      //#region popupContainer
      // -> the container for popups (e.g. the queue popup)
      //    enabled by "body"
      const popupContainerSelector = getSelector("observer", "popupContainer");
      globservers.popupContainer = new SelectorObserver(popupContainerSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(popupContainerSelector, {
        listener: getEnableFn("popupContainer"),
      });

      break;
    }
    case "yt": {
      //#region # YT only

      //#region ytGuide
      // -> the left sidebar menu
      //    enabled by "body"
      const ytGuideSelector = getSelector("observer", "ytGuide");
      globservers.ytGuide = new SelectorObserver(ytGuideSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(ytGuideSelector, {
        listener: getEnableFn("ytGuide"),
      });

      //#region ytdBrowse
      // -> channel pages for example
      //    enabled by "body"
      const ytdBrowseSelector = getSelector("observer", "ytdBrowse");
      globservers.ytdBrowse = new SelectorObserver(ytdBrowseSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(ytdBrowseSelector, {
        listener: getEnableFn("ytdBrowse"),
      });

      //#region ytAppHeader
      // -> header of the page
      //    enabled by "ytdBrowse"
      const ytAppHeaderSelector = getSelector("observer", "ytAppHeader");
      globservers.ytAppHeader = new SelectorObserver(ytAppHeaderSelector, {
        ...defaultObserverOptions,
        defaultDebounce: Math.floor(defaultObserverOptions.defaultDebounce / 2),
        subtree: true,
      });

      globservers.ytdBrowse.addListener(ytAppHeaderSelector, {
        listener: getEnableFn("ytAppHeader"),
      });

      //#region ytWatchFlexy
      // -> the main content of the /watch page
      //    enabled by "body"
      const ytWatchFlexySelector = getSelector("observer", "ytWatchFlexy");
      globservers.ytWatchFlexy = new SelectorObserver(ytWatchFlexySelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(ytWatchFlexySelector, {
        listener: getEnableFn("ytWatchFlexy"),
      });

      //#region ytWatchMetadata
      // -> the metadata section of the /watch page (title, channel, views, description, buttons, etc. but not comments)
      //    enabled by "ytWatchFlexy"
      const ytWatchMetadataSelector = getSelector("observer", "ytWatchMetadata");
      globservers.ytWatchMetadata = new SelectorObserver(ytWatchMetadataSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.ytWatchFlexy.addListener(ytWatchMetadataSelector, {
        listener: getEnableFn("ytWatchMetadata"),
      });

      //#region ytMasthead
      // -> the masthead (title bar) at the top of the page
      //    enabled by "body"
      const mastheadSelector = getSelector("observer", "ytMasthead");
      globservers.ytMasthead = new SelectorObserver(mastheadSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(mastheadSelector, {
        listener: getEnableFn("ytMasthead"),
      });
    }
    }

    //#region finalize

    globserversReady = true;
    emitInterface("bytm:observersReady");

    //#DEBUG:
    getUnsafeWindow().BYTM.globservers = globservers;
  }
  catch(err) {
    loggers.observer.error("Failed to initialize observers:", err);
  }
}
