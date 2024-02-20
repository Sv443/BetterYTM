import { ConfigManager, clamp, compress, decompress, fetchAdvanced, insertAfter } from "@sv443-network/userutils";
import { constructUrlString, error, getResourceUrl, info, log, onSelectorOld, warn, t, tp } from "../utils";
import { emitInterface } from "../interface";
import { compressionFormat, scriptInfo } from "../constants";
import type { LyricsCacheEntry } from "../types";

/** Base URL of geniURL */
export const geniUrlBase = "https://api.sv443.net/geniurl";
/** GeniURL endpoint that gives song metadata when provided with a `?q` or `?artist` and `?song` parameter - [more info](https://api.sv443.net/geniurl) */
const geniURLSearchTopUrl = `${geniUrlBase}/search/top`;
/**
 * The threshold to pass to geniURL's fuzzy filtering.  
 * From fuse.js docs: At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.  
 * Set to undefined to use the default.
 */
const threshold = 0.55;
/** Ratelimit budget timeframe in seconds - should reflect what's in geniURL's docs */
const geniUrlRatelimitTimeframe = 30;

const thresholdParam = threshold ? `&threshold=${clamp(threshold, 0, 1)}` : "";
void thresholdParam; // TODO: re-add once geniURL 1.4 is released

//#MARKER new cache

/** How many cache entries can exist at a time - this is used to cap memory usage */
const maxLyricsCacheSize = 300;

export type LyricsCache = {
  cache: LyricsCacheEntry[];
};

const lyricsCache = new ConfigManager<LyricsCache>({
  id: "bytm-lyrics-cache",
  defaultConfig: {
    cache: [],
  },
  formatVersion: 1,
  encodeData: (data) => compress(data, compressionFormat, "string"),
  decodeData: (data) => decompress(data, compressionFormat, "string"),
  // migrations: {
  //   // 1 -> 2
  //   2: (oldData: Record<string, unknown>) => {
  //     return {
  //       cache: oldData.cache,
  //     };
  //   },
  // }
});

export async function initLyricsCache() {
  const data = await lyricsCache.loadData();
  log(`Loaded lyrics cache (${data.cache.length} entries):`, data);
  return data;
}

/**
 * Returns the cache entry for the passed artist and song, or undefined if it doesn't exist yet  
 * {@linkcode artist} and {@linkcode song} need to be sanitized first!
 */
export function getLyricsCacheEntry(artist: string, song: string) {
  const { cache } = lyricsCache.getData();
  return cache.find(e => e.artist === artist && e.song === song);
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
    artist, song, url, added: Date.now(),
  } satisfies LyricsCacheEntry);
  cache.sort((a, b) => b.added - a.added);
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

    const url = await fetchLyricsUrl(sanitizeArtists(artistName), sanitizeSong(songName));

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

/** Fetches the actual lyrics URL from geniURL - **the passed parameters need to be sanitized first!** */
export async function fetchLyricsUrl(artist: string, song: string): Promise<string | undefined> {
  try {
    const cacheEntry = getLyricsCacheEntry(artist, song);
    if(cacheEntry) {
      info(`Found lyrics URL in cache: ${cacheEntry}`);
      return cacheEntry.url;
    }

    const startTs = Date.now();
    const fetchUrl = constructUrlString(geniURLSearchTopUrl, {
      disableFuzzy: null,
      utm_source: "BetterYTM",
      utm_content: `v${scriptInfo.version}`,
      artist,
      song,
    });

    log(`Requesting URL from geniURL at '${fetchUrl}'`);

    const fetchRes = await fetchAdvanced(fetchUrl);
    if(fetchRes.status === 429) {
      const waitSeconds = Number(fetchRes.headers.get("retry-after") ?? geniUrlRatelimitTimeframe);
      alert(tp("lyrics_rate_limited", waitSeconds, waitSeconds));
      return undefined;
    }
    else if(fetchRes.status < 200 || fetchRes.status >= 300) {
      error(`Couldn't fetch lyrics URL from geniURL - status: ${fetchRes.status} - response: ${(await fetchRes.json()).message ?? await fetchRes.text() ?? "(none)"}`);
      return undefined;
    }
    const result = await fetchRes.json();

    if(typeof result === "object" && result.error) {
      error("Couldn't fetch lyrics URL:", result.message);
      return undefined;
    }

    const url = result.url;

    info(`Found lyrics URL (after ${Date.now() - startTs}ms): ${url}`);
    addLyricsCacheEntry(artist, song, url);

    return url;
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
