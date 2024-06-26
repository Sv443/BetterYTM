import * as UserUtils from "@sv443-network/userutils";
import { createNanoEvents } from "nanoevents";
import { mode, branch, host, buildNumber, compressionFormat, scriptInfo } from "./constants";
import { getResourceUrl, getSessionId, getVideoTime, log, setLocale, getLocale, hasKey, hasKeyFor, NanoEmitter, t, tp, type TrLocale, info, error, onInteraction, getThumbnailUrl, getBestThumbnailUrl } from "./utils";
import { addSelectorListener } from "./observers";
import { getFeatures, setFeatures } from "./config";
import { compareVersionArrays, compareVersions, featInfo, fetchLyricsUrlTop, getLyricsCacheEntry, sanitizeArtists, sanitizeSong, type LyricsCache } from "./features";
import { allSiteEvents, type SiteEventsMap } from "./siteEvents";
import { LogLevel, type FeatureConfig, type FeatureInfo, type LyricsCacheEntry, type PluginDef, type PluginInfo, type PluginRegisterResult, type PluginDefResolvable, type PluginEventMap, type PluginItem, type BytmObject } from "./types";
import { BytmDialog, createCircularBtn, createHotkeyInput, createToggleInput } from "./components";

const { getUnsafeWindow, randomId } = UserUtils;

//#region interface globals

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEventsMap = {
  [K in keyof InterfaceEvents]: (data: InterfaceEvents[K]) => void;
};

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEvents = {
  /** Emitted whenever the plugins should be registered using `unsafeWindow.BYTM.registerPlugin()` */
  "bytm:initPlugins": undefined;
  /** Emitted whenever all plugins have been loaded */
  "bytm:pluginsRegistered": undefined;
  /** Emitted when BYTM has finished initializing all features */
  "bytm:ready": undefined;
  /** Emitted when a fatal error occurs and the script can't continue to run. Returns a short error description (not really meant to be displayed to the user). */
  "bytm:fatalError": string;
  /**
   * Emitted whenever the SelectorObserver instances have been initialized  
   * Use `unsafeWindow.BYTM.addObserverListener()` to add custom listener functions to the observers
   */
  "bytm:observersReady": undefined;
  /** Emitted as soon as the feature config has finished loading and can be accessed via `unsafeWindow.BYTM.getFeatures(token)` */
  "bytm:configReady": undefined;

  /** Emitted whenever the locale is changed */
  "bytm:setLocale": { locale: TrLocale };

  /** Emitted when a dialog was opened - returns the dialog's instance */
  "bytm:dialogOpened": BytmDialog;
  /** Emitted when the dialog with the specified ID was opened - returns the dialog's instance - in TS, use `"bytm:dialogOpened:myIdWhatever" as "bytm:dialogOpened:id"` to make the error go away */
  "bytm:dialogOpened:id": BytmDialog;

  /** Emitted whenever the lyrics URL for a song is loaded */
  "bytm:lyricsLoaded": { type: "current" | "queue", artists: string, title: string, url: string };
  /** Emitted when the lyrics cache has been loaded */
  "bytm:lyricsCacheReady": LyricsCache;
  /** Emitted when the lyrics cache has been cleared */
  "bytm:lyricsCacheCleared": undefined;
  /** Emitted when an entry is added to the lyrics cache - "penalized" entries get removed from cache faster because they were less related in lyrics lookups, opposite to the "best" entries */
  "bytm:lyricsCacheEntryAdded": { type: "best" | "penalized", entry: LyricsCacheEntry };

  // additionally all events from SiteEventsMap in `src/siteEvents.ts`
  // are emitted in this format: "bytm:siteEvent:nameOfSiteEvent"
};

export const allInterfaceEvents = [
  "bytm:initPlugins",
  "bytm:pluginsRegistered",
  "bytm:ready",
  "bytm:fatalError",
  "bytm:observersReady",
  "bytm:configReady",
  "bytm:setLocale",
  "bytm:dialogOpened",
  "bytm:dialogOpened:id",
  "bytm:lyricsLoaded",
  "bytm:lyricsCacheReady",
  "bytm:lyricsCacheCleared",
  "bytm:lyricsCacheEntryAdded",
  ...allSiteEvents.map(e => `bytm:siteEvent:${e}`),
] as const;

/** All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`) */
const globalFuncs = {
  // meta
  registerPlugin,
  getPluginInfo,

  // utils
  addSelectorListener,
  getResourceUrl,
  getSessionId,
  getVideoTime,
  setLocale: setLocaleInterface,
  getLocale,
  hasKey,
  hasKeyFor,
  t,
  tp,
  getFeatures: getFeaturesInterface,
  saveFeatures: saveFeaturesInterface,
  fetchLyricsUrlTop,
  getLyricsCacheEntry,
  sanitizeArtists,
  sanitizeSong,
  compareVersions,
  compareVersionArrays,
  onInteraction,
  getThumbnailUrl,
  getBestThumbnailUrl,
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
    createCircularBtn,
  };

  for(const [key, value] of Object.entries(props))
    setGlobalProp(key, value);

  log("Initialized BYTM interface");
}

/** Sets a global property on the unsafeWindow.BYTM object */
export function setGlobalProp<
  TKey extends keyof Window["BYTM"],
  TValue = Window["BYTM"][TKey],
>(
  key: TKey | (string & {}),
  value: TValue,
) {
  // use unsafeWindow so the properties are available to plugins outside of the userscript's scope
  const win = getUnsafeWindow();

  if(typeof win.BYTM !== "object")
    win.BYTM = {} as BytmObject;

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
  getUnsafeWindow().dispatchEvent(new CustomEvent(type, { detail: data?.[0] ?? undefined }));
}

//#region register plugins

/** Plugins that are queued up for registration */
const pluginsQueued = new Map<string, PluginItem>();

/** Registered plugins including their event listener instance */
const pluginsRegistered = new Map<string, PluginItem>();

/** Auth tokens for plugins that have been registered */
const pluginTokens = new Map<string, string>();

/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
export function initPlugins() {
  // TODO(v1.3): check perms and ask user for initial activation

  for(const [key, { def, events }] of pluginsQueued) {
    try {
      pluginsRegistered.set(key, { def, events });
      pluginsQueued.delete(key);
      emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def)!);
    }
    catch(err) {
      error(`Failed to initialize plugin '${getPluginKey(def)}':`, err);
    }
  }

  for(const evt of allInterfaceEvents) // @ts-ignore
    getUnsafeWindow().addEventListener(evt, (...args) => emitOnPlugins(evt, undefined, ...args));

  emitInterface("bytm:pluginsRegistered");
}

/** Returns the key for a given plugin definition */
function getPluginKey(plugin: PluginDefResolvable) {
  return `${plugin.plugin.namespace}/${plugin.plugin.name}`;
}

/** Converts a PluginDef object (full definition) into a PluginInfo object (restricted definition) or undefined, if undefined is passed */
function pluginDefToInfo(plugin?: PluginDef): PluginInfo | undefined {
  return plugin && {
    name: plugin.plugin.name,
    namespace: plugin.plugin.namespace,
    version: plugin.plugin.version,
  };
}

/** Checks whether two plugins are the same, given their resolvable definition objects */
function sameDef(def1: PluginDefResolvable, def2: PluginDefResolvable) {
  return getPluginKey(def1) === getPluginKey(def2);
}

/** Emits an event on all plugins that match the predicate (all plugins by default) */
export function emitOnPlugins<TEvtKey extends keyof PluginEventMap>(
  event: TEvtKey,
  predicate: ((def: PluginDef) => boolean) | boolean = true,
  ...data: Parameters<PluginEventMap[TEvtKey]>
) {
  for(const { def, events } of pluginsRegistered.values())
    if(typeof predicate === "boolean" ? predicate : predicate(def))
      events.emit(event, ...data);
}

/**
 * @private FOR INTERNAL USE ONLY!  
 * Returns the internal plugin object by its name and namespace, or undefined if it doesn't exist
 */
export function getPlugin(name: string, namespace: string): PluginItem | undefined
/**
 * @private FOR INTERNAL USE ONLY!  
 * Returns the internal plugin object by a resolvable definition object, or undefined if it doesn't exist
 */
export function getPlugin(plugin: PluginDefResolvable): PluginItem | undefined
/**
 * @private FOR INTERNAL USE ONLY!  
 * Returns the internal plugin object, or undefined if it doesn't exist
 */
export function getPlugin(...args: [pluginDefOrName: PluginDefResolvable | string, namespace?: string]): PluginItem | undefined {
  return args.length === 2
    ? pluginsRegistered.get(`${args[1]}/${args[0]}`)
    : pluginsRegistered.get(getPluginKey(args[0] as PluginDefResolvable));
}

/**
 * Returns info about a registered plugin on the BYTM interface by its name and namespace properties, or undefined if the plugin isn't registered.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 * @public Intended for general use in plugins.
 */
export function getPluginInfo(token: string | undefined, name: string, namespace: string): PluginInfo | undefined
/**
 * Returns info about a registered plugin on the BYTM interface by a resolvable definition object, or undefined if the plugin isn't registered.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 * @public Intended for general use in plugins.
 */
export function getPluginInfo(token: string | undefined, plugin: PluginDefResolvable): PluginInfo | undefined
/**
 * Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 * @public Intended for general use in plugins.
 */
export function getPluginInfo(...args: [token: string | undefined, pluginDefOrName: PluginDefResolvable | string, namespace?: string]): PluginInfo | undefined {
  if(resolveToken(args[0]) === undefined)
    return undefined;

  return pluginDefToInfo(
    pluginsRegistered.get(
      args.length === 2
        ? `${args[2]}/${args[1]}`
        : getPluginKey(args[1] as PluginDefResolvable)
    )?.def
  );
}

/** Validates the passed PluginDef object and returns an array of errors - returns undefined if there were no errors - never returns an empty array */
function validatePluginDef(pluginDef: Partial<PluginDef>) {
  const errors = [] as string[];

  const addNoPropErr = (prop: string, type: string) =>
    errors.push(t("plugin_validation_error_no_property", prop, type));

  // def.plugin and its properties:
  typeof pluginDef.plugin !== "object" && addNoPropErr("plugin", "object");
  const { plugin } = pluginDef;
  !plugin?.name && addNoPropErr("plugin.name", "string");
  !plugin?.namespace && addNoPropErr("plugin.namespace", "string");
  !plugin?.version && addNoPropErr("plugin.version", "[major: number, minor: number, patch: number]");

  return errors.length > 0 ? errors : undefined;
}

/** Registers a plugin on the BYTM interface */
export function registerPlugin(def: PluginDef): PluginRegisterResult {
  const validationErrors = validatePluginDef(def);
  if(validationErrors) {
    error(`Failed to register plugin${def?.plugin?.name ? ` '${def?.plugin?.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`, LogLevel.Info);
    throw new Error(`Invalid plugin definition:\n- ${validationErrors.join("\n- ")}`);
  }

  const events = createNanoEvents<PluginEventMap>();
  const token = randomId(32, 36);

  const { plugin: { name } } = def;
  pluginsQueued.set(getPluginKey(def), {
    def: def,
    events,
  });
  pluginTokens.set(getPluginKey(def), token);

  info(`Registered plugin: ${name}`, LogLevel.Info);

  return {
    info: getPluginInfo(token, def)!,
    events,
    token,
  };
}

/** Checks whether the passed token is a valid auth token for any registered plugin and returns the resolvable plugin ID, else returns undefined */
export function resolveToken(token: string | undefined): string | undefined {
  return token ? [...pluginTokens.entries()].find(([, v]) => v === token)?.[0] ?? undefined : undefined;
}

//#region proxy funcs

/**
 * Sets the new locale on the BYTM interface  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function setLocaleInterface(token: string | undefined, locale: TrLocale) {
  if(resolveToken(token) === undefined)
    return;
  setLocale(locale);
  emitInterface("bytm:setLocale", { locale });
}

/**
 * Returns the current feature config, with sensitive values replaced by `undefined`  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function getFeaturesInterface(token: string | undefined) {
  if(resolveToken(token) === undefined)
    return undefined;
  const features = getFeatures();
  for(const ftKey of Object.keys(features)) {
    const info = featInfo[ftKey as keyof typeof featInfo] as FeatureInfo[keyof FeatureInfo];
    if(info && info.valueHidden) // @ts-ignore
      features[ftKey as keyof typeof features] = undefined;
  }
  return features as FeatureConfig;
}

/**
 * Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
function saveFeaturesInterface(token: string | undefined, features: FeatureConfig) {
  if(resolveToken(token) === undefined)
    return;
  setFeatures(features);
}
