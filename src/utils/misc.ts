import { compress, consumeStringGen, DataStore, decompress, fetchAdvanced, getUnsafeWindow, GMStorageEngine, pauseFor, randomId, randRange, type StringGen } from "@sv443-network/userutils";
import { marked } from "marked";
import { registerStore } from "@/core/storeRegistry.ts";
import { getThumbnailUrl, millis, type ThumbQuality } from "@util/pure.ts";
import { getResourceUrl } from "@util/resourceUrl.ts";
import { buildNumber, changelogUrl, compressionFormat, mode, scriptInfo, sessionStorageAvailable } from "@/constants.ts";
import { enableDiscardBeforeUnload } from "@util/unloadGuard.ts";
import { addSelectorListener } from "@/observers.ts";
import { getFeature } from "@/config.ts";
import { loggers } from "@util/logging.ts";
import { sendRequest } from "@util/xhr.ts";
import { getLocale } from "@util/translations.ts";
import { getVideoElement, getVideoTime, sanitizeHtml } from "@util/dom.ts";
import type { NumberLengthFormat, ResourceKey } from "@/types.ts";

//#region misc


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
    loggers.misc.warn("Couldn't get session ID, sessionStorage / cookies might be disabled:", err);
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
        loggers.misc.error(`Error while sending HEAD request to thumbnail URL for video ID '${videoID}' with quality '${quality}':`, err);
        void err;
      }
      if(response && response.status < 300 && response.status >= 200)
        return url;
    }
  }
  catch(err) {
    throw new Error(`Couldn't get thumbnail URL for video ID '${videoID}': ${err}`, { cause: err });
  }
}


/** Tries to parse an uncompressed or compressed input string as a JSON object */
export async function tryToDecompressAndParse<TData = Record<string, unknown>>(input: StringGen): Promise<TData | null> {
  let parsed: TData | null;
  const val = await consumeStringGen(input);

  try {
    parsed = JSON.parse(val);
  }
  catch {
    try {
      parsed = JSON.parse(await decompress(val, compressionFormat, "string"));
    }
    catch(err) {
      loggers.misc.error("Couldn't decompress and parse data.", err);
      return null;
    }
  }

  // artificial timeout to allow animations to finish and because dumb monkey brains *expect* a delay
  await pauseFor(randRange(400, 800));

  return parsed;
}


/** Formats a number based on the config or the passed {@linkcode notation} */
export function formatNumber(num: number, notation?: NumberLengthFormat): string {
  return num.toLocaleString(
    getLocale(),
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

type ReloadTabData = {
  entries: Array<{
    sessionId: string | null;
    timestamp: number;
    volume: number | null;
    time: number | null;
  }>;
};

const reloadTabStore = new DataStore<ReloadTabData, false>({
  id: "bytm-reload-tab",
  engine: new GMStorageEngine(),
  formatVersion: 0,
  compressionFormat: null,
  memoryCache: false,
  defaultData: {
    entries: [],
  },
  nanoEmitterOptions: {
    publicEmit: false,
    catchUpEvents: ["loadData"],
  },
});

const reloadTabEntryMaxTTL = 1000 * 60 * 60 * 24;

/** Returns the "reload tab" data for the current session, or null if there is no data for the current session or sessionStorage is unavailable. */
export async function getReloadTabData(sessionId?: string | null, deleteAfterRead = true) {
  try {
    if(!sessionId)
      sessionId = getSessionId();

    const data = await reloadTabStore.loadData();
    let entries = [...data.entries];
    const sesEntry = entries.find(e => e.sessionId === sessionId) ?? null;

    entries = data.entries.filter(e => deleteAfterRead && sesEntry ? e.sessionId !== sessionId : true);

    // filter out expired and own entries
    entries = entries.filter(e => Date.now() - e.timestamp < reloadTabEntryMaxTTL);

    await reloadTabStore.setData({
      ...data,
      entries,
    });

    return sesEntry;
  }
  catch(err) {
    loggers.misc.error("Couldn't get reload tab data, sessionStorage might be unavailable:", err);
    return null;
  }
}

/** add `time_continue` param only if current video time is greater than this value */
const reloadTabVideoTimeThreshold = 3;

/** Reloads the own tab. If a video is currently playing, its time and volume will be preserved through the URL parameter `time_continue` and the {@linkcode reloadTabStore} DataStore (ID `bytm-reload-tab`) */
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
      if(!isNaN(volume) && volume > 0) {
        const reloadTabData = await reloadTabStore.loadData();
        if(reloadTabData.entries.find(e => e.sessionId === getSessionId()))
          reloadTabData.entries = reloadTabData.entries.filter(e => e.sessionId !== getSessionId());
        reloadTabData.entries.push({
          sessionId: getSessionId(),
          timestamp: Date.now(),
          volume,
          time: !isNaN(time) && time > reloadTabVideoTimeThreshold ? time : null,
        });
        await reloadTabStore.setData(reloadTabData);
      }

      return win.location.replace(url);
    }

    win.location.reload();
  }
  catch(err) {
    loggers.misc.error("Couldn't save video time and volume before reloading tab:", err);
    win.location.reload();
  }
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

      loggers.misc.log("Scrolled to active song in queue:", activeItem);
    }
  });
}





//#region resources


/** Collection of remote fetch attempts per resource, for inclusion in the performance report. */
export const resourceFetches = new Map<ResourceKey | "_", number[]>();

function logResourceFetch(key: ResourceKey | "_") {
  resourceFetches.set(key, [...(resourceFetches.get(key) ?? []), millis()]);
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
  nanoEmitterOptions: {
    publicEmit: false,
    catchUpEvents: ["loadData"],
  },
});
registerStore(resourceCacheStore, { full: true });

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

    logResourceFetch(resourceKey);
    const res = await fetchAdvanced(resourceUrl);

    if(!res.ok)
      throw new Error(`Couldn't fetch resource '${resourceKey}' at URL '${resourceUrl}' with status ${res.status} (${res.statusText})`);

    const str = await res.text();

    if(cachedResourcePrefixes.some(prefix => resourceKey.startsWith(prefix)) && !await resourceCacheHas(resourceKey))
      await resourceCacheSet(resourceKey, str);

    return str;
  }
  catch(err) {
    loggers.misc.error(`Couldn't fetch resource '${resourceKey}' as string from URL '${resourceUrl}' due to an error:`, err);
    return null;
  }
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
  loggers.misc.log("Fetched changelog:", clRes);
  return await clRes.text();
}

/** Returns the changelog as HTML with a details element for each version */
export async function getChangelogHtmlWithDetails() {
  try {
    const changelogMd = await getChangelogMd();
    let changelogHtml = await parseMarkdown(changelogMd, false);

    const getVerId = (verStr: string) => verStr.trim().replace(/[._#\s-]/g, "");

    changelogHtml = changelogHtml.replace(/<div\s+class="split">\s?<\/div>(\s+)?\n?(\s+)?<br(\s\/)?>/gm, "</details>\n<br>\n<details class=\"bytm-changelog-version-details\">");

    const h2Matches = Array.from(changelogHtml.matchAll(/<h2(\s+id=".+")?>([\d\w\s.]+)<\/h2>/gm));
    for(const [fullMatch, , verStr] of h2Matches)
      changelogHtml = changelogHtml.replace(fullMatch, `<summary tab-index="0"><h2 id="${getVerId(verStr)}" role="subheading" aria-level="1">${verStr}</h2></summary>`);

    changelogHtml = `<details class="bytm-changelog-version-details">${changelogHtml}</details>`;

    return sanitizeHtml(changelogHtml);
  }
  catch(err) {
    loggers.misc.error("Couldn't fetch or parse changelog:", err);
    return `Error while preparing changelog: ${err}`;
  }
}
