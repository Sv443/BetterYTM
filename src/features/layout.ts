import { addGlobalStyle, addParent, autoPlural, fetchAdvanced, insertAfter, pauseFor } from "@sv443-network/userutils";
import { scriptInfo } from "../constants";
import { error, getResourceUrl, log, onSelectorOld, warn, t, onInteraction } from "../utils";
import { openCfgMenu } from "../menu/menu_old";
import "./layout.css";

//#MARKER BYTM-Config buttons

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

  onSelectorOld("ytmusic-nav-bar #left-content", {
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

    onSelectorOld("ytmusic-logo a", {
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
  onSelectorOld(".bytm-mod-logo", {
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

/** Called whenever the avatar popover menu exists to add a BYTM-Configuration button to the user menu popover */
export async function addConfigMenuOption(container: HTMLElement) {
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

//#MARKER remove upgrade tab

/** Removes the "Upgrade" / YT Music Premium tab from the sidebar */
export async function removeUpgradeTab() {
  onSelectorOld("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
    listener: (tabElemLarge) => {
      tabElemLarge.remove();
      log("Removed large upgrade tab");
    },
  });
  onSelectorOld("ytmusic-app-layout #mini-guide ytmusic-guide-renderer #sections ytmusic-guide-section-renderer[is-primary] #items ytmusic-guide-entry-renderer:nth-of-type(4)", {
    listener: (tabElemSmall) => {
      tabElemSmall.remove();
      log("Removed small upgrade tab");
    },
  });
}

//#MARKER anchor improvements

/** Adds anchors around elements and tweaks existing ones so songs are easier to open in a new tab */
export async function addAnchorImprovements() {
  try {
    const css = await (await fetchAdvanced(await getResourceUrl("css-anchor_improvements"))).text();
    if(css)
      addGlobalStyle(css).id = "bytm-style-anchor-improvements";
  }
  catch(err) {
    error("Couldn't add anchor improvements CSS due to an error:", err);
  }

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

    onSelectorOld<HTMLElement>("#contents.ytmusic-section-list-renderer ytmusic-carousel-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // related tab in /watch

    onSelectorOld<HTMLElement>("ytmusic-tab-renderer[page-type=\"MUSIC_PAGE_TYPE_TRACK_RELATED\"] ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // playlists

    onSelectorOld<HTMLElement>("#contents.ytmusic-section-list-renderer ytmusic-playlist-shelf-renderer ytmusic-responsive-list-item-renderer", {
      continuous: true,
      all: true,
      listener: addListItemAnchors,
    });

    // generic shelves

    onSelectorOld<HTMLElement>("#contents.ytmusic-section-list-renderer ytmusic-shelf-renderer ytmusic-responsive-list-item-renderer", {
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

    onSelectorOld("ytmusic-app-layout tp-yt-app-drawer #contentContainer #guide-content #items ytmusic-guide-entry-renderer", {
      listener: (sidebarCont) => {
        const itemsAmt = addSidebarAnchors(sidebarCont);
        log(`Added anchors around ${itemsAmt} sidebar ${autoPlural("item", itemsAmt)}`);
      },
    });

    onSelectorOld("ytmusic-app-layout #mini-guide ytmusic-guide-renderer ytmusic-guide-section-renderer #items ytmusic-guide-entry-renderer", {
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

//#MARKER remove share tracking param

let lastShareVal = "";

/** Removes the ?si tracking parameter from share URLs */
export async function removeShareTrackingParam() {
  const removeSiParam = (inputElem: HTMLInputElement) => {
    try {
      if(lastShareVal === inputElem.value)
        return;

      const url = new URL(inputElem.value);
      if(!url.searchParams.has("si"))
        return;

      lastShareVal = inputElem.value;

      url.searchParams.delete("si");
      inputElem.value = String(url);
      log(`Removed tracking parameter from share link: ${url}`);
    }
    catch(err) {
      warn("Couldn't remove tracking parameter from share link due to error:", err);
    }
  };

  onSelectorOld<HTMLInputElement>("tp-yt-paper-dialog ytmusic-unified-share-panel-renderer", {
    listener: (sharePanelEl) => {
      const obs = new MutationObserver(() => {
        const inputElem = sharePanelEl.querySelector<HTMLInputElement>("input#share-url");
        inputElem && removeSiParam(inputElem);
      });

      obs.observe(sharePanelEl, {
        childList: true,
        subtree: true,
        attributeFilter: ["aria-hidden", "checked"],
      });
    },
  });
}

//#MARKER fix margins

/** Applies global CSS to fix various spacings */
export async function fixSpacing() {
  try {
    const css = await (await fetchAdvanced(await getResourceUrl("css-fix_spacing"))).text();
    if(css)
      addGlobalStyle(css).id = "bytm-style-fix-spacing";
  }
  catch(err) {
    error("Couldn't fix spacing due to an error:", err);
  }
}

//#MARKER scroll to active song

/** Adds a button to the queue to scroll to the active song */
export async function addScrollToActiveBtn() {
  onSelectorOld("#side-panel #tabsContent tp-yt-paper-tab:nth-of-type(1)", {
    listener: async (tabElem) => {
      const containerElem = document.createElement("div");
      containerElem.id = "bytm-scroll-to-active-btn-cont";

      const linkElem = document.createElement("div");
      linkElem.id = "bytm-scroll-to-active-btn";
      linkElem.tabIndex = 0;
      linkElem.className = "ytmusic-player-bar bytm-generic-btn";
      linkElem.ariaLabel = linkElem.title = t("scroll_to_playing");
      linkElem.role = "button";

      const imgElem = document.createElement("img");
      imgElem.className = "bytm-generic-btn-img";
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

      onInteraction(linkElem, scrollToActiveInteraction, { capture: true });

      linkElem.appendChild(imgElem);
      containerElem.appendChild(linkElem);
      tabElem.appendChild(containerElem);
    },
  });
}
