import { addGlobalStyle, addParent, amplifyMedia, autoPlural, fetchAdvanced, insertAfter, onSelector, openInNewTab, pauseFor } from "@sv443-network/userutils";
import type { FeatureConfig } from "../types";
import { scriptInfo } from "../constants";
import { error, getResourceUrl, info, log, warn } from "../utils";
import { SiteEventsMap, siteEvents } from "../events";
import { t } from "../translations";
import { openCfgMenu } from "../menu/menu_old";
import { getGeniusUrl, createLyricsBtn, sanitizeArtists, sanitizeSong, getLyricsCacheEntry, splitVideoTitle } from "./lyrics";
import "./layout.css";

let features: FeatureConfig;

export function preInitLayout(feats: FeatureConfig) {
  features = feats;
}

//#MARKER BYTM-Config buttons

let menuOpenAmt = 0, logoExchanged = false, improveLogoCalled = false;

/** Adds a watermark beneath the logo */
export function addWatermark() {
  const watermark = document.createElement("a");
  watermark.role = "button";
  watermark.id = "bytm-watermark";
  watermark.className = "style-scope ytmusic-nav-bar bytm-no-select";
  watermark.innerText = scriptInfo.name;
  watermark.title = t("open_menu_tooltip", scriptInfo.name);
  watermark.tabIndex = 1000;

  improveLogo();

  watermark.addEventListener("click", (e) => {
    e.stopPropagation();
    menuOpenAmt++;

    if((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
      openCfgMenu();
    if((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
      exchangeLogo();
  });

  // when using the tab key to navigate
  watermark.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
      e.stopPropagation();
      menuOpenAmt++;

      if((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
        openCfgMenu();
      if((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
        exchangeLogo();
    }
  });

  onSelector("ytmusic-nav-bar #left-content", {
    listener: (logoElem) => insertAfter(logoElem, watermark),
  });

  log("Added watermark element");
}

/** Turns the regular `<img>`-based logo into inline SVG to be able to animate and modify parts of it */
export async function improveLogo() {
  try {
    if(improveLogoCalled)
      return;
    improveLogoCalled = true;

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

      const iconUrl = await getResourceUrl("logo");

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

/** Called whenever the avatar popover menu exists to add a BYTM-Configuration button to the user menu popover */
export async function addConfigMenuOption(container: HTMLElement) {
  const cfgOptElem = document.createElement("div");
  cfgOptElem.role = "button";
  cfgOptElem.className = "bytm-cfg-menu-option";
  
  const cfgOptItemElem = document.createElement("div");
  cfgOptItemElem.className = "bytm-cfg-menu-option-item";
  cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo.name);
  cfgOptItemElem.addEventListener("click", async (e) => {
    const settingsBtnElem = document.querySelector<HTMLElement>("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
    settingsBtnElem?.click();
    menuOpenAmt++;

    await pauseFor(100);

    if((!e.shiftKey || logoExchanged) && menuOpenAmt !== 5)
      openCfgMenu();
    if((!logoExchanged && e.shiftKey) || menuOpenAmt === 5)
      exchangeLogo();
  });

  const cfgOptIconElem = document.createElement("img");
  cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
  cfgOptIconElem.src = await getResourceUrl("logo");

  const cfgOptTextElem = document.createElement("div");
  cfgOptTextElem.className = "bytm-cfg-menu-option-text";
  cfgOptTextElem.innerText = t("config_menu_option", scriptInfo.name);

  cfgOptItemElem.appendChild(cfgOptIconElem);
  cfgOptItemElem.appendChild(cfgOptTextElem);

  cfgOptElem.appendChild(cfgOptItemElem);

  container.appendChild(cfgOptElem);

  improveLogo();

  log("Added BYTM-Configuration button to menu popover");
}

//#MARKER remove upgrade tab

/** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
export function removeUpgradeTab() {
  onSelector("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
    listener: (tabElemLarge) => {
      tabElemLarge.remove();
      log("Removed large upgrade tab");
    },
  });
  onSelector("ytmusic-app-layout #mini-guide ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
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
function addVolumeSliderLabel(sliderElem: HTMLInputElement, sliderContainer: HTMLDivElement) {
  const labelElem = document.createElement("div");
  labelElem.id = "bytm-vol-slider-label";
  labelElem.innerText = `${sliderElem.value}%`;

  // prevent video from minimizing
  labelElem.addEventListener("click", (e) => e.stopPropagation());

  const getLabelText = (slider: HTMLInputElement) =>
    t("volume_tooltip", slider.value, slider.step);

  const labelFull = getLabelText(sliderElem);
  sliderContainer.setAttribute("title", labelFull);
  sliderElem.setAttribute("title", labelFull);
  sliderElem.setAttribute("aria-valuetext", labelFull);

  const updateLabel = () => {
    const labelFull = getLabelText(sliderElem);

    sliderContainer.setAttribute("title", labelFull);
    sliderElem.setAttribute("title", labelFull);
    sliderElem.setAttribute("aria-valuetext", labelFull);

    const labelElem2 = document.querySelector<HTMLDivElement>("#bytm-vol-slider-label");
    if(labelElem2)
      labelElem2.innerText = `${sliderElem.value}%`;
  };

  sliderElem.addEventListener("change", () => updateLabel());

  onSelector("#bytm-vol-slider-cont", {
    listener: (volumeCont) => {
      volumeCont.appendChild(labelElem);
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
  const addQueueBtns = (
    evt: Parameters<SiteEventsMap["queueChanged" | "autoplayQueueChanged"]>[0],
  ) => {
    let amt = 0;
    for(const queueItm of evt.childNodes as NodeListOf<HTMLElement>) {
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

  const queueItems = document.querySelectorAll<HTMLElement>("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
  if(queueItems.length === 0)
    return;

  queueItems.forEach(itm => addQueueButtons(itm));

  log(`Added buttons to ${queueItems.length} existing queue ${autoPlural("item", queueItems)}`);
}

/**
 * Adds the buttons to each item in the current song queue.  
 * Also observes for changes to add new buttons to new items in the queue.
 * @param queueItem The element with tagname `ytmusic-player-queue-item` to add queue buttons to
 */
async function addQueueButtons(queueItem: HTMLElement) {
  //#SECTION general queue item stuff
  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.className = "bytm-queue-btn-container";

  const lyricsIconUrl = await getResourceUrl("lyrics");
  const deleteIconUrl = await getResourceUrl("delete");

  //#SECTION lyrics btn
  let lyricsBtnElem: HTMLAnchorElement | undefined;

  if(features.lyricsQueueButton) {
    lyricsBtnElem = await createLyricsBtn(undefined, false);

    lyricsBtnElem.title = t("open_lyrics");
    lyricsBtnElem.style.display = "inline-flex";
    lyricsBtnElem.style.visibility = "initial";
    lyricsBtnElem.style.pointerEvents = "initial";

    lyricsBtnElem.addEventListener("click", async (e) => {
      e.stopPropagation();

      const songInfo = queueItem.querySelector<HTMLElement>(".song-info");
      if(!songInfo)
        return;

      const [songEl, artistEl] = songInfo.querySelectorAll<HTMLElement>("yt-formatted-string");
      const song = songEl?.innerText;
      const artist = artistEl?.innerText;
      if(!song || !artist)
        return;

      let lyricsUrl: string | undefined;

      const artistsSan = sanitizeArtists(artist);
      const songSan = sanitizeSong(song);
      const splitTitle = splitVideoTitle(songSan);

      const cachedLyricsUrl = songSan.includes("-")
        ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song)
        : getLyricsCacheEntry(artistsSan, songSan);

      if(cachedLyricsUrl)
        lyricsUrl = cachedLyricsUrl;
      else if(!songInfo.hasAttribute("data-bytm-loading")) {
        const imgEl = lyricsBtnElem?.querySelector<HTMLImageElement>("img");
        if(!imgEl)
          return;

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
          if(confirm(t("lyrics_not_found_confirm_open_search")))
            openInNewTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} ${songSan}`)}`);
          return;
        }
      }

      lyricsUrl && openInNewTab(lyricsUrl);
    });
  }

  //#SECTION delete from queue btn
  let deleteBtnElem: HTMLAnchorElement | undefined;

  if(features.deleteFromQueueButton) {
    deleteBtnElem = document.createElement("a");
    Object.assign(deleteBtnElem, {
      title: t("remove_from_queue"),
      className: "ytmusic-player-bar bytm-delete-from-queue bytm-generic-btn",
      role: "button",
    });
    deleteBtnElem.style.visibility = "initial";

    deleteBtnElem.addEventListener("click", async (e) => {
      e.stopPropagation();

      // container of the queue item popup menu - element gets reused for every queue item
      let queuePopupCont = document.querySelector<HTMLElement>("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
      try {
        // three dots button to open the popup menu of a queue item
        const dotsBtnElem = queueItem.querySelector<HTMLButtonElement>("ytmusic-menu-renderer yt-button-shape button");

        if(queuePopupCont)
          queuePopupCont.setAttribute("data-bytm-hidden", "true");

        dotsBtnElem?.click();
        await pauseFor(20);

        queuePopupCont = document.querySelector<HTMLElement>("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
        queuePopupCont?.setAttribute("data-bytm-hidden", "true");

        // a little bit janky and unreliable but the only way afaik
        const removeFromQueueBtn = queuePopupCont?.querySelector<HTMLElement>("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");

        await pauseFor(10);

        removeFromQueueBtn?.click();
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

  lyricsBtnElem && queueBtnsCont.appendChild(lyricsBtnElem);
  deleteBtnElem && queueBtnsCont.appendChild(deleteBtnElem);

  queueItem.querySelector<HTMLElement>(".song-info")?.appendChild(queueBtnsCont);
  queueItem.classList.add("bytm-has-queue-btns");
}

//#MARKER anchor improvements

/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
export function addAnchorImprovements() {
  //#SECTION carousel shelves
  try {
    const preventDefault = (e: MouseEvent) => e.preventDefault();

    /** Adds anchor improvements to &lt;ytmusic-responsive-list-item-renderer&gt; */
    const addListItemAnchors = (items: NodeListOf<HTMLElement>) => {
      for(const item of items) {
        if(item.classList.contains("bytm-anchor-improved"))
          continue;

        item.classList.add("bytm-anchor-improved");

        const thumbnailElem = item.querySelector<HTMLElement>(".left-items");
        const titleElem = item.querySelector<HTMLAnchorElement>(".title-column .title a");

        if(!thumbnailElem || !titleElem)
          continue;

        const anchorElem = document.createElement("a");
        anchorElem.classList.add("bytm-anchor", "bytm-carousel-shelf-anchor");
        anchorElem.href = titleElem?.href ?? "#";
        anchorElem.target = "_self";
        anchorElem.role = "button";

        anchorElem.addEventListener("click", preventDefault);

        addParent(thumbnailElem, anchorElem);
      }
    };

    // home page

    onSelector<HTMLElement>("#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // related tab in /watch

    onSelector<HTMLElement>("ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // playlists

    onSelector<HTMLElement>("#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // generic shelves

    onSelector<HTMLElement>("#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
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
    anchorElem.title = t("middle_click_open_tab");
    anchorElem.addEventListener("click", (e) => {
      e.preventDefault();
    });

    addParent(item, anchorElem);
  });
}

//#MARKER auto close toasts

/** Closes toasts after a set amount of time */
export function initAutoCloseToasts() {
  try {
    const animTimeout = 300;
    const closeTimeout = Math.max(features.closeToastsTimeout * 1000 + animTimeout, animTimeout);

    onSelector("tp-yt-paper-toast#toast", {
      all: true,
      continuous: true,
      listener: async (toastElems) => {
        for(const toastElem of toastElems) {
          if(!toastElem.hasAttribute("allow-click-through"))
            continue;

          if(toastElem.classList.contains("bytm-closing"))
            continue;
          toastElem.classList.add("bytm-closing");

          await pauseFor(closeTimeout);

          toastElem.classList.remove("paper-toast-open");
          log(`Automatically closed toast '${toastElem.querySelector<HTMLDivElement>("#text-container yt-formatted-string")?.innerText}' after ${features.closeToastsTimeout * 1000}ms`);

          // wait for the transition to finish
          await pauseFor(animTimeout);

          toastElem.style.display = "none";
        }
      },
    });

    log("Initialized automatic toast closing");
  }
  catch(err) {
    error("Error in automatic toast closing:", err);
  }
}

//#MARKER remove share tracking param

/** Continuously removes the ?si tracking parameter from share URLs */
export function removeShareTrackingParam() {
  onSelector<HTMLInputElement>("yt-copy-link-renderer input#share-url", {
    continuous: true,
    listener: (inputElem) => {
      try {
        const url = new URL(inputElem.value);
        if(!url.searchParams.has("si"))
          return;

        url.searchParams.delete("si");
        inputElem.value = String(url);
        log(`Removed tracking parameter from share link: ${url}`);
      }
      catch(err) {
        warn("Couldn't remove tracking parameter from share link due to error:", err);
      }
    },
  });
}

//#MARKER fix margins

/** Applies global CSS to fix various spacings */
export function fixSpacing() {
  addGlobalStyle(`\
ytmusic-carousel-shelf-renderer ytmusic-carousel ytmusic-responsive-list-item-renderer {
  margin-bottom: var(--ytmusic-carousel-item-margin-bottom, 16px) !important;
}

ytmusic-carousel-shelf-renderer ytmusic-carousel {
  --ytmusic-carousel-item-height: 60px !important;
}`);
}

/** Adds a button to the queue to scroll to the active song */
export function addScrollToActiveBtn() {
  onSelector(".side-panel.modular #tabsContent tp-yt-paper-tab:nth-of-type(1)", {
    listener: async (tabElem) => {
      const containerElem = document.createElement("div");
      containerElem.id = "bytm-scroll-to-active-btn-cont";

      const linkElem = document.createElement("div");
      linkElem.id = "bytm-scroll-to-active-btn";
      linkElem.className = "ytmusic-player-bar bytm-generic-btn";
      linkElem.title = t("scroll_to_playing");
      linkElem.role = "button";

      const imgElem = document.createElement("img");
      imgElem.className = "bytm-generic-btn-img";
      imgElem.src = await getResourceUrl("skip_to");

      linkElem.addEventListener("click", (e) => {
        const activeItem = document.querySelector<HTMLElement>(".side-panel.modular .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], .side-panel.modular .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], .side-panel.modular .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
        if(!activeItem)
          return;

        e.preventDefault();
        e.stopImmediatePropagation();

        activeItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });

      linkElem.appendChild(imgElem);
      containerElem.appendChild(linkElem);
      tabElem.appendChild(containerElem);
    },
  });
}

//#MARKER boost gain button

const gainBoostMultiplier = 1.5;
let gainBoosted = false;

/** Adds a button to the media controls to boost the current song's gain */
export async function addBoostGainButton() {
  const iconSrcOn = await getResourceUrl("volume_boost_on");
  const iconSrcOff = await getResourceUrl("volume_boost_off");

  const btnElem = await createMediaCtrlBtn(iconSrcOff);
  btnElem.id = "bytm-boost-gain-btn";
  btnElem.title = t("boost_gain_enable_tooltip", Math.floor(gainBoostMultiplier * 100));

  let amplify: ReturnType<typeof amplifyMedia>["amplify"] | undefined;

  btnElem.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const btnElem = document.querySelector<HTMLElement>("#bytm-boost-gain-btn");
    const videoElem = document.querySelector<HTMLVideoElement>("ytmusic-player video");
    const imgElem = btnElem?.querySelector<HTMLImageElement>("img");

    if(!videoElem || !imgElem || !btnElem)
      return;

    if(!gainBoosted) {
      gainBoosted = true;
      if(amplify)
        amplify(gainBoostMultiplier);
      else
        amplify = amplifyMedia(videoElem, gainBoostMultiplier).amplify;
      imgElem.src = iconSrcOn;
      btnElem.title = t("boost_gain_disable_tooltip");
      info(`Boosted gain by ${Math.floor(gainBoostMultiplier * 100)}%`);
    }
    else {
      gainBoosted = false;
      amplify!(1.0);
      imgElem.src = iconSrcOff;
      btnElem.title = t("boost_gain_enable_tooltip", Math.floor(gainBoostMultiplier * 100));
      info("Disabled gain boost");
    }
  });

  onSelector(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer", {
    listener: (likeCont) => {
      insertAfter(likeCont, btnElem);
      log("Added gain booster button");
    },
  });
}

/** Creates a base media control button element */
export async function createMediaCtrlBtn(imgSrc?: string) {
  const linkElem = document.createElement("span");
  linkElem.classList.add("ytmusic-player-bar", "bytm-generic-btn");
  linkElem.role = "button";
  linkElem.style.visibility = "initial";
  linkElem.style.display = "inline-flex";

  const imgElem = document.createElement("img");
  imgElem.classList.add("bytm-generic-btn-img");
  if(imgSrc)
    imgElem.src = imgSrc;

  linkElem.appendChild(imgElem);

  return linkElem;
}
