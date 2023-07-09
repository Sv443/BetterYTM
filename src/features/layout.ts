import type { Event } from "@billjs/event-emitter";
import type { FeatureConfig } from "../types";
import { scriptInfo, triesInterval, triesLimit } from "../constants";
import { getFeatures } from "../config";
import { addGlobalStyle, autoPlural, error, getAssetUrl, insertAfter, log, openInNewTab } from "../utils";
import { getEvtData, siteEvents } from "../events";
import { openMenu } from "./menu/menu_old";
import { getGeniusUrl, createLyricsBtn, sanitizeArtists, sanitizeSong, getLyricsCacheEntry } from "./lyrics";
import "./layout.css";

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
  // when using the tab key to navigate
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
  const addQueueBtns = (evt: Event) => {
    let amt = 0;
    for(const queueItm of getEvtData<HTMLElement>(evt).childNodes as NodeListOf<HTMLElement>) {
      if(!queueItm.classList.contains("bytm-has-queue-btns")) {
        addQueueButtons(queueItm);
        amt++;
      }
    }
    if(amt > 0)
      log(`Added buttons to ${amt} new queue ${autoPlural("item", amt)}`);
  };

  siteEvents.on("queueChanged", addQueueBtns);
  siteEvents.on("autoplayQueueChanged", addQueueBtns);

  const queueItems = document.querySelectorAll("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
  if(queueItems.length === 0)
    return;

  queueItems.forEach(itm => addQueueButtons(itm as HTMLElement));

  log(`Added buttons to ${queueItems.length} existing queue items`);
}

/**
 * Adds the buttons to each item in the current song queue.  
 * Also observes for changes to add new buttons to new items in the queue.
 */
async function addQueueButtons(queueItem: HTMLElement) {
  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.className = "bytm-queue-btn-container";

  //#SECTION lyrics

  const songInfo = queueItem.querySelector(".song-info") as HTMLElement;
  if(!songInfo)
    return false;

  const [songEl, artistEl] = (songInfo.querySelectorAll("yt-formatted-string") as NodeListOf<HTMLElement>);
  const song = songEl.innerText;
  const artist = artistEl.innerText;
  if(!song || !artist)
    return false;

  const lyricsBtnElem = createLyricsBtn(undefined, false);
  {
    lyricsBtnElem.title = "Open this song's lyrics in a new tab";
    lyricsBtnElem.style.visibility = "initial";
    lyricsBtnElem.style.display = "inline-flex";
    lyricsBtnElem.style.pointerEvents = "initial";

    lyricsBtnElem.addEventListener("click", async () => {
      let lyricsUrl;
      if(songInfo.dataset.bytmLyrics && songInfo.dataset.bytmLyrics.length > 0)
        lyricsUrl = songInfo.dataset.bytmLyrics;
      else if(songInfo.dataset.bytmLoading !== "true") {
        songInfo.dataset.bytmLoading = "true";
        const imgEl = lyricsBtnElem.querySelector("img") as HTMLImageElement;
        imgEl.src = getAssetUrl("loading.gif");

        const artistsSan = sanitizeArtists(artist);
        const songSan = sanitizeSong(song);

        const cachedLyricsUrl = getLyricsCacheEntry(artistsSan, songSan);
        lyricsUrl = cachedLyricsUrl ?? await getGeniusUrl(artistsSan, songSan);

        if(!cachedLyricsUrl)
          songInfo.dataset.bytmLoading = "false";
        imgEl.src = getAssetUrl("external/genius.png");

        if(!lyricsUrl) {
          if(confirm("Couldn't find a lyrics page for this song.\nDo you want to open genius.com to manually search for it?"))
            openInNewTab("https://genius.com/search");
          return;
        }

        // no need to pollute the DOM if the result is already in cache
        if(!cachedLyricsUrl)
          songInfo.dataset.bytmLyrics = lyricsUrl;
      }

      lyricsUrl && openInNewTab(lyricsUrl);
    });
  }

  //#SECTION delete from queue
  const deleteBtnElem = document.createElement("a");
  {
    deleteBtnElem.className = "ytmusic-player-bar bytm-delete-from-queue bytm-generic-btn";
    deleteBtnElem.role = "button";
    deleteBtnElem.target = "_blank";
    deleteBtnElem.rel = "noopener noreferrer";
    deleteBtnElem.style.visibility = "initial";
    deleteBtnElem.style.display = "inline-flex";

    deleteBtnElem.addEventListener("click", () => alert("WIP"));

    const imgElem = document.createElement("img");
    imgElem.className = "bytm-generic-btn-img";
    imgElem.src = getAssetUrl("close.png");

    deleteBtnElem.appendChild(imgElem);
  }

  queueBtnsCont.appendChild(lyricsBtnElem);
  queueBtnsCont.appendChild(deleteBtnElem);

  songInfo.appendChild(queueBtnsCont);
  queueItem.classList.add("bytm-has-queue-btns");

  return true;
}

//#MARKER better clickable stuff

// TODO: account for the fact initially the elements might not exist, if the site was opened directly with the /watch path
export function addAnchorImprovements() {
  void 0;
}
