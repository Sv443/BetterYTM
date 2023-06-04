import { scriptInfo, triesInterval, triesLimit } from "../constants";
import { getFeatures } from "../config";
import { addGlobalStyle, insertAfter, log, siteEvents } from "../utils";
import type { FeatureConfig } from "../types";
import { openMenu } from "./menu/menu_old";
import "./layout.css";

let features: FeatureConfig;

export async function preInitLayout() {
  features = await getFeatures();
}

//#MARKER watermark

/** Adds a watermark beneath the logo */
export function addWatermark() {
  const watermark = document.createElement("span");
  watermark.id = "betterytm-watermark";
  watermark.className = "style-scope ytmusic-nav-bar";
  watermark.innerText = scriptInfo.name;
  watermark.title = "Open menu";

  watermark.addEventListener("click", () => openMenu());

  const logoElem = document.querySelector("#left-content") as HTMLElement;
  insertAfter(logoElem, watermark);

  log("Added watermark element:", watermark);
}

//#MARKER remove upgrade tab

let removeUpgradeTries = 0;

/** Removes the "Upgrade" / YT Music Premium tab from the title / nav bar */
export function removeUpgradeTab() {
  const tabElem = document.querySelector(".ytmusic-nav-bar ytmusic-pivot-bar-item-renderer[tab-id=\"SPunlimited\"]");
  if(tabElem) {
    tabElem.remove();
    log(`Removed upgrade tab after ${removeUpgradeTries} tries`);
  }
  else if(removeUpgradeTries < triesLimit) {
    setTimeout(removeUpgradeTab, triesInterval); // TODO: improve this
    removeUpgradeTries++;
  }
  else
    console.error(`Couldn't find upgrade tab to remove after ${removeUpgradeTries} tries`);
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

  addGlobalStyle(style, "vol-slider");
}

/** Sets the `step` attribute of the volume slider */
export function setVolSliderStep() {
  const sliderElem = document.querySelector("tp-yt-paper-slider#volume-slider") as HTMLInputElement;

  sliderElem.setAttribute("step", String(features.volumeSliderStep));
}

//#MARKER queue buttons

// TODO: account for the fact initially the elements might not exist, if the site was not opened directly with a video playing or via the /watch path
export function initQueueButtons() {
  siteEvents.on("queueChanged", (evt) => {
    for(const queueItm of ((evt.data as HTMLElement).childNodes as NodeListOf<HTMLElement>)) {
      if(!queueItm.classList.contains("bytm-has-queue-btns"))
        addQueueButtons(queueItm);
    }
  });

  const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
  if(queueItems.length === 0)
    return;

  queueItems.forEach(itm => addQueueButtons(itm as HTMLElement));
}

function addQueueButtons(queueItem: HTMLElement) {
  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.className = "bytm-queue-btn-container";
  queueBtnsCont.innerText = "ayo";

  const songInfo = queueItem.querySelector(".song-info");
  if(!songInfo)
    return false;

  songInfo.appendChild(queueBtnsCont);
  queueItem.classList.add("bytm-has-queue-btns");
  return true;
}

//#MARKER better clickable stuff

// TODO: account for the fact initially the elements might not exist, if the site was opened directly with the /watch path
export function addAnchorImprovements() {
  void 0;
}
