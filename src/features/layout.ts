import { dbg, info, triesInterval, triesLimit } from "../constants";
import { getFeatures } from "../config";
import { addGlobalStyle, insertAfter } from "../utils";
import type { FeatureConfig } from "../types";
import { openMenu } from "./menu";

let features: FeatureConfig;

export async function preInitLayout() {
  features = await getFeatures();
}

//#MARKER watermark

/**
 * Adds a watermark beneath the logo
 */
export function addWatermark() {
  const watermark = document.createElement("span");
  watermark.id = "betterytm-watermark";
  watermark.className = "style-scope ytmusic-nav-bar";
  watermark.innerText = info.name;
  watermark.title = "Open menu";

  watermark.addEventListener("click", () => openMenu());


  const style = `\
#betterytm-watermark {
  font-size: 10px;
  display: inline-block;
  position: absolute;
  left: 45px;
  top: 46px;
  z-index: 10;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

@media(max-width: 615px) {
  #betterytm-watermark {
    display: none;
  }
}

#betterytm-watermark:hover {
  text-decoration: underline;
}`;

  addGlobalStyle(style, "watermark");


  const logoElem = document.querySelector("#left-content") as HTMLElement;
  insertAfter(logoElem, watermark);


  dbg && console.log("BetterYTM: Added watermark element:", watermark);
}

//#MARKER remove upgrade tab

let removeUpgradeTries = 0;

/** Removes the "Upgrade" / YT Music Premium tab from the title / nav bar */
export function removeUpgradeTab() {
  const tabElem = document.querySelector(".ytmusic-nav-bar ytmusic-pivot-bar-item-renderer[tab-id=\"SPunlimited\"]");
  if(tabElem) {
    tabElem.remove();
    dbg && console.log(`BetterYTM: Removed upgrade tab after ${removeUpgradeTries} tries`);
  }
  else if(removeUpgradeTries < triesLimit) {
    setTimeout(removeUpgradeTab, triesInterval); // TODO: improve this
    removeUpgradeTries++;
  }
  else
    console.error(`BetterYTM: Couldn't find upgrade tab to remove after ${removeUpgradeTries} tries`);
}

//#MARKER volume slider

/** Sets the volume slider to a set size */
export function setVolSliderSize() {
  const { volumeSliderSize: size } = features;

  if(typeof size !== "number" || isNaN(Number(size)))
    return;

  const style = `\
.volume-slider.ytmusic-player-bar, .expand-volume-slider.ytmusic-player-bar {
  width: ${size}px !important;
}`;

  addGlobalStyle(style, "vol_slider_size");
}

/** Sets the `step` attribute of the volume slider */
export function setVolSliderStep() {
  const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider") as HTMLInputElement;

  sliderElem.setAttribute("step", String(features.volumeSliderStep));
}
