import { SelectorObserver, SelectorObserverOptions } from "@sv443-network/userutils";

type ObserverName = "body" | "playerBar" | "playerBarTitle";

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
  observers.body.addListener("ytmusic-app-layout ytmusic-player-bar.ytmusic-app", {
    listener: (playerBar) => {
      observers.playerBar = new SelectorObserver(playerBar, {
        ...defaultObserverOptions,
        defaultDebounce: 250,
      });
      observers.playerBar.addListener("yt-formatted-string.title", {
        listener: (titleElem) => {
          observers.playerBarTitle = new SelectorObserver(titleElem, {
            ...defaultObserverOptions,
            subtree: false,
            childList: false,
            attributes: true,
            attributeFilter: ["title"],
          });
        },
      });
    },
  });
}
