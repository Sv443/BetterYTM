import { fetchAdvanced, type Prettify, type Stringifiable } from "@sv443-network/userutils";
import type { ITunesAlbumObj, ITunesAPIResponse, RYDVotesObj, StyleResourceKey, VideoVotesObj } from "../types.js";
import { getResourceUrl } from "./misc.js";
import { error, info, warn } from "./logging.js";

//#region misc

/**
 * Constructs a URL from a base URL and a record of query parameters.  
 * If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.  
 * All values will be stringified using their `toString()` method and then URI-encoded.
 * @returns Returns a string instead of a URL object
 */
export function constructUrlString(baseUrl: string, params: Record<string, Stringifiable | null>) {
  return `${baseUrl}?${
    Object.entries(params)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => `${k}${v === null ? "" : `=${encodeURIComponent(String(v))}`}`)
      .join("&")
  }`;
}

/**
 * Constructs a URL object from a base URL and a record of query parameters.  
 * If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.  
 * All values will be stringified and then URI-encoded.  
 * @returns Returns a URL object instead of a string
 */
export function constructUrl(base: string, params: Record<string, Stringifiable | null>) {
  return new URL(constructUrlString(base, params));
}

/**
 * Sends a request with the specified parameters and returns the response as a Promise.  
 * Ignores [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), contrary to fetch and fetchAdvanced.
 */
export function sendRequest<T = any>(details: Prettify<Omit<GM.Request<T>, "onload" | "onerror" | "ontimeout" | "onabort">>): Promise<GM.Response<T>> {
  return new Promise<GM.Response<T>>((resolve, reject) => {
    GM.xmlHttpRequest({
      timeout: 10_000,
      ...details,
      onload: resolve,
      onerror: reject,
      ontimeout: reject,
      onabort: reject,
    });
  });
}

//#region css

/** Fetches a CSS file from the specified resource with a key starting with `css-` */
export async function fetchCss(key: StyleResourceKey) {
  try {
    const css = await (await fetchAdvanced(await getResourceUrl(key))).text();
    return css ?? undefined;
  }
  catch(err) {
    error("Couldn't fetch CSS due to an error:", err);
    return undefined;
  }
}

//#region RYD

/** Cache for the vote data of YouTube videos to prevent some unnecessary requests */
const voteCache = new Map<string, VideoVotesObj>();
/** Time-to-live for the vote cache in milliseconds */
const voteCacheTTL = 1000 * 60 * 10;

/**
 * Fetches the votes object for a YouTube video from the [Return YouTube Dislike API.](https://returnyoutubedislike.com/docs)
 * @param videoID The video ID of the video
 */
export async function fetchVideoVotes(videoID: string): Promise<VideoVotesObj | undefined> {
  try {
    if(voteCache.has(videoID)) {
      const cached = voteCache.get(videoID)!;
      if(Date.now() - cached.timestamp < voteCacheTTL) {
        info(`Returning cached video votes for video ID '${videoID}':`, cached);
        return cached;
      }
      else
        voteCache.delete(videoID);
    }

    const votesRaw = JSON.parse(
      (await sendRequest({
        method: "GET",
        url: `https://returnyoutubedislikeapi.com/votes?videoId=${videoID}`,
      })).response
    ) as RYDVotesObj;

    if(!("id" in votesRaw) || !("likes" in votesRaw) || !("dislikes" in votesRaw) || !("rating" in votesRaw)) {
      error("Couldn't parse video votes due to an error:", votesRaw);
      return undefined;
    }

    const votesObj = {
      id: votesRaw.id,
      likes: votesRaw.likes,
      dislikes: votesRaw.dislikes,
      rating: votesRaw.rating,
      timestamp: Date.now(),
    };
    voteCache.set(votesObj.id, votesObj);

    info(`Fetched video votes for watch ID '${videoID}':`, votesObj);

    return votesObj;
  }
  catch(err) {
    error("Couldn't fetch video votes due to an error:", err);
    return undefined;
  }
}

//#region iTunes album info

/** Fetches all album info objects from the Apple Music / iTunes API endpoint at `https://itunes.apple.com/search?country=us&limit=5&entity=album&term=$ARTIST%20$SONG` */
export async function fetchITunesAlbumInfo(artist: string, album: string): Promise<ITunesAlbumObj[]> {
  try {
    const res = await fetchAdvanced(constructUrl("https://itunes.apple.com/search", {
      country: "us",
      limit: 5,
      entity: "album",
      term: `${artist} ${album}`,
    }));

    if(!res.ok) {
      warn("Couldn't fetch iTunes album info due to a request error:", res);
      return [];
    }

    const json = await res.json().catch(warn) as ITunesAPIResponse;

    if(!("resultCount" in json) || !("results" in json)) {
      warn("Couldn't parse iTunes album info due to an error:", json);
      return [];
    }
    if(json.resultCount === 0) {
      warn("No iTunes album info found for artist", artist, "and album", album);
      return [];
    }

    return json.results.filter((result) => {
      if(!("collectionType" in result) || !("collectionName" in result) || !("artistName" in result) || !("collectionId" in result) || !("artworkUrl60" in result) || !("artworkUrl100" in result))
        return false;

      return result.collectionType === "Album" && result.collectionName && result.artistName && result.collectionId && result.artworkUrl60 && result.artworkUrl100;
    });
  }
  catch(err) {
    error("Couldn't fetch iTunes album info due to an error:", err);
    return [];
  }
}
