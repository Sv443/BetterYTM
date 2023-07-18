import type { Event } from "@billjs/event-emitter";
import type { FeatureConfig } from "../types";
import { scriptInfo } from "../constants";
import { getFeatures } from "../config";
import { addGlobalStyle, autoPlural, error, getAssetUrl, insertAfter, log, onSelectorExists, openInNewTab, pauseFor } from "../utils";
import { getEvtData, siteEvents } from "../events";
import { openMenu } from "./menu/menu_old";
import { getGeniusUrl, createLyricsBtn, sanitizeArtists, sanitizeSong, getLyricsCacheEntry } from "./lyrics";
import "./layout.css";

let features: FeatureConfig;

export async function preInitLayout() {
  features = await getFeatures();
}

//#MARKER BYTM-Config buttons

/** Adds a watermark beneath the logo */
export function addWatermark() {
  const watermark = document.createElement("a");
  watermark.role = "button";
  watermark.id = "betterytm-watermark";
  watermark.className = "style-scope ytmusic-nav-bar";
  watermark.innerText = scriptInfo.name;
  watermark.title = "Open menu";
  watermark.tabIndex = 1000;

  watermark.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenu();
  });
  // when using the tab key to navigate
  watermark.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
      e.stopPropagation();
      openMenu();
    }
  });

  const logoElem = document.querySelector("#left-content") as HTMLElement;
  insertAfter(logoElem, watermark);

  log("Added watermark element:", watermark);
}

/** Called whenever the menu exists to add a BYTM-Configuration button */
export function addConfigMenuOption(container: HTMLElement) {
  const cfgOptElem = document.createElement("a");
  cfgOptElem.role = "button";
  cfgOptElem.tabIndex = 0;
  cfgOptElem.className = "bytm-cfg-menu-option";
  
  const cfgOptItemElem = document.createElement("div");
  cfgOptItemElem.className = "bytm-cfg-menu-option-item";
  cfgOptItemElem.addEventListener("click", () => {
    const settingsBtnElem = document.querySelector<HTMLElement>("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
    settingsBtnElem?.click();
    openMenu();
  });

  const cfgOptIconElem = document.createElement("img");
  cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
  cfgOptIconElem.src = getAssetUrl("icon/icon.png");
  
  const cfgOptTextElem = document.createElement("div");
  cfgOptTextElem.className = "bytm-cfg-menu-option-text";
  cfgOptTextElem.innerText = "BetterYTM Configuration";
  cfgOptTextElem.title = "Click to open BetterYTM's configuration menu";

  cfgOptItemElem.appendChild(cfgOptIconElem);
  cfgOptItemElem.appendChild(cfgOptTextElem);

  cfgOptElem.appendChild(cfgOptItemElem);

  container.appendChild(cfgOptElem);

  log("Added BYTM-Configuration button to menu popover");
}

//#MARKER remove upgrade tab

/** Removes the "Upgrade" / YT Music Premium tab from the title / nav bar */
export function removeUpgradeTab() {
  onSelectorExists("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-child(4)", (tabElemLarge) => {
    tabElemLarge.remove();
    log("Removed large upgrade tab");
  });
  onSelectorExists("ytmusic-app-layout #mini-guide ytmusic-guide-renderer #sections ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer:nth-child(4)", (tabElemSmall) => {
    tabElemSmall.remove();
    log("Removed small upgrade tab");
  });
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
 * TODO:FIXME: deleting an element from the queue shifts the lyrics buttons
 * @param queueItem The element with tagname `ytmusic-player-queue-item` to add queue buttons to
 */
async function addQueueButtons(queueItem: HTMLElement) {
  //#SECTION general queue item stuff
  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.className = "bytm-queue-btn-container";

  const songInfo = queueItem.querySelector(".song-info") as HTMLElement;
  if(!songInfo)
    return false;

  const [songEl, artistEl] = (songInfo.querySelectorAll("yt-formatted-string") as NodeListOf<HTMLElement>);
  const song = songEl.innerText;
  const artist = artistEl.innerText;
  if(!song || !artist)
    return false;

  //#SECTION lyrics btn
  const lyricsBtnElem = createLyricsBtn(undefined, false);
  {
    lyricsBtnElem.title = "Open this song's lyrics in a new tab";
    lyricsBtnElem.style.display = "inline-flex";
    lyricsBtnElem.style.visibility = "initial";
    lyricsBtnElem.style.pointerEvents = "initial";

    lyricsBtnElem.addEventListener("click", async (e) => {
      e.stopPropagation();

      let lyricsUrl: string | undefined;
      const artistsSan = sanitizeArtists(artist);
      const songSan = sanitizeSong(song);
      const cachedLyricsUrl = getLyricsCacheEntry(artistsSan, songSan);

      if(cachedLyricsUrl)
        lyricsUrl = cachedLyricsUrl;
      else if(!songInfo.hasAttribute("data-bytm-loading")) {
        const imgEl = lyricsBtnElem.querySelector("img") as HTMLImageElement;
        if(!cachedLyricsUrl) {
          songInfo.setAttribute("data-bytm-loading", "");

          imgEl.src = getAssetUrl("loading.svg");
          imgEl.classList.add("bytm-spinner");
        }

        lyricsUrl = cachedLyricsUrl ?? await getGeniusUrl(artistsSan, songSan);

        if(!cachedLyricsUrl) {
          songInfo.removeAttribute("data-bytm-loading");

          // so the new image doesn't "blink"
          setTimeout(() => {
            imgEl.src = getAssetUrl("external/genius.png");
            imgEl.classList.remove("bytm-spinner");
          }, 100);
        }

        if(!lyricsUrl) {
          if(confirm("Couldn't find a lyrics page for this song.\nDo you want to open genius.com to manually search for it?"))
            openInNewTab("https://genius.com/search");
          return;
        }
      }

      lyricsUrl && openInNewTab(lyricsUrl);
    });
  }

  //#SECTION delete from queue btn
  const deleteBtnElem = document.createElement("a");
  {
    Object.assign(deleteBtnElem, {
      title: "Remove this song from the queue",
      className: "ytmusic-player-bar bytm-delete-from-queue bytm-generic-btn",
      role: "button",
      target: "_blank",
      rel: "noopener noreferrer",
    });
    deleteBtnElem.style.visibility = "initial";

    deleteBtnElem.addEventListener("click", async (e) => {
      e.stopPropagation();

      // container of the queue item popup menu - element gets reused for every queue item
      let queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown") as HTMLElement;
      try {
        // three dots button to open the popup menu of a queue item
        const dotsBtnElem = queueItem.querySelector("ytmusic-menu-renderer yt-button-shape button") as HTMLButtonElement;

        if(queuePopupCont)
          queuePopupCont.setAttribute("data-bytm-hidden", "true");

        dotsBtnElem.click();
        await pauseFor(25);
        queuePopupCont = document.querySelector("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown") as HTMLElement;

        if(!queuePopupCont.hasAttribute("data-bytm-hidden"))
          queuePopupCont.setAttribute("data-bytm-hidden", "true");

        // a little bit janky and unreliable but the only way afaik
        const removeFromQueueBtn = queuePopupCont.querySelector("tp-yt-paper-listbox *[role=option]:nth-child(7)") as HTMLElement;

        await pauseFor(20);

        removeFromQueueBtn.click();
      }
      catch(err) {
        error("Couldn't remove song from queue due to error:", err);
      }
      finally {
        queuePopupCont?.removeAttribute("data-bytm-hidden");
      }
    });

    const imgElem = document.createElement("img");
    imgElem.className = "bytm-generic-btn-img";
    imgElem.src = getAssetUrl("close.png"); // TODO: make own icon for this

    deleteBtnElem.appendChild(imgElem);
  }

  //#SECTION append elements to DOM

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
