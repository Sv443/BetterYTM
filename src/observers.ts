import { SelectorListenerOptions, SelectorObserver, SelectorObserverOptions } from "@sv443-network/userutils";
import type { ObserverName } from "./types";
import { emitInterface } from "./interface";

/** Options that are applied to every SelectorObserver instance */
const defaultObserverOptions: SelectorObserverOptions = {
  defaultDebounce: 100,
};

export const observers = {} as Record<ObserverName, SelectorObserver>;

/** Call after DOM load to initialize all SelectorObserver instances */
export function initObservers() {
  observers.body = new SelectorObserver(document.body, {
    ...defaultObserverOptions,
    subtree: false,
  });
  observers.body.enable();

  const playerBarSelector = "ytmusic-app-layout ytmusic-player-bar.ytmusic-app";
  observers.playerBar = new SelectorObserver(playerBarSelector, {
    ...defaultObserverOptions,
    defaultDebounce: 200,
  });
  observers.body.addListener(playerBarSelector, {
    listener: () => {
      console.log("#DBG-UU enabling playerBar observer");
      observers.playerBar.enable();
    },
  });

  const playerBarInfoSelector = `${playerBarSelector} .middle-controls .content-info-wrapper`;
  observers.playerBarInfo = new SelectorObserver(playerBarInfoSelector, {
    ...defaultObserverOptions,
    attributes: true,
    attributeFilter: ["title"],
  });
  observers.playerBarInfo.addListener(playerBarInfoSelector, {
    listener: () => {
      console.log("#DBG-UU enabling playerBarTitle observer");
      observers.playerBarInfo.enable();
    },
  });

  // #DEBUG example: listen for title change:
  observers.playerBarInfo.addListener("yt-formatted-string.title", {
    continuous: true,
    listener: (titleElem) => {
      console.log("#DBG-UU >>>>> title changed", titleElem.title);
    },
  });

  emitInterface("bytm:observersReady");
}

/** Interface function for adding listeners to the already present observers */
export function interfaceAddListener<TElem extends Element>(observerName: ObserverName, selector: string, options: SelectorListenerOptions<TElem>) {
  observers[observerName].addListener(selector, options);
}
