import { fetchAdvanced, type Stringifiable } from "@sv443-network/userutils";
import type { ResourceKey } from "../types.js";
import { getResourceUrl } from "./misc.js";
import { error } from "./logging.js";

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
      .map(([key, val]) => `${key}${val === null ? "" : `=${encodeURIComponent(String(val))}`}`)
      .join("&")
  }`;
}

/**
 * Constructs a URL object from a base URL and a record of query parameters.  
 * If a value is null, the parameter will be valueless. If a value is undefined, the parameter will be omitted.  
 * All values will be URI-encoded.  
 * @returns Returns a URL object instead of a string
 */
export function constructUrl(base: string, params: Record<string, Stringifiable | null>) {
  return new URL(constructUrlString(base, params));
}

/**
 * Sends a request with the specified parameters and returns the response as a Promise.  
 * Ignores [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), contrary to fetch and fetchAdvanced.
 */
export function sendRequest<T = any>(details: GM.Request<T>) {
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

/** Fetches a CSS file from the specified resource with a key starting with `css-` */
export async function fetchCss(key: ResourceKey & `css-${string}`) {
  try {
    const css = await (await fetchAdvanced(await getResourceUrl(key))).text();
    return css ?? undefined;
  }
  catch(err) {
    error("Couldn't fetch CSS due to an error:", err);
    return undefined;
  }
}

export type ReturnYoutubeDislikesVotesObj = {
  /** The watch ID of the video */
  id: string;
  /** ISO timestamp of when the video was uploaded */
  dateCreated: string;
  /** Amount of likes */
  likes: number;
  /** Amount of dislikes */
  dislikes: number;
  /** Like to dislike ratio from 0.0 to 5.0 */
  rating: number;
  /** Amount of views */
  viewCount: number;
  /** Whether the video was deleted */
  deleted: boolean;
};

/**
 * Fetches the votes object for a YouTube video from the [Return YouTube Dislikes API.](https://returnyoutubedislike.com/docs)
 * @param watchId The watch ID of the video
 */
export async function fetchVideoVotes(watchId: string) {
  return (await sendRequest<ReturnYoutubeDislikesVotesObj>({
    method: "GET",
    url: `https://returnyoutubedislikeapi.com/votes?videoId=${watchId}`,
  })).response as ReturnYoutubeDislikesVotesObj;
}
