import { ConfigManager, autoPlural, clamp, compress, decompress, fetchAdvanced, insertAfter } from "@sv443-network/userutils";
import Fuse from "fuse.js";
import { constructUrlString, error, getResourceUrl, info, log, onSelectorOld, warn, t, tp, compressionSupported } from "../utils";
import { emitInterface } from "../interface";
import { compressionFormat, mode, scriptInfo } from "../constants";
import type { LyricsCacheEntry } from "../types";

/** Base URL of geniURL */
export const geniUrlBase = "https://api.sv443.net/geniurl";
/** GeniURL endpoint that gives song metadata when provided with a `?q` or `?artist` and `?song` parameter - [more info](https://api.sv443.net/geniurl) */
const geniURLSearchUrl = `${geniUrlBase}/search`;
/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;

//#MARKER new cache

/** How many cache entries can exist at a time - this is used to cap memory usage */
const maxLyricsCacheSize = 1000;
/** Maximum time before a cache entry is force deleted */
const cacheTTL = 1000 * 60 * 60 * 24 * 30; // 30 days

export type LyricsCache = {
  cache: LyricsCacheEntry[];
};

let canCompress = true;

const lyricsCache = new ConfigManager<LyricsCache>({
  id: "bytm-lyrics-cache",
  defaultConfig: {
    cache: [],
  },
  formatVersion: 1,
  encodeData: (data) => canCompress ? compress(data, compressionFormat, "string") : data,
  decodeData: (data) => canCompress ? decompress(data, compressionFormat, "string") : data,
});

export async function initLyricsCache() {
  canCompress = await compressionSupported();
  const data = await lyricsCache.loadData();
  log(`Loaded lyrics cache (${data.cache.length} entries):`, data);
  return data;
}

/**
 * Returns the cache entry for the passed artist and song, or undefined if it doesn't exist yet  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param refreshEntry If true, the timestamp of the entry will be set to the current time
 */
export function getLyricsCacheEntry(artist: string, song: string, refreshEntry = true) {
  const { cache } = lyricsCache.getData();
  const entry = cache.find(e => e.artist === artist && e.song === song);
  if(entry && Date.now() - entry?.added > cacheTTL) {
    deleteLyricsCacheEntry(artist, song);
    return undefined;
  }

  // refresh timestamp of the entry by mutating cache
  if(entry && refreshEntry)
    updateLyricsCacheEntry(artist, song);
  return entry;
}

function updateLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCache.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    const newEntry = cache.splice(idx, 1)[0]!;
    newEntry.viewed = Date.now();
    lyricsCache.setData({ cache: [ newEntry, ...cache ] });
  }
}

function deleteLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCache.getData();
  const idx = cache.findIndex(e => e.artist === artist && e.song === song);
  if(idx !== -1) {
    cache.splice(idx, 1);
    lyricsCache.setData({ cache });
  }
}

/** Returns the full lyrics cache array */
export function getLyricsCache() {
  return lyricsCache.getData().cache;
}

/**
 * Adds the provided entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 */
export function addLyricsCacheEntry(artist: string, song: string, url: string) {
  const { cache } = lyricsCache.getData();
  cache.push({
    artist, song, url, viewed: Date.now(), added: Date.now(),
  } satisfies LyricsCacheEntry);
  cache.sort((a, b) => b.viewed - a.viewed);
  if(cache.length > maxLyricsCacheSize)
    cache.pop();
  return lyricsCache.setData({ cache });
}

/**
 * Adds the provided entry into the lyrics URL cache, synchronously to RAM and asynchronously to GM storage  
 * Also adds a penalty to the viewed timestamp and added timestamp to decrease entry's lifespan in cache  
 *   
 * ⚠️ {@linkcode artist} and {@linkcode song} need to be sanitized first!
 * @param penaltyFr Fraction to remove from the timestamp values - has to be between 0 and 1 - default is 0 (no penalty) - (0.25 = only penalized by a quarter of the predefined max penalty)
 */
export function addLyricsCacheEntryPenalized(artist: string, song: string, url: string, penaltyFr = 0) {
  const { cache } = lyricsCache.getData();

  penaltyFr = clamp(penaltyFr, 0, 1);

  const viewedPenalty = 1000 * 60 * 60 * 24 * 5 * penaltyFr; // 5 days
  const addedPenalty = 1000 * 60 * 60 * 24 * 15 * penaltyFr; // 15 days
  cache.push({
    artist,
    song,
    url,
    viewed: Date.now() - viewedPenalty,
    added: Date.now() - addedPenalty,
  } satisfies LyricsCacheEntry);

  cache.sort((a, b) => b.viewed - a.viewed);
  if(cache.length > maxLyricsCacheSize)
    cache.pop();

  return lyricsCache.setData({ cache });
}

//#MARKER media control bar

let currentSongTitle = "";

/** Adds a lyrics button to the media controls bar */
export async function addMediaCtrlLyricsBtn() {
  onSelectorOld(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer", { listener: addActualMediaCtrlLyricsBtn });
}

/** Actually adds the lyrics button after the like button renderer has been verified to exist */
async function addActualMediaCtrlLyricsBtn(likeContainer: HTMLElement) {
  const songTitleElem = document.querySelector<HTMLDivElement>(".content-info-wrapper > yt-formatted-string");

  if(!songTitleElem)
    return warn("Couldn't find song title element");

  // run parallel without awaiting so the MutationObserver below can observe the title element in time
  (async () => {
    const gUrl = await getCurrentLyricsUrl();

    const linkElem = await createLyricsBtn(gUrl ?? undefined);
    linkElem.id = "betterytm-lyrics-button";

    log("Inserted lyrics button into media controls bar");

    insertAfter(likeContainer, linkElem);
  })();

  currentSongTitle = songTitleElem.title;

  const spinnerIconUrl = await getResourceUrl("img-spinner");
  const lyricsIconUrl = await getResourceUrl("img-lyrics");
  const errorIconUrl = await getResourceUrl("img-error");

  const onMutation = async (mutations: MutationRecord[]) => {
    for await(const mut of mutations) {
      const newTitle = (mut.target as HTMLElement).title;

      if(newTitle !== currentSongTitle && newTitle.length > 0) {
        const lyricsBtn = document.querySelector<HTMLAnchorElement>("#betterytm-lyrics-button");

        if(!lyricsBtn)
          continue;

        info(`Song title changed from '${currentSongTitle}' to '${newTitle}'`);

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
          imgElem.ariaLabel = imgElem.title = t("lyrics_not_found_click_open_search");
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

//#MARKER utils

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

  return artists.trim();
}

/** Returns the lyrics URL from genius for the currently selected song */
export async function getCurrentLyricsUrl() {
  try {
    // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
    const isVideo = typeof document.querySelector("ytmusic-player")?.hasAttribute("video-mode");

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
    const fetchUrl = constructUrlString(geniURLSearchUrl, {
      disableFuzzy: null,
      utm_source: scriptInfo.name,
      utm_content: `v${scriptInfo.version}${mode === "development" ? "-dev" : ""}`,
      artist,
      song,
    });

    log(`Requesting URLs from geniURL at '${fetchUrl}'`);

    const fetchRes = await fetchAdvanced(fetchUrl);
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

    const exactish = (input: string) => {
      return input.toLowerCase()
        .replace(/[\s\-_&,.()[\]]+/gm, "");
    };

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

    // add results to the cache with a penalty to their time to live
    // so every entry is deleted faster if it's not considered as relevant
    finalResults.forEach(({ meta: { artists, title }, url }, i) => {
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
  linkElem.className = "ytmusic-player-bar bytm-generic-btn";
  linkElem.ariaLabel = linkElem.title = geniusUrl ? t("open_lyrics") : t("lyrics_loading");
  if(geniusUrl)
    linkElem.href = geniusUrl;
  linkElem.role = "button";
  linkElem.target = "_blank";
  linkElem.rel = "noopener noreferrer";
  linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
  linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";

  const imgElem = document.createElement("img");
  imgElem.className = "bytm-generic-btn-img";
  imgElem.src = await getResourceUrl("img-lyrics");

  linkElem.appendChild(imgElem);

  return linkElem;
}

/** Splits a video title that contains a hyphen into an artist and song */
export function splitVideoTitle(title: string) {
  const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);

  return { artist, song: rest.join("-") };
}
