import { autoPlural, fetchAdvanced } from "@sv443-network/userutils";
import Fuse from "fuse.js";
import { error, getResourceUrl, info, log, warn, t, tp, currentMediaType, constructUrl } from "../utils";
import { emitInterface } from "../interface";
import { mode, scriptInfo } from "../constants";
import { getFeature } from "../config";
import { addLyricsCacheEntryBest, addLyricsCacheEntryPenalized, getLyricsCacheEntry } from "./lyricsCache";
import type { LyricsCacheEntry } from "../types";
import { addSelectorListener } from "src/observers";

/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;

//#region media control bar

let currentSongTitle = "";

/** Adds a lyrics button to the media controls bar */
export async function addMediaCtrlLyricsBtn() {
  addSelectorListener("playerBarMiddleButtons", "ytmusic-like-button-renderer#like-button-renderer", { listener: addActualMediaCtrlLyricsBtn });
}

/** Actually adds the lyrics button after the like button renderer has been verified to exist */
async function addActualMediaCtrlLyricsBtn(likeContainer: HTMLElement) {
  const songTitleElem = document.querySelector<HTMLDivElement>(".content-info-wrapper > yt-formatted-string");

  if(!songTitleElem)
    return warn("Couldn't find song title element");

  // run parallel without awaiting so the MutationObserver below can observe the title element in time
  (async () => {
    const gUrl = await getCurrentLyricsUrl();

    const lyricsBtnElem = await createLyricsBtn(gUrl ?? undefined);
    lyricsBtnElem.id = "betterytm-lyrics-button";

    log("Inserted lyrics button into media controls bar");

    const thumbToggleElem = document.querySelector<HTMLElement>("#bytm-thumbnail-overlay-toggle");

    if(thumbToggleElem)
      thumbToggleElem.insertAdjacentElement("afterend", lyricsBtnElem);
    else
      likeContainer.insertAdjacentElement("afterend", lyricsBtnElem);
  })();

  currentSongTitle = songTitleElem.title;

  const spinnerIconUrl = await getResourceUrl("icon-spinner");
  const lyricsIconUrl = await getResourceUrl("icon-lyrics");
  const errorIconUrl = await getResourceUrl("icon-error");

  const onMutation = async (mutations: MutationRecord[]) => {
    for await(const mut of mutations) {
      const newTitle = (mut.target as HTMLElement).title;

      if(newTitle !== currentSongTitle && newTitle.length > 0) {
        const lyricsBtn = document.querySelector<HTMLAnchorElement>("#betterytm-lyrics-button");

        if(!lyricsBtn)
          continue;

        lyricsBtn.style.cursor = "wait";
        lyricsBtn.style.pointerEvents = "none";

        const imgElem = lyricsBtn.querySelector<HTMLImageElement>("img")!;
        imgElem.src = spinnerIconUrl;
        imgElem.classList.add("bytm-spinner");

        currentSongTitle = newTitle;

        const url = await getCurrentLyricsUrl(); // can take a second or two

        imgElem.src = lyricsIconUrl;
        imgElem.classList.remove("bytm-spinner");

        if(!url) {
          let artist, song;
          if("mediaSession" in navigator && navigator.mediaSession.metadata) {
            artist = navigator.mediaSession.metadata.artist;
            song = navigator.mediaSession.metadata.title;
          }
          const query = artist && song ? "?q=" + encodeURIComponent(sanitizeArtists(artist) + " - " + sanitizeSong(song)) : "";

          imgElem.src = errorIconUrl;

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

/** Removes the secondary artist (if it exists) from the passed artists string */
export function sanitizeArtists(artists: string) {
  artists = artists.split(/\s*\u2022\s*/gmiu)[0]; // split at &bull; [•] character

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
    const isVideo = currentMediaType() === "video";

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
    error("Couldn't resolve lyrics URL:", err);
    return undefined;
  }
}

/** Fetches the top lyrics URL result from geniURL - **the passed parameters need to be sanitized first!** */
export async function fetchLyricsUrlTop(artist: string, song: string): Promise<string | undefined> {
  try {
    return (await fetchLyricsUrls(artist, song))?.[0]?.url;
  }
  catch(err) {
    error("Couldn't get lyrics URL due to error:", err);
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

    const startTs = Date.now();
    const fetchUrl = constructUrl(`${getFeature("geniUrlBase")}/search`, {
      disableFuzzy: null,
      utm_source: scriptInfo.name,
      utm_content: `v${scriptInfo.version}${mode === "development" ? "-dev" : ""}`,
      artist,
      song,
    });

    log("Requesting lyrics from geniURL:", fetchUrl);

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
      alert(tp("lyrics_rate_limited", waitSeconds, waitSeconds));
      return undefined;
    }
    else if(fetchRes.status < 200 || fetchRes.status >= 300) {
      error(`Couldn't fetch lyrics URLs from geniURL - status: ${fetchRes.status} - response: ${(await fetchRes.json()).message ?? await fetchRes.text() ?? "(none)"}`);
      return undefined;
    }

    const result = await fetchRes.json();

    if(typeof result === "object" && result.error || !result || !result.all) {
      error("Couldn't fetch lyrics URL:", result.message);
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

    if(!getFeature("advancedLyricsFilter")) {
      const topRes = allResultsSan[0];
      topRes && addLyricsCacheEntryBest(topRes.meta.artists, topRes.meta.title, topRes.url);

      return allResultsSan.map(r => ({
        artist: r.meta.primaryArtist.name,
        song: r.meta.title,
        url: r.url,
      }));
    }
    
    const exactish = (input: string) => input.toLowerCase()
      .replace(/[\s\-_&,.()[\]]+/gm, "");

    // exact-ish matches, best matching one first
    const exactishResults = [...allResultsSan].sort((a, b) => {
      const aTitleScore = exactish(a.meta.title).localeCompare(exactish(song));
      const bTitleScore = exactish(b.meta.title).localeCompare(exactish(song));
      const aArtistScore = exactish(a.meta.primaryArtist.name).localeCompare(exactish(artist));
      const bArtistScore = exactish(b.meta.primaryArtist.name).localeCompare(exactish(artist));

      return aTitleScore + aArtistScore - bTitleScore - bArtistScore;
    });

    // use fuse.js for fuzzy match
    // search song title and artist separately, then combine the scores
    const titleFuse = new Fuse([...allResultsSan], {
      keys: ["title"],
      includeScore: true,
      threshold: 0.4,
    });

    const artistFuse = new Fuse([...allResultsSan], {
      keys: ["primaryArtist.name"],
      includeScore: true,
      threshold: 0.4,
    });

    let fuzzyResults: typeof allResultsSan = allResultsSan.map(r => {
      const titleRes = titleFuse.search(r.meta.title);
      const artistRes = artistFuse.search(r.meta.primaryArtist.name);

      const titleScore = titleRes[0]?.score ?? 0;
      const artistScore = artistRes[0]?.score ?? 0;

      return {
        ...r,
        score: titleScore + artistScore,
      };
    });
    // I love TS
    fuzzyResults = (fuzzyResults as (typeof allResultsSan[0] & { score: number })[])
      .map(({ score, ...rest }) => rest as typeof allResultsSan[0]);

    const hasExactMatch = exactishResults.slice(0, 3).find(r => exactish(r.meta.title) === exactish(fuzzyResults[0].meta.title) && exactish(r.meta.primaryArtist.name) === exactish(fuzzyResults[0].meta.primaryArtist.name));
    const finalResults = [
      ...(
        hasExactMatch
          ? [fuzzyResults[0], ...allResultsSan.filter(r => r.url !== fuzzyResults[0].url)]
          : [...allResultsSan]
      ),
    ].slice(0, 5);

    // add top 3 results to the cache with a penalty to their time to live
    // so every entry is deleted faster if it's not considered as relevant
    finalResults.slice(0, 3).forEach(({ meta: { artists, title }, url }, i) => {
      const penaltyFraction = hasExactMatch
        // if there's an exact match, give it 0 penalty and penalize all other results with the full value
        ? i === 0 ? 0 : 1
        // if there's no exact match, penalize all results with a fraction of the full penalty since they're more likely to be unrelated
        : 0.6;
      addLyricsCacheEntryPenalized(sanitizeArtists(artists), sanitizeSong(title), url, penaltyFraction);
    });

    finalResults.length > 0 && log("Found", finalResults.length, "lyrics", autoPlural("URL", finalResults), "in", Date.now() - startTs, "ms:", finalResults);

    // returns search results sorted by relevance
    return finalResults.map(r => ({
      artist: r.meta.primaryArtist.name,
      song: r.meta.title,
      url: r.url,
    }));
  }
  catch(err) {
    error("Couldn't get lyrics URL due to error:", err);
    return undefined;
  }
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

  const imgElem = document.createElement("img");
  imgElem.classList.add("bytm-generic-btn-img");
  imgElem.src = await getResourceUrl("icon-lyrics");

  linkElem.appendChild(imgElem);

  return linkElem;
}

/** Splits a video title that contains a hyphen into an artist and song */
export function splitVideoTitle(title: string) {
  const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);

  return { artist, song: rest.join("-") };
}
