import { addGlobalStyle, getUnsafeWindow, randomId } from "@sv443-network/userutils";
import { error, getDomain } from ".";
import { addSelectorListener } from "src/observers";

//#region video time, volume

export const getVideoSelector = () => getDomain() === "ytm" ? "ytmusic-player video" : "#player-container ytd-player video";

/**
 * Returns the current video time in seconds, with the given {@linkcode precision} (2 decimal digits by default).  
 * Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.  
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
export function getVideoTime(precision = 2) {
  return new Promise<number | null>(async (res) => {
    const domain = getDomain();

    await waitVideoElementReady();

    try {
      if(domain === "ytm") {
        const vidElem = document.querySelector<HTMLVideoElement>(getVideoSelector());
        if(vidElem)
          return res(Number(precision <= 0 ? Math.floor(vidElem.currentTime) : vidElem.currentTime.toFixed(precision)));

        addSelectorListener<HTMLProgressElement>("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
          listener: (pbEl) =>
            res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
        });
      }
      else if(domain === "yt") {
        const vidElem = document.querySelector<HTMLVideoElement>(getVideoSelector());
        if(vidElem)
          return res(Number(precision <= 0 ? Math.floor(vidElem.currentTime) : vidElem.currentTime.toFixed(precision)));

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

        addSelectorListener<HTMLProgressElement>("body", pbSelector, { listener: observe });
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

/** Waits for the video element to be in its readyState 4 / canplay state and returns it - resolves immediately if the video is already ready */
export function waitVideoElementReady(): Promise<HTMLVideoElement> {
  return new Promise((res) => {
    addSelectorListener<HTMLVideoElement>("body", getVideoSelector(), {
      listener: async (vidElem) => {
        if(vidElem) {
          // this is just after YT has finished doing their own shenanigans with the video time and volume
          if(vidElem.readyState === 4)
            res(vidElem);
          else
            vidElem.addEventListener("canplay", () => res(vidElem), { once: true });
        }
      },
    });
  });
}

//#region other

/** Whether the DOM has finished loading and elements can be added or modified */
export let domLoaded = false;
document.addEventListener("DOMContentLoaded", () => domLoaded = true);

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

/**
 * Adds generic, accessible interaction listeners to the passed element.  
 * All listeners have the default behavior prevented and stop immediate propagation.
 * @param listenerOptions Provide a {@linkcode listenerOptions} object to configure the listeners
 */
export function onInteraction<TElem extends HTMLElement>(elem: TElem, listener: (evt: MouseEvent | KeyboardEvent) => void, listenerOptions?: AddEventListenerOptions) {
  const proxListener = (e: MouseEvent | KeyboardEvent) => {
    if(e instanceof KeyboardEvent && !(["Enter", " ", "Space", "Spacebar"].includes(e.key)))
      return;
    e.preventDefault();
    e.stopImmediatePropagation();
    listenerOptions?.once && e.type === "keydown" && elem.removeEventListener("click", proxListener, listenerOptions);
    listenerOptions?.once && e.type === "click" && elem.removeEventListener("keydown", proxListener, listenerOptions);
    listener(e);
  };
  elem.addEventListener("click", proxListener, listenerOptions);
  elem.addEventListener("keydown", proxListener, listenerOptions);
}

/**
 * Adds a style element to the DOM at runtime.
 * @param css The CSS stylesheet to add
 * @param ref A reference string to identify the style element - defaults to a random 5-character string
 */
export function addStyle(css: string, ref?: string) {
  if(!domLoaded)
    throw new Error("DOM has not finished loading yet");
  const elem = addGlobalStyle(css);
  elem.id = `bytm-global-style-${ref ?? randomId(5, 36)}`;
  return elem;
}

/**
 * Checks if the currently playing media is a song or a video.  
 * This function should only be called after awaiting `waitVideoElementReady()`!
 */
export function currentMediaType(): "video" | "song" {
  const songImgElem = document.querySelector("ytmusic-player #song-image");
  if(!songImgElem)
    throw new Error("Couldn't find the song image element. Use this function only after `await waitVideoElementReady()`!");
  return getUnsafeWindow().getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
}

/**
 * Inserts {@linkcode beforeElement} as a sibling just before the provided {@linkcode afterElement}
 * @returns Returns the {@linkcode beforeElement}
 */
export function insertBefore(afterElement: Element, beforeElement: Element) {
  afterElement.parentNode?.insertBefore(beforeElement, afterElement);
  return beforeElement;
}
