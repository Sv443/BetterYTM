import { autoPlural, pauseFor } from "@sv443-network/userutils";
import { clearInner, error, getResourceUrl, log, onInteraction, openInTab, t, warn } from "../utils/index.js";
import { SiteEventsMap, siteEvents } from "../siteEvents.js";
import { emitInterface } from "../interface.js";
import { fetchLyricsUrlTop, createLyricsBtn, sanitizeArtists, sanitizeSong, splitVideoTitle } from "./lyrics.js";
import { getLyricsCacheEntry } from "./lyricsCache.js";
import { addSelectorListener } from "../observers.js";
import { createRipple } from "../components/ripple.js";
import { getFeature } from "../config.js";
import type { LyricsCacheEntry } from "../types.js";
import "./songLists.css";

//#region init queue btns

/** Initializes the queue buttons */
export async function initQueueButtons() {
  const addCurrentQueueBtns = (
    evt: Parameters<SiteEventsMap["queueChanged" | "autoplayQueueChanged"]>[0],
  ) => {
    let amt = 0;
    for(const queueItm of evt.childNodes as NodeListOf<HTMLElement>) {
      if(!queueItm.classList.contains("bytm-has-queue-btns")) {
        addQueueButtons(queueItm, undefined, "currentQueue");
        amt++;
      }
    }
    if(amt > 0)
      log(`Added buttons to ${amt} new queue ${autoPlural("item", amt)}`);
  };

  // current queue

  siteEvents.on("queueChanged", addCurrentQueueBtns);
  siteEvents.on("autoplayQueueChanged", addCurrentQueueBtns);

  const queueItems = document.querySelectorAll<HTMLElement>("#contents.ytmusic-player-queue > ytmusic-player-queue-item");
  if(queueItems.length > 0) {
    queueItems.forEach(itm => addQueueButtons(itm, undefined, "currentQueue"));
    log(`Added buttons to ${queueItems.length} existing "current song queue" ${autoPlural("item", queueItems)}`);
  }

  // generic lists
  const addGenericListQueueBtns = (listElem: HTMLElement) => {
    const queueItems = listElem.querySelectorAll<HTMLElement>("ytmusic-responsive-list-item-renderer");
    if(queueItems.length === 0)
      return;

    queueItems.forEach(itm => {
      if(itm.classList.contains("bytm-has-btns"))
        return;
      itm.classList.add("bytm-has-btns");
      addQueueButtons(itm, ".flex-columns", "genericList", ["bytm-generic-list-queue-btn-container"], "afterParent");
    });

    log(`Added buttons to ${queueItems.length} new "generic song list" ${autoPlural("item", queueItems)} in list`, listElem);
  };

  const listSelector = `\
ytmusic-playlist-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ALBUM"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_ARTIST"] ytmusic-shelf-renderer #contents,
ytmusic-section-list-renderer[main-page-type="MUSIC_PAGE_TYPE_PLAYLIST"] ytmusic-shelf-renderer #contents\
`;

  if(getFeature("listButtonsPlacement") === "everywhere") {
    const checkAddGenericBtns = (songLists: NodeListOf<HTMLElement>) => {
      for(const list of songLists)
        addGenericListQueueBtns(list);
    };

    addSelectorListener("body", listSelector, {
      all: true,
      continuous: true,
      debounce: 100,
      // TODO: switch to longer debounce time and edge type "risingIdle" after UserUtils update
      debounceEdge: "falling",
      listener: checkAddGenericBtns,
    });

    siteEvents.on("pathChanged", () => {
      const songLists = document.querySelectorAll<HTMLElement>(listSelector);
      if(songLists.length > 0)
        checkAddGenericBtns(songLists);
    });
  }
}

//#region add queue btns

/**
 * Adds the buttons to each item in the current song queue.  
 * Also observes for changes to add new buttons to new items in the queue.
 * @param queueItem The element with tagname `ytmusic-player-queue-item` or `ytmusic-responsive-list-item-renderer` to add queue buttons to
 * @param listType The type of list the queue item is in
 * @param classes Extra CSS classes to apply to the container
 * @param insertPosition Where to insert the button container in relation to the parent element
 */
async function addQueueButtons(
  queueItem: HTMLElement,
  containerParentSelector: string = ".song-info",
  listType: "currentQueue" | "genericList" = "currentQueue",
  classes: string[] = [],
  insertPosition: "child" | "beforeParent" | "afterParent" = "child",
) {
  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.classList.add(...["bytm-queue-btn-container", ...classes]);

  const lyricsIconUrl = await getResourceUrl("icon-lyrics");
  const deleteIconUrl = await getResourceUrl("icon-delete");

  //#region lyrics btn
  let lyricsBtnElem: HTMLAnchorElement | undefined;

  if(getFeature("lyricsQueueButton")) {
    lyricsBtnElem = await createLyricsBtn(undefined, false);

    lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
    lyricsBtnElem.style.display = "inline-flex";
    lyricsBtnElem.style.visibility = "initial";
    lyricsBtnElem.style.pointerEvents = "initial";
    lyricsBtnElem.role = "link";
    lyricsBtnElem.tabIndex = 0;

    onInteraction(lyricsBtnElem, async (e: MouseEvent | KeyboardEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      let song: string | null | undefined,
        artist: string | null | undefined;

      if(listType === "currentQueue") {
        const songInfo = queueItem.querySelector<HTMLElement>(".song-info");
        if(!songInfo)
          return;
      
        const [songEl, artistEl] = songInfo.querySelectorAll<HTMLElement>("yt-formatted-string");
        song = songEl?.textContent;
        artist = artistEl?.textContent;
      }
      else if(listType === "genericList") {
        const songEl = queueItem.querySelector<HTMLElement>(".title-column yt-formatted-string a");
        let artistEl: HTMLElement | null = null;

        if(location.pathname.startsWith("/playlist"))
          artistEl = document.querySelector<HTMLElement>("ytmusic-detail-header-renderer .metadata .subtitle-container yt-formatted-string a");
        if(!artistEl || !artistEl.textContent)
          artistEl = queueItem.querySelector<HTMLElement>(".secondary-flex-columns yt-formatted-string:first-child a");

        song = songEl?.textContent;
        artist = artistEl?.textContent;
      }
      else return;

      if(!song || !artist)
        return error("Couldn't get song or artist name from queue item - song:", song, "- artist:", artist);

      let lyricsUrl: string | undefined;

      const artistsSan = sanitizeArtists(artist);
      const songSan = sanitizeSong(song);
      const splitTitle = splitVideoTitle(songSan);

      const cachedLyricsEntry = songSan.includes("-")
        ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song)
        : getLyricsCacheEntry(artistsSan, songSan);

      if(cachedLyricsEntry)
        lyricsUrl = cachedLyricsEntry.url;
      else if(!queueItem.hasAttribute("data-bytm-loading")) {
        const imgEl = lyricsBtnElem?.querySelector<HTMLImageElement>("img");
        if(!imgEl)
          return;

        if(!cachedLyricsEntry) {
          queueItem.setAttribute("data-bytm-loading", "");

          imgEl.src = await getResourceUrl("icon-spinner");
          imgEl.classList.add("bytm-spinner");
        }

        lyricsUrl = (cachedLyricsEntry as unknown as LyricsCacheEntry)?.url ?? await fetchLyricsUrlTop(artistsSan, songSan);

        if(lyricsUrl) {
          emitInterface("bytm:lyricsLoaded", {
            type: "queue",
            artists: artist,
            title: song,
            url: lyricsUrl,
          });
        }

        const resetImgElem = () => {
          imgEl.src = lyricsIconUrl;
          imgEl.classList.remove("bytm-spinner");
        };

        if(!cachedLyricsEntry) {
          queueItem.removeAttribute("data-bytm-loading");

          // so the new image doesn't "blink"
          setTimeout(resetImgElem, 100);
        }

        if(!lyricsUrl) {
          resetImgElem();
          if(confirm(t("lyrics_not_found_confirm_open_search")))
            openInTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
          return;
        }
      }

      lyricsUrl && openInTab(lyricsUrl);
    });
  }

  //#region delete btn
  let deleteBtnElem: HTMLAnchorElement | undefined;

  if(getFeature("deleteFromQueueButton")) {
    deleteBtnElem = document.createElement("a");
    deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("remove_from_queue") : t("delete_from_list"));
    deleteBtnElem.classList.add("ytmusic-player-bar", "bytm-delete-from-queue", "bytm-generic-btn");
    deleteBtnElem.role = "button";
    deleteBtnElem.tabIndex = 0;
    deleteBtnElem.style.visibility = "initial";

    const imgElem = document.createElement("img");
    imgElem.classList.add("bytm-generic-btn-img");
    imgElem.src = deleteIconUrl;

    onInteraction(deleteBtnElem, async (e: MouseEvent | KeyboardEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      // container of the queue item popup menu - element gets reused for every queue item
      let queuePopupCont = document.querySelector<HTMLElement>("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
      try {
        // three dots button to open the popup menu of a queue item
        const dotsBtnElem = queueItem.querySelector<HTMLButtonElement>("ytmusic-menu-renderer yt-button-shape[id=\"button-shape\"] button");

        if(dotsBtnElem) {
          if(queuePopupCont)
            queuePopupCont.setAttribute("data-bytm-hidden", "true");

          dotsBtnElem.click();
        }
        else {
          warn("Couldn't find three dots button in queue item, trying to open the context menu manually");
          queueItem.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: false }));
        }

        queuePopupCont = document.querySelector<HTMLElement>("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
        queuePopupCont?.setAttribute("data-bytm-hidden", "true");

        await pauseFor(15);

        const removeFromQueueBtn = queuePopupCont?.querySelector<HTMLElement>("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");
        removeFromQueueBtn?.click();

        // queue items aren't removed automatically outside of the current queue
        if(removeFromQueueBtn && listType === "genericList") {
          await pauseFor(200);
          clearInner(queueItem);
          queueItem.remove();
        }

        if(!removeFromQueueBtn) {
          error("Couldn't find 'remove from queue' button in queue item three dots menu.\nPlease make sure all autoplay restrictions on your browser's side are disabled for this page.");
          dotsBtnElem?.click();
          imgElem.src = await getResourceUrl("icon-error");
          if(deleteBtnElem)
            deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("couldnt_remove_from_queue") : t("couldnt_delete_from_list"));
        }
      }
      catch(err) {
        error("Couldn't remove song from queue due to error:", err);
      }
      finally {
        queuePopupCont?.removeAttribute("data-bytm-hidden");
      }
    });

    deleteBtnElem.appendChild(imgElem);
  }

  lyricsBtnElem && queueBtnsCont.appendChild(createRipple(lyricsBtnElem));
  deleteBtnElem && queueBtnsCont.appendChild(createRipple(deleteBtnElem));

  const parentEl = queueItem.querySelector<HTMLElement>(containerParentSelector);
  if(insertPosition === "child")
    parentEl?.appendChild(queueBtnsCont);
  else if(insertPosition === "beforeParent")
    parentEl?.before(queueBtnsCont);
  else if(insertPosition === "afterParent")
    parentEl?.after(queueBtnsCont);

  queueItem.classList.add("bytm-has-queue-btns");
}
