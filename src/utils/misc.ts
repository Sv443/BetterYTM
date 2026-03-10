import { compress, consumeStringGen, DataStore, decompress, fetchAdvanced, pauseFor, randomId, randRange, type StringGen } from "@sv443-network/coreutils";
import { getUnsafeWindow, GMStorageEngine, openInNewTab } from "@sv443-network/userutils";
import { marked } from "marked";
import { assetSource, buildNumber, changelogUrl, compressionFormat, devServerPort, mode, repo, scriptInfo, sessionStorageAvailable } from "../constants.js";
import { enableDiscardBeforeUnload } from "../features/behavior.js";
import { addSelectorListener } from "../observers.js";
import { getFeature } from "../config.js";
import { error, info, log, warn } from "./logging.js";
import { sendRequest } from "./xhr.js";
import { getLocale, type TrLocale } from "./translations.js";
import { emitBroadcast } from "./broadcast.js";
import { getVideoElement, getVideoTime, sanitizeHtml } from "./dom.js";
import type { Domain, NumberLengthFormat, ResourceKey } from "../types.js";
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

/**
 * Returns a pseudo-random ID unique to each session - returns null if sessionStorage is unavailable.  
 * Note: as duplicated tabs will receive the same sessionStorage, this ID is not guaranteed to be entirely unique.
 */
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
export type ThumbQuality = `${"maxres" | "sd" | "hq" | "mq"}default` | "default";

/** Numeric still frame thumbnail index */
export type ThumbIndex = 0 | 1 | 2 | 3;

/** Returns the thumbnail URL for a video with the given video ID and quality (defaults to "hqdefault") */
export function getThumbnailUrl(videoID: string, quality?: ThumbQuality): string
/** Returns the thumbnail URL for a video with the given video ID and index (0 is low quality thumbnail, 1-3 are low quality frames from the video) */
export function getThumbnailUrl(videoID: string, index?: ThumbIndex): string
/** Returns the thumbnail URL for a video with either a given quality identifier or index */
export function getThumbnailUrl(videoID: string, qualityOrIndex: ThumbQuality | ThumbIndex = "maxresdefault") {
  return `https://img.youtube.com/vi/${videoID}/${qualityOrIndex}.jpg`;
}

/** Returns the best available thumbnail URL for a video with the given video ID */
export async function getBestThumbnailUrl(videoID: string) {
  try {
    const priorityList = ["maxresdefault", "sddefault", "hqdefault", 0];

    for(const quality of priorityList) {
      let response: Tampermonkey.Response<unknown> | undefined;
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
      error("Couldn't decompress and parse data.", err);
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

/** Reloads the tab. If a video is currently playing, its time and volume will be preserved through the URL parameter `time_continue` and `bytm-reload-tab-volume-${sessionID}` in GM storage */
export async function reloadTab() {
  const win = getUnsafeWindow();
  try {
    enableDiscardBeforeUnload();

    if((getVideoElement()?.readyState ?? 0) > 0) {
      const time = await getVideoTime(0) ?? 0;
      // read from the slider element directly - avoids the expVolFnInv getter transform giving wrong values
      const sliderElem = document.querySelector<HTMLInputElement>("tp-yt-paper-slider#volume-slider");
      const volume = sliderElem ? Number(sliderElem.value) : Math.round(getVideoElement()!.volume * 100);

      const url = new URL(win.location.href);

      if(!isNaN(time) && time > reloadTabVideoTimeThreshold)
        url.searchParams.set("time_continue", String(time));
      if(!isNaN(volume) && volume > 0)
        await GM.setValue(`bytm-reload-tab-volume-${getSessionId() ?? "x"}`, String(volume));

      return win.location.replace(url);
    }

    win.location.reload();
  }
  catch(err) {
    error("Couldn't save video time and volume before reloading tab:", err);
    win.location.reload();
  }
}

/** Sends a broadcast packet to all open sessions to trigger a reload in all of them, including this one by default. */
export async function reloadAllTabs(reloadSelf = true) {
  info(`Emitting broadcast to reload all tabs${reloadSelf ? ", then self-reloading" : ""}.`);

  emitBroadcast({
    type: "reloadTabs",
  });

  return reloadSelf
    ? await (async () => {
      await pauseFor(50); // broadcast is synchronous, but we might still be working on something in our async queue
      return await reloadTab();
    })()
    : undefined;
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

/** Makes the {@linkcode value} over- & underflow so it is always between {@linkcode min} and {@linkcode max}, if it's outside the range */
export function overflowVal(value: number, min: number, max: number): number;
/** Makes the {@linkcode value} over- & underflow so it is always between `0` and {@linkcode max}, if it's outside the range */
export function overflowVal(value: number, max: number): number;
/** Makes the {@linkcode value} over- & underflow so it is always in a certain range */
export function overflowVal(value: number, minOrMax: number, max?: number): number {
  const min = typeof max === "number" ? minOrMax : 0;
  max = typeof max === "number" ? max : minOrMax;

  if(min > max)
    throw new RangeError("Parameter \"min\" can't be bigger than \"max\"");

  if(isNaN(value) || isNaN(min) || isNaN(max) || !isFinite(value) || !isFinite(min) || !isFinite(max))
    return NaN;

  if(value >= min && value <= max)
    return value;

  const range = max - min + 1;
  const wrappedValue = ((value - min) % range + range) % range + min;
  return wrappedValue;
}

//#region version session counter

type VersionSessions = Record<string, {
  count: number;
}>;

let verSessions: VersionSessions | undefined;

/** Counts the number of launched sessions per userscript version and returns the current count, to enable time-based features like the "new feature" adornment icon */
export async function initVersionSessionCounter(): Promise<number> {
  verSessions = JSON.parse(await GM.getValue("bytm-version-session-counter", "{}")) as VersionSessions | undefined;

  if(typeof verSessions !== "object" || verSessions === null)
    verSessions = {};

  if(typeof verSessions?.[scriptInfo.version] !== "object" || typeof verSessions?.[scriptInfo.version]?.count !== "number")
    verSessions![scriptInfo.version] = { count: 0 };
  else
    verSessions![scriptInfo.version]!.count++;

  await GM.setValue("bytm-version-session-counter", JSON.stringify(verSessions));

  return verSessions![scriptInfo.version]!.count;
}

/** Returns the number of sessions for the given version, or 0 if the version is not found in the session counter for whatever reason */
export function getVersionSessionCount(version = scriptInfo.version): number {
  if(!verSessions)
    throw new Error("Version session counter not initialized yet, call initVersionSessionCounter() first");

  if(typeof verSessions[version] !== "object" || typeof verSessions[version].count !== "number")
    return 0;

  return verSessions[version].count;
}

//#region resources

/**
 * Returns the URL of a resource by its name, as defined in `assets/resources.json`, from the CDN the script was built for.  
 * Tries to fall back to a base64-encoded data: URI in GM resources if the CDN resource was not found.  
 * @param name The name / key of the resource as defined in `assets/resources.json` - you can use `as "_"` to make TypeScript shut up if the name can not be typed as `ResourceKey`
 * @param uncached Set to true to always fetch from the CDN URL instead of the GM resource cache
 */
export async function getResourceUrl(name: ResourceKey | "_") {
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

  warn(`Couldn't get blob URL nor external URL for the resource '${name}', attempting to use base64-encoded data: URI fallback`);
  // @ts-expect-error VM and TM have the second parameter to return the b64 URI, GM doesn't
  return await GM.getResourceUrl(name, false);
}

type ResourceCache = {
  resources: Partial<Record<ResourceKey | "_", string>>;
  created: number;
  cacheKey: string;
}

/** Max age for the resource cache, after its last modification, in milliseconds */
const resourceCacheTTL = 1000 * 60 * 60 * 24 * 7; // 7 days

const resourceCacheKey = mode === "development" ? scriptInfo.version : buildNumber;

/** Cache for resources fetched via {@linkcode resourceAsString()} */
export const resourceCacheStore = new DataStore({
  id: "bytm-resource-cache",
  formatVersion: 0,
  engine: new GMStorageEngine(),
  compressionFormat,
  defaultData: {
    resources: {},
    created: Date.now(),
    cacheKey: resourceCacheKey,
  } as ResourceCache,
});

/** Resources with these prefixes are cached in the resource cache */
const cachedResourcePrefixes = [
  "doc-",   // random documents
  "icon-",  // SVG icons
  "img-",   // images
  "style-", // dynamic stylesheets
  "trans-", // translations
];

export async function initResourceCache() {
  await resourceCacheStore.loadData();
}

async function resourceCacheHas(key: ResourceKey | "_") {
  if(resourceCacheStore.getData().cacheKey !== resourceCacheKey) {
    await resourceCacheStore.saveDefaultData();
    return false;
  }

  const val = resourceCacheGet(key);
  return val !== undefined && val !== null && val.length > 0;
}

function resourceCacheGet(key: ResourceKey | "_") {
  return resourceCacheStore.getData().resources[key] ?? null;
}

async function resourceCacheSet(key: ResourceKey | "_", val: string) {
  const data = resourceCacheStore.getData();
  data.resources[key] = val;
  data.created = Date.now();
  return await resourceCacheStore.setData(data);
}

/**
 * Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property.  
 * Caches the resulting string if the resource key starts with any item in {@linkcode cachedResourcePrefixes}
 */
export async function resourceAsString(resourceKey: ResourceKey | "_") {
  if(typeof isCompressionSupported === "undefined")
    await compressionSupported(); // init variable

  if(Date.now() - resourceCacheStore.getData().created > resourceCacheTTL)
    await resourceCacheStore.saveDefaultData();
  else if(await resourceCacheHas(resourceKey))
    return resourceCacheGet(resourceKey)!;

  const resourceUrl = await getResourceUrl(resourceKey);

  try {
    if(!resourceUrl)
      throw new Error(`Couldn't find URL for resource '${resourceKey}'`);

    const res = await fetchAdvanced(resourceUrl);
    if(!res.ok)
      throw new Error(`Couldn't fetch resource '${resourceKey}' at URL '${resourceUrl}' with status ${res.status} (${res.statusText})`);

    const str = await res.text();

    if(cachedResourcePrefixes.some(prefix => resourceKey.startsWith(prefix)))
      await resourceCacheSet(resourceKey, str);

    return str;
  }
  catch(err) {
    error(`Couldn't fetch resource '${resourceKey}' as string from URL '${resourceUrl}' due to an error:`, err);
    return null;
  }
}

//#region preferred locale

/**
 * Resolves the preferred locale code, given the browser's language settings, as long as it is supported by the userscript directly or via the `altLocales` prop in `locales.json`  
 * Prioritizes any supported value of `navigator.language`, then `navigator.languages`, then goes over them again, trimming off the part after the hyphen, then falls back to `"en-US"`
 */
export function getPreferredLocale(): TrLocale {
  /** Trimmed & case insensitive string equality check. */
  const sanEq = (str1: string, str2: string) => str1.trim().toLowerCase() === str2.trim().toLowerCase();

  const allNavLangs = [...new Set([navigator.language, ...navigator.languages])]
    .map((v) => v.replace(/_/g, "-"));

  for(const navLang of allNavLangs) {
    const resolvedLoc = Object.entries(langMapping)
      .find(([key, { altLocales }]) =>
        sanEq(key, navLang) || altLocales.find(altLoc => sanEq(altLoc, navLang))
      )?.[0];
    if(resolvedLoc)
      return resolvedLoc.trim() as TrLocale;

    const navLangTrimmed = navLang.split("-")[0];
    const resolvedFallbackLang = Object.entries(langMapping)
      .find(([key, { altLocales }]) =>
        sanEq(key.split("-")[0], navLangTrimmed) || altLocales.find(al => sanEq(al.split("-")[0], navLangTrimmed))
      )?.[0];

    if(resolvedFallbackLang)
      return resolvedFallbackLang.trim() as TrLocale;
  }

  return "en-US";
}

// #region markdown

/**
 * Parses a markdown string using marked and turns it into an HTML string with default settings.  
 * @param sanitize Sanitizes against XSS by default using DOMPurify in {@linkcode sanitizeHtml()} - set to false to disable.
 */
export async function parseMarkdown(mdString: string, sanitize = true) {
  const mdHtml = await marked.parse(mdString, {
    async: true,
    breaks: true,
    gfm: true,
    silent: true,
  });

  return sanitize ? sanitizeHtml(mdHtml) : mdHtml;
}

// #region changelog

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
