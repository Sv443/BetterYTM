import { triesInterval, triesLimit } from "../constants";
import { error, info, insertAfter, log } from "../utils";
import "./lyrics.css";

/** Base URL of geniURL */
export const geniUrlBase = "https://api.sv443.net/geniurl";
/** GeniURL endpoint that gives song metadata when provided with a `?q` or `?artist` and `?song` parameter - [more info](https://api.sv443.net/geniurl) */
const geniURLSearchTopUrl = `${geniUrlBase}/search/top`;

let mcCurrentSongTitle = "";
let mcLyricsButtonAddTries = 0;

/** Adds a lyrics button to the media controls bar */
export async function addMediaCtrlLyricsBtn(): Promise<unknown> {
  const likeContainer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer") as HTMLElement;

  if(!likeContainer) {
    mcLyricsButtonAddTries++;
    if(mcLyricsButtonAddTries < triesLimit)
      return setTimeout(addMediaCtrlLyricsBtn, triesInterval); // TODO: improve this

    return error(`Couldn't find element to append lyrics buttons to after ${mcLyricsButtonAddTries} tries`);
  }

  const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string") as HTMLDivElement;


  const gUrl = await getCurrentGeniusUrl();

  const linkElem = document.createElement("a");
  linkElem.id = "betterytm-lyrics-button";
  linkElem.className = "ytmusic-player-bar";
  linkElem.title = gUrl ? "Click to open this song's lyrics in a new tab" : "Loading...";
  if(gUrl)
    linkElem.href = gUrl;
  linkElem.target = "_blank";
  linkElem.rel = "noopener noreferrer";
  linkElem.style.visibility = gUrl ? "initial" : "hidden";
  linkElem.style.display = gUrl ? "inline-flex" : "none";


  const imgElem = document.createElement("img");
  imgElem.id = "betterytm-lyrics-img";
  imgElem.src = "https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/external/genius.png";

  linkElem.appendChild(imgElem);

  log(`Inserted lyrics button after ${mcLyricsButtonAddTries} tries:`, linkElem);

  insertAfter(likeContainer, linkElem);


  mcCurrentSongTitle = songTitleElem.title;

  const onMutation = async (mutations: MutationRecord[]) => {
    for await(const mut of mutations) {
      const newTitle = (mut.target as HTMLElement).title;

      if(newTitle != mcCurrentSongTitle && newTitle.length > 0) {
        const lyricsBtn = document.querySelector("#betterytm-lyrics-button") as HTMLAnchorElement;

        if(!lyricsBtn)
          return;

        log(`Song title changed from '${mcCurrentSongTitle}' to '${newTitle}'`);

        lyricsBtn.style.cursor = "wait";
        lyricsBtn.style.pointerEvents = "none";

        mcCurrentSongTitle = newTitle;

        const url = await getCurrentGeniusUrl(); // can take a second or two
        if(!url)
          continue;

        lyricsBtn.href = url;

        lyricsBtn.title = "Click to open this song's lyrics in a new tab";
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

/** Returns the lyrics URL from genius for the current song */
export async function getCurrentGeniusUrl() {
  try {
    // In videos the video title contains both artist and song title, in "regular" YTM songs, the video title only contains the song title
    const isVideo = typeof document.querySelector("ytmusic-player")?.getAttribute("video-mode_") === "string";

    const songTitleElem = document.querySelector(".content-info-wrapper > yt-formatted-string") as HTMLElement;
    const songMetaElem = document.querySelector("span.subtitle > yt-formatted-string:first-child") as HTMLElement;

    if(!songTitleElem || !songMetaElem || !songTitleElem.title)
      return null;

    const sanitizeSongName = (songName: string) => {
      const parensRegex = /\(.+\)/gmi;
      const squareParensRegex = /\[.+\]/gmi;

      // trim right after the song name:
      const sanitized = songName
        .replace(parensRegex, "")
        .replace(squareParensRegex, "");

      return sanitized.trim();
    };

    const splitArtist = (songMeta: string) => {
      songMeta = songMeta.split(/\s*\u2022\s*/gmiu)[0]; // split at bullet (&bull; / •) character

      if(songMeta.match(/&/))
        songMeta = songMeta.split(/\s*&\s*/gm)[0];

      if(songMeta.match(/,/))
        songMeta = songMeta.split(/,\s*/gm)[0];

      return songMeta.trim();
    };

    const songNameRaw = songTitleElem.title;
    const songName = sanitizeSongName(songNameRaw);

    const artistName = splitArtist(songMetaElem.title);

    /** Use when the current song is not a "real YTM song" with a static background, but rather a music video */
    const getGeniusUrlVideo = async () => {
      if(!songName.includes("-")) // for some fucking reason some music videos have YTM-like song title and artist separation, some don't
        return await getGeniusUrl(artistName, songName);

      const [artist, ...rest] = songName.split("-").map(v => v.trim());

      return await getGeniusUrl(artist, rest.join(" "));
    };

    // TODO: artist might need further splitting before comma or ampersand

    const url = isVideo ? await getGeniusUrlVideo() : (await getGeniusUrl(artistName, songName) ?? await getGeniusUrlVideo());

    return url;
  }
  catch(err)
  {
    error("Couldn't resolve lyrics URL:", err);
    return null;
  }
}

/**
   * @param artist
   * @param song
   */
async function getGeniusUrl(artist: string, song: string): Promise<string | undefined> {
  try {
    const startTs = Date.now();
    const fetchUrl = `${geniURLSearchTopUrl}?artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}`;

    log(`Requesting URL from geniURL at '${fetchUrl}'`);

    const result = await (await fetch(fetchUrl)).json();

    if(typeof result === "object" && result.error) {
      error("Couldn't fetch lyrics URL:", result.message);
      return undefined;
    }

    const url = result.url;

    info(`Found lyrics URL (after ${Date.now() - startTs}ms): ${url}`);

    return url;
  }
  catch(err) {
    error("Couldn't get lyrics URL due to error:", err);
    return undefined;
  }
}
