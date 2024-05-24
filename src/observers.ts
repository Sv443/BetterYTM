import { SelectorListenerOptions, SelectorObserver, SelectorObserverOptions } from "@sv443-network/userutils";
import { emitInterface } from "./interface";
import { error, getDomain } from "./utils";
import type { Domain } from "./types";

/** Names of all available Observer instances across all sites */
export type ObserverName = SharedObserverName | YTMObserverName | YTObserverName;

/** Observer names available to each site */
export type ObserverNameByDomain<TDomain extends Domain> = SharedObserverName | (TDomain extends "ytm" ? YTMObserverName : YTObserverName);

// both YTM and YT
export type SharedObserverName =
  | "body";

// YTM only
export type YTMObserverName =
  | "browseResponse"
  | "navBar"
  | "mainPanel"
  | "sideBar"
  | "sideBarMini"
  | "sidePanel"
  | "playerBar"
  | "playerBarInfo"
  | "playerBarMiddleButtons"
  | "playerBarRightControls"
  | "popupContainer";

// YT only
export type YTObserverName =
  // | "ytMasthead" // the title bar
  | "ytGuide"; // the left sidebar menu

/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions: SelectorObserverOptions = {
  disableOnNoListeners: false,
  enableOnAddListener: false,
  defaultDebounce: 100,
  defaultDebounceEdge: "rising",
};

/** Global SelectorObserver instances usable throughout the script for improved performance */
export const globservers = {} as Record<ObserverName, SelectorObserver>;

/** Call after DOM load to initialize all SelectorObserver instances */
export function initObservers() {
  try {
    //#region both sites

    //#region body
    // -> the entire <body> element - use sparingly due to performance impacts!
    globservers.body = new SelectorObserver(document.body, {
      ...defaultObserverOptions,
      defaultDebounce: 150,
      subtree: false,
    });

    globservers.body.enable();

    switch(getDomain()) {
    case "ytm": {
      //#region YTM

      //#region browseResponse
      // -> for example the /channel/UC... page
      const browseResponseSelector = "ytmusic-browse-response";
      globservers.browseResponse = new SelectorObserver(browseResponseSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(browseResponseSelector, {
        listener: () => globservers.browseResponse.enable(),
      });

      //#region navBar
      // -> the navigation / title bar at the top of the page
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
      const sidebarSelector = "ytmusic-app-layout tp-yt-app-drawer";
      globservers.sideBar = new SelectorObserver(sidebarSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(sidebarSelector, {
        listener: () => globservers.sideBar.enable(),
      });

      //#region sideBarMini
      // -> the minimized sidebar on the left side of the page
      const sideBarMiniSelector = "ytmusic-app-layout #mini-guide";
      globservers.sideBarMini = new SelectorObserver(sideBarMiniSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(sideBarMiniSelector, {
        listener: () => globservers.sideBarMini.enable(),
      });

      //#region sidePanel
      // -> the side panel on the right side of the /watch page
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
      const ytGuideSelector = "#content tp-yt-app-drawer#guide #guide-inner-content";
      globservers.ytGuide = new SelectorObserver(ytGuideSelector, {
        ...defaultObserverOptions,
        subtree: true,
      });

      globservers.body.addListener(ytGuideSelector, {
        listener: () => globservers.ytGuide.enable(),
      });

      // //#region ytMasthead
      // -> the masthead (title bar) at the top of the page
      // const mastheadSelector = "#content ytd-masthead#masthead";
      // globservers.ytMasthead = new SelectorObserver(mastheadSelector, {
      //   ...defaultObserverOptions,
      //   subtree: true,
      // });

      // globservers.body.addListener(mastheadSelector, {
      //   listener: () => globservers.ytMasthead.enable(),
      // });
    }
    }

    //#region finalize

    emitInterface("bytm:observersReady");
  }
  catch(err) {
    error("Failed to initialize observers:", err);
  }
}

//#region add listener func

/**
 * Interface function for adding listeners to the {@linkcode globservers}  
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 * @param options Options for the listener
 * @template TElem The type of the element that the listener will be attached to. If set to `0`, the type HTMLElement will be used.
 * @template TDomain This restricts which observers are available with the current domain
 */
export function addSelectorListener<
  TElem extends HTMLElement | 0 = HTMLElement,
  TDomain extends Domain = "ytm"
>(
  observerName: ObserverNameByDomain<TDomain>,
  selector: string,
  options: SelectorListenerOptions<
    TElem extends 0
      ? HTMLElement
      : TElem
  >
){
  globservers[observerName].addListener(selector, options);
}
