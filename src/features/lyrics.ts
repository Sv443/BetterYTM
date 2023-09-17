import { clamp, fetchAdvanced, insertAfter, onSelector } from "@sv443-network/userutils";
import { error, getResourceUrl, info, log } from "../utils";

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

//#MARKER cache

/** Cache with key format `ARTIST - SONG` (sanitized) and lyrics URLs as values. Used to prevent extraneous requests to geniURL. */
const lyricsUrlCache = new Map<string, string>();
/** How many cache entries can exist at a time - this is used to cap memory usage */
const maxLyricsCacheSize = 100;

/**
 * Returns the lyrics URL from the passed un-/sanitized artist and song name, or undefined if the entry doesn't exist yet.  
 * **The passed parameters need to be sanitized first!**
 */
export function getLyricsCacheEntry(artists: string, song: string) {
  return lyricsUrlCache.get(`${artists} - ${song}`);
}

/** Adds the provided entry into the lyrics URL cache */
export function addLyricsCacheEntry(artists: string, song: string, lyricsUrl: string) {
  lyricsUrlCache.set(`${sanitizeArtists(artists)} - ${sanitizeSong(song)}`, lyricsUrl);
  // delete oldest entry if cache gets too big
  if(lyricsUrlCache.size > maxLyricsCacheSize)
    lyricsUrlCache.delete([...lyricsUrlCache.keys()].at(-1)!);
}

//#MARKER media control bar

let mcCurrentSongTitle = "";

/** Adds a lyrics button to the media controls bar */
export function addMediaCtrlLyricsBtn(): void {
  onSelector(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer", { listener: addActualMediaCtrlLyricsBtn });
}

// TODO: add error.svg if the request fails
/** Actually adds the lyrics button after the like button renderer has been verified to exist */
async function addActualMediaCtrlLyricsBtn(likeContainer: HTMLElement) {
  const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string") as HTMLDivElement;

  // run parallel without awaiting so the MutationObserver below can observe the title element in time
  (async () => {
    const gUrl = await getCurrentLyricsUrl();

    const linkElem = await createLyricsBtn(gUrl ?? undefined);
    linkElem.id = "betterytm-lyrics-button";

    log("Inserted lyrics button into media controls bar");

    insertAfter(likeContainer, linkElem);
  })();

  mcCurrentSongTitle = songTitleElem.title;

  const spinnerIconUrl = await getResourceUrl("spinner");
  const lyricsIconUrl = await getResourceUrl("lyrics");
  const errorIconUrl = await getResourceUrl("error");

  const onMutation = async (mutations: MutationRecord[]) => {
    for await(const mut of mutations) {
      const newTitle = (mut.target as HTMLElement).title;

      if(newTitle !== mcCurrentSongTitle && newTitle.length > 0) {
        const lyricsBtn = document.querySelector("#betterytm-lyrics-button") as HTMLAnchorElement;

        if(!lyricsBtn)
          return;

        info(`Song title changed from '${mcCurrentSongTitle}' to '${newTitle}'`);

        lyricsBtn.style.cursor = "wait";
        lyricsBtn.style.pointerEvents = "none";

        const imgElem = lyricsBtn.querySelector<HTMLImageElement>("img")!;
        imgElem.src = spinnerIconUrl;
        imgElem.classList.add("bytm-spinner");

        mcCurrentSongTitle = newTitle;

        const url = await getCurrentLyricsUrl(); // can take a second or two

        imgElem.src = lyricsIconUrl;
        imgElem.classList.remove("bytm-spinner");

        if(!url) {
          imgElem.src = errorIconUrl;
          imgElem.title = "Couldn't find lyrics URL";
          continue;
        }

        lyricsBtn.href = url;

        lyricsBtn.title = "Open the current song's lyrics in a new tab";
        lyricsBtn.style.cursor = "pointer";
        lyricsBtn.style.visibility = "initial";
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

    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string") as HTMLElement;
    const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string:first-child") as HTMLElement;

    if(!songTitleElem || !songMetaElem || !songTitleElem.title)
      return undefined;

    const songNameRaw = songTitleElem.title;
    const songName = sanitizeSong(songNameRaw);

    const artistName = sanitizeArtists(songMetaElem.title);

    /** Use when the current song is not a "real YTM song" with a static background, but rather a music video */
    const getGeniusUrlVideo = async () => {
      if(!songName.includes("-")) // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
        return await getGeniusUrl(artistName, songName);
    
      const { artist, song } = splitVideoTitle(songName);

      return await getGeniusUrl(artist, song);
    };

    const url = isVideo ? await getGeniusUrlVideo() : await getGeniusUrl(artistName, songName);

    return url;
  }
  catch(err) {
    error("Couldn't resolve lyrics URL:", err);
    return undefined;
  }
}

/** Fetches the actual lyrics URL from geniURL - **the passed parameters need to be sanitized first!** */
export async function getGeniusUrl(artist: string, song: string): Promise<string | undefined> {
  try {
    const cacheEntry = getLyricsCacheEntry(artist, song);
    if(cacheEntry) {
      info(`Found lyrics URL in cache: ${cacheEntry}`);
      return cacheEntry;
    }

    const startTs = Date.now();
    const fetchUrl = `${geniURLSearchTopUrl}?artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}${thresholdParam}`;

    log(`Requesting URL from geniURL at '${fetchUrl}'`);

    const fetchRes = await fetchAdvanced(fetchUrl);
    if(fetchRes.status === 429) {
      alert(`You are being rate limited.\nPlease wait ${fetchRes.headers.get("retry-after") ?? geniUrlRatelimitTimeframe} seconds before requesting more lyrics.`);
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
  linkElem.title = geniusUrl ? "Click to open this song's lyrics in a new tab" : "Loading lyrics URL...";
  if(geniusUrl)
    linkElem.href = geniusUrl;
  linkElem.role = "button";
  linkElem.target = "_blank";
  linkElem.rel = "noopener noreferrer";
  linkElem.style.visibility = hideIfLoading && geniusUrl ? "initial" : "hidden";
  linkElem.style.display = hideIfLoading && geniusUrl ? "inline-flex" : "none";

  const imgElem = document.createElement("img");
  imgElem.className = "bytm-generic-btn-img";
  imgElem.src = await getResourceUrl("lyrics");

  linkElem.appendChild(imgElem);

  return linkElem;
}

/** Splits a video title that contains a hyphen into an artist and song */
export function splitVideoTitle(title: string) {
  const [artist, ...rest] = title.split("-").map((v, i) => i < 2 ? v.trim() : v);

  return { artist, song: rest.join("-") };
}
