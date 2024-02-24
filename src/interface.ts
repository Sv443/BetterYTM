import * as UserUtils from "@sv443-network/userutils";
import { mode, branch, host, buildNumber, compressionFormat, scriptInfo } from "./constants";
import { getResourceUrl, getSessionId, getVideoTime, log, setLocale, getLocale, hasKey, hasKeyFor, t, tp, type TrLocale } from "./utils";
import { addSelectorListener } from "./observers";
import { getFeatures, saveFeatures } from "./config";
import { fetchLyricsUrlTop, getLyricsCacheEntry, sanitizeArtists, sanitizeSong } from "./features/lyrics";
import type { SiteEventsMap } from "./siteEvents";

const { getUnsafeWindow } = UserUtils;

/** All events that can be emitted on the BYTM interface and the data they provide */
export interface InterfaceEvents {
  /** Emitted when BYTM has finished initializing all features */
  "bytm:ready": undefined;
  /** Emitted whenever the lyrics URL for a song is loaded */
  "bytm:lyricsLoaded": { type: "current" | "queue", artists: string, title: string, url: string };
  /** Emitted whenever the locale is changed */
  "bytm:setLocale": { locale: TrLocale };
  /**
   * Emitted whenever the SelectorObserver instances have been initialized  
   * Use `unsafeWindow.BYTM.addObserverListener()` to add custom listener functions to the observers
   */
  "bytm:observersReady": undefined;

  // additionally all events from SiteEventsMap in `src/siteEvents.ts`
  // are emitted in this format: "bytm:siteEvent:nameOfSiteEvent"
}

const globalFuncs = {
  addSelectorListener,
  getResourceUrl,
  getSessionId,
  getVideoTime,
  setLocale,
  getLocale,
  hasKey,
  hasKeyFor,
  t,
  tp,
  getFeatures,
  saveFeatures,
  fetchLyricsUrlTop,
  getLyricsCacheEntry,
  sanitizeArtists,
  sanitizeSong,
};

/** Initializes the BYTM interface */
export function initInterface() {
  const props = {
    mode,
    branch,
    host,
    buildNumber,
    compressionFormat,
    ...scriptInfo,
    ...globalFuncs,
    UserUtils,
  };

  for(const [key, value] of Object.entries(props))
    setGlobalProp(key, value);

  log("Initialized BYTM interface");
}

/** Sets a global property on the window.BYTM object */
export function setGlobalProp<
  TKey extends keyof Window["BYTM"],
  TValue = Window["BYTM"][TKey],
> (
  key: TKey | (string & {}),
  value: TValue,
) {
  // use unsafeWindow so the properties are available outside of the userscript's scope
  const win = getUnsafeWindow();
  if(!win.BYTM)
    win.BYTM = {} as typeof win.BYTM;
  win.BYTM[key] = value;
}

/** Emits an event on the BYTM interface */
export function emitInterface<
  TEvt extends keyof InterfaceEvents,
  TDetail extends InterfaceEvents[TEvt],
>(
  type: TEvt | `bytm:siteEvent:${keyof SiteEventsMap}`,
  ...data: (TDetail extends undefined ? [undefined?] : [TDetail])
) {
  getUnsafeWindow().dispatchEvent(new CustomEvent(type, { detail: data[0] }));
}
