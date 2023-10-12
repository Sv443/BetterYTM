import { autoPlural, onSelector, openInNewTab, pauseFor } from "@sv443-network/userutils";
import { error, getResourceUrl, log } from "../utils";
import { t } from "../translations";
import { SiteEventsMap, siteEvents } from "../siteEvents";
import { emitInterface } from "../interface";
import { getGeniusUrl, createLyricsBtn, sanitizeArtists, sanitizeSong, getLyricsCacheEntry, splitVideoTitle } from "./lyrics";
import type { FeatureConfig } from "../types";
import "./songLists.css";

let features: FeatureConfig;

export function preInitSongLists(feats: FeatureConfig) {
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
        addQueueButtons(queueItm);
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
    queueItems.forEach(itm => addQueueButtons(itm));
    log(`Added buttons to ${queueItems.length} existing "current song queue" ${autoPlural("item", queueItems)}`);
  }

  // generic lists

  const addGenericListQueueBtns = (listElem: HTMLElement) => {
    if(listElem.classList.contains("bytm-list-has-queue-btns"))
      return;

    const queueItems = listElem.querySelectorAll<HTMLElement>("ytmusic-responsive-list-item-renderer");
    if(queueItems.length === 0)
      return;

    queueItems.forEach(itm => addQueueButtons(itm, ".flex-columns"));
    listElem.classList.add("bytm-list-has-queue-btns");

    log(`Added buttons to ${queueItems.length} new "generic song list" ${autoPlural("item", queueItems)}`);
  };

  const listSelectors = [
    "ytmusic-playlist-shelf-renderer #contents",
    "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ALBUM\"] ytmusic-shelf-renderer #contents",
    "ytmusic-section-list-renderer[main-page-type=\"MUSIC_PAGE_TYPE_ARTIST\"] ytmusic-shelf-renderer #contents",
  ];

  if(features.listButtonsPlacement === "everywhere") {
    for(const selector of listSelectors) {
      onSelector(selector, {
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
 * @param containerParentSelector The selector of the parent element of the queue button container
 */
async function addQueueButtons(queueItem: HTMLElement, containerParentSelector = ".song-info") {
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
          songInfo.removeAttribute("data-bytm-loading");

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

  queueItem.querySelector<HTMLElement>(containerParentSelector)?.appendChild(queueBtnsCont);
  queueItem.classList.add("bytm-has-queue-btns");
}
