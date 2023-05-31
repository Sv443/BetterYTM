import { dbg, info, triesInterval, triesLimit } from "../constants";
import { getFeatures } from "../config";
import { addGlobalStyle, insertAfter, siteEvents } from "../utils";
import type { FeatureConfig } from "../types";
import { openMenu } from "./menu/menu_old";

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

//#MARKER queue buttons

export function initQueueButtons() {
  siteEvents.on("queueChanged", (evt) => {
    for(const queueItm of ((evt.data as HTMLElement).childNodes as NodeListOf<HTMLElement>)) {
      if(!queueItm.classList.contains("bytm-has-queue-btns"))
        addQueueButtons(queueItm);
    }
  });

  const queueBtnsStyle = `\
.side-panel.modular ytmusic-player-queue-item .song-info.ytmusic-player-queue-item {
  position: relative;
}
.side-panel.modular ytmusic-player-queue-item .song-info .bytm-queue-btn-container {
  display: none;
  position: absolute;
  right: 0;
}
.side-panel.modular ytmusic-player-queue-item:hover .song-info .bytm-queue-btn-container {
  display: inline-block;
}`;
  addGlobalStyle(queueBtnsStyle, "queue-btns");

  const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
  if(queueItems.length === 0)
    return;

  queueItems.forEach(itm => addQueueButtons(itm as HTMLElement));
}

function addQueueButtons(queueItem: HTMLElement) {
  console.log("Add queue btns:", queueItem);

  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.className = "bytm-queue-btn-container";
  queueBtnsCont.innerText = "ayo";

  const songInfo = queueItem.querySelector(".song-info")!;
  songInfo.appendChild(queueBtnsCont);
  queueItem.classList.add("bytm-has-queue-btns");
}
