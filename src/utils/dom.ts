import { addGlobalStyle, consumeStringGen, getUnsafeWindow, isDomLoaded, randomId, type StringGen, type Stringifiable } from "@sv443-network/userutils";
import DOMPurify from "dompurify";
import { error, fetchCss, getDomain, t } from "./index.js";
import { addSelectorListener } from "../observers.js";
import type { ResourceKey, TTPolicy } from "../types.js";
import { siteEvents } from "../siteEvents.js";
import { showPrompt } from "../dialogs/prompt.js";

//#region vid time & vol.

/** Returns the video element selector string based on the current domain */
export function getVideoSelector() {
  return getDomain() === "ytm"
    ? "ytmusic-player video"
    : "#player-container ytd-player video";
}

/** Returns the video element based on the current domain */
export function getVideoElement() {
  return document.querySelector<HTMLVideoElement>(getVideoSelector());
}

let vidElemReady = false;

/**
 * Returns the current video time in seconds, with the given {@linkcode precision} (2 decimal digits by default).  
 * Rounds down if the precision is set to 0. The maximum average available precision on YTM is 6.  
 * Dispatches mouse movement events in case the video time can't be read from the video or progress bar elements (needs a prior user interaction to work)
 * @returns Returns null if the video time is unavailable or no user interaction has happened prior to calling in case of the fallback behavior being used
 */
export function getVideoTime(precision = 2) {
  return new Promise<number | null>(async (res) => {
    if(!vidElemReady) {
      await waitVideoElementReady();
      vidElemReady = true;
    }

    const resolveWithVal = (time: number | null) => res(
      time && !isNaN(time)
        ? Number(precision <= 0 ? Math.floor(time) : time.toFixed(precision))
        : null
    );

    try {
      if(getDomain() === "ytm") {
        const vidElem = getVideoElement();
        if(vidElem && vidElem.readyState > 0)
          return resolveWithVal(vidElem.currentTime);

        addSelectorListener<HTMLProgressElement>("playerBar", "tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar", {
          listener: (pbEl) =>
            resolveWithVal(!isNaN(Number(pbEl.value)) ? Math.floor(Number(pbEl.value)) : null)
        });
      }
      else if(getDomain() === "yt") {
        const vidElem = getVideoElement();
        if(vidElem && vidElem.readyState > 0)
          return resolveWithVal(vidElem.currentTime);

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
            resolveWithVal(Math.floor(videoTime));
            mut.disconnect();
          }
          else
            setTimeout(() => {
              resolveWithVal(videoTime >= 0 && !isNaN(videoTime) ? Math.floor(videoTime) : null);
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
 * Could take a very long time to resolve if the `/watch` page isn't open.  
 * Resolves immediately if the video element is already ready.
 */
export function waitVideoElementReady(): Promise<HTMLVideoElement> {
  return new Promise(async (res, rej) => {
    try {
      const vidEl = getVideoElement();
      if(vidEl && (vidEl?.readyState ?? 0) > 0)
        return res(vidEl);

      if(!location.pathname.startsWith("/watch"))
        await siteEvents.once("watchIdChanged");

      addSelectorListener<HTMLVideoElement>("body", getVideoSelector(), {
        listener(vidElem) {
          // this is just after YT has finished doing their own shenanigans with the video time and volume
          if(vidElem.readyState === 4)
            res(vidElem);
          else
            vidElem.addEventListener("canplay", () => res(vidElem), { once: true });
        },
      });
    }
    catch(err) {
      rej(err);
    }
  });
}

//#region css utils

/**
 * Adds a style element to the DOM at runtime.
 * @param css The CSS stylesheet to add
 * @param ref A reference string to identify the style element - defaults to a random 5-character string
 * @param transform A function to transform the CSS before adding it to the DOM
 */
export async function addStyle(css: StringGen, ref?: string, transform: (css: string) => string | Promise<string> = (c) => c) {
  if(!isDomLoaded())
    throw new Error("DOM has not finished loading yet");
  const elem = addGlobalStyle(await transform(await consumeStringGen(css)));
  elem.id = `bytm-style-${ref ?? randomId(6, 36)}`;
  return elem;
}

/**
 * Adds a global style element with the contents fetched from the specified resource starting with `css-`  
 * The CSS can be transformed using the provided function before being added to the DOM.
 */
export async function addStyleFromResource(key: ResourceKey & `css-${string}`, transform: (css: string) => Stringifiable = (c) => c) {
  const css = await fetchCss(key);
  if(css) {
    await addStyle(String(transform(css)), key.slice(4));
    return true;
  }
  return false;
}

/** Sets a global CSS variable on the &lt;document&gt; element with the name `--bytm-global-${name}` */
export function setGlobalCssVar(name: string, value: Stringifiable) {
  document.documentElement.style.setProperty(`--bytm-global-${name.toLowerCase().trim()}`, String(value));
}

/** Sets multiple global CSS variables on the &lt;document&gt; element with the name `--bytm-global-${name}` */
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
 * Returns an identifier for the currently playing media type on YTM ("song" or "video").  
 * Only works on YTM and will throw if {@linkcode waitVideoElementReady} hasn't been awaited yet.  
 * On YT, it will always return "video".
 */
export function getCurrentMediaType(): "video" | "song" {
  if(getDomain() === "yt")
    return "video";
  const songImgElem = document.querySelector("ytmusic-player #song-image");
  if(!songImgElem)
    throw new Error("Couldn't find the song image element. Use this function only after awaiting `waitVideoElementReady()`!");
  return window.getComputedStyle(songImgElem).display !== "none" ? "song" : "video";
}

/** Copies the provided text to the clipboard and shows an error message for manual copying if the grant `GM.setClipboard` is not given. */
export function copyToClipboard(text: Stringifiable) {
  try {
    GM.setClipboard(String(text));
  }
  catch {
    showPrompt({ type: "alert", message: t("copy_to_clipboard_error", String(text)) });
  }
}

let ttPolicy: TTPolicy | undefined;

// workaround for supporting `target="_blank"` links without compromising security:
const tempTargetAttrName = `data-tmp-target-${randomId(6, 36)}`;

DOMPurify.addHook("beforeSanitizeAttributes", (node) => {
  if(node.tagName === "A") {
    if(!node.hasAttribute("target"))
      node.setAttribute("target", "_self");
    if(node.hasAttribute("target"))
      node.setAttribute(tempTargetAttrName, node.getAttribute("target")!);
  }
});

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if(node.tagName === "A" && node.hasAttribute(tempTargetAttrName)) {
    node.setAttribute("target", node.getAttribute(tempTargetAttrName)!);
    node.removeAttribute(tempTargetAttrName);
    if(node.getAttribute("target") === "_blank")
      node.setAttribute("rel", "noopener noreferrer");
  }
});

/**
 * Sets innerHTML directly on Firefox and Safari, while on Chromium a [Trusted Types policy](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) is used to set the HTML.  
 * If no HTML string is given, the element's innerHTML will be set to an empty string.
 */
export function setInnerHtml(element: HTMLElement, html?: Stringifiable | null) {
  if(!html)
    html = "";

  if(!ttPolicy && window?.trustedTypes?.createPolicy) {
    ttPolicy = window.trustedTypes.createPolicy("bytm-sanitize-html", {
      createHTML: (dirty: string) => DOMPurify.sanitize(dirty, {
        RETURN_TRUSTED_TYPE: true,
      }) as unknown as string,
    });
  }

  element.innerHTML = ttPolicy?.createHTML(String(html))
    ?? DOMPurify.sanitize(String(html), { RETURN_TRUSTED_TYPE: false });
}

/** Creates an invisible link element and clicks it to download the provided string or Blob data as a file */
export function downloadFile(fileName: string, data: string | Blob, mimeType = "text/plain") {
  const blob = data instanceof Blob ? data : new Blob([data], { type: mimeType });
  const a = document.createElement("a");
  a.classList.add("bytm-hidden");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  setTimeout(() => a.remove(), 1);
}
