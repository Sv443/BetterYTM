import { SelectorListenerOptions, SelectorObserver, SelectorObserverOptions } from "@sv443-network/userutils";
import type { ObserverName } from "./types";
import { emitInterface } from "./interface";
import { error, log } from "./utils";

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

    // #SECTION playerBar = media controls bar at the bottom of the page
    const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
    globservers.playerBar = new SelectorObserver(playerBarSelector, {
      ...defaultObserverOptions,
      defaultDebounce: 200,
    });
    globservers.body.addListener(playerBarSelector, {
      listener: () => {
        log("#DBG-UU enabling playerBar observer");
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
      listener: () => {
        log("#DBG-UU enabling playerBarTitle observer");
        globservers.playerBarInfo.enable();
      },
    });

    // #DEBUG example: listen for title change:
    globservers.playerBarInfo.addListener("yt-formatted-string.title", {
      continuous: true,
      listener: (titleElem) => {
        log("#DBG-UU >>>>> title changed", titleElem.title);
      },
    });

    emitInterface("bytm:observersReady");
  }
  catch(err) {
    error("Failed to initialize observers:", err);
  }
}

/** Interface function for adding listeners to the already present observers */
export function addSelectorListener<TElem extends Element>(observerName: ObserverName, selector: string, options: SelectorListenerOptions<TElem>) {
  globservers[observerName].addListener(selector, options);
}
