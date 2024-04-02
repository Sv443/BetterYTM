import { SelectorListenerOptions, SelectorObserver, SelectorObserverOptions } from "@sv443-network/userutils";
import { emitInterface } from "./interface";
import { error, getDomain } from "./utils";

export type ObserverName =
  | "body"
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

/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions: SelectorObserverOptions = {
  defaultDebounce: 100,
};

/** Global SelectorObserver instances usable throughout the script for improved performance */
export const globservers = {} as Record<ObserverName, SelectorObserver>;

/** Call after DOM load to initialize all SelectorObserver instances */
export function initObservers() {
  try {
    // #SECTION body = the entire <body> element - use sparingly due to performance impacts!
    globservers.body = new SelectorObserver(document.body, {
      ...defaultObserverOptions,
      subtree: false,
    });

    globservers.body.enable();

    if(getDomain() !== "ytm")
      return;

    //#SECTION navBar = the navigation / title bar at the top of the page
    const navBarSelector = "ytmusic-nav-bar";
    globservers.navBar = new SelectorObserver(navBarSelector, {
      ...defaultObserverOptions,
      subtree: false,
    });

    globservers.body.addListener(navBarSelector, {
      listener: () => globservers.navBar.enable(),
    });

    // #SECTION mainPanel = the main content panel - includes things like the video element
    const mainPanelSelector = "ytmusic-player-page #main-panel";
    globservers.mainPanel = new SelectorObserver(mainPanelSelector, {
      ...defaultObserverOptions,
      subtree: true,
    });

    globservers.body.addListener(mainPanelSelector, {
      listener: () => globservers.mainPanel.enable(),
    });

    // #SECTION sideBar = the sidebar on the left side of the page
    const sidebarSelector = "ytmusic-app-layout tp-yt-app-drawer";
    globservers.sideBar = new SelectorObserver(sidebarSelector, {
      ...defaultObserverOptions,
      subtree: true,
    });

    globservers.body.addListener(sidebarSelector, {
      listener: () => globservers.sideBar.enable(),
    });

    // #SECTION sideBarMini = the minimized sidebar on the left side of the page
    const sideBarMiniSelector = "ytmusic-app-layout #mini-guide";
    globservers.sideBarMini = new SelectorObserver(sideBarMiniSelector, {
      ...defaultObserverOptions,
      subtree: true,
    });

    globservers.body.addListener(sideBarMiniSelector, {
      listener: () => globservers.sideBarMini.enable(),
    });

    // #SECTION sidePanel = the side panel on the right side of the /watch page
    const sidePanelSelector = "#side-panel";
    globservers.sidePanel = new SelectorObserver(sidePanelSelector, {
      ...defaultObserverOptions,
      subtree: true,
    });

    globservers.body.addListener(sidePanelSelector, {
      listener: () => globservers.sidePanel.enable(),
    });

    // #SECTION playerBar = media controls bar at the bottom of the page
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

    // #SECTION playerBarInfo = song title, artist, album, etc. inside the player bar
    const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
    globservers.playerBarInfo = new SelectorObserver(playerBarInfoSelector, {
      ...defaultObserverOptions,
      attributes: true,
      attributeFilter: ["title"],
    });

    globservers.playerBarInfo.addListener(playerBarInfoSelector, {
      listener: () => globservers.playerBarInfo.enable(),
    });

    // #SECTION playerBarMiddleButtons = the buttons inside the player bar (like, dislike, lyrics, etc.)
    const playerBarMiddleButtonsSelector = ".middle-controls .middle-controls-buttons";
    globservers.playerBarMiddleButtons = new SelectorObserver(playerBarMiddleButtonsSelector, {
      ...defaultObserverOptions,
      subtree: true,
    });

    globservers.playerBar.addListener(playerBarMiddleButtonsSelector, {
      listener: () => globservers.playerBarMiddleButtons.enable(),
    });

    // #SECTION playerBarRightControls = the controls on the right side of the player bar (volume, repeat, shuffle, etc.)
    const playerBarRightControls = ".right-controls .middle-controls-buttons";
    globservers.playerBarRightControls = new SelectorObserver(playerBarRightControls, {
      ...defaultObserverOptions,
      subtree: true,
    });

    globservers.playerBar.addListener(playerBarRightControls, {
      listener: () => globservers.playerBarRightControls.enable(),
    });

    // #SECTION popupContainer = the container for popups (e.g. the queue popup)
    const popupContainerSelector = "ytmusic-app ytmusic-popup-container";
    globservers.popupContainer = new SelectorObserver(popupContainerSelector, {
      ...defaultObserverOptions,
      subtree: true,
    });

    globservers.body.addListener(popupContainerSelector, {
      listener: () => globservers.popupContainer.enable(),
    });

    //#SECTION finalize

    emitInterface("bytm:observersReady");
  }
  catch(err) {
    error("Failed to initialize observers:", err);
  }
}

/**
 * Interface function for adding listeners to the {@linkcode globservers}  
 * @param selector Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!
 */
export function addSelectorListener<TElem extends HTMLElement>(observerName: ObserverName, selector: string, options: SelectorListenerOptions<TElem>) {
  globservers[observerName].addListener(selector, options);
}
