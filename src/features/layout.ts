import { addParent, autoPlural, debounce, fetchAdvanced, isDomLoaded, preloadImages } from "@sv443-network/userutils";
import { getFeature, getFeatures } from "../config.js";
import { siteEvents } from "../siteEvents.js";
import { addSelectorListener } from "../observers.js";
import { featInfo } from "./index.js";
import { sanitizeArtists, sanitizeSong } from "./lyrics.js";
import { formatNumber, getBestThumbnailUrl, getDomain, getResourceUrl, getWatchId, openInTab, resourceAsString, scrollToCurrentSongInQueue } from "../utils/misc.js";
import { addStyleFromResource, getCurrentMediaType, getVideoTime, setInnerHtml, waitVideoElementReady } from "../utils/dom.js";
import { error, log, warn } from "../utils/logging.js";
import { t, tp } from "../utils/translations.js";
import { onInteraction } from "../utils/input.js";
import { fetchITunesAlbumInfo, fetchVideoVotes } from "../utils/xhr.js";
import { mode, scriptInfo } from "../constants.js";
import { openCfgMenu } from "../menu/menu_old.js";
import { showPrompt } from "../dialogs/prompt.js";
import { createRipple } from "../components/ripple.js";
import { createCircularBtn } from "../components/circularButton.js";
import type { ResourceKey, VideoVotesObj } from "../types.js";
import "./layout.css";

//#region cfg menu btns

let logoExchanged = false, improveLogoCalled = false, bytmLogoUrl: string | undefined;

/** Adds a watermark beneath the logo */
export async function addWatermark() {
  const watermarkEl = document.createElement("a");
  watermarkEl.role = "button";
  watermarkEl.id = "bytm-watermark";
  watermarkEl.classList.add("style-scope", "ytmusic-nav-bar", "bytm-no-select");
  watermarkEl.textContent = scriptInfo.name;
  watermarkEl.ariaLabel = watermarkEl.title = t("open_menu_tooltip", scriptInfo.name);
  watermarkEl.tabIndex = 0;

  await improveLogo();
  bytmLogoUrl = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");
  preloadImages([bytmLogoUrl]);

  const watermarkOpenMenu = (e: MouseEvent | KeyboardEvent) => {
    e.stopImmediatePropagation();

    if((!e.shiftKey && !e.ctrlKey) || logoExchanged)
      openCfgMenu();
    if(!logoExchanged && (e.shiftKey || e.ctrlKey))
      exchangeLogo();
  };

  onInteraction(watermarkEl, (e) => watermarkOpenMenu(e));

  addSelectorListener("navBar", "ytmusic-logo a", {
    listener: (logoElem) => logoElem.appendChild(watermarkEl),
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

    addSelectorListener("navBar", "ytmusic-logo > a", {
      listener: (logoElem) => {
        logoElem.classList.add("bytm-mod-logo", "bytm-no-select");
        setInnerHtml(logoElem, svg);

        logoElem.querySelectorAll("svg > g > path").forEach((el) => el.classList.add("bytm-mod-logo-remove"));
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
      if(logoElem.classList.contains("bytm-logo-exchanged") || !bytmLogoUrl)
        return;

      logoExchanged = true;
      logoElem.classList.add("bytm-logo-exchanged");

      const newLogo = document.createElement("img");
      newLogo.classList.add("bytm-mod-logo-img");
      newLogo.src = bytmLogoUrl;

      logoElem.insertBefore(newLogo, logoElem.querySelector("svg"));

      bytmLogoUrl && document.head.querySelectorAll<HTMLLinkElement>("link[rel=\"icon\"]").forEach((e) => e.href = bytmLogoUrl!);

      setTimeout(() => {
        logoElem.querySelectorAll(".bytm-mod-logo-remove").forEach(e => e.remove());
      }, 1000);
    },
  });
}

//#region cfg menu options

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
    const settingsBtnElem = document.querySelector<HTMLElement>("ytmusic-nav-bar ytmusic-settings-button button");
    settingsBtnElem?.click();

    if((!e.shiftKey && !e.ctrlKey) || logoExchanged)
      openCfgMenu();
    if(!logoExchanged && (e.shiftKey || e.ctrlKey))
      exchangeLogo();
  });

  const cfgOptIconElem = document.createElement("img");
  cfgOptIconElem.classList.add("bytm-cfg-menu-option-icon");
  cfgOptIconElem.src = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");

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
  cfgOptImgElem.src = await getResourceUrl(mode === "development" ? "img-logo_dev" : "img-logo");

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

//#region anchor improvements

/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
export async function addAnchorImprovements() {
  try {
    await addStyleFromResource("css-anchor_improvements");
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

    addSelectorListener("body", "ytmusic-nav-bar", {
      listener(navBar) {
        let miniSidebarCont = document.querySelector<HTMLElement>("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");

        const mut = new MutationObserver(() => setTimeout(() => {
          if(navBar.hasAttribute("guide-collapsed") && !navBar.classList.contains("bytm-mini-sidebar-anchors-added")) {
            miniSidebarCont = document.querySelector<HTMLElement>("#mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer");
            if(!miniSidebarCont)
              return error("Couldn't find mini sidebar element while adding anchors");
            improveMiniSidebarAnchors();
          }
        }, 50));

        const improveMiniSidebarAnchors = () => {
          const itemsAmt = addSidebarAnchors(miniSidebarCont!);
          navBar.classList.add("bytm-mini-sidebar-anchors-added");
          log(`Added anchors around ${itemsAmt} mini sidebar ${autoPlural("item", itemsAmt)}`);
          mut.disconnect();
        };
        if(miniSidebarCont)
          improveMiniSidebarAnchors();

        mut.observe(navBar, {
          attributes: true,
        });
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

//#region share track param

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
        characterData: true,
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

//#region ab.queue btns

export async function initAboveQueueBtns() {
  const { scrollToActiveSongBtn, clearQueueBtn } = getFeatures();

  if(!await addStyleFromResource("css-above_queue_btns"))
    error("Couldn't add CSS for above queue buttons");
  else if(getFeature("aboveQueueBtnsSticky"))
    addStyleFromResource("css-above_queue_btns_sticky");

  const contBtns = [
    {
      condition: scrollToActiveSongBtn,
      id: "scroll-to-active",
      resourceName: "icon-skip_to",
      titleKey: "scroll_to_playing",
      interaction: async (evt: KeyboardEvent | MouseEvent) => scrollToCurrentSongInQueue(evt),
    },
    {
      condition: clearQueueBtn,
      id: "clear-queue",
      resourceName: "icon-clear_list",
      titleKey: "clear_list",
      async interaction(evt: KeyboardEvent | MouseEvent) {
        try {
          if(evt.shiftKey || await showPrompt({ type: "confirm", message: t("clear_list_confirm") })) {
            const url = new URL(location.href);
            url.searchParams.delete("list");
            url.searchParams.set("time_continue", String(await getVideoTime(0)));
            location.assign(url);
          }
        }
        catch(err) {
          error("Couldn't clear queue due to an error:", err);
        }
      },
    },
  ];

  if(!contBtns.some(b => Boolean(b.condition)))
    return;

  addSelectorListener("sidePanel", "ytmusic-tab-renderer ytmusic-queue-header-renderer #buttons", {
    async listener(rightBtnsEl) {
      try {
        const aboveQueueBtnCont = document.createElement("div");
        aboveQueueBtnCont.id = "bytm-above-queue-btn-cont";

        addParent(rightBtnsEl, aboveQueueBtnCont);

        const headerEl = rightBtnsEl.closest<HTMLElement>("ytmusic-queue-header-renderer");
        if(!headerEl)
          return error("Couldn't find queue header element while adding above queue buttons");

        siteEvents.on("fullscreenToggled", (isFullscreen) => {
          headerEl.classList[isFullscreen ? "add" : "remove"]("hidden");
        });

        const wrapperElem = document.createElement("div");
        wrapperElem.id = "bytm-above-queue-btn-wrapper";

        for(const item of contBtns) {
          if(Boolean(item.condition) === false)
            continue;

          const btnElem = await createCircularBtn({
            resourceName: item.resourceName as ResourceKey & `icon-${string}`,
            onClick: item.interaction,
            title: t(item.titleKey),
          });
          btnElem.id = `bytm-${item.id}-btn`;
          btnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-above-queue-btn");

          wrapperElem.appendChild(btnElem);
        }

        rightBtnsEl.insertAdjacentElement("beforebegin", wrapperElem);
      }
      catch(err) {
        error("Couldn't add above queue buttons due to an error:", err);
      }
    },
  });
}

//#region thumb.overlay

// TODO:FIXME: rewrite this whole chonker cause it doesn't wanna behave at all

/** Changed when the toggle button is pressed - used to invert the state of "showOverlay" */
let invertOverlay = false;

/** List of video IDs that have already been applied to the thumbnail overlay */
const previousVideoIDs: string[] = [];

export async function initThumbnailOverlay() {
  const toggleBtnShown = getFeature("thumbnailOverlayToggleBtnShown");
  if(getFeature("thumbnailOverlayBehavior") === "never" && !toggleBtnShown)
    return;

  // so the script init doesn't keep waiting until a /watch page is loaded
  waitVideoElementReady().then(() => {
    const playerSelector = "ytmusic-player#player";
    const playerEl = document.querySelector<HTMLElement>(playerSelector);

    if(!playerEl)
      return error("Couldn't find video player element while adding thumbnail overlay");

    /** Checks and updates the overlay and toggle button states based on the current song type (yt video or ytm song) */
    const updateOverlayVisibility = async () => {
      if(!isDomLoaded())
        return;

      const behavior = getFeature("thumbnailOverlayBehavior");

      let showOverlay = behavior === "always";
      const isVideo = getCurrentMediaType() === "video";

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

      if(getFeature("thumbnailOverlayToggleBtnShown")) {
        addSelectorListener("playerBarMiddleButtons", "#bytm-thumbnail-overlay-toggle", {
          async listener(toggleBtnElem) {
            const toggleBtnIconElem = toggleBtnElem.querySelector<HTMLImageElement>("svg");

            if(toggleBtnIconElem) {
              setInnerHtml(toggleBtnElem, await resourceAsString(`icon-image${showOverlay ? "_filled" : ""}` as "icon-image" | "icon-image_filled"));
              toggleBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");
            }
            if(toggleBtnElem)
              toggleBtnElem.ariaLabel = toggleBtnElem.title = t(`thumbnail_overlay_toggle_btn_tooltip${showOverlay ? "_hide" : "_show"}`);
          },
        });
      }
    };

    const applyThumbUrl = async (videoID: string, force = false) => {
      try {
        if(previousVideoIDs.length > 2)
          previousVideoIDs.splice(0, previousVideoIDs.length - 2);

        if(!force) {
          if(previousVideoIDs.find(id => id === videoID))
            return;
          else
            previousVideoIDs.push(videoID);
        }

        const toggleBtnElem = document.querySelector<HTMLAnchorElement>("#bytm-thumbnail-overlay-toggle");
        if(
          toggleBtnElem
          && toggleBtnElem.dataset.albumArtworkUrl && toggleBtnElem.dataset.albumArtworkUrl.startsWith("http")
          && (
            (!toggleBtnElem.dataset.albumArtworkRes || toggleBtnElem.dataset.albumArtworkRes.length === 0)
            && toggleBtnElem.dataset.albumArtworkRes === String(getFeature("thumbnailOverlayITunesImgRes"))
          )
        )
          return openInTab(toggleBtnElem.dataset.albumArtworkUrl, false);

        const actuallyApplyThumbUrl = (thumbUrl: string) => {
          const toggleBtnElem = document.querySelector<HTMLAnchorElement>("#bytm-thumbnail-overlay-toggle");
          const thumbImgElem = document.querySelector<HTMLImageElement>("#bytm-thumbnail-overlay-img");

          if(toggleBtnElem) {
            toggleBtnElem.dataset.albumArtworkUrl = thumbUrl;
            toggleBtnElem.dataset.albumArtworkRes = String(getFeature("thumbnailOverlayITunesImgRes"));
          }

          if(toggleBtnElem?.href !== "" && toggleBtnElem?.href === thumbUrl && thumbImgElem?.src === thumbUrl)
            return;

          if(toggleBtnElem)
            toggleBtnElem.href = thumbUrl;
          if(thumbImgElem) {
            thumbImgElem.dataset.videoId = videoID;
            thumbImgElem.src = thumbUrl;
            thumbImgElem.dataset.mediaType = getCurrentMediaType();
          }

          log("Applied thumbnail URL to overlay:", thumbUrl);
        };

        let bestNativeThumbUrl: string | undefined;
        const ac = new AbortController();
        getBestThumbnailUrl(videoID).then((url) =>
          ac.signal.aborted ? undefined : (bestNativeThumbUrl = url) && actuallyApplyThumbUrl(url)
        ).catch(() => void 0);

        addSelectorListener("playerBarInfo", ".subtitle > yt-formatted-string a, .subtitle > yt-formatted-string span", {
          all: true,
          async listener(elems) {
            const iTunesAlbum = elems.length >= 5
              ? await getBestITunesAlbumMatch(elems[0].innerText.trim(), elems[2].innerText.trim())
              : undefined;

            const imgRes = getFeature("thumbnailOverlayITunesImgRes") ?? featInfo.thumbnailOverlayITunesImgRes.default;
            const iTunesUrl = (iTunesAlbum?.artworkUrl60 ?? iTunesAlbum?.artworkUrl100);
            iTunesUrl && !ac.signal.aborted && ac.abort();

            const thumbUrl = iTunesUrl
              ?.replace(/(60x60|100x100)/, `${imgRes}x${imgRes}`)
              ?? bestNativeThumbUrl ?? await getBestThumbnailUrl(videoID);

            if(thumbUrl)
              actuallyApplyThumbUrl(thumbUrl);
            else
              warn("Couldn't get thumbnail URL for album", iTunesAlbum?.collectionName, "by", iTunesAlbum?.artistName, "or video with ID", videoID);
          },
        });
      }
      catch(err) {
        error("Couldn't apply thumbnail URL to overlay due to an error:", err);
      }
    };

    const unsubWatchIdChanged = siteEvents.on("watchIdChanged", (videoID, oldVideoID) => {
      unsubWatchIdChanged();
      addSelectorListener("body", "#bytm-thumbnail-overlay", {
        listener: () => {
          const curVidIdx = previousVideoIDs.findIndex(id => id === videoID);
          const prevVidIdx = previousVideoIDs.findIndex(id => id === oldVideoID);
          curVidIdx > -1 && previousVideoIDs.splice(curVidIdx, 1);
          prevVidIdx > -1 && previousVideoIDs.splice(prevVidIdx, 1);

          applyThumbUrl(videoID);
          updateOverlayVisibility();
        },
      });
    });

    const createElements = async () => {
      try {
        // overlay
        const overlayElem = document.createElement("div");
        overlayElem.id = "bytm-thumbnail-overlay";
        overlayElem.title = ""; // prevent child titles from propagating
        overlayElem.classList.add("bytm-no-select");
        overlayElem.style.display = "none";

        let indicatorElem: HTMLImageElement | undefined;
        if(getFeature("thumbnailOverlayShowIndicator")) {
          indicatorElem = document.createElement("img");
          indicatorElem.id = "bytm-thumbnail-overlay-indicator";
          indicatorElem.src = await getResourceUrl("icon-image");
          indicatorElem.role = "presentation";
          indicatorElem.title = indicatorElem.ariaLabel = t("thumbnail_overlay_indicator_tooltip");
          indicatorElem.ariaHidden = "true";
          indicatorElem.style.display = "none";
          indicatorElem.style.opacity = String(getFeature("thumbnailOverlayIndicatorOpacity") / 100);
        }

        const thumbImgElem = document.createElement("img");
        thumbImgElem.id = "bytm-thumbnail-overlay-img";
        thumbImgElem.role = "presentation";
        thumbImgElem.ariaHidden = "true";

        overlayElem.appendChild(thumbImgElem);
        playerEl.appendChild(overlayElem);
        indicatorElem && playerEl.appendChild(indicatorElem);


        siteEvents.on("watchIdChanged", async (videoID) => {
          invertOverlay = false;
          applyThumbUrl(videoID);
          updateOverlayVisibility();
        });

        const params = new URL(location.href).searchParams;
        if(params.has("v")) {
          applyThumbUrl(params.get("v")!);
          updateOverlayVisibility();
        }

        // toggle button
        if(toggleBtnShown) {
          const toggleBtnElem = createRipple(document.createElement("a"));
          toggleBtnElem.id = "bytm-thumbnail-overlay-toggle";
          toggleBtnElem.role = "button";
          toggleBtnElem.tabIndex = 0;
          toggleBtnElem.classList.add("ytmusic-player-bar", "bytm-generic-btn", "bytm-no-select");

          onInteraction(toggleBtnElem, (e) => {
            if(e.shiftKey)
              return openInTab(toggleBtnElem.href, false);

            invertOverlay = !invertOverlay;

            const params = new URL(location.href).searchParams;
            if(thumbImgElem.dataset.videoId !== params.get("v"))
              applyThumbUrl(params.get("v")!, true);

            updateOverlayVisibility();
          });

          setInnerHtml(toggleBtnElem, await resourceAsString("icon-image"));
          toggleBtnElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");

          addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", {
            listener: (likeContainer) =>
              likeContainer.insertAdjacentElement("afterend", toggleBtnElem),
          });
        }

        log("Added thumbnail overlay");
      }
      catch(err) {
        error("Couldn't create thumbnail overlay elements due to an error:", err);
      }
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

/** Resolves with the best iTunes album match for the given artist and album name (not sanitized) */
async function getBestITunesAlbumMatch(artistsRaw: string, albumRaw: string) {
  const doFetchITunesAlbum = async (artist: string, album: string) => {
    const albumObjs = await fetchITunesAlbumInfo(artist, album);
    if(albumObjs && albumObjs.length > 0) {
      const bestMatch = albumObjs.find((al) => (
        (
          al.artistName === artist
          || al.artistName.toLowerCase() === artist.toLowerCase()
          || al.artistName === artistsRaw
          || al.artistName.toLowerCase() === artistsRaw.toLowerCase()
        ) && (
          al.collectionName === album
          || al.collectionName.toLowerCase() === album.toLowerCase()
          || al.collectionCensoredName === album
          || al.collectionCensoredName.toLowerCase() === album.toLowerCase()
        )
      ));
      return [bestMatch, albumObjs[0]];
    }
    return [undefined, albumObjs[0]];
  };

  const artist = sanitizeArtists(artistsRaw);

  let [bestMatch, fallback] = await doFetchITunesAlbum(artist, albumRaw);
  if(!bestMatch)
    [bestMatch, fallback] = await doFetchITunesAlbum(artist, sanitizeSong(albumRaw));
  return bestMatch ?? fallback;
}

//#region idle hide cursor

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
        if(!getFeature("hideCursorOnIdle"))
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
        cursorHideTimer = setTimeout(hide, getFeature("hideCursorOnIdleDelay") * 1000);

      const onMove = () => {
        cursorHideTimer && clearTimeout(cursorHideTimer);
        show();
        cursorHideTimerCb();
      };

      vidContainer.addEventListener("mouseenter", onMove);
      vidContainer.addEventListener("mousemove", debounce(onMove, 200));
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

//#region show vote nums

/** Shows the amount of likes and dislikes on the current song */
export async function initShowVotes() {
  addSelectorListener("playerBar", ".middle-controls-buttons ytmusic-like-button-renderer", {
    async listener(voteCont: HTMLElement): Promise<void> {
      try {
        const videoID = getWatchId();
        if(!videoID) {
          await siteEvents.once("watchIdChanged");
          return initShowVotes();
        }

        const voteObj = await fetchVideoVotes(videoID);
        if(!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
          return error("Couldn't fetch votes from the Return YouTube Dislike API");

        if(getFeature("showVotes")) {
          addVoteNumbers(voteCont, voteObj);

          siteEvents.on("watchIdChanged", async (videoID) => {
            const labelLikes = document.querySelector<HTMLElement>("ytmusic-like-button-renderer .bytm-vote-label.likes");
            const labelDislikes = document.querySelector<HTMLElement>("ytmusic-like-button-renderer .bytm-vote-label.dislikes");

            if(!labelLikes || !labelDislikes)
              return error("Couldn't find vote label elements while updating like and dislike counts");

            if(labelLikes.dataset.watchId === videoID && labelDislikes.dataset.watchId === videoID)
              return log("Vote labels already updated for this video");

            const voteObj = await fetchVideoVotes(videoID);
            if(!voteObj || !("likes" in voteObj) || !("dislikes" in voteObj) || !("rating" in voteObj))
              return error("Couldn't fetch votes from the Return YouTube Dislike API");

            const likesLabelText = tp("vote_label_likes", voteObj.likes, formatNumber(voteObj.likes, "long"));
            const dislikesLabelText = tp("vote_label_dislikes", voteObj.dislikes, formatNumber(voteObj.dislikes, "long"));

            labelLikes.dataset.watchId = getWatchId() ?? "";
            labelLikes.textContent = formatNumber(voteObj.likes);
            labelLikes.title = labelLikes.ariaLabel = likesLabelText;

            labelDislikes.textContent = formatNumber(voteObj.dislikes);
            labelDislikes.title = labelDislikes.ariaLabel = dislikesLabelText;
            labelDislikes.dataset.watchId = getWatchId() ?? "";

            addSelectorListener("playerBar", "ytmusic-like-button-renderer#like-button-renderer", {
              listener: (bar) => upsertVoteBtnLabels(bar, likesLabelText, dislikesLabelText),
            });
          });
        }
      }
      catch(err) {
        error("Couldn't initialize show votes feature due to an error:", err);
      }
    }
  });
}

function addVoteNumbers(voteCont: HTMLElement, voteObj: VideoVotesObj) {
  const likeBtn = voteCont.querySelector<HTMLElement>("#button-shape-like");
  const dislikeBtn = voteCont.querySelector<HTMLElement>("#button-shape-dislike");

  if(!likeBtn || !dislikeBtn)
    return error("Couldn't find like or dislike button while adding vote numbers");

  const createLabel = (amount: number, type: "likes" | "dislikes"): HTMLElement => {
    const label = document.createElement("span");
    label.classList.add("bytm-vote-label", "bytm-no-select", type);
    label.textContent = String(formatNumber(amount));
    label.title = label.ariaLabel = tp(`vote_label_${type}`, amount, formatNumber(amount, "long"));
    label.dataset.watchId = getWatchId() ?? "";
    label.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      (type === "likes" ? likeBtn : dislikeBtn).querySelector("button")?.click();
    });
    return label;
  };

  addStyleFromResource("css-show_votes")
    .catch((e) => error("Couldn't add CSS for show votes feature due to an error:", e));

  const likeLblEl = createLabel(voteObj.likes, "likes");
  likeBtn.insertAdjacentElement("afterend", likeLblEl);

  const dislikeLblEl = createLabel(voteObj.dislikes, "dislikes");
  dislikeBtn.insertAdjacentElement("afterend", dislikeLblEl);

  upsertVoteBtnLabels(voteCont, likeLblEl.title, dislikeLblEl.title);

  log("Added vote number labels to like and dislike buttons");
}

/** Updates or inserts the labels on the native like and dislike buttons */
function upsertVoteBtnLabels(parentEl: HTMLElement, likesLabelText: string, dislikesLabelText: string) {
  const likeBtn = parentEl.querySelector<HTMLElement>("#button-shape-like button");
  const dislikeBtn = parentEl.querySelector<HTMLElement>("#button-shape-dislike button");

  if(likeBtn)
    likeBtn.title = likeBtn.ariaLabel = likesLabelText;
  if(dislikeBtn)
    dislikeBtn.title = dislikeBtn.ariaLabel = dislikesLabelText;
};

//#region watch page full size

/** Makes the watch page full size */
export async function initWatchPageFullSize() {
  if(!await addStyleFromResource("css-watch_page_full_size"))
    error("Couldn't load stylesheet to make watch page full size");
  else
    log("Made watch page full size");
}
