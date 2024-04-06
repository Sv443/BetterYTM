import { addParent, autoPlural, debounce, fetchAdvanced, insertAfter, openInNewTab, pauseFor } from "@sv443-network/userutils";
import { getFeatures } from "../config";
import { siteEvents } from "../siteEvents";
import { addSelectorListener } from "../observers";
import { error, getResourceUrl, log, warn, t, onInteraction, getBestThumbnailUrl, getDomain, addStyle, currentMediaType, domLoaded, waitVideoElementReady } from "../utils";
import { scriptInfo } from "../constants";
import { openCfgMenu } from "../menu/menu_old";
import { createGenericBtn } from "../components";
import "./layout.css";

//#region cfg menu buttons

let logoExchanged = false, improveLogoCalled = false;

/** Adds a watermark beneath the logo */
export async function addWatermark() {
  const watermark = document.createElement("a");
  watermark.role = "button";
  watermark.id = "bytm-watermark";
  watermark.className = "style-scope ytmusic-nav-bar bytm-no-select";
  watermark.textContent = scriptInfo.name;
  watermark.ariaLabel = watermark.title = t("open_menu_tooltip", scriptInfo.name);
  watermark.tabIndex = 0;

  improveLogo();

  const watermarkOpenMenu = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();

    if((!e.shiftKey && !e.ctrlKey) || logoExchanged)
      openCfgMenu();
    if(!logoExchanged && (e.shiftKey || e.ctrlKey))
      exchangeLogo();
  };

  onInteraction(watermark, watermarkOpenMenu);

  addSelectorListener("navBar", "ytmusic-nav-bar #left-content", {
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

    addSelectorListener("navBar", "ytmusic-logo a", {
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
  addSelectorListener("navBar", ".bytm-mod-logo", {
    listener: async (logoElem) => {
      if(logoElem.classList.contains("bytm-logo-exchanged"))
        return;

      logoExchanged = true;
      logoElem.classList.add("bytm-logo-exchanged");

      const iconUrl = await getResourceUrl("img-logo");

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

/** Called whenever the avatar popover menu exists on YTM to add a BYTM config menu button to the user menu popover */
export async function addConfigMenuOptionYTM(container: HTMLElement) {
  const cfgOptElem = document.createElement("div");
  cfgOptElem.className = "bytm-cfg-menu-option";
  
  const cfgOptItemElem = document.createElement("div");
  cfgOptItemElem.className = "bytm-cfg-menu-option-item";
  cfgOptItemElem.role = "button";
  cfgOptItemElem.tabIndex = 0;
  cfgOptItemElem.ariaLabel = cfgOptItemElem.title = t("open_menu_tooltip", scriptInfo.name);

  onInteraction(cfgOptItemElem, async (e: MouseEvent | KeyboardEvent) => {
    const settingsBtnElem = document.querySelector<HTMLElement>("ytmusic-nav-bar ytmusic-settings-button tp-yt-paper-icon-button");
    settingsBtnElem?.click();

    await pauseFor(20);

    if((!e.shiftKey && !e.ctrlKey) || logoExchanged)
      openCfgMenu();
    if(!logoExchanged && (e.shiftKey || e.ctrlKey))
      exchangeLogo();
  });

  const cfgOptIconElem = document.createElement("img");
  cfgOptIconElem.className = "bytm-cfg-menu-option-icon";
  cfgOptIconElem.src = await getResourceUrl("img-logo");

  const cfgOptTextElem = document.createElement("div");
  cfgOptTextElem.className = "bytm-cfg-menu-option-text";
  cfgOptTextElem.textContent = t("config_menu_option", scriptInfo.name);

  cfgOptItemElem.appendChild(cfgOptIconElem);
  cfgOptItemElem.appendChild(cfgOptTextElem);

  cfgOptElem.appendChild(cfgOptItemElem);

  container.appendChild(cfgOptElem);

  improveLogo();

  log("Added BYTM-Configuration button to menu popover");
}

/** Called whenever the titlebar (masthead) exists on YT to add a BYTM config menu button */
export async function addConfigMenuOptionYT(container: HTMLElement) {
  const btnElem = await createGenericBtn({
    resourceName: "img-logo",
    title: t("open_menu_tooltip", scriptInfo.name),
    onClick(e) {
      if((!e.shiftKey && !e.ctrlKey) || logoExchanged)
        openCfgMenu();
      if(!logoExchanged && (e.shiftKey || e.ctrlKey))
        exchangeLogo();
    },
  });

  const firstChild = container.firstElementChild;

  if(firstChild)
    container.insertBefore(btnElem, firstChild);
  else {
    const notifEl = container.querySelector("ytd-notification-topbar-button-renderer");
    notifEl && insertAfter(notifEl, btnElem);
  }
}

//#region rem upgrade tab

/** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
export async function removeUpgradeTab() {
  addSelectorListener("sideBar", "#contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
    listener: (tabElemLarge) => {
      tabElemLarge.remove();
      log("Removed large upgrade tab");
    },
  });
  addSelectorListener("sideBarMini", "ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
    listener: (tabElemSmall) => {
      tabElemSmall.remove();
      log("Removed small upgrade tab");
    },
  });
}

//#region anchor improvements

/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
export async function addAnchorImprovements() {
  try {
    const css = await (await fetchAdvanced(await getResourceUrl("css-anchor_improvements"))).text();
    if(css)
      addStyle(css, "anchor-improvements");
  }
  catch(err) {
    error("Couldn't add anchor improvements CSS due to an error:", err);
  }

  //#region carousel shelves
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

    // TODO: needs to be optimized

    // home page

    addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // related tab in /watch

    addSelectorListener("body", "ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // playlists

    addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // generic shelves

    addSelectorListener("body", "#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });
  }
  catch(err) {
    error("Couldn't improve carousel shelf anchors due to an error:", err);
  }

  //#region sidebar

  try {
    const addSidebarAnchors = (sidebarCont: HTMLElement) => {
      const items = sidebarCont.parentNode!.querySelectorAll<HTMLElement>("ytmusic-guide-entry-renderer tp-yt-paper-item");
      improveSidebarAnchors(items);
      return items.length;
    };

    addSelectorListener("sideBar", "#contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
      listener: (sidebarCont) => {
        const itemsAmt = addSidebarAnchors(sidebarCont);
        log(`Added anchors around ${itemsAmt} sidebar ${autoPlural("item", itemsAmt)}`);
      },
    });

    addSelectorListener("sideBarMini", "ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
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
    anchorElem.ariaLabel = anchorElem.title = t("middle_click_open_tab");
    anchorElem.addEventListener("click", (e) => {
      e.preventDefault();
    });

    addParent(item, anchorElem);
  });
}

//#region rem tracking param

/** Removes the ?si tracking parameter from share URLs */
export async function initRemShareTrackParam() {
  const removeSiParam = (inputElem: HTMLInputElement) => {
    try {
      if(!inputElem.value.match(/(&|\?)si=/i))
        return;

      const url = new URL(inputElem.value);
      url.searchParams.delete("si");
      inputElem.value = String(url);

      log(`Removed tracking parameter from share link -> ${url}`);
    }
    catch(err) {
      warn("Couldn't remove tracking parameter from share link due to error:", err);
    }
  };

  const [sharePanelSel, inputSel] = (() => {
    switch(getDomain()) {
    case "ytm": return ["tp-yt-paper-dialog ytmusic-unified-share-panel-renderer", "input#share-url"];
    case "yt": return ["ytd-unified-share-panel-renderer", "input#share-url"];
    }
  })();

  addSelectorListener("body", sharePanelSel, {
    listener: (sharePanelEl) => {
      const obs = new MutationObserver(() => {
        const inputElem = sharePanelEl.querySelector<HTMLInputElement>(inputSel);
        inputElem && removeSiParam(inputElem);
      });

      obs.observe(sharePanelEl, {
        childList: true,
        subtree: true,
        attributeFilter: ["aria-hidden", "aria-checked", "checked"],
      });
    },
  });
}

//#region fix spacing

/** Applies global CSS to fix various spacings */
export async function fixSpacing() {
  try {
    const css = await (await fetchAdvanced(await getResourceUrl("css-fix_spacing"))).text();
    if(css)
      addStyle(css, "fix-spacing");
  }
  catch(err) {
    error("Couldn't fix spacing due to an error:", err);
  }
}

//#region scroll to active

/** Adds a button to the queue to scroll to the active song */
export async function addScrollToActiveBtn() {
  addSelectorListener("sidePanel", "#tabsContent tp-yt-paper-tab:nth-of-type(1)", {
    listener: async (tabElem) => {
      const containerElem = document.createElement("div");
      containerElem.id = "bytm-scroll-to-active-btn-cont";

      const linkElem = document.createElement("div");
      linkElem.id = "bytm-scroll-to-active-btn";
      linkElem.tabIndex = 0;
      linkElem.classList.add("ytmusic-player-bar", "bytm-generic-btn");
      linkElem.ariaLabel = linkElem.title = t("scroll_to_playing");
      linkElem.role = "button";

      const imgElem = document.createElement("img");
      imgElem.classList.add("bytm-generic-btn-img");
      imgElem.src = await getResourceUrl("icon-skip_to");

      const scrollToActiveInteraction = () => {
        const activeItem = document.querySelector<HTMLElement>("#side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
        if(!activeItem)
          return;

        activeItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      };

      siteEvents.on("fullscreenToggled", (isFullscreen) => {
        if(isFullscreen)
          containerElem.classList.add("hidden");
        else
          containerElem.classList.remove("hidden");
      });

      onInteraction(linkElem, scrollToActiveInteraction, { capture: true });

      linkElem.appendChild(imgElem);
      containerElem.appendChild(linkElem);
      tabElem.appendChild(containerElem);
    },
  });
}

//#region thumbnail overlay

/** To be changed when the toggle button is pressed - used to invert the state of "showOverlay" */
let invertOverlay = false;

export async function initThumbnailOverlay() {
  const behavior = getFeatures().thumbnailOverlayBehavior;
  const toggleBtnShown = getFeatures().thumbnailOverlayToggleBtnShown;
  if(behavior === "never" && !toggleBtnShown)
    return;

  await waitVideoElementReady();

  const playerSelector = "ytmusic-player#player";
  const playerEl = document.querySelector<HTMLElement>(playerSelector);

  if(!playerEl)
    return error("Couldn't find video player element while adding thumbnail overlay");

  /** Checks and updates the overlay and toggle button states based on the current song type (yt video or ytm song) */
  const updateOverlayVisibility = async () => {
    if(!domLoaded)
      return;

    let showOverlay = behavior === "always";
    const isVideo = currentMediaType() === "video";

    if(behavior === "videosOnly" && isVideo)
      showOverlay = true;
    else if(behavior === "songsOnly" && !isVideo)
      showOverlay = true;

    showOverlay = invertOverlay ? !showOverlay : showOverlay;

    const overlayElem = document.querySelector<HTMLElement>("#bytm-thumbnail-overlay");
    const thumbElem = document.querySelector<HTMLElement>("#bytm-thumbnail-overlay-img");
    const indicatorElem = document.querySelector<HTMLElement>("#bytm-thumbnail-overlay-indicator");

    if(overlayElem)
      overlayElem.style.display = showOverlay ? "block" : "none";
    if(thumbElem)
      thumbElem.ariaHidden = String(!showOverlay);
    if(indicatorElem) {
      indicatorElem.style.display = showOverlay ? "block" : "none";
      indicatorElem.ariaHidden = String(!showOverlay);
    }

    if(getFeatures().thumbnailOverlayToggleBtnShown) {
      const toggleBtnElem = document.querySelector<HTMLImageElement>("#bytm-thumbnail-overlay-toggle");
      const toggleBtnImgElem = document.querySelector<HTMLImageElement>("#bytm-thumbnail-overlay-toggle > img");

      if(toggleBtnImgElem)
        toggleBtnImgElem.src = await getResourceUrl(`icon-image${showOverlay ? "_filled" : ""}` as "icon-image" | "icon-image_filled");
      if(toggleBtnElem)
        toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay_toggle_btn_tooltip${showOverlay ? "_hide" : "_show"}`);
    }
  };

  const applyThumbUrl = async (watchId: string) => {
    const thumbUrl = await getBestThumbnailUrl(watchId);
    if(thumbUrl) {
      const toggleBtnElem = document.querySelector<HTMLAnchorElement>("#bytm-thumbnail-overlay-toggle");
      const thumbImgElem = document.querySelector<HTMLImageElement>("#bytm-thumbnail-overlay-img");
      if(toggleBtnElem)
        toggleBtnElem.href = thumbUrl;
      if(thumbImgElem)
        thumbImgElem.src = thumbUrl;
    }
  };

  const unsubWatchIdChanged = siteEvents.on("watchIdChanged", (watchId) => {
    unsubWatchIdChanged();
    addSelectorListener("body", "#bytm-thumbnail-overlay", {
      listener: () => {
        applyThumbUrl(watchId);
        updateOverlayVisibility();
      },
    });
  });

  const createElements = async () => {
    // overlay
    const overlayElem = document.createElement("div");
    overlayElem.id = "bytm-thumbnail-overlay";
    overlayElem.classList.add("bytm-no-select");
    overlayElem.style.display = "none";

    let indicatorElem: HTMLImageElement | undefined;
    if(getFeatures().thumbnailOverlayShowIndicator) {
      indicatorElem = document.createElement("img");
      indicatorElem.id = "bytm-thumbnail-overlay-indicator";
      indicatorElem.src = await getResourceUrl("icon-image");
      indicatorElem.role = "presentation";
      indicatorElem.title = indicatorElem.ariaLabel = t("thumbnail_overlay_indicator_tooltip");
      indicatorElem.ariaHidden = "true";
      indicatorElem.style.display = "none";
    }
  
    const thumbImgElem = document.createElement("img");
    thumbImgElem.id = "bytm-thumbnail-overlay-img";
    thumbImgElem.role = "presentation";
    thumbImgElem.ariaHidden = "true";
    thumbImgElem.style.objectFit = getFeatures().thumbnailOverlayImageFit;
  
    overlayElem.appendChild(thumbImgElem);
    playerEl.appendChild(overlayElem);
    indicatorElem && playerEl.appendChild(indicatorElem);


    siteEvents.on("watchIdChanged", async (watchId) => {
      invertOverlay = false;
      applyThumbUrl(watchId);
      updateOverlayVisibility();
    });
  
    // toggle button
    if(toggleBtnShown) {
      const toggleBtnElem = document.createElement("a");
      toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
      toggleBtnElem.role = "button";
      toggleBtnElem.tabIndex = 0;
      toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");
  
      onInteraction(toggleBtnElem, (e) => {
        if(e instanceof MouseEvent && e.shiftKey)
          return openInNewTab(toggleBtnElem.href);
        invertOverlay = !invertOverlay;
        updateOverlayVisibility();
      });
  
      const imgElem = document.createElement("img");
      imgElem.classList.add("bytm-generic-btn-img");
  
      toggleBtnElem.appendChild(imgElem);
  
      addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
        listener: (likeContainer) => insertAfter(likeContainer, toggleBtnElem),
      });
    }

    log("Added thumbnail overlay");
  };

  addSelectorListener("mainPanel", playerSelector, {
    listener(playerEl) {
      if(playerEl.getAttribute("player-ui-state") === "INACTIVE") {
        const obs = new MutationObserver(() => {
          if(playerEl.getAttribute("player-ui-state") === "INACTIVE")
            return;
          createElements();
          obs.disconnect();
        });

        obs.observe(playerEl, {
          attributes: true,
          attributeFilter: ["player-ui-state"],
        });
      }
      else
        createElements();
    },
  });
}

//#region hide cursor on idle

export async function initHideCursorOnIdle() {
  addSelectorListener("mainPanel", "ytmusic-player#player", {
    listener(vidContainer) {
      const overlaySelector = "ytmusic-player #song-media-window";

      const overlayElem = document.querySelector<HTMLElement>(overlaySelector);

      if(!overlayElem)
        return warn("Couldn't find overlay element while initializing cursor hiding");

      /** Timer after which the cursor is hidden */
      let cursorHideTimer: ReturnType<typeof setTimeout>;
      /** Timer for the opacity transition while switching to the hidden state */
      let hideTransTimer: ReturnType<typeof setTimeout> | undefined;

      const hide = () => {
        if(vidContainer.classList.contains("bytm-cursor-hidden"))
          return;
        overlayElem.style.opacity = ".000001 !important";
        hideTransTimer = setTimeout(() => {
          overlayElem.style.display = "none";
          vidContainer.style.cursor = "none";
          vidContainer.classList.add("bytm-cursor-hidden");
          hideTransTimer = undefined;
        }, 200);
      };

      const show = () => {
        hideTransTimer && clearTimeout(hideTransTimer);
        if(!vidContainer.classList.contains("bytm-cursor-hidden"))
          return;
        vidContainer.classList.remove("bytm-cursor-hidden");
        vidContainer.style.cursor = "initial";
        overlayElem.style.display = "initial";
        overlayElem.style.opacity = "1 !important";
      };

      const cursorHideTimerCb = () =>
        cursorHideTimer = setTimeout(hide, getFeatures().hideCursorOnIdleDelay * 1000);

      const onMove = () => {
        cursorHideTimer && clearTimeout(cursorHideTimer);
        show();
        cursorHideTimerCb();
      };

      vidContainer.addEventListener("mouseenter", onMove);
      vidContainer.addEventListener("mousemove", debounce(onMove, 200, "rising"));
      vidContainer.addEventListener("mouseleave", () => {
        cursorHideTimer && clearTimeout(cursorHideTimer);
        hideTransTimer && clearTimeout(hideTransTimer);
        hide();
      });
      vidContainer.addEventListener("click", () => {
        show();
        cursorHideTimerCb();
        setTimeout(hide, 3000);
      });

      log("Initialized cursor hiding on idle");
    },
  });
}
