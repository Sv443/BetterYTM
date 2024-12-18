import { compress, decompress, fetchAdvanced, openInNewTab, pauseFor, randomId, randRange } from "@sv443-network/userutils";
import { marked } from "marked";
import { branch, compressionFormat, repo, sessionStorageAvailable } from "../constants.js";
import { type Domain, type NumberLengthFormat, type ResourceKey, type StringGen } from "../types.js";
import { error, type TrLocale, warn, sendRequest, getLocale, log } from "./index.js";
import { getFeature } from "../config.js";
import langMapping from "../../assets/locales.json" with { type: "json" };
import resourcesJson from "../../assets/resources.json" with { type: "json" };

//#region misc

let domain: Domain;

/**
 * Returns the current domain as a constant string representation
 * @throws Throws if script runs on an unexpected website
 */
export function getDomain(): Domain {
  if(domain)
    return domain;
  if(location.hostname.match(/^music\.youtube/))
    return domain = "ytm";
  else if(location.hostname.match(/youtube\./))
    return domain = "yt";
  else
    throw new Error("BetterYTM is running on an unexpected website. Please don't tamper with the @match directives in the userscript header.");
}

/** Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable */
export function getSessionId(): string | null {
  try {
    if(!sessionStorageAvailable)
      throw new Error("Session storage unavailable");

    let sesId = window.sessionStorage.getItem("_bytm-session-id");

    if(!sesId)
      window.sessionStorage.setItem("_bytm-session-id", sesId = randomId(10, 36));

    return sesId;
  }
  catch(err) {
    warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
    return null;
  }
}

let isCompressionSupported: boolean | undefined;

/** Tests whether compression via the predefined {@linkcode compressionFormat} is supported (only on the first call, then returns the cached result) */
export async function compressionSupported() {
  if(typeof isCompressionSupported === "boolean")
    return isCompressionSupported;
  try {
    await compress(".", compressionFormat, "string");
    return isCompressionSupported = true;
  }
  catch {
    return isCompressionSupported = false;
  }
}

/** Returns a string with the given array's items separated by a default separator (`", "` by default), with an optional different separator for the last item */
export function arrayWithSeparators<TArray>(array: TArray[], separator = ", ", lastSeparator?: string) {
  const arr = [...array];
  if(!lastSeparator)
    lastSeparator = separator;

  if(arr.length === 0)
    return "";
  else if(arr.length <= 2)
    return arr.join(lastSeparator);
  else
    return `${arr.slice(0, -1).join(separator)}${lastSeparator}${arr.at(-1)!}`;
}

/** Returns the watch ID of the current video or null if not on a video page */
export function getWatchId() {
  const { searchParams, pathname } = new URL(location.href);
  return pathname.includes("/watch") ? searchParams.get("v") : null;
}

/**
 * Returns the ID of the current channel in the format `@User` or `UC...` from URLs with the path `/@User`, `/@User/videos`, `/channel/UC...` or `/channel/UC.../videos`  
 * Returns null if the current page is not a channel page or there was an error parsing the URL
 */
export function getCurrentChannelId() {
  return parseChannelIdFromUrl(location.href);
}

/** Returns the channel ID from a URL or null if the URL is invalid */
export function parseChannelIdFromUrl(url: string | URL) {
  try {
    const { pathname } = url instanceof URL ? url : new URL(url);
    if(pathname.includes("/channel/"))
      return sanitizeChannelId(pathname.split("/channel/")[1].split("/")[0]);
    else if(pathname.includes("/@"))
      return sanitizeChannelId(pathname.split("/@")[1].split("/")[0]);
    else
      return null;
  }
  catch {
    return null;
  }
}

/** Sanitizes a channel ID by adding a leading `@` if the ID doesn't start with `UC...` */
export function sanitizeChannelId(channelId: string) {
  channelId = String(channelId).trim();
  return isValidChannelId(channelId) || channelId.startsWith("@")
    ? channelId
    : `@${channelId}`;
}

/** Tests whether a string is a valid channel ID in the format `@User` or `UC...` */
export function isValidChannelId(channelId: string) {
  return channelId.match(/^(UC|@)[\w-]+$/) !== null;
}

/** Quality identifier for a thumbnail - from highest to lowest res: `maxresdefault` > `sddefault` > `hqdefault` > `mqdefault` > `default` */
type ThumbQuality = `${"maxres" | "sd" | "hq" | "mq" | ""}default`;

/** Returns the thumbnail URL for a video with the given watch ID and quality (defaults to "hqdefault") */
export function getThumbnailUrl(watchId: string, quality?: ThumbQuality): string
/** Returns the thumbnail URL for a video with the given watch ID and index (0 is low quality thumbnail, 1-3 are low quality frames from the video) */
export function getThumbnailUrl(watchId: string, index: 0 | 1 | 2 | 3): string
/** Returns the thumbnail URL for a video with either a given quality identifier or index */
export function getThumbnailUrl(watchId: string, qualityOrIndex: ThumbQuality | 0 | 1 | 2 | 3 = "maxresdefault") {
  return `https://img.youtube.com/vi/${watchId}/${qualityOrIndex}.jpg`;
}

/** Returns the best available thumbnail URL for a video with the given watch ID */
export async function getBestThumbnailUrl(watchId: string) {
  try {
    const priorityList = ["maxresdefault", "sddefault", "hqdefault", 0];

    for(const quality of priorityList) {
      let response: GM.Response<unknown> | undefined;
      const url = getThumbnailUrl(watchId, quality as ThumbQuality);
      try {
        response = await sendRequest({ url, method: "HEAD", timeout: 6_000 });
      }
      catch(err) {
        error(`Error while sending HEAD request to thumbnail URL for video '${watchId}' with quality '${quality}':`, err);
        void err;
      }
      if(response && response.status < 300 && response.status >= 200)
        return url;
    }
  }
  catch(err) {
    throw new Error(`Couldn't get thumbnail URL for video '${watchId}': ${err}`);
  }
}

/** Opens the given URL in a new tab, using GM.openInTab if available */
export function openInTab(href: string, background = false) {
  try {
    openInNewTab(href, background);
  }
  catch {
    window.open(href, "_blank", "noopener noreferrer");
  }
}

/** Tries to parse an uncompressed or compressed input string as a JSON object */
export async function tryToDecompressAndParse<TData = Record<string, unknown>>(input: string): Promise<TData | null> {
  let parsed: TData | null = null;

  try {
    parsed = JSON.parse(input);
  }
  catch {
    try {
      parsed = JSON.parse(await decompress(input, compressionFormat, "string"));
    }
    catch(err) {
      error("Couldn't decompress and parse data due to an error:", err);
      return null;
    }
  }

  // artificial timeout to allow animations to finish and because dumb monkey brains *expect* a delay
  await pauseFor(randRange(250, 500));

  return parsed;
}

/** Very crude OS detection */
export function getOS() {
  if(navigator.userAgent.match(/mac(\s?os|intel)/i))
    return "mac";
  return "other";
}

/** Turns the passed StringGen (either a string, stringifiable object or a sync or async function returning a string or stringifiable object) into a string */
export async function consumeStringGen(strGen: StringGen): Promise<string> {
  return typeof strGen === "string"
    ? strGen
    : String(
      typeof strGen === "function"
        ? await strGen()
        : strGen
    );
}

/** Formats a number based on the config or the passed {@linkcode notation} */
export function formatNumber(num: number, notation?: NumberLengthFormat): string {
  return num.toLocaleString(
    getLocale().replace(/_/g, "-"),
    (notation ?? getFeature("numbersFormat")) === "short"
      ? {
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 1,
      }
      : {
        style: "decimal",
        maximumFractionDigits: 0,
      },
  );
}

//#region resources

/**
 * Returns the blob-URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl)  
 * Falls back to a `raw.githubusercontent.com` URL or base64-encoded data URI if the resource is not available in the GM resource cache  
 * @param uncached Set to true to fetch from the `raw.githubusercontent.com` URL instead of the GM resource cache
 */
export async function getResourceUrl(name: ResourceKey | "_", uncached = false) {
  let url = !uncached && await GM.getResourceUrl(name);
  if(!url || url.length === 0) {
    const resObjOrStr = resourcesJson?.[name as keyof typeof resourcesJson];
    if(typeof resObjOrStr === "object" || typeof resObjOrStr === "string") {
      const pathname = typeof resObjOrStr === "object" && "path" in resObjOrStr ? resObjOrStr.path : resObjOrStr;
      const ref = typeof resObjOrStr === "object" && "ref" in resObjOrStr ? resObjOrStr.ref : branch;

      if(pathname && pathname.startsWith("/") && pathname.length > 1)
        return `https://raw.githubusercontent.com/${repo}/${ref}${pathname}`;
      else if(pathname && pathname.startsWith("http"))
        return pathname;
      else if(pathname && pathname.length > 0)
        return `https://raw.githubusercontent.com/${repo}/${ref}/assets/${pathname}`;
    }
    warn(`Couldn't get blob URL nor external URL for @resource '${name}', trying to use base64-encoded fallback`);
    // @ts-ignore
    url = await GM.getResourceUrl(name, false);
  }
  return url;
}

/**
 * Returns the preferred locale of the user, provided it is supported by the userscript.  
 * Prioritizes `navigator.language`, then `navigator.languages`, then `"en-US"` as a fallback.
 */
export function getPreferredLocale(): TrLocale {
  const nvLangs = navigator.languages
    .filter(lang => lang.match(/^[a-z]{2}(-|_)[A-Z]$/) !== null);

  if(Object.entries(langMapping).find(([key]) => key === navigator.language))
    return navigator.language as TrLocale;

  for(const loc of nvLangs) {
    if(Object.entries(langMapping).find(([key]) => key === loc))
      return loc as TrLocale;
  }

  // if navigator.languages has entries that aren't locale codes in the format xx-XX
  if(navigator.languages.some(lang => lang.match(/^[a-z]{2}$/))) {
    for(const lang of nvLangs) {
      const foundLoc = Object.entries(langMapping).find(([ key ]) => key.startsWith(lang))?.[0];
      if(foundLoc)
        return foundLoc as TrLocale;
    }
  }

  return "en-US";
}

/** Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property */
export async function resourceAsString(resource: ResourceKey | "_") {
  try {
    const resourceUrl = await getResourceUrl(resource);
    if(!resourceUrl)
      throw new Error(`Couldn't find URL for resource '${resource}'`);
    return await (await fetchAdvanced(resourceUrl)).text();
  }
  catch(err) {
    error("Couldn't get SVG element from resource:", err);
    return null;
  }
}

/** Parses a markdown string using marked and turns it into an HTML string with default settings - doesn't sanitize against XSS! */
export function parseMarkdown(mdString: string) {
  return marked.parse(mdString, {
    async: true,
    gfm: true,
  });
}

/** Returns the content of the changelog markdown file */
export async function getChangelogMd() {
  const clRes = await fetchAdvanced(await getResourceUrl("doc-changelog", true));
  log("Fetched changelog:", clRes);
  return await clRes.text();
}

/** Returns the changelog as HTML with a details element for each version */
export async function getChangelogHtmlWithDetails() {
  try {
    const changelogMd = await getChangelogMd();
    let changelogHtml = await parseMarkdown(changelogMd);

    const getVerId = (verStr: string) => verStr.trim().replace(/[._#\s-]/g, "");

    changelogHtml = changelogHtml.replace(/<div\s+class="split">\s*<\/div>\s*\n?\s*<br(\s\/)?>/gm, "</details>\n<br>\n<details class=\"bytm-changelog-version-details\">");

    const h2Matches = Array.from(changelogHtml.matchAll(/<h2(\s+id=".+")?>([\d\w\s.]+)<\/h2>/gm));
    for(const [fullMatch, , verStr] of h2Matches)
      changelogHtml = changelogHtml.replace(fullMatch, `<summary tab-index="0"><h2 id="${getVerId(verStr)}" role="subheading" aria-level="1">${verStr}</h2></summary>`);

    changelogHtml = `<details class="bytm-changelog-version-details">${changelogHtml}</details>`;

    return changelogHtml;
  }
  catch(err) {
    return `Error while preparing changelog: ${err}`;
  }
}
