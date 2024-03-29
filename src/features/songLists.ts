import { autoPlural, openInNewTab, pauseFor } from "@sv443-network/userutils";
import { clearInner, error, getResourceUrl, log, onSelectorOld, t, warn } from "../utils";
import { SiteEventsMap, siteEvents } from "../siteEvents";
import { emitInterface } from "../interface";
import { fetchLyricsUrl, createLyricsBtn, sanitizeArtists, sanitizeSong, getLyricsCacheEntry, splitVideoTitle } from "./lyrics";
import type { FeatureConfig } from "../types";
import "./songLists.css";

let features: FeatureConfig;

export function setSongListsConfig(feats: FeatureConfig) {
  features = feats;
}

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
  // TODO:FIXME: dragging the items around removes the queue buttons

  const addGenericListQueueBtns = (listElem: HTMLElement) => {
    if(listElem.classList.contains("bytm-list-has-queue-btns"))
      return;

    const queueItems = listElem.querySelectorAll<HTMLElement>("ytmusic-responsive-list-item-renderer");
    if(queueItems.length === 0)
      return;

    listElem.classList.add("bytm-list-has-queue-btns");
    queueItems.forEach(itm => addQueueButtons(itm, ".flex-columns", "genericQueue", ["bytm-generic-list-queue-btn-container"]));

    log(`Added buttons to ${queueItems.length} new "generic song list" ${autoPlural("item", queueItems)}`);
  };

  const listSelectors = [
    "ytmusic-playlist-shelf-renderer #contents",
    "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ALBUM\"] ytmusic-shelf-renderer #contents",
    "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ARTIST\"] ytmusic-shelf-renderer #contents",
  ];

  if(features.listButtonsPlacement === "everywhere") {
    for(const selector of listSelectors) {
      onSelectorOld(selector, {
        all: true,
        continuous: true,
        listener: (songLists) => {
          for(const list of songLists)
            addGenericListQueueBtns(list);
        },
      });
    }
  }

  // TODO: support grids?
}

/**
 * Adds the buttons to each item in the current song queue.  
 * Also observes for changes to add new buttons to new items in the queue.
 * @param queueItem The element with tagname `ytmusic-player-queue-item` to add queue buttons to
 * @param listType The type of list the queue item is in
 * @param classes Extra CSS classes to apply to the container
 */
async function addQueueButtons(
  queueItem: HTMLElement,
  containerParentSelector: string = ".song-info",
  listType: "currentQueue" | "genericQueue" = "currentQueue",
  classes: string[] = [],
) {
  //#SECTION general queue item stuff
  const queueBtnsCont = document.createElement("div");
  queueBtnsCont.classList.add("bytm-queue-btn-container", ...classes);

  const lyricsIconUrl = await getResourceUrl("img-lyrics");
  const deleteIconUrl = await getResourceUrl("img-delete");

  //#SECTION lyrics btn
  let lyricsBtnElem: HTMLAnchorElement | undefined;

  if(features.lyricsQueueButton) {
    lyricsBtnElem = await createLyricsBtn(undefined, false);

    lyricsBtnElem.ariaLabel = lyricsBtnElem.title = t("open_lyrics");
    lyricsBtnElem.style.display = "inline-flex";
    lyricsBtnElem.style.visibility = "initial";
    lyricsBtnElem.style.pointerEvents = "initial";
    lyricsBtnElem.role = "link";
    lyricsBtnElem.tabIndex = 0;

    const lyricsBtnClicked = async (e: MouseEvent | KeyboardEvent) => {
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
      else if(listType === "genericQueue") {
        const songEl = queueItem.querySelector<HTMLElement>(".title-column yt-formatted-string a");
        let artistEl: HTMLElement | null = null;

        if(location.pathname.startsWith("/playlist"))
          artistEl = document.querySelector<HTMLElement>("ytmusic-detail-header-renderer .metadata .subtitle-container yt-formatted-string a");
        else
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

      const cachedLyricsUrl = songSan.includes("-")
        ? getLyricsCacheEntry(splitTitle.artist, splitTitle.song)
        : getLyricsCacheEntry(artistsSan, songSan);

      if(cachedLyricsUrl)
        lyricsUrl = cachedLyricsUrl;
      else if(!queueItem.hasAttribute("data-bytm-loading")) {
        const imgEl = lyricsBtnElem?.querySelector<HTMLImageElement>("img");
        if(!imgEl)
          return;

        if(!cachedLyricsUrl) {
          queueItem.setAttribute("data-bytm-loading", "");

          imgEl.src = await getResourceUrl("img-spinner");
          imgEl.classList.add("bytm-spinner");
        }

        lyricsUrl = cachedLyricsUrl ?? await fetchLyricsUrl(artistsSan, songSan);

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

        if(!cachedLyricsUrl) {
          queueItem.removeAttribute("data-bytm-loading");

          // so the new image doesn't "blink"
          setTimeout(resetImgElem, 100);
        }

        if(!lyricsUrl) {
          resetImgElem();
          if(confirm(t("lyrics_not_found_confirm_open_search")))
            openInNewTab(`https://genius.com/search?q=${encodeURIComponent(`${artistsSan} - ${songSan}`)}`);
          return;
        }
      }

      lyricsUrl && openInNewTab(lyricsUrl);
    };

    lyricsBtnElem.addEventListener("click", lyricsBtnClicked);
    lyricsBtnElem.addEventListener("keydown", (e) => e.key === "Enter" && lyricsBtnClicked(e));
  }

  //#SECTION delete from queue btn
  let deleteBtnElem: HTMLAnchorElement | undefined;

  if(features.deleteFromQueueButton) {
    deleteBtnElem = document.createElement("a");
    deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("remove_from_queue") : t("delete_from_list"));
    deleteBtnElem.classList.add("ytmusic-player-bar", "bytm-delete-from-queue", "bytm-generic-btn");
    deleteBtnElem.role = "button";
    deleteBtnElem.tabIndex = 0;
    deleteBtnElem.style.visibility = "initial";

    const imgElem = document.createElement("img");
    imgElem.classList.add("bytm-generic-btn-img");
    imgElem.src = deleteIconUrl;

    const deleteBtnClicked = async (e: MouseEvent | KeyboardEvent) => {
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
          await pauseFor(10);

          queuePopupCont = document.querySelector<HTMLElement>("ytmusic-app ytmusic-popup-container tp-yt-iron-dropdown");
          queuePopupCont?.setAttribute("data-bytm-hidden", "true");

          // a little bit janky and unreliable but the only way afaik
          const removeFromQueueBtn = queuePopupCont?.querySelector<HTMLElement>("tp-yt-paper-listbox ytmusic-menu-service-item-renderer:nth-of-type(3)");

          await pauseFor(10);

          removeFromQueueBtn?.click();

          // queue items aren't removed automatically outside of the current queue
          if(removeFromQueueBtn && listType === "genericQueue") {
            await pauseFor(500);
            clearInner(queueItem);
            queueItem.remove();
          }

          if(!removeFromQueueBtn) {
            warn("Couldn't find 'remove from queue' button in queue item three dots menu");
            dotsBtnElem.click();
            imgElem.src = await getResourceUrl("img-error");
            if(deleteBtnElem)
              deleteBtnElem.ariaLabel = deleteBtnElem.title = (listType === "currentQueue" ? t("couldnt_remove_from_queue") : t("couldnt_delete_from_list"));
          }
        }
      }
      catch(err) {
        error("Couldn't remove song from queue due to error:", err);
      }
      finally {
        queuePopupCont?.removeAttribute("data-bytm-hidden");
      }
    };

    deleteBtnElem.addEventListener("click", deleteBtnClicked);
    deleteBtnElem.addEventListener("keydown", (e) => e.key === "Enter" && deleteBtnClicked(e));

    deleteBtnElem.appendChild(imgElem);
  }

  //#SECTION append elements to DOM

  lyricsBtnElem && queueBtnsCont.appendChild(lyricsBtnElem);
  deleteBtnElem && queueBtnsCont.appendChild(deleteBtnElem);

  queueItem.querySelector<HTMLElement>(containerParentSelector)?.appendChild(queueBtnsCont);
  queueItem.classList.add("bytm-has-queue-btns");
}
