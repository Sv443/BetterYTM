import { fetchAdvanced } from "@sv443-network/userutils";
import { error, info, log, warn, t, tp, getCurrentMediaType, constructUrl, onInteraction, openInTab, LyricsError, resourceAsString, setInnerHtml } from "../utils/index.js";
import { emitInterface } from "../interface.js";
import { mode, scriptInfo } from "../constants.js";
import { getFeature } from "../config.js";
import { addLyricsCacheEntryBest, getLyricsCacheEntry } from "./lyricsCache.js";
import type { LyricsCacheEntry } from "../types.js";
import { addSelectorListener } from "../observers.js";
import { showPrompt } from "../dialogs/prompt.js";

/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;

//#region media control bar

let currentSongTitle = "";

/** Adds a lyrics button to the player bar */
export async function addPlayerBarLyricsBtn() {
  addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: addActualLyricsBtn });
}

/** Actually adds the lyrics button after the like button renderer has been verified to exist */
async function addActualLyricsBtn(likeContainer: HTMLElement) {
  const songTitleElem = document.querySelector<HTMLDivElement>(".content-info-wrapper > yt-formatted-string");

  if(!songTitleElem)
    return warn("Couldn't find song title element");

  currentSongTitle = songTitleElem.title;

  const onMutation = async (mutations: MutationRecord[]) => {
    for await(const mut of mutations) {
      const newTitle = (mut.target as HTMLElement).title;

      if(newTitle !== currentSongTitle && newTitle.length > 0) {
        const lyricsBtn = document.querySelector<HTMLAnchorElement>("#bytm-player-bar-lyrics-btn");

        if(!lyricsBtn)
          continue;

        lyricsBtn.style.cursor = "wait";
        lyricsBtn.style.pointerEvents = "none";

        setInnerHtml(lyricsBtn, await resourceAsString("icon-spinner"));
        lyricsBtn.querySelector("svg")?.classList.add("bytm-generic-btn-img", "bytm-spinner");

        currentSongTitle = newTitle;

        const url = await getCurrentLyricsUrl(); // can take a second or two

        setInnerHtml(lyricsBtn, await resourceAsString("icon-lyrics"));
        lyricsBtn.querySelector("svg")?.classList.add("bytm-generic-btn-img");

        if(!url) {
          let artist, song;
          if("mediaSession" in navigator && navigator.mediaSession.metadata) {
            artist = navigator.mediaSession.metadata.artist;
            song = navigator.mediaSession.metadata.title;
          }
          const query = artist && song ? "?q=" + encodeURIComponent(sanitizeArtists(artist) + " - " + sanitizeSong(song)) : "";

          setInnerHtml(lyricsBtn, await resourceAsString("icon-error"));
          lyricsBtn.querySelector("svg")?.classList.add("bytm-generic-btn-img");

          lyricsBtn.ariaLabel = lyricsBtn.title = t("lyrics_not_found_click_open_search");
          lyricsBtn.style.cursor = "pointer";
          lyricsBtn.style.pointerEvents = "all";
          lyricsBtn.style.display = "inline-flex";
          lyricsBtn.style.visibility = "visible";
          lyricsBtn.href = `https://genius.com/search${query}`;
          continue;
        }

        lyricsBtn.href = url;

        lyricsBtn.ariaLabel = lyricsBtn.title = t("open_current_lyrics");
        lyricsBtn.style.cursor = "pointer";
        lyricsBtn.style.visibility = "visible";
        lyricsBtn.style.display = "inline-flex";
        lyricsBtn.style.pointerEvents = "initial";
      }
    }
  };

  // since YT and YTM don't reload the page on video change, MutationObserver needs to be used to watch for changes in the video title
  const obs = new MutationObserver(onMutation);

  obs.observe(songTitleElem, { attributes: true, attributeFilter: [ "title" ] });

  const lyricsBtnElem = await createLyricsBtn(undefined);
  lyricsBtnElem.id = "bytm-player-bar-lyrics-btn";

  // run parallel so the element is inserted as soon as possible
  getCurrentLyricsUrl().then(url => {
    url && addGeniusUrlToLyricsBtn(lyricsBtnElem, url);
  });

  log("Inserted lyrics button into media controls bar");

  const thumbToggleElem = document.querySelector<HTMLElement>("#bytm-thumbnail-overlay-toggle");

  if(thumbToggleElem)
    thumbToggleElem.insertAdjacentElement("afterend", lyricsBtnElem);
  else
    likeContainer.insertAdjacentElement("afterend", lyricsBtnElem);
}

//#region lyrics utils

/** Removes everything in parentheses from the passed song name */
export function sanitizeSong(songName: string) {
  if(typeof songName !== "string")
    return songName;

  const parensRegex = /\(.+\)/gmi;
  const squareParensRegex = /\[.+\]/gmi;

  // trim right after the song name:
  const sanitized = songName
    .replace(parensRegex, "")
    .replace(squareParensRegex, "");

  return sanitized.trim();
}

/**
 * Removes the secondary artists (if they exist) from the passed artists string.  
 * Intelligently splits at commas and bullet (•) characters, and removes everything after the first ampersand (&) or feat.
 */
export function sanitizeArtists(artists: string) {
  artists = artists.split(/\s*\u2022\s*/gmiu)[0]; // split at &bull; (•) character

  if(artists.match(/&/))
    artists = artists.split(/\s*&\s*/gm)[0];

  if(artists.match(/,/))
    artists = artists.split(/,\s*/gm)[0];

  if(artists.match(/(f(ea)?t\.?|Remix|Edit|Flip|Cover|Night\s?Core|Bass\s?Boost|pro?d\.?)/i)) {
    const parensRegex = /\(.+\)/gmi;
    const squareParensRegex = /\[.+\]/gmi;

    artists = artists
      .replace(parensRegex, "")
      .replace(squareParensRegex, "");
  }

  return artists.trim();
}

/** Returns the lyrics URL from genius for the currently selected song */
export async function getCurrentLyricsUrl() {
  try {
    // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
    const isVideo = getCurrentMediaType() === "video";

    const songTitleElem = document.querySelector<HTMLElement>(".content-info-wrapper > yt-formatted-string");
    const songMetaElem = document.querySelector<HTMLElement>("span.subtitle > yt-formatted-string :first-child");

    if(!songTitleElem || !songMetaElem)
      return undefined;

    const songNameRaw = songTitleElem.title;
    let songName = songNameRaw;
    let artistName = songMetaElem.textContent;

    if(isVideo) {
      // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
      if(songName.includes("-")) {
        const split = splitVideoTitle(songName);
        songName = split.song;
        artistName = split.artist;
      }
    }

    if(!artistName)
      return undefined;

    const url = await fetchLyricsUrlTop(sanitizeArtists(artistName), sanitizeSong(songName));

    if(url) {
      emitInterface("bytm:lyricsLoaded", {
        type: "current",
        artists: artistName,
        title: songName,
        url,
      });
    }

    return url;
  }
  catch(err) {
    getFeature("errorOnLyricsNotFound") && error("Couldn't resolve lyrics URL:", err);
    return undefined;
  }
}

/** Fetches the top lyrics URL result from geniURL - **the passed parameters need to be sanitized first!** */
export async function fetchLyricsUrlTop(artist: string, song: string): Promise<string | undefined> {
  try {
    return (await fetchLyricsUrls(artist, song))?.[0]?.url;
  }
  catch(err) {
    getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
    return undefined;
  }
}

/**
 * Fetches the 5 best matching lyrics URLs from geniURL using a combo exact-ish and fuzzy search  
 * **the passed parameters need to be sanitized first!**
 */
export async function fetchLyricsUrls(artist: string, song: string): Promise<Omit<LyricsCacheEntry, "added" | "viewed">[] | undefined> {
  try {
    const cacheEntry = getLyricsCacheEntry(artist, song);
    if(cacheEntry) {
      info(`Found lyrics URL in cache: ${cacheEntry.url}`);
      return [cacheEntry];
    }

    const fetchUrl = constructUrl(`${getFeature("geniUrlBase")}/search`, {
      disableFuzzy: null,
      utm_source: `${scriptInfo.name} v${scriptInfo.version}${mode === "development" ? "-pre" : ""}`,
      q: `${artist} ${song}`,
    });

    log("Requesting lyrics from geniURL:", String(fetchUrl));

    const token = getFeature("geniUrlToken");
    const fetchRes = await fetchAdvanced(fetchUrl, {
      ...(token ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      } : {}),
    });

    if(fetchRes.status === 429) {
      const waitSeconds = Number(fetchRes.headers.get("retry-after") ?? geniUrlRatelimitTimeframe);
      await showPrompt({ type: "alert", message: tp("lyrics_rate_limited", waitSeconds, waitSeconds) });
      return undefined;
    }
    else if(fetchRes.status < 200 || fetchRes.status >= 300) {
      getFeature("errorOnLyricsNotFound") && error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL - status: ${fetchRes.status} - response: ${(await fetchRes.json()).message ?? await fetchRes.text() ?? "(none)"}`));
      return undefined;
    }

    const result = await fetchRes.json();

    if(typeof result === "object" && result.error || !result || !result.all) {
      getFeature("errorOnLyricsNotFound") && error(new LyricsError(`Couldn't fetch lyrics URLs from geniURL: ${result.message}`));
      return undefined;
    }

    const allResults = result.all as {
      url: string;
      meta: {
        title: string;
        fullTitle: string;
        artists: string;
        primaryArtist: {
          name: string;
        };
      };
    }[];

    if(allResults.length === 0) {
      warn("No lyrics URL found for the provided song");
      return undefined;
    }

    const allResultsSan = allResults
      .filter(({ meta, url }) => (meta.title || meta.fullTitle) && meta.artists && url)
      .map(({ meta, url }) => ({
        meta: {
          ...meta,
          title: sanitizeSong(String(meta.title ?? meta.fullTitle)),
          artists: sanitizeArtists(String(meta.artists)),
        },
        url,
      }));

    const topRes = allResultsSan[0];
    topRes && addLyricsCacheEntryBest(topRes.meta.artists, topRes.meta.title, topRes.url);

    return allResultsSan.map(r => ({
      artist: r.meta.primaryArtist.name,
      song: r.meta.title,
      url: r.url,
    }));
  }
  catch(err) {
    getFeature("errorOnLyricsNotFound") && error("Couldn't get lyrics URL due to error:", err);
    return undefined;
  }
}

/** Adds the genius URL to the passed lyrics button element if it was previously instantiated with an undefined URL */
export async function addGeniusUrlToLyricsBtn(btnElem: HTMLAnchorElement, geniusUrl: string) {
  btnElem.href = geniusUrl;
  btnElem.ariaLabel = btnElem.title = t("open_lyrics");
  btnElem.style.visibility = "visible";
  btnElem.style.display = "inline-flex";
}

/** Creates the base lyrics button element */
export async function createLyricsBtn(geniusUrl?: string, hideIfLoading = true) {
  const linkElem = document.createElement("a");
  linkElem.classList.add("ytmusic-player-bar", "bytm-generic-btn");
  linkElem.ariaLabel = linkElem.title = geniusUrl ? t("open_lyrics") : t("lyrics_loading");
  if(geniusUrl)
    linkElem.href = geniusUrl;
  linkElem.role = "button";
  linkElem.target = "_blank";
  linkElem.rel = "noopener noreferrer";
  linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
  linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";

  onInteraction(linkElem, (e) => {
    const url = linkElem.href ?? geniusUrl;
    if(!url || e instanceof MouseEvent)
      return;
    if(!e.ctrlKey && !e.altKey)
      openInTab(url);
  }, {
    preventDefault: false,
    stopPropagation: false,
  });

  setInnerHtml(linkElem, await resourceAsString("icon-lyrics"));
  linkElem.querySelector("svg")?.classList.add("bytm-generic-btn-img");

  onInteraction(linkElem, async (e) => {
    if(e.ctrlKey || e.altKey) {
      e.preventDefault();
      e.stopImmediatePropagation();

      const search = await showPrompt({ type: "prompt", message: t("open_lyrics_search_prompt") });
      if(search && search.length > 0)
        openInTab(`https://genius.com/search?q=${encodeURIComponent(search)}`);
    }
  }, {
    preventDefault: false,
    stopPropagation: false,
  });

  return linkElem;
}

/** Splits a video title that contains a hyphen into an artist and song */
export function splitVideoTitle(title: string) {
  const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);

  return { artist, song: rest.join("-") };
}
