import { dbg, triesInterval, triesLimit } from "../constants";
import { addGlobalStyle, insertAfter } from "../utils";

/** Base URL of geniURL */
export const geniUrlBase = "https://api.sv443.net/geniurl";
/** GeniURL endpoint that gives song metadata when provided with a `?q` or `?artist` and `?song` parameter - [more info](https://api.sv443.net/geniurl) */
const geniURLSearchTopUrl = `${geniUrlBase}/search/top`;

let mcCurrentSongTitle = "";
let mcLyricsButtonAddTries = 0;

/** Adds a genius.com lyrics button to the media controls bar */
export async function addMediaCtrlGeniusBtn(): Promise<unknown> {
  const likeContainer = document.querySelector(".middle-controls-buttons ytmusic-like-button-renderer#like-button-renderer") as HTMLElement;

  if(!likeContainer) {
    mcLyricsButtonAddTries++;
    if(mcLyricsButtonAddTries < triesLimit)
      return setTimeout(addMediaCtrlGeniusBtn, triesInterval); // TODO: improve this

    return console.error(`BetterYTM: Couldn't find element to append lyrics buttons to after ${mcLyricsButtonAddTries} tries`);
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

  const style = `\
    #betterytm-lyrics-button {
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;

      margin-left: 8px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: transparent;
    }

    #betterytm-lyrics-button:hover {
      background-color: #383838;
    }

    #betterytm-lyrics-img {
      display: inline-block;
      z-index: 10;
      width: 24px;
      height: 24px;
      padding: 5px;
    }`;

  addGlobalStyle(style, "lyrics");


  const imgElem = document.createElement("img");
  imgElem.id = "betterytm-lyrics-img";
  imgElem.src = "https://raw.githubusercontent.com/Sv443/BetterYTM/main/resources/external/genius.png";

  linkElem.appendChild(imgElem);

  dbg && console.log(`BetterYTM: Inserted genius button after ${mcLyricsButtonAddTries} tries:`, linkElem);

  insertAfter(likeContainer, linkElem);


  mcCurrentSongTitle = songTitleElem.title;

  const onMutation = async (mutations: MutationRecord[]) => {
    for await(const mut of mutations) {
      const newTitle = (mut.target as HTMLElement).title;

      if(newTitle != mcCurrentSongTitle && newTitle.length > 0) {
        const lyricsBtn = document.querySelector("#betterytm-lyrics-button") as HTMLAnchorElement;

        if(!lyricsBtn)
          return;

        dbg && console.log(`BetterYTM: Song title changed from '${mcCurrentSongTitle}' to '${newTitle}'`);

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

/** Returns the genius.com lyrics site URL for the current song */
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
    console.error("BetterYTM: Couldn't resolve genius.com URL:", err);
    return null;
  }
}

/**
   * @param artist
   * @param song
   */
async function getGeniusUrl(artist: string, song: string): Promise<string | undefined> {
  try {
    const fetchUrl = `${geniURLSearchTopUrl}?artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(song)}`;

    dbg && console.log(`BetterYTM: Requesting URL from geniURL at '${fetchUrl}'`);

    const result = await (await fetch(fetchUrl)).json();

    if(result.error)
    {
      console.error("BetterYTM: Couldn't fetch genius.com URL:", result.message);
      return undefined;
    }

    const url = result.url;

    dbg && console.info(`BetterYTM: Found genius URL: ${url}`);

    return url;
  }
  catch(err) {
    console.error("BetterYTM: Couldn't get genius URL due to error:", err);
    return undefined;
  }
}
