import { clamp } from "@sv443-network/userutils";
import { info, log, warn, getDomain, getVideoElement } from "../utils/index.js";
import { featInfo } from "./index.js";
import { getFeature } from "../config.js";
import { addSelectorListener } from "../observers.js";

//#region ignored input elements

const ignoreInputTagNames: string[] = ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"];

const ignoreInputIds: string[] = [
  "contenteditable-root", // comment field on YT
  "volume-slider", // volume slider on YTM
  "bytm-cfg-menu-sidenav", // cfg menu sidenav
];

const ignoreInputClassNames: string[] = [
  "bytm-menu-sidenav-section", // cfg menu sidenav section
];

/** Returns true, if the given element (`document.activeElement` by default) is an input element that should make BYTM ignore keypresses */
export function isIgnoredInputElement(el = document.activeElement as HTMLElement | null) {
  if(!el)
    return false;

  return document.activeElement !== document.body && (
    ignoreInputTagNames.includes(el.tagName.toUpperCase())
    || ignoreInputClassNames.some((cls) => el.classList.contains(cls))
    || ignoreInputIds.includes(el.id)
  );
}

//#region arrow key skip

let sliderEl: HTMLInputElement | undefined;

export async function initArrowKeySkip() {
  addSelectorListener<HTMLInputElement>("playerBarRightControls", "tp-yt-paper-slider#volume-slider", {
    listener: (el) => sliderEl = el,
  });

  document.addEventListener("keydown", (evt) => {
    if(!getFeature("arrowKeySupport") || isIgnoredInputElement())
      return;

    if(["ArrowUp", "ArrowDown"].includes(evt.code) && getDomain() === "ytm")
      return handleVolumeKeyPress(evt);

    if(!["ArrowLeft", "ArrowRight"].includes(evt.code))
      return;

    const allowedClasses = ["bytm-generic-btn", "yt-spec-button-shape-next"];

    // discard the event when a (text) input is currently active, like when editing a playlist or writing a comment
    if(isIgnoredInputElement() && !allowedClasses.some((cls) => document.activeElement?.classList.contains(cls)))
      return info(`Captured valid key to skip forward or backward but the current active element is <${document.activeElement?.tagName.toLowerCase()}>, so the keypress is ignored`);

    evt.preventDefault();
    evt.stopImmediatePropagation();

    let skipBy = getFeature("arrowKeySkipBy") ?? featInfo.arrowKeySkipBy.default;
    if(evt.code === "ArrowLeft")
      skipBy *= -1;

    log(`Captured arrow key '${evt.code}' - skipping by ${skipBy} seconds`);

    const vidElem = getVideoElement();

    if(vidElem && vidElem.readyState > 0)
      vidElem.currentTime = clamp(vidElem.currentTime + skipBy, 0, vidElem.duration);
  });

  log("Added arrow key press listener");
}

function handleVolumeKeyPress(evt: KeyboardEvent) {
  evt.preventDefault();
  evt.stopImmediatePropagation();

  if(!getVideoElement())
    return warn("Couldn't find video element, so the keypress is ignored");

  if(!sliderEl)
    return warn("Couldn't find volume slider element, so the keypress is ignored");

  const step = Number(sliderEl.step);
  const newVol = clamp(
    Number(sliderEl.value)
      + (evt.code === "ArrowUp" ? 1 : -1)
      * clamp((getFeature("arrowKeyVolumeStep") ?? featInfo.arrowKeyVolumeStep.default), isNaN(step) ? 5 : step, 100),
    0,
    100,
  );

  if(newVol !== Number(sliderEl.value)) {
    sliderEl.value = String(newVol);
    sliderEl.dispatchEvent(new Event("change", { bubbles: true }));

    log(`Captured key '${evt.code}' - changed volume to ${newVol}%`);
  }
}

//#region frame skip

/** Initializes the feature that lets users skip by a frame with the period and comma keys while the video is paused */
export async function initFrameSkip() {
  document.addEventListener("keydown", async (evt) => {
    if(!getFeature("frameSkip") || isIgnoredInputElement() || !["Comma", "Period"].includes(evt.code))
      return;

    const vid = getVideoElement();
    if(!vid || vid.readyState === 0)
      return warn("Could not find video element or it hasn't loaded yet, so the keypress is ignored");

    if(!getFeature("frameSkipWhilePlaying") && (vid.playbackRate === 0 || !vid.paused))
      return;

    evt.preventDefault();
    evt.stopImmediatePropagation();

    const newTime = vid.currentTime + getFeature("frameSkipAmount") * (evt.code === "Comma" ? -1 : 1);
    vid.currentTime = clamp(newTime, 0, vid.duration);

    log(`Captured key '${evt.code}' and skipped to ${Math.floor(newTime / 60)}m ${(newTime % 60).toFixed(1)}s (${Math.floor(newTime * 1000 % 1000)}ms)`);
  });

  log("Added frame skip key press listener");
}

//#region num keys skip

/** Adds the ability to skip to a certain time in the video by pressing a number key (0-9) */
export async function initNumKeysSkip() {
  document.addEventListener("keydown", (e) => {
    if(!getFeature("numKeysSkipToTime") || isIgnoredInputElement())
      return;
    if(!e.key.trim().match(/^[0-9]$/))
      return;

    const vidElem = getVideoElement();
    if(!vidElem || vidElem.readyState === 0)
      return warn("Could not find video element, so the keypress is ignored");

    const newVidTime = vidElem.duration / (10 / Number(e.key));
    if(!isNaN(newVidTime)) {
      log(`Captured number key [${e.key}], skipping to ${Math.floor(newVidTime / 60)}m ${(newVidTime % 60).toFixed(1)}s`);
      vidElem.currentTime = newVidTime;
    }
  });
  log("Added number key press listener");
}
