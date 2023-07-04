import { scriptInfo, triesInterval, triesLimit } from "../constants";
import { getFeatures } from "../config";
import { addGlobalStyle, error, getEvtData, insertAfter, log, siteEvents } from "../utils";
import type { FeatureConfig } from "../types";
import { openMenu } from "./menu/menu_old";
import "./layout.css";
import { getGeniusUrl, getLyricsBtn, sanitizeArtists, sanitizeSong } from "./lyrics";

let features: FeatureConfig;

export async function preInitLayout() {
  features = await getFeatures();
}

//#MARKER watermark

/** Adds a watermark beneath the logo */
export function addWatermark() {
  const watermark = document.createElement("a");
  watermark.role = "button";
  watermark.id = "betterytm-watermark";
  watermark.className = "style-scope ytmusic-nav-bar";
  watermark.innerText = scriptInfo.name;
  watermark.title = "Open menu";
  watermark.tabIndex = 1000;

  watermark.addEventListener("click", () => openMenu());
  watermark.addEventListener("keydown", (e) => e.key === "Enter" && openMenu());

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
    error(`Couldn't find upgrade tab to remove after ${removeUpgradeTries} tries`);
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
    for(const queueItm of getEvtData<HTMLElement>(evt).childNodes as NodeListOf<HTMLElement>) {
      if(!queueItm.classList.contains("bytm-has-queue-btns"))
        addQueueButtons(queueItm);
    }
  });

  const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
  if(queueItems.length === 0)
    return;

  queueItems.forEach(itm => addQueueButtons(itm as HTMLElement));
}

/** For how long the user needs to hover over the song info to fetch the lyrics */
const queueBtnLyricsLoadDebounce = 250;

async function addQueueButtons(queueItem: HTMLElement) {
  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.className = "bytm-queue-btn-container";

  const songInfo = queueItem.querySelector(".song-info");
  if(!songInfo)
    return false;

  const [songEl, artistEl] = (songInfo.querySelectorAll("yt-formatted-string") as NodeListOf<HTMLElement>);
  const song = songEl.innerText;
  const artist = artistEl.innerText;
  if(!song || !artist)
    return false;

  // TODO: display "hover to load" and "currently loading" icons
  const lyricsBtnElem = getLyricsBtn(undefined, false);

  // load the URL only on hover because of geniURL rate limiting
  songInfo.addEventListener("mouseenter", async () => {
    const startTs = Date.now();
    if(songInfo.classList.contains("bytm-fetched-lyrics-url"))
      return;

    /** Loads lyrics after `queueBtnLyricsLoadDebounce` time has passed - gets aborted if the mouse leaves before that time passed */
    const lyricsLoadTimeout = setTimeout(async () => {
      const lyricsUrl = await getGeniusUrl(sanitizeArtists(artist), sanitizeSong(song));

      if(!lyricsUrl)
        return false;

      songInfo.classList.add("bytm-fetched-lyrics-url");

      lyricsBtnElem.href = lyricsUrl;

      lyricsBtnElem.title = "Open the current song's lyrics in a new tab";
      lyricsBtnElem.style.cursor = "pointer";
      lyricsBtnElem.style.visibility = "initial";
      lyricsBtnElem.style.display = "inline-flex";
      lyricsBtnElem.style.pointerEvents = "initial";
    }, queueBtnLyricsLoadDebounce);

    songInfo.addEventListener("mouseleave", () => {
      if(Date.now() - startTs < queueBtnLyricsLoadDebounce)
        clearTimeout(lyricsLoadTimeout);
    });
  });

  queueBtnsCont.appendChild(lyricsBtnElem);

  songInfo.appendChild(queueBtnsCont);
  queueItem.classList.add("bytm-has-queue-btns");

  log(`Added queue buttons for song '${artist} - ${song}'`, queueBtnsCont);
  return true;
}

//#MARKER better clickable stuff

// TODO: account for the fact initially the elements might not exist, if the site was opened directly with the /watch path
export function addAnchorImprovements() {
  void 0;
}
