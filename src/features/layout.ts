import { addParent, autoPlural, debounce, fetchAdvanced, pauseFor } from "@sv443-network/userutils";
import { getFeatures } from "../config";
import { siteEvents } from "../siteEvents";
import { addSelectorListener } from "../observers";
import { error, getResourceUrl, log, warn, t, onInteraction, openInTab, getBestThumbnailUrl, getDomain, addStyle, currentMediaType, domLoaded, waitVideoElementReady, getVideoTime, fetchCss, addStyleFromResource } from "../utils";
import { scriptInfo } from "../constants";
import { openCfgMenu } from "../menu/menu_old";
import { createCircularBtn } from "../components";
import type { ResourceKey } from "../types";
import "./layout.css";

//#region cfg menu buttons

let logoExchanged = false, improveLogoCalled = false;

/** Adds a watermark beneath the logo */
export async function addWatermark() {
  const watermark = document.createElement("a");
  watermark.role = "button";
  watermark.id = "bytm-watermark";
  watermark.classList.add("style-scope", "ytmusic-nav-bar", "bytm-no-select");
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
    listener: (logoElem) => logoElem.insertAdjacentElement("afterend", watermark),
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
      newLogo.classList.add("bytm-mod-logo-img");
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
  cfgOptElem.classList.add("bytm-cfg-menu-option");

  const cfgOptItemElem = document.createElement("div");
  cfgOptItemElem.classList.add("bytm-cfg-menu-option-item");
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
  cfgOptIconElem.classList.add("bytm-cfg-menu-option-icon");
  cfgOptIconElem.src = await getResourceUrl("img-logo");

  const cfgOptTextElem = document.createElement("div");
  cfgOptTextElem.classList.add("bytm-cfg-menu-option-text");
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
  const cfgOptWrapperElem = document.createElement("div");
  cfgOptWrapperElem.classList.add("bytm-yt-cfg-menu-option", "darkreader-ignore");
  cfgOptWrapperElem.role = "button";
  cfgOptWrapperElem.tabIndex = 0;
  cfgOptWrapperElem.ariaLabel = cfgOptWrapperElem.title = t("open_menu_tooltip", scriptInfo.name);

  const cfgOptElem = document.createElement("div");
  cfgOptElem.classList.add("bytm-yt-cfg-menu-option-inner");

  const cfgOptImgElem = document.createElement("img");
  cfgOptImgElem.classList.add("bytm-yt-cfg-menu-option-icon");
  cfgOptImgElem.src = await getResourceUrl("img-logo");

  const cfgOptItemElem = document.createElement("div");
  cfgOptItemElem.classList.add("bytm-yt-cfg-menu-option-item");
  cfgOptItemElem.textContent = scriptInfo.name;

  cfgOptElem.appendChild(cfgOptImgElem);
  cfgOptElem.appendChild(cfgOptItemElem);

  cfgOptWrapperElem.appendChild(cfgOptElem);

  onInteraction(cfgOptWrapperElem, openCfgMenu);

  const firstChild = container?.firstElementChild;

  if(firstChild)
    container.insertBefore(cfgOptWrapperElem, firstChild);
  else
    return error("Couldn't add config menu option to YT titlebar - couldn't find container element");
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
    const css = await fetchCss("css-anchor_improvements");
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
  if(!await addStyleFromResource("css-fix_spacing"))
    error("Couldn't fix spacing");
}

//#region above queue btns

export async function initAboveQueueBtns() {
  const { scrollToActiveSongBtn, clearQueueBtn } = getFeatures();

  if(!scrollToActiveSongBtn && !clearQueueBtn)
    return;

  addSelectorListener("sidePanel", "ytmusic-tab-renderer ytmusic-queue-header-renderer #buttons", {
    async listener(rightBtnsEl) {
      const aboveQueueBtnCont = document.createElement("div");
      aboveQueueBtnCont.id = "bytm-above-queue-btn-cont";

      addParent(rightBtnsEl, aboveQueueBtnCont);

      const headerEl = rightBtnsEl.closest<HTMLElement>("ytmusic-queue-header-renderer");
      if(!headerEl)
        return error("Couldn't find queue header element while adding above queue buttons");

      siteEvents.on("fullscreenToggled", (isFullscreen) => {
        headerEl.classList[isFullscreen ? "add" : "remove"]("hidden");
      });

      const contBtns = [
        {
          condition: scrollToActiveSongBtn,
          id: "scroll-to-active",
          resourceName: "icon-skip_to",
          titleKey: "scroll_to_playing",
          async interaction() {
            const activeItem = document.querySelector<HTMLElement>("#side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], #side-panel .ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]");
            if(!activeItem)
              return;

            activeItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          },
        },
        {
          condition: clearQueueBtn,
          id: "clear-queue",
          resourceName: "icon-clear_list",
          titleKey: "clear_list",
          async interaction() {
            try {
              // TODO: better confirmation dialog?
              if(!confirm(t("clear_list_confirm")))
                return;
              const url = new URL(location.href);
              url.searchParams.delete("list");
              url.searchParams.set("t", String(await getVideoTime(0)));
              location.assign(url);
            }
            catch(err) {
              error("Couldn't clear queue due to an error:", err);
            }
          },
        },
      ];

      if(contBtns.some(b => Boolean(b.condition))) {
        if(!await addStyleFromResource("css-above_queue_btns"))
          error("Couldn't add CSS for above queue buttons");

        const wrapperElem = document.createElement("div");
        wrapperElem.id = "bytm-above-queue-btn-wrapper";

        for(const item of contBtns) {
          if(Boolean(item.condition) === false)
            continue;

          const btnElem = await createCircularBtn({
            resourceName: item.resourceName as ResourceKey,
            onClick: item.interaction,
            title: t(item.titleKey),
          });
          btnElem.id = `bytm-${item.id}-btn`;
          btnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-above-queue-btn");

          wrapperElem.appendChild(btnElem);
        }

        rightBtnsEl.insertAdjacentElement("beforebegin", wrapperElem);
      }
    },
  });
}

//#region thumbnail overlay

/** To be changed when the toggle button is pressed - used to invert the state of "showOverlay" */
let invertOverlay = false;

export async function initThumbnailOverlay() {
  const toggleBtnShown = getFeatures().thumbnailOverlayToggleBtnShown;
  if(getFeatures().thumbnailOverlayBehavior === "never" && !toggleBtnShown)
    return;

  // so the script doesn't wait until a /watch page is loaded
  waitVideoElementReady().then(() => {
    const playerSelector = "ytmusic-player#player";
    const playerEl = document.querySelector<HTMLElement>(playerSelector);

    if(!playerEl)
      return error("Couldn't find video player element while adding thumbnail overlay");

    /** Checks and updates the overlay and toggle button states based on the current song type (yt video or ytm song) */
    const updateOverlayVisibility = async () => {
      if(!domLoaded)
        return;

      const behavior = getFeatures().thumbnailOverlayBehavior;

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
        addSelectorListener("playerBarMiddleButtons", "#bytm-thumbnail-overlay-toggle", {
          async listener(toggleBtnElem) {
            const toggleBtnImgElem = toggleBtnElem.querySelector<HTMLImageElement>("img");

            if(toggleBtnImgElem)
              toggleBtnImgElem.src = await getResourceUrl(`icon-image${showOverlay ? "_filled" : ""}` as "icon-image" | "icon-image_filled");
            if(toggleBtnElem)
              toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay_toggle_btn_tooltip${showOverlay ? "_hide" : "_show"}`);
          },
        });
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
      else error("Couldn't get thumbnail URL for watch ID", watchId);
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
      overlayElem.title = ""; // prevent child titles from propagating
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
        indicatorElem.style.opacity = String(getFeatures().thumbnailOverlayIndicatorOpacity / 100);
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

      const params = new URL(location.href).searchParams;
      if(params.has("v")) {
        applyThumbUrl(params.get("v")!);
        updateOverlayVisibility();
      }
    
      // toggle button
      if(toggleBtnShown) {
        const toggleBtnElem = document.createElement("a");
        toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
        toggleBtnElem.role = "button";
        toggleBtnElem.tabIndex = 0;
        toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");
    
        onInteraction(toggleBtnElem, (e) => {
          if(e.shiftKey)
            return openInTab(toggleBtnElem.href, false);
          invertOverlay = !invertOverlay;
          updateOverlayVisibility();
        });
    
        const imgElem = document.createElement("img");
        imgElem.classList.add("bytm-generic-btn-img");
    
        toggleBtnElem.appendChild(imgElem);
    
        addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
          listener: (likeContainer) => likeContainer.insertAdjacentElement("afterend", toggleBtnElem),
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
        if(!getFeatures().hideCursorOnIdle)
          return;
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

//#region fix HDR

/** Prevents visual issues when using HDR */
export async function fixHdrIssues() {
  if(!await addStyleFromResource("css-fix_hdr"))
    error("Couldn't load stylesheet to fix HDR issues");
  else
    log("Fixed HDR issues");
}
