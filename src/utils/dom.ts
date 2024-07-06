import { addGlobalStyle, getUnsafeWindow, randomId, type Stringifiable } from "@sv443-network/userutils";
import { error, fetchCss, getDomain, t } from "./index.js";
import { addSelectorListener } from "../observers.js";
import type { ResourceKey } from "../types.js";
import { siteEvents } from "../siteEvents.js";

/** Whether the DOM has finished loading and elements can be added or modified */
export let domLoaded = false;
document.addEventListener("DOMContentLoaded", () => domLoaded = true);

//#region video time, volume

/** Returns the video element selector string based on the current domain */
export const getVideoSelector = () => getDomain() === "ytm" ? "ytmusic-player video" : "#player-container ytd-player video";

/**
 * Returns the current video time in seconds, with the given {@linkcode precision} (2 decimal digits by default).  
 * Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.  
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
export function getVideoTime(precision = 2) {
  return new Promise<number | null>(async (res) => {
    await waitVideoElementReady();

    try {
      if(getDomain() === "ytm") {
        const vidElem = document.querySelector<HTMLVideoElement>(getVideoSelector());
        if(vidElem)
          return res(Number(precision <= 0 ? Math.floor(vidElem.currentTime) : vidElem.currentTime.toFixed(precision)));

        addSelectorListener<HTMLProgressElement>("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
          listener: (pbEl) =>
            res(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
        });
      }
      else if(getDomain() === "yt") {
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

/**
 * Waits for the video element to be in its readyState 4 / canplay state and returns it.  
 * Resolves immediately if the video element is already ready.
 */
export function waitVideoElementReady(): Promise<HTMLVideoElement> {
  return new Promise(async (res) => {
    const waitForEl = () => addSelectorListener<HTMLVideoElement>("body", getVideoSelector(), {
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

    if(!location.pathname.startsWith("/watch"))
      await siteEvents.once("watchIdChanged");
    waitForEl();
  });
}

//#region css utils

/**
 * Adds a style element to the DOM at runtime.
 * @param css The CSS stylesheet to add
 * @param ref A reference string to identify the style element - defaults to a random 5-character string
 * @param transform A function to transform the CSS before adding it to the DOM
 */
export async function addStyle(css: string, ref?: string, transform: (css: string) => string | Promise<string> = (c) => c) {
  if(!domLoaded)
    throw new Error("DOM has not finished loading yet");
  const elem = addGlobalStyle(await transform(css));
  elem.id = `bytm-style-${ref ?? randomId(5, 36)}`;
  return elem;
}

/**
 * Adds a global style element with the contents fetched from the specified CSS resource.  
 * The CSS can be transformed using the provided function before being added to the DOM.
 */
export async function addStyleFromResource(key: ResourceKey & `css-${string}`, transform: (css: string) => string = (c) => c) {
  const css = await fetchCss(key);
  if(css) {
    addStyle(transform(css), key.slice(4));
    return true;
  }
  return false;
}

/** Sets a global CSS variable on the &lt;document&gt; element */
export function setGlobalCssVar(name: string, value: Stringifiable) {
  document.documentElement.style.setProperty(`--bytm-global-${name}`, String(value));
}

/** Sets multiple global CSS variables on the &lt;document&gt; element */
export function setGlobalCssVars(vars: Record<string, Stringifiable>) {
  for(const [name, value] of Object.entries(vars))
    setGlobalCssVar(name, value);
}

//#region other

/** Removes all child nodes of an element without invoking the slow-ish HTML parser */
export function clearInner(element: Element) {
  while(element.hasChildNodes())
    clearNode(element!.firstChild as Element);
}

/** Removes all child nodes of an element recursively and also removes the element itself */
export function clearNode(element: Element) {
  while(element.hasChildNodes())
    clearNode(element!.firstChild as Element);
  element.parentNode!.removeChild(element);
}

/**
 * Checks if the currently playing media is a song or a video.  
 * This function should only be called after awaiting {@linkcode waitVideoElementReady}!
 */
export function currentMediaType(): "video" | "song" {
  const songImgElem = document.querySelector("ytmusic-player #song-image");
  if(!songImgElem)
    throw new Error("Couldn't find the song image element. Use this function only after `await waitVideoElementReady()`!");
  return getUnsafeWindow().getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
}

/** Copies the provided text to the clipboard and shows an error message for manual copying if the grant `GM.setClipboard` is not given. */
export function copyToClipboard(text: Stringifiable) {
  try {
    GM.setClipboard(String(text));
  }
  catch {
    alert(t("copy_to_clipboard_error", String(text)));
  }
}
