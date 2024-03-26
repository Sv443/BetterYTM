//#SECTION video time

import { getUnsafeWindow } from "@sv443-network/userutils";
import { error, getDomain, onSelectorOld } from ".";

export const videoSelector = getDomain() === "ytm" ? "ytmusic-player video" : "#content ytd-player video";

/**
 * Returns the current video time in seconds  
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
export function getVideoTime() {
  return new Promise<number | null>((res) => {
    const domain = getDomain();

    try {
      if(domain === "ytm") {
        const vidElem = document.querySelector<HTMLVideoElement>(videoSelector);
        if(vidElem)
          return res(Math.floor(vidElem.currentTime));

        onSelectorOld<HTMLProgressElement>("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
          listener: (pbEl) =>
            res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
        });
      }
      else if(domain === "yt") {
        const vidElem = document.querySelector<HTMLVideoElement>(videoSelector);
        if(vidElem)
          return res(Math.floor(vidElem.currentTime));

        // YT doesn't update the progress bar when it's hidden (contrary to YTM which never hides it)
        ytForceShowVideoTime();

        const pbSelector = ".ytp-chrome-bottom div.ytp-progress-bar[role=\"slider\"]";
        let videoTime = -1;

        const mut = new MutationObserver(() => {
          // .observe() is only called when the element exists - no need to check for null
          videoTime = Number(document.querySelector<HTMLProgressElement>(pbSelector)!.getAttribute("aria-valuenow")!);
        });

        const observe = (progElem: HTMLProgressElement) => {
          mut.observe(progElem, {
            attributes: true,
            attributeFilter: ["aria-valuenow"],
          });

          if(videoTime >= 0 && !isNaN(videoTime)) {
            res(Math.floor(videoTime));
            mut.disconnect();
          }
          else
            setTimeout(() => {
              res(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
              mut.disconnect();
            }, 500);
        };

        onSelectorOld<HTMLProgressElement>(pbSelector, { listener: observe });
      }
    }
    catch(err) {
      error("Couldn't get video time due to error:", err);
      res(null);
    }
  });
}

/**
 * Sends events that force the video controls to become visible for about 3 seconds.  
 * This only works once (for some reason), then the page needs to be reloaded!
 */
function ytForceShowVideoTime() {
  const player = document.querySelector("#movie_player");
  if(!player)
    return false;

  const defaultProps = {
    // needed because otherwise YTM errors out - see https://github.com/Sv443/BetterYTM/issues/18#show_issue
    view: getUnsafeWindow(),
    bubbles: true,
    cancelable: false,
  };

  player.dispatchEvent(new MouseEvent("mouseenter", defaultProps));

  const { x, y, width, height } = player.getBoundingClientRect();
  const screenY = Math.round(y + height / 2);
  const screenX = x + Math.min(50, Math.round(width / 3));

  player.dispatchEvent(new MouseEvent("mousemove", {
    ...defaultProps,
    screenY,
    screenX,
    movementX: 5,
    movementY: 0,
  }));

  return true;
}

/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
export function clearInner(element: Element) {
  while(element.hasChildNodes())
    clearNode(element!.firstChild as Element);
}

function clearNode(element: Element) {
  while(element.hasChildNodes())
    clearNode(element!.firstChild as Element);
  element.parentNode!.removeChild(element);
}

/** Adds interaction listeners to the passed element in an accessible way - set {@linkcode once} to true to remove the listeners after the first interaction */
export function onInteraction<TElem extends HTMLElement>(elem: TElem, listener: (evt: MouseEvent | KeyboardEvent) => void, once = false) {
  const proxListener = (e: MouseEvent | KeyboardEvent) => {
    if(e instanceof KeyboardEvent && !["Enter", " ", "Space", "Spacebar"].includes(e.key))
      return;
    e.stopPropagation();
    once && elem.removeEventListener("click", proxListener);
    once && elem.removeEventListener("keydown", proxListener);
    listener(e);
  };
  elem.addEventListener("click", proxListener);
  elem.addEventListener("keydown", proxListener);
}
