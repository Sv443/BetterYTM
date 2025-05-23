import { SelectorListenerOptions, SelectorObserver, SelectorObserverOptions } from "@sv443-network/userutils";
import { emitInterface } from "./interface.js";
import { error, getDomain } from "./utils/index.js";
import type { Domain } from "./types.js";

// !> If you came here looking for which observer to use, start out by looking at the types `YTMObserverName` and `YTObserverName`
// !> Once you found a fitting observer, go to the `initObservers()` function and search for `observerName = new SelectorObserver`
// !> Just above that line, you'll find the selector to that observer's base element. Make sure all your selectors start **below** that element!


//#region types

/** Names of all available Observer instances across all sites */
export type ObserverName = SharedObserverName | YTMObserverName | YTObserverName;

/** Observer names available to the site passed in the `TDomain` generic */
export type ObserverNameByDomain<TDomain extends Domain> = SharedObserverName | (TDomain extends "ytm" ? YTMObserverName : YTObserverName);

// Shared between YTM and YT
export type SharedObserverName =
  | "body"                 // the entire <body> element
  | "bytmDialogContainer"; // the container for all BytmDialog instances

// YTM only
export type YTMObserverName =
  | "browseResponse"         // the /channel/UC... page
  | "navBar"                 // the navigation / title bar at the top of the page
  | "mainPanel"              // the main content panel - includes things like the video element
  | "sideBar"                // the sidebar on the left side of the page
  | "sidePanel"              // the side panel on the right side of the /watch page
  | "playerBar"              // media controls bar at the bottom of the page
  | "playerBarInfo"          // song title, artist, album, etc. inside the player bar
  | "playerBarMiddleButtons" // the buttons inside the player bar (like, dislike, lyrics, etc.)
  | "playerBarRightControls" // the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
  | "popupContainer";        // the container for popups (e.g. the queue popup)

// YT only
export type YTObserverName =
  | "ytMasthead"       // the masthead (title bar) at the top of the page
  | "ytGuide"          // the left sidebar menu
  | "ytdBrowse"        // channel pages for example
  | "ytAppHeader"      // header of the page
  | "ytWatchFlexy"     // the main content of the /watch page
  | "ytWatchMetadata"; // the metadata section of the /watch page

//#region globals

/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions: SelectorObserverOptions = {
  disableOnNoListeners: false,
  enableOnAddListener: false,
  defaultDebounce: 150,
  defaultDebounceType: "immediate",
};

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
    error(`Couldn't add listener to globserver '${observerName}':`, err);
  }
}

//#region init

/** Call after DOM load to initialize all SelectorObserver instances */
export function initObservers() {
  try {
    //#region both sites

    //#region body
    // -> the entire <body> element - use sparingly due to performance impacts!
    //    enabled immediately
    globservers.body = new SelectorObserver(document.body, {
      ...defaultObserverOptions,
      defaultDebounce: 150,
      subtree: false,
    });

    globservers.body.enable();

    //#region bytmDialogContainer
    // -> the container for all BytmDialog instances
    //    enabled immediately
    const bytmDialogContainerSelector = "#bytm-dialog-container";
    globservers.bytmDialogContainer = new SelectorObserver(bytmDialogContainerSelector, {
      ...defaultObserverOptions,
      defaultDebounce: 100,
      subtree: true,
    });

    globservers.bytmDialogContainer.enable();

    switch(getDomain()) {
    case "ytm": {
      //#region YTM

      //#region browseResponse
      // -> for example the /channel/UC... page#
      //    enabled by "body"
      const browseResponseSelector = "ytmusic-browse-response";
      globservers.browseResponse = new SelectorObserver(browseResponseSelector, {
        ...defaultObserverOptions,
        defaultDebounce: 75,
        subtree: true,
      });

      globservers.body.addListener(browseResponseSelector, {
        listener: () => globservers.browseResponse.enable(),
      });

      //#region navBar
      // -> the navigation / title bar at the top of the page
      //    enabled by "body"
      const navBarSelector = "ytmusic-nav-bar";
      globservers.navBar = new SelectorObserver(navBarSelector, {
        ...defaultObserverOptions,
        subtree: false,
      });

      globservers.body.addListener(navBarSelector, {
        listener: () => globservers.navBar.enable(),
      });

      //#region mainPanel
      // -> the main content panel - includes things like the video element
      //    enabled by "body"
      const mainPanelSelector = "ytmusic-player-page #main-panel";
      globservers.mainPanel = new SelectorObserver(mainPanelSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(mainPanelSelector, {
        listener: () => globservers.mainPanel.enable(),
      });

      //#region sideBar
      // -> the sidebar on the left side of the page
      //    enabled by "body"
      const sidebarSelector = "ytmusic-app-layout tp-yt-app-drawer";
      globservers.sideBar = new SelectorObserver(sidebarSelector, {
        ...defaultObserverOptions,
        attributes: true,
        childList: true,
        subtree: true,
      });

      globservers.body.addListener(sidebarSelector, {
        listener: () => globservers.sideBar.enable(),
      });

      //#region sidePanel
      // -> the side panel on the right side of the /watch page
      //    enabled by "body"
      const sidePanelSelector = "#side-panel";
      globservers.sidePanel = new SelectorObserver(sidePanelSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(sidePanelSelector, {
        listener: () => globservers.sidePanel.enable(),
      });

      //#region playerBar
      // -> media controls bar at the bottom of the page
      //    enabled by "body"
      const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
      globservers.playerBar = new SelectorObserver(playerBarSelector, {
        ...defaultObserverOptions,
        defaultDebounce: 200,
      });

      globservers.body.addListener(playerBarSelector, {
        listener: () => {
          globservers.playerBar.enable();
        },
      });

      //#region playerBarInfo
      // -> song title, artist, album, etc. inside the player bar
      //    enabled by "playerBar"
      const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
      globservers.playerBarInfo = new SelectorObserver(playerBarInfoSelector, {
        ...defaultObserverOptions,
        attributes: true,
        attributeFilter: ["title"],
      });

      globservers.playerBar.addListener(playerBarInfoSelector, {
        listener: () => globservers.playerBarInfo.enable(),
      });

      //#region playerBarMiddleButtons
      // -> the buttons inside the player bar (like, dislike, lyrics, etc.)
      //    enabled by "playerBar"
      const playerBarMiddleButtonsSelector = ".middle-controls .middle-controls-buttons";
      globservers.playerBarMiddleButtons = new SelectorObserver(playerBarMiddleButtonsSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.playerBar.addListener(playerBarMiddleButtonsSelector, {
        listener: () => globservers.playerBarMiddleButtons.enable(),
      });

      //#region playerBarRightControls
      // -> the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
      //    enabled by "playerBar"
      const playerBarRightControls = "#right-controls";
      globservers.playerBarRightControls = new SelectorObserver(playerBarRightControls, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.playerBar.addListener(playerBarRightControls, {
        listener: () => globservers.playerBarRightControls.enable(),
      });

      //#region popupContainer
      // -> the container for popups (e.g. the queue popup)
      //    enabled by "body"
      const popupContainerSelector = "ytmusic-app ytmusic-popup-container";
      globservers.popupContainer = new SelectorObserver(popupContainerSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(popupContainerSelector, {
        listener: () => globservers.popupContainer.enable(),
      });

      break;
    }
    case "yt": {
      //#region YT

      //#region ytGuide
      // -> the left sidebar menu
      //    enabled by "body"
      const ytGuideSelector = "#content tp-yt-app-drawer#guide #guide-inner-content";
      globservers.ytGuide = new SelectorObserver(ytGuideSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(ytGuideSelector, {
        listener: () => globservers.ytGuide.enable(),
      });

      //#region ytdBrowse
      // -> channel pages for example
      //    enabled by "body"
      const ytdBrowseSelector = "ytd-app ytd-page-manager ytd-browse";
      globservers.ytdBrowse = new SelectorObserver(ytdBrowseSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(ytdBrowseSelector, {
        listener: () => globservers.ytdBrowse.enable(),
      });

      //#region ytAppHeader
      // -> header of the page
      //    enabled by "ytdBrowse"
      const ytAppHeaderSelector = "#header tp-yt-app-header";
      globservers.ytAppHeader = new SelectorObserver(ytAppHeaderSelector, {
        ...defaultObserverOptions,
        defaultDebounce: 75,
        subtree: true,
      });

      globservers.ytdBrowse.addListener(ytAppHeaderSelector, {
        listener: () => globservers.ytAppHeader.enable(),
      });

      //#region ytWatchFlexy
      // -> the main content of the /watch page
      //    enabled by "body"
      const ytWatchFlexySelector = "ytd-app ytd-watch-flexy";
      globservers.ytWatchFlexy = new SelectorObserver(ytWatchFlexySelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(ytWatchFlexySelector, {
        listener: () => globservers.ytWatchFlexy.enable(),
      });

      //#region ytWatchMetadata
      // -> the metadata section of the /watch page (title, channel, views, description, buttons, etc. but not comments)
      //    enabled by "ytWatchFlexy"
      const ytWatchMetadataSelector = "#columns #primary-inner ytd-watch-metadata";
      globservers.ytWatchMetadata = new SelectorObserver(ytWatchMetadataSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.ytWatchFlexy.addListener(ytWatchMetadataSelector, {
        listener: () => globservers.ytWatchMetadata.enable(),
      });

      //#region ytMasthead
      // -> the masthead (title bar) at the top of the page
      //    enabled by "body"
      const mastheadSelector = "#content ytd-masthead#masthead";
      globservers.ytMasthead = new SelectorObserver(mastheadSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(mastheadSelector, {
        listener: () => globservers.ytMasthead.enable(),
      });
    }
    }

    //#region finalize

    globserversReady = true;
    emitInterface("bytm:observersReady");
  }
  catch(err) {
    error("Failed to initialize observers:", err);
  }
}
