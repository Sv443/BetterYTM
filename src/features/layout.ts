import type { Event } from "@billjs/event-emitter";
import { addGlobalStyle, addParent, autoPlural, fetchAdvanced, insertAfter, onSelector, openInNewTab, pauseFor } from "@sv443-network/userutils";
import type { FeatureConfig } from "../types";
import { scriptInfo } from "../constants";
import { getFeatures } from "../config";
import { error, getResourceUrl, log } from "../utils";
import { getEvtData, siteEvents } from "../events";
import { openMenu } from "./menu/menu_old";
import { getGeniusUrl, createLyricsBtn, sanitizeArtists, sanitizeSong, getLyricsCacheEntry } from "./lyrics";
import "./layout.css";
import { featInfo } from ".";

let features: FeatureConfig;

export async function preInitLayout() {
  features = await getFeatures();
}

//#MARKER BYTM-Config buttons

let menuOpenAmt = 0, logoExchanged = false;

/** Adds a watermark beneath the logo */
export function addWatermark() {
  const watermark = document.createElement("a");
  watermark.role = "button";
  watermark.id = "bytm-watermark";
  watermark.className = "style-scope ytmusic-nav-bar bytm-no-select";
  watermark.innerText = scriptInfo.name;
  watermark.title = "Open menu";
  watermark.tabIndex = 1000;

  improveLogo();

  watermark.addEventListener("click", (e) => {
    e.stopPropagation();
    menuOpenAmt++;

    if((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
      openMenu();
    if((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
      exchangeLogo();
  });

  // when using the tab key to navigate
  watermark.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
      e.stopPropagation();
      menuOpenAmt++;

      if((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
        openMenu();
      if((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
        exchangeLogo();
    }
  });

  const logoElem = document.querySelector("#left-content") as HTMLElement;
  insertAfter(logoElem, watermark);

  log("Added watermark element", watermark);
}

/** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
async function improveLogo() {
  try {
    const res = await fetchAdvanced("https://music.youtube.com/img/on_platform_logo_dark.svg");
    const svg = await res.text();
    
    onSelector("ytmusic-logo a", {
      listener: (logoElem) => {
        logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
        logoElem.innerHTML = svg;

        logoElem.querySelectorAll("ellipse").forEach((e) => {
          e.classList.add("bytm-mod-logo-ellipse");
        });

        logoElem.querySelector("path")?.classList.add("bytm-mod-logo-path");

        log("Swapped logo to inline SVG");
      },
    });
  }
  catch(err) {
    error("Couldn't improve logo due to an error:", err);
  }
}

/** Exchanges the default YTM logo into BetterYTM's logo with a sick ass animation */
function exchangeLogo() {
  onSelector(".bytm-mod-logo", {
    listener: async (logoElem) => {
      if(logoElem.classList.contains("bytm-logo-exchanged"))
        return;

      logoExchanged = true;
      logoElem.classList.add("bytm-logo-exchanged");

      const iconUrl = await getResourceUrl("icon");

      const newLogo = document.createElement("img");
      newLogo.className = "bytm-mod-logo-img";
      newLogo.src = iconUrl;

      logoElem.insertBefore(newLogo, logoElem.querySelector("svg"));

      document.head.querySelectorAll<HTMLLinkElement>("link[rel=\"icon\"]").forEach((e) => {
        e.href = iconUrl;
      });

      setTimeout(() => {
        logoElem.querySelectorAll(".bytm-mod-logo-ellipse").forEach(e => e.remove());
      }, 1000);
    },
  });
}

/** Called whenever the menu exists to add a BYTM-Configuration button */
export async function addConfigMenuOption(container: HTMLElement) {
  const cfgOptElem = document.createElement("div");
  cfgOptElem.role = "button";
  cfgOptElem.className = "bytm-cfg-menu-option";
  
  const cfgOptItemElem = document.createElement("div");
  cfgOptItemElem.className = "bytm-cfg-menu-option-item";
  cfgOptItemElem.ariaLabel = cfgOptItemElem.title = "Click to open BetterYTM's configuration menu";
  cfgOptItemElem.addEventListener("click", (e) => {
    const settingsBtnElem = document.querySelector<HTMLElement>("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
    settingsBtnElem?.click();
    menuOpenAmt++;
    if((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
      openMenu();
    if((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
      exchangeLogo();
  });

  const cfgOptIconElem = document.createElement("img");
  cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
  cfgOptIconElem.src = await getResourceUrl("icon");

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
  onSelector("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-child(4)", {
    listener: (tabElemLarge) => {
      tabElemLarge.remove();
      log("Removed large upgrade tab");
    },
  });
  onSelector("ytmusic-app-layout #mini-guide ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-child(4)", {
    listener: (tabElemSmall) => {
      tabElemSmall.remove();
      log("Removed small upgrade tab");
    },
  });
}

//#MARKER volume slider

export function initVolumeFeatures() {
  // not technically an input element but behaves pretty much the same
  onSelector<HTMLInputElement>("tp-yt-paper-slider#volume-slider", {
    listener: (sliderElem) => {
      const volSliderCont = document.createElement("div");
      volSliderCont.id = "bytm-vol-slider-cont";

      addParent(sliderElem, volSliderCont);

      if(typeof features.volumeSliderSize === "number")
        setVolSliderSize();

      if(features.volumeSliderLabel)
        addVolumeSliderLabel(sliderElem, volSliderCont);

      setVolSliderStep(sliderElem);
    },
  });
}

/** Adds a percentage label to the volume slider and tooltip */
function addVolumeSliderLabel(sliderElem: HTMLInputElement, sliderCont: HTMLDivElement) {
  const labelElem = document.createElement("div");
  labelElem.className = "bytm-vol-slider-label";
  labelElem.innerText = `${sliderElem.value}%`;

  // prevent video from minimizing
  labelElem.addEventListener("click", (e) => e.stopPropagation());

  const getLabelTexts = (slider: HTMLInputElement) => {
    const labelShort = `${slider.value}%`;
    const sensText = features.volumeSliderStep !== featInfo.volumeSliderStep.default ? ` (Sensitivity: ${slider.step}%)` : "";
    const labelFull = `Volume: ${labelShort}${sensText}`;

    return { labelShort, labelFull };
  };

  const { labelFull } = getLabelTexts(sliderElem);
  sliderCont.setAttribute("title", labelFull);
  sliderElem.setAttribute("title", labelFull);
  sliderElem.setAttribute("aria-valuetext", labelFull);

  const updateLabel = () => {
    const { labelShort, labelFull } = getLabelTexts(sliderElem);

    sliderCont.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);

    const labelElem2 = document.querySelector<HTMLDivElement>(".bytm-vol-slider-label");
    if(labelElem2)
      labelElem2.innerText = labelShort;
  };

  sliderElem.addEventListener("change", () => updateLabel());

  onSelector("#bytm-vol-slider-cont", {
    listener: (volumeCont) => {
      volumeCont.appendChild(labelElem);
      log("Added volume slider label", labelElem);
    },
  });

  let lastSliderVal = Number(sliderElem.value);

  // show label if hovering over slider or slider is focused
  const sliderHoverObserver = new MutationObserver(() => {
    if(sliderElem.classList.contains("on-hover") || document.activeElement === sliderElem)
      labelElem.classList.add("bytm-visible");
    else if(labelElem.classList.contains("bytm-visible") || document.activeElement !== sliderElem)
      labelElem.classList.remove("bytm-visible");

    if(Number(sliderElem.value) !== lastSliderVal) {
      lastSliderVal = Number(sliderElem.value);
      updateLabel();
    }
  });

  sliderHoverObserver.observe(sliderElem, {
    attributes: true,
  });
}

/** Sets the volume slider to a set size */
function setVolSliderSize() {
  const { volumeSliderSize: size } = features;

  if(typeof size !== "number" || isNaN(Number(size)))
    return;

  addGlobalStyle(`\
/* BetterYTM - set volume slider size */
#bytm-vol-slider-cont tp-yt-paper-slider#volume-slider {
  width: ${size}px !important;
}`);
}

/** Sets the `step` attribute of the volume slider */
function setVolSliderStep(sliderElem: HTMLInputElement) {
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

  const lyricsIconUrl = await getResourceUrl("lyrics");
  const deleteIconUrl = await getResourceUrl("delete");

  //#SECTION lyrics btn
  const lyricsBtnElem = await createLyricsBtn(undefined, false);
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

          imgEl.src = await getResourceUrl("spinner");
          imgEl.classList.add("bytm-spinner");
        }

        lyricsUrl = cachedLyricsUrl ?? await getGeniusUrl(artistsSan, songSan);

        const resetImgElem = () => {
          imgEl.src = lyricsIconUrl;
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
    imgElem.src = deleteIconUrl;

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
// TODO:FIXME: only works for the first 7 items of each carousel shelf -> probably needs own mutation observer

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
    onSelector("ytmusic-carousel-shelf-renderer", {
      listener: () => {
        const carouselShelves = document.body.querySelectorAll<HTMLElement>("ytmusic-carousel-shelf-renderer");
        carouselShelves.forEach(condCarouselImprovements);
      },
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

    onSelector("ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"]", {
      listener: (relatedTabContainer) => {
        const relatedTabObserver = new MutationObserver(([ { addedNodes, removedNodes } ]) => {
          if(addedNodes.length > 0 || removedNodes.length > 0)
            relatedTabAnchorImprovements(document.querySelector<HTMLElement>(relatedTabContentsSelector)!);
        });
        relatedTabObserver.observe(relatedTabContainer, {
          childList: true,
        });
      },
    });

    onSelector(relatedTabContentsSelector, {
      listener: (relatedTabContents) => {
        relatedTabAnchorImprovements(relatedTabContents);
      },
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

    onSelector("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
      listener: (sidebarCont) => {
        const itemsAmt = addSidebarAnchors(sidebarCont);
        log(`Added anchors around ${itemsAmt} sidebar ${autoPlural("item", itemsAmt)}`);
      },
    });

    onSelector("ytmusic-app-layout #mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
      listener: (miniSidebarCont) => {
        const itemsAmt = addSidebarAnchors(miniSidebarCont);
        log(`Added anchors around ${itemsAmt} mini sidebar ${autoPlural("item", itemsAmt)}`);
      },
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
    anchorElem.classList.add("bytm-anchor", "bytm-no-select");
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
