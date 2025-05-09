import { compress, consumeStringGen, decompress, fetchAdvanced, getUnsafeWindow, openInNewTab, pauseFor, randomId, randRange, type Prettify, type StringGen } from "@sv443-network/userutils";
import { marked } from "marked";
import { assetSource, buildNumber, changelogUrl, compressionFormat, devServerPort, repo, sessionStorageAvailable } from "../constants.js";
import { type Domain, type NumberLengthFormat, type ResourceKey } from "../types.js";
import { error, type TrLocale, warn, sendRequest, getLocale, log, getVideoElement, getVideoTime } from "./index.js";
import { enableDiscardBeforeUnload } from "../features/behavior.js";
import { getFeature } from "../config.js";
import langMapping from "../../assets/locales.json" with { type: "json" };
import resourcesJson from "../../assets/resources.json" with { type: "json" };
import { addSelectorListener } from "src/observers.js";

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
  return channelId.match(/^(UC|@)[a-zA-Z0-9_-]+$/) !== null;
}

/** Quality identifier for a thumbnail - from highest to lowest res: `maxresdefault` > `sddefault` > `hqdefault` > `mqdefault` > `default` */
type ThumbQuality = `${"maxres" | "sd" | "hq" | "mq"}default` | "default";

/** Returns the thumbnail URL for a video with the given video ID and quality (defaults to "hqdefault") */
export function getThumbnailUrl(videoID: string, quality?: ThumbQuality): string
/** Returns the thumbnail URL for a video with the given video ID and index (0 is low quality thumbnail, 1-3 are low quality frames from the video) */
export function getThumbnailUrl(videoID: string, index?: 0 | 1 | 2 | 3): string
/** Returns the thumbnail URL for a video with either a given quality identifier or index */
export function getThumbnailUrl(videoID: string, qualityOrIndex: Prettify<ThumbQuality | 0 | 1 | 2 | 3> = "maxresdefault") {
  return `https://img.youtube.com/vi/${videoID}/${qualityOrIndex}.jpg`;
}

/** Returns the best available thumbnail URL for a video with the given video ID */
export async function getBestThumbnailUrl(videoID: string) {
  try {
    const priorityList = ["maxresdefault", "sddefault", "hqdefault", 0];

    for(const quality of priorityList) {
      let response: GM.Response<unknown> | undefined;
      const url = getThumbnailUrl(videoID, quality as ThumbQuality);
      try {
        response = await sendRequest({ url, method: "HEAD", timeout: 6_000 });
      }
      catch(err) {
        error(`Error while sending HEAD request to thumbnail URL for video ID '${videoID}' with quality '${quality}':`, err);
        void err;
      }
      if(response && response.status < 300 && response.status >= 200)
        return url;
    }
  }
  catch(err) {
    throw new Error(`Couldn't get thumbnail URL for video ID '${videoID}': ${err}`);
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
export async function tryToDecompressAndParse<TData = Record<string, unknown>>(input: StringGen): Promise<TData | null> {
  let parsed: TData | null = null;
  const val = await consumeStringGen(input);

  try {
    parsed = JSON.parse(val);
  }
  catch {
    try {
      parsed = JSON.parse(await decompress(val, compressionFormat, "string"));
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

/** add `time_continue` param only if current video time is greater than this value */
const reloadTabVideoTimeThreshold = 3;

/** Reloads the tab. If a video is currently playing, its time and volume will be preserved through the URL parameter `time_continue` and `bytm-reload-tab-volume` in GM storage */
export async function reloadTab() {
  const win = getUnsafeWindow();
  try {
    enableDiscardBeforeUnload();

    if((getVideoElement()?.readyState ?? 0) > 0) {
      const time = await getVideoTime(0) ?? 0;
      const volume = Math.round(getVideoElement()!.volume * 100);

      const url = new URL(win.location.href);

      if(!isNaN(time) && time > reloadTabVideoTimeThreshold)
        url.searchParams.set("time_continue", String(time));
      if(!isNaN(volume) && volume > 0)
        await GM.setValue("bytm-reload-tab-volume", String(volume));

      return win.location.replace(url);
    }

    win.location.reload();
  }
  catch(err) {
    error("Couldn't save video time and volume before reloading tab:", err);
    win.location.reload();
  }
}

/** Checks if the passed value is a {@linkcode StringGen} */
export function isStringGen(val: unknown): val is StringGen {
  return typeof val === "string"
    || typeof val === "function"
    || (typeof val === "object" && val !== null && "toString" in val && !val.toString().startsWith("[object"))
    || val instanceof Promise;
}

/** Scrolls to the currently playing queue item in the queue once it's available */
export function scrollToCurrentSongInQueue(evt?: MouseEvent | KeyboardEvent) {
  addSelectorListener("sidePanel", "ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"loading\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"playing\"], ytmusic-player-queue ytmusic-player-queue-item[play-button-state=\"paused\"]", {
    listener(activeItem) {
      activeItem.scrollIntoView({
        behavior: evt?.shiftKey ? "instant" : "smooth",
        block: evt?.ctrlKey || evt?.altKey ? "start" : "center",
        inline: "center",
      });

      log("Scrolled to active song in queue:", activeItem);
    }
  });
}

//#region resources

/**
 * TODO: remove GM.getResourceUrl, since all resources are now fetched from the CDN  
 * Returns the blob-URL of a resource by its name, as defined in `assets/resources.json`, from GM resource cache - [see GM.getResourceUrl docs](https://wiki.greasespot.net/GM.getResourceUrl)  
 * Falls back to a CDN URL or base64-encoded data URI if the resource is not available in the GM resource cache  
 * @param name The name / key of the resource as defined in `assets/resources.json` - you can use `as "_"` to make TypeScript shut up if the name can not be typed as `ResourceKey`
 * @param uncached Set to true to always fetch from the CDN URL instead of the GM resource cache
 */
export async function getResourceUrl(name: ResourceKey | "_", uncached = false) {
  let url = !uncached && await GM.getResourceUrl(name);

  if(!url || url.length === 0) {
    const resObjOrStr = resourcesJson.resources?.[name as keyof typeof resourcesJson.resources];

    if(typeof resObjOrStr === "object" || typeof resObjOrStr === "string") {
      const pathName = typeof resObjOrStr === "object" && "path" in resObjOrStr ? resObjOrStr?.path : resObjOrStr;
      const ghRef = typeof resObjOrStr === "object" && "ref" in resObjOrStr ? resObjOrStr?.ref : buildNumber;

      if(pathName) {
        return pathName.startsWith("http")
          ? pathName
          : (() => {
            let path = pathName;
            if(path.startsWith("/"))
              path = path.slice(1);
            else
              path = `assets/${path}`;
            switch(assetSource) {
            case "jsdelivr":
              return `https://cdn.jsdelivr.net/gh/${repo}@${ghRef}/${path}`;
            case "github":
              return `https://raw.githubusercontent.com/${repo}/${ghRef}/${path}`;
            case "local":
              return `http://localhost:${devServerPort}/${path}`;
            }
          })();
      }
    }

    warn(`Couldn't get blob URL nor external URL for @resource '${name}', attempting to use base64-encoded fallback`);
    // @ts-expect-error
    url = await GM.getResourceUrl(name, false);
  }

  return url;
}

/**
 * Resolves the preferred locale of the user given their browser's language settings, as long as it is supported by the userscript directly or via the `altLocales` prop in `locales.json`  
 * Prioritizes any supported value of `navigator.language`, then `navigator.languages`, then goes over them again, trimming off the part after the hyphen, then falls back to `"en-US"`
 */
export function getPreferredLocale(): TrLocale {
  const sanEq = (str1: string, str2: string) => str1.trim().toLowerCase() === str2.trim().toLowerCase();

  const allNvLocs = [...new Set([navigator.language, ...navigator.languages])]
    .map((v) => v.replace(/_/g, "-"));

  for(const nvLoc of allNvLocs) {
    const resolvedLoc = Object.entries(langMapping)
      .find(([key, { altLocales }]) =>
        sanEq(key, nvLoc) || altLocales.find(al => sanEq(al, nvLoc))
      )?.[0];
    if(resolvedLoc)
      return resolvedLoc.trim() as TrLocale;

    const trimmedNvLoc = nvLoc.split("-")[0];
    const resolvedFallbackLoc = Object.entries(langMapping)
      .find(([key, { altLocales }]) =>
        sanEq(key.split("-")[0], trimmedNvLoc) || altLocales.find(al => sanEq(al.split("-")[0], trimmedNvLoc))
      )?.[0];

    if(resolvedFallbackLoc)
      return resolvedFallbackLoc.trim() as TrLocale;
  }

  return "en-US";
}

const resourceCache = new Map<string, string>();

/**
 * Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property.  
 * Caches the resulting string if the resource key starts with `icon-`
 */
export async function resourceAsString(resource: ResourceKey | "_") {
  if(resourceCache.has(resource))
    return resourceCache.get(resource)!;

  const resourceUrl = await getResourceUrl(resource);
  try {
    if(!resourceUrl)
      throw new Error(`Couldn't find URL for resource '${resource}'`);
    const str = await (await fetchAdvanced(resourceUrl)).text();

    // since SVG is lightweight, caching it in memory is fine
    if(resource.startsWith("icon-"))
      resourceCache.set(resource, str);
    return str;
  }
  catch(err) {
    error(`Couldn't fetch resource '${resource}' at URL '${resourceUrl}' due to an error:`, err);
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
  const clRes = await fetchAdvanced(changelogUrl);
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
