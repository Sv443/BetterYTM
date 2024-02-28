import * as UserUtils from "@sv443-network/userutils";
import { mode, branch, host, buildNumber, compressionFormat, scriptInfo } from "./constants";
import { getResourceUrl, getSessionId, getVideoTime, log, setLocale, getLocale, hasKey, hasKeyFor, NanoEmitter, t, tp, type TrLocale } from "./utils";
import { addSelectorListener } from "./observers";
import { getFeatures, saveFeatures } from "./config";
import { featInfo } from "./features";
import { fetchLyricsUrlTop, getLyricsCacheEntry, sanitizeArtists, sanitizeSong, type LyricsCache } from "./features/lyrics";
import type { SiteEventsMap } from "./siteEvents";
import type { FeatureConfig, FeatureInfo, LyricsCacheEntry } from "./types";
import { BytmDialog, createHotkeyInput, createToggleInput } from "./components";

const { getUnsafeWindow } = UserUtils;

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEvents = {
  /** Emitted when BYTM has finished initializing all features */
  "bytm:ready": undefined;
  /**
   * Emitted whenever the SelectorObserver instances have been initialized  
   * Use `unsafeWindow.BYTM.addObserverListener()` to add custom listener functions to the observers
   */
  "bytm:observersReady": undefined;
  /** Emitted as soon as the feature config has been loaded */
  "bytm:configReady": FeatureConfig;

  /** Emitted whenever the locale is changed */
  "bytm:setLocale": { locale: TrLocale };

  /** Emitted when a dialog was opened - returns the dialog's instance */
  "bytm:dialogOpened": BytmDialog;
  /** Emitted when the dialog with the specified ID was opened - returns the dialog's instance - use `as "bytm:dialogOpened:id"` in TS to make the error go away */
  "bytm:dialogOpened:id": BytmDialog;

  /** Emitted whenever the lyrics URL for a song is loaded */
  "bytm:lyricsLoaded": { type: "current" | "queue", artists: string, title: string, url: string };
  /** Emitted when the lyrics cache has been loaded */
  "bytm:lyricsCacheReady": LyricsCache;
  /** Emitted when the lyrics cache has been cleared */
  "bytm:lyricsCacheCleared": undefined;
  /** Emitted when an entry is added to the lyrics cache */
  "bytm:lyricsCacheEntryAdded": LyricsCacheEntry;

  // additionally all events from SiteEventsMap in `src/siteEvents.ts`
  // are emitted in this format: "bytm:siteEvent:nameOfSiteEvent"
};

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
  getFeatures: getFeaturesInterface,
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
    NanoEmitter,
    BytmDialog,
    createHotkeyInput,
    createToggleInput,
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

//#MARKER proxy functions

export function getFeaturesInterface() {
  const features = getFeatures();
  for(const ftKey of Object.keys(features)) {
    const info = featInfo[ftKey as keyof typeof featInfo] as FeatureInfo[keyof FeatureInfo];
    if(info && info.valueHidden) // @ts-ignore
      features[ftKey as keyof typeof features] = undefined;
  }
  return features as FeatureConfig;
}
