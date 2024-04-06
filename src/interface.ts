import * as UserUtils from "@sv443-network/userutils";
import { createNanoEvents } from "nanoevents";
import { mode, branch, host, buildNumber, compressionFormat, scriptInfo } from "./constants";
import { getResourceUrl, getSessionId, getVideoTime, log, setLocale, getLocale, hasKey, hasKeyFor, NanoEmitter, t, tp, type TrLocale, info, error } from "./utils";
import { addSelectorListener } from "./observers";
import { getFeatures, setFeatures } from "./config";
import { compareVersionArrays, compareVersions, featInfo, fetchLyricsUrlTop, getLyricsCacheEntry, sanitizeArtists, sanitizeSong, type LyricsCache } from "./features";
import { allSiteEvents, siteEvents, type SiteEventsMap } from "./siteEvents";
import { LogLevel, type FeatureConfig, type FeatureInfo, type LyricsCacheEntry, type PluginDef, type PluginInfo, type PluginRegisterResult, type PluginDefResolvable, type PluginEventMap, type PluginItem } from "./types";
import { BytmDialog, createHotkeyInput, createToggleInput } from "./components";

const { getUnsafeWindow } = UserUtils;

//#region interface globals

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEvents = {
  /** Emitted whenever the plugins should be registered using `unsafeWindow.BYTM.registerPlugin()` */
  "bytm:initPlugins": undefined;
  /** Emitted whenever all plugins have been loaded */
  "bytm:pluginsLoaded": undefined;
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
  /** Emitted when the dialog with the specified ID was opened - returns the dialog's instance - in TS, use `"..." as "bytm:dialogOpened:id"` to make the error go away */
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

const globalFuncs = {
  // meta
  registerPlugin,
  getPluginInfo,

  // utils
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
  saveFeatures: setFeatures,
  fetchLyricsUrlTop,
  getLyricsCacheEntry,
  sanitizeArtists,
  sanitizeSong,
  compareVersions,
  compareVersionArrays,
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

/** Sets a global property on the unsafeWindow.BYTM object */
export function setGlobalProp<
  TKey extends keyof Window["BYTM"],
  TValue = Window["BYTM"][TKey],
> (
  key: TKey | (string & {}),
  value: TValue,
) {
  // use unsafeWindow so the properties are available to plugins outside of the userscript's scope
  const win = getUnsafeWindow();

  if(typeof win.BYTM !== "object")
    win.BYTM = {} as typeof window.BYTM;

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

//#region register plugins

/** Plugins that are queued up for registration */
const pluginQueue = new Map<string, PluginItem>();

/** Registered plugins including their event listener instance */
const pluginMap = new Map<string, PluginItem>();

/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
export function initPlugins() {
  // TODO(v1.3): check perms and ask user for initial activation

  for(const [key, { def, events }] of pluginQueue) {
    pluginMap.set(key, { def, events });
    pluginQueue.delete(key);
    emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def)!);
  }

  for(const evt of allSiteEvents) // @ts-ignore
    siteEvents.on(evt, (...args) => emitOnPlugins(evt, () => true, ...args));

  emitInterface("bytm:pluginsLoaded");
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

/** Checks whether two plugin definitions are the same */
function sameDef(def1: PluginDefResolvable, def2: PluginDefResolvable) {
  return getPluginKey(def1) === getPluginKey(def2);
}

/** Emits an event on all plugins that match the predicate (all plugins by default) */
export function emitOnPlugins<TEvtKey extends keyof PluginEventMap>(
  event: TEvtKey,
  predicate: (def: PluginDef) => boolean = () => true,
  ...data: Parameters<PluginEventMap[TEvtKey]>
) {
  for(const { def, events } of pluginMap.values())
    predicate(def) && events.emit(event, ...data);
}

/** Returns the internal plugin object by its name and namespace, or undefined if it doesn't exist */
export function getPlugin(name: string, namespace: string): PluginItem | undefined
/** Returns the internal plugin object by its definition, or undefined if it doesn't exist */
export function getPlugin(plugin: PluginDefResolvable): PluginItem | undefined
/** Returns the internal plugin object, or undefined if it doesn't exist */
export function getPlugin(...args: [pluginDefOrName: PluginDefResolvable | string, namespace?: string]): PluginItem | undefined {
  return args.length === 2
    ? pluginMap.get(`${args[1]}/${args[0]}`)
    : pluginMap.get(getPluginKey(args[0] as PluginDefResolvable));
}

/** Returns info about a registered plugin on the BYTM interface by its name and namespace properties, or undefined if the plugin isn't registered */
export function getPluginInfo(name: string, namespace: string): PluginInfo | undefined
/** Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered */
export function getPluginInfo(plugin: PluginDefResolvable): PluginInfo | undefined
/** Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered */
export function getPluginInfo(...args: [pluginDefOrName: PluginDefResolvable | string, namespace?: string]): PluginInfo | undefined {
  return pluginDefToInfo(
    args.length === 2
      ? pluginMap.get(`${args[1]}/${args[0]}`)?.def
      : pluginMap.get(getPluginKey(args[0] as PluginDefResolvable))?.def
  );
}

/** Validates the passed PluginDef object and returns an array of errors */
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

  const { plugin: { name } } = def;
  pluginQueue.set(getPluginKey(def), {
    def: def,
    events,
  });

  info(`Registered plugin: ${name}`, LogLevel.Info);

  return {
    info: getPluginInfo(def)!,
    events,
  };
}

//#region proxy funcs

/** Returns the current feature config, with sensitive values replaced by `undefined` */
export function getFeaturesInterface() {
  const features = getFeatures();
  for(const ftKey of Object.keys(features)) {
    const info = featInfo[ftKey as keyof typeof featInfo] as FeatureInfo[keyof FeatureInfo];
    if(info && info.valueHidden) // @ts-ignore
      features[ftKey as keyof typeof features] = undefined;
  }
  return features as FeatureConfig;
}
