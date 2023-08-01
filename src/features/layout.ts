import type { Event } from "@billjs/event-emitter";
import type { FeatureConfig } from "../types";
import { scriptInfo } from "../constants";
import { getFeatures } from "../config";
import { addGlobalStyle, addParent, autoPlural, error, getAssetUrl, insertAfter, log, onSelectorExists, openInNewTab, pauseFor } from "../utils";
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

  log("Added watermark element", watermark);
}

/** Called whenever the menu exists to add a BYTM-Configuration button */
export function addConfigMenuOption(container: HTMLElement) {
  const cfgOptElem = document.createElement("a");
  cfgOptElem.role = "button";
  cfgOptElem.className = "bytm-cfg-menu-option bytm-anchor";
  cfgOptElem.ariaLabel = "Click to open BetterYTM's configuration menu";
  
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

  cfgOptItemElem.appendChild(cfgOptIconElem);
  cfgOptItemElem.appendChild(cfgOptTextElem);

  cfgOptElem.appendChild(cfgOptItemElem);

  container.appendChild(cfgOptElem);

  log("Added BYTM-Configuration button to menu popover", cfgOptElem);
}

//#MARKER remove upgrade tab

/** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
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

  log(`Added buttons to ${queueItems.length} existing queue ${autoPlural("item", queueItems)}`);
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

          imgEl.src = getAssetUrl("spinner.svg");
          imgEl.classList.add("bytm-spinner");
        }

        lyricsUrl = cachedLyricsUrl ?? await getGeniusUrl(artistsSan, songSan);

        const resetImgElem = () => {
          imgEl.src = getAssetUrl("external/genius.png");
          imgEl.classList.remove("bytm-spinner");
        };

        if(!cachedLyricsUrl) {
          songInfo.removeAttribute("data-bytm-loading");

          // so the new image doesn't "blink"
          setTimeout(resetImgElem, 100);
        }

        if(!lyricsUrl) {
          resetImgElem();
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
    imgElem.src = getAssetUrl("delete.svg");

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

// TODO: add to thumbnails in "songs" list on channel pages (/channel/$id)
// TODO: add to thumbnails in playlists (/playlist?list=$id)

/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
export function addAnchorImprovements() {
  //#SECTION carousel shelves
  try {
    // home page

    /** Only adds anchor improvements for carousel shelves that contain the regular list-item-renderer, not the two-row-item-renderer */
    const condCarouselImprovements = (el: HTMLElement) => {
      const listItemRenderer = el.querySelector("ytmusic-responsive-list-item-renderer");
      if(listItemRenderer) {
        const itemsElem = el.querySelector<HTMLElement>("ul#items");
        if(itemsElem) {
          const improvedElems = improveCarouselAnchors(itemsElem);
          improvedElems > 0 && log(`Added anchor improvements to ${improvedElems} carousel shelf ${autoPlural("item", improvedElems)}`);
        }
      }
    };

    // initial three shelves aren't included in the event fire
    onSelectorExists("ytmusic-carousel-shelf-renderer", () => {
      const carouselShelves = document.body.querySelectorAll<HTMLElement>("ytmusic-carousel-shelf-renderer");
      carouselShelves.forEach(condCarouselImprovements);
    });

    // every shelf that's loaded by scrolling:
    siteEvents.on("carouselShelvesChanged", (evt) => {
      const { addedNodes, removedNodes } = getEvtData<Record<"addedNodes" | "removedNodes", NodeListOf<HTMLElement>>>(evt);
      void removedNodes;

      if(addedNodes.length > 0)
        addedNodes.forEach(condCarouselImprovements);
    });

    // related tab in /watch

    // TODO: items are lazy-loaded so this needs to be done differently
    // maybe the onSelectorExists feature can be expanded to conditionally support continuous checking & querySelectorAll
    const relatedTabAnchorImprovements = (tabElem: HTMLElement) => {
      const relatedCarouselShelves = tabElem?.querySelectorAll<HTMLElement>("ytmusic-carousel-shelf-renderer");
      if(relatedCarouselShelves)
        relatedCarouselShelves.forEach(condCarouselImprovements);
    };

    const relatedTabContentsSelector = "ytmusic-section-list-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] #contents";

    onSelectorExists("ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"]", (relatedTabContainer) => {
      const relatedTabObserver = new MutationObserver(([ { addedNodes, removedNodes } ]) => {
        if(addedNodes.length > 0 || removedNodes.length > 0)
          relatedTabAnchorImprovements(document.querySelector<HTMLElement>(relatedTabContentsSelector)!);
      });
      relatedTabObserver.observe(relatedTabContainer, {
        childList: true,
      });
    });

    onSelectorExists(relatedTabContentsSelector, (relatedTabContents) => {
      relatedTabAnchorImprovements(relatedTabContents);
    });
  }
  catch(err) {
    error("Couldn't improve carousel shelf anchors due to an error:", err);
  }

  //#SECTION sidebar

  try {
    const addSidebarAnchors = (sidebarCont: HTMLElement) => {
      const items = sidebarCont.parentNode!.querySelectorAll<HTMLElement>("ytmusic-guide-entry-renderer tp-yt-paper-item");
      improveSidebarAnchors(items);
      return items.length;
    };

    onSelectorExists("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer", (sidebarCont) => {
      const itemsAmt = addSidebarAnchors(sidebarCont);
      log(`Added anchors around ${itemsAmt} sidebar ${autoPlural("item", itemsAmt)}`);
    });

    onSelectorExists("ytmusic-app-layout #mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", (miniSidebarCont) => {
      const itemsAmt = addSidebarAnchors(miniSidebarCont);
      log(`Added anchors around ${itemsAmt} mini sidebar ${autoPlural("item", itemsAmt)}`);
    });
  }
  catch(err) {
    error("Couldn't add anchors to sidebar items due to an error:", err);
  }
}

const sidebarPaths = [
  "/",
  "/explore",
  "/library",
];

/**
 * Adds anchors to the sidebar items so they can be opened in a new tab
 * @param sidebarItem 
 */
function improveSidebarAnchors(sidebarItems: NodeListOf<HTMLElement>) {
  sidebarItems.forEach((item, i) => {
    const anchorElem = document.createElement("a");
    anchorElem.className = "bytm-anchor";
    anchorElem.role = "button";
    anchorElem.target = "_self";
    anchorElem.href = sidebarPaths[i] ?? "#";
    anchorElem.title = "Middle click to open in a new tab";
    anchorElem.addEventListener("click", (e) => {
      e.preventDefault();
    });

    addParent(item, anchorElem);
  });
}

/**
 * Actually adds the anchor improvements to carousel shelf items
 * @param itemsElement The container with the selector `ul#items` inside of each `ytmusic-carousel`
 */
function improveCarouselAnchors(itemsElement: HTMLElement) {
  if(itemsElement.classList.contains("bytm-anchors-improved"))
    return 0;

  let improvedElems = 0;
  try {
    const allListItems = itemsElement.querySelectorAll<HTMLElement>("ytmusic-responsive-list-item-renderer");
    for(const listItem of allListItems) {
      const thumbnailElem = listItem.querySelector<HTMLElement>(".left-items");
      const titleElem = listItem.querySelector<HTMLAnchorElement>(".title-column yt-formatted-string.title a");

      if(!thumbnailElem || !titleElem) {
        error("Couldn't add carousel shelf anchor improvements because either the thumbnail or title element couldn't be found");
        continue;
      }

      const thumbnailAnchor = document.createElement("a");
      thumbnailAnchor.className = "bytm-carousel-shelf-anchor bytm-anchor";
      thumbnailAnchor.href = titleElem.href;
      thumbnailAnchor.target = "_self";
      thumbnailAnchor.role = "button";

      thumbnailAnchor.addEventListener("click", (e) => {
        e.preventDefault();
      });

      addParent(thumbnailElem, thumbnailAnchor);
      improvedElems++;
    }
  }
  catch(err) {
    error("Couldn't add anchor improvements due to error:", err);
  }
  finally {
    itemsElement.classList.add("bytm-anchors-improved");
  }

  return improvedElems;
}
