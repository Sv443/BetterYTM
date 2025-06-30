import * as UserUtils from "@sv443-network/userutils";
import * as compareVersions from "compare-versions";
import * as constants from "./constants.js";
import { getDomain, waitVideoElementReady, getResourceUrl, getSessionId, getVideoTime, log, setLocale, getLocale, hasKey, hasKeyFor, t, tp, type TrLocale, info, error, onInteraction, getThumbnailUrl, getBestThumbnailUrl, fetchVideoVotes, setInnerHtml, getCurrentMediaType, tl, tlp, PluginError, formatNumber, reloadTab, getVideoElement, getVideoSelector, getLikeDislikeBtns, fetchITunesAlbumInfo } from "./utils/index.js";
import { MultiNanoEmitter } from "./utils/MultiNanoEmitter.js";
import { addSelectorListener } from "./observers.js";
import { defaultData, getFeatures, setFeatures } from "./config.js";
import { autoLikeStore, disableDiscardBeforeUnload, enableDiscardBeforeUnload, featInfo, fetchLyricsUrlTop, getLyricsCacheEntry, isIgnoredInputElement, sanitizeArtists, sanitizeSong } from "./features/index.js";
import { allSiteEvents, emitSiteEvent, siteEvents, type SiteEventsMap } from "./siteEvents.js";
import { PluginIntent, type FeatureConfig, type FeatureInfo, type LyricsCacheEntry, type PluginDef, type PluginInfo, type PluginRegisterResult, type PluginDefResolvable, type PluginEventMap, type PluginItem, type BytmObject, type AutoLikeData, type InterfaceFunctions } from "./types.js";
import { showPrompt } from "./dialogs/prompt.js";
import { BytmDialog } from "./components/BytmDialog.js";
import { createHotkeyInput } from "./components/hotkeyInput.js";
import { createToggleInput } from "./components/toggleInput.js";
import { createCircularBtn } from "./components/circularButton.js";
import { createRipple } from "./components/ripple.js";
import { showIconToast, showToast } from "./components/toast.js";
import { ExImDialog } from "./components/ExImDialog.js";
import { MarkdownDialog } from "./components/MarkdownDialog.js";

const { mode, branch, host, buildNumber, compressionFormat, scriptInfo, initialParams, sessionStorageAvailable } = constants;
const { autoPlural, getUnsafeWindow, purifyObj, NanoEmitter } = UserUtils;

//#region interface globals

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEventsMap = {
  [K in keyof InterfaceEvents]: (data: InterfaceEvents[K]) => void;
};

/** All events that can be emitted on the BYTM interface and the data they provide */
export type InterfaceEvents = {
  //#region startup events
  // (sorted in order of execution)

  /** Emitted as soon as the feature config has finished loading and can be accessed via `unsafeWindow.BYTM.getFeatures(token)` */
  "bytm:configReady": undefined;
  /** Emitted when the lyrics cache has been loaded */
  "bytm:lyricsCacheReady": undefined;
  /** Emitted whenever the locale is changed - if a plugin changed the locale, the plugin ID is provided as well */
  "bytm:setLocale": { locale: TrLocale, pluginId?: string };
  /** When this is emitted, this is your call to register your plugin using the function passed as the sole argument */
  "bytm:registerPlugin": (pluginDef: PluginDef) => PluginRegisterResult;
  /**
   * Emitted whenever the SelectorObserver instances have been initialized and can be used to listen for DOM changes and wait for elements to be available.  
   * Use `unsafeWindow.BYTM.addObserverListener(name, selector, opts)` to add custom listener functions to the observers (see contributing guide).
   */
  "bytm:observersReady": undefined;
  /**
   * Emitted when the feature initialization has started.  
   * This is the last event that is emitted before the `bytm:ready` event.  
   * As soon as this is emitted, you cannot register any more plugins.
   */
  "bytm:featureInitStarted": undefined;
  /** Emitted when a feature has been initialized. The data is the feature's key as seen in `onDomLoad()` of `src/index.ts` */
  "bytm:featureInitialized": string;
  /** Emitted when BYTM has finished initializing all features or has reached the init timeout and has entered an idle state. */
  "bytm:ready": undefined;

  //#region additional events
  // (not sorted)

  /**
   * Emitted when a fatal error occurs and the script can't continue to run.  
   * Returns a short error description that's not really meant to be displayed to the user (console is fine).  
   * But may be helpful in plugin development if the plugin causes an internal error.
   */
  "bytm:fatalError": string;

  /** Emitted when a dialog was opened - returns the dialog's instance (or undefined in the case of the config menu) */
  "bytm:dialogOpened": BytmDialog | undefined;
  /** Emitted when the dialog with the specified ID was opened - returns the dialog's instance (or undefined in the case of the config menu) - in TS, use `"bytm:dialogOpened:myIdWhatever" as "bytm:dialogOpened:id"` to make the error go away */
  "bytm:dialogOpened:id": BytmDialog | undefined;
  /** Emitted when a dialog was closed - returns the dialog's instance (or undefined in the case of the config menu) */
  "bytm:dialogClosed": BytmDialog | undefined;
  /** Emitted when the dialog with the specified ID was closed - returns the dialog's instance (or undefined in the case of the config menu) - in TS, use `"bytm:dialogClosed:myIdWhatever" as "bytm:dialogClosed:id"` to make the error go away */
  "bytm:dialogClosed:id": BytmDialog | undefined;

  /** Emitted whenever the lyrics URL for a song is loaded */
  "bytm:lyricsLoaded": { type: "current" | "queue", artists: string, title: string, url: string };
  /** Emitted when the lyrics cache has been cleared */
  "bytm:lyricsCacheCleared": undefined;
  /** Emitted when an entry is added to the lyrics cache - "penalized" entries get removed from cache faster because they were less related in lyrics lookups, opposite to the "best" entries */
  "bytm:lyricsCacheEntryAdded": { type: "best" | "penalized", entry: LyricsCacheEntry };

  // NOTE:
  // Additionally, all events from `SiteEventsMap` in `src/siteEvents.ts`
  // are emitted in this format: "bytm:siteEvent:nameOfSiteEvent"
};

/** Array of all events emittable on the interface (excluding plugin-specific, private events) */
export const allInterfaceEvents = [
  "bytm:registerPlugin",
  "bytm:ready",
  "bytm:featureInitfeatureInitStarted",
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

/**
 * All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`)  
 * If prefixed with /\*🔒\*\/, the function is authenticated and requires a token to be passed as the first argument.
 */
const globalFuncs: InterfaceFunctions = purifyObj({
  // meta:
  /*🔒*/ getPluginInfo,
  /*🔒*/ getLibraryHook,

  // bytm-specific:
  getDomain,
  getResourceUrl,
  getSessionId,
  reloadTab,

  // dom:
  setInnerHtml,
  addSelectorListener,
  onInteraction,
  getVideoTime,
  getThumbnailUrl,
  getBestThumbnailUrl,
  fetchITunesAlbumInfo,
  waitVideoElementReady,
  getVideoElement,
  getVideoSelector,
  getCurrentMediaType,
  getLikeDislikeBtns,
  isIgnoredInputElement,

  // site events:
  onSiteEvent: siteEvents.on,
  onceSiteEvent: siteEvents.once,
  onMultiSiteEvents: siteEvents.onMulti,
  onceMultiSiteEvents: siteEvents.onceMulti,

  // translations:
  /*🔒*/ setLocale: setLocaleInterface,
  getLocale,
  hasKey,
  hasKeyFor,
  t,
  tp,
  tl,
  tlp,

  // feature config:
  /*🔒*/ getFeatures: getFeaturesInterface,
  /*🔒*/ saveFeatures: saveFeaturesInterface,
  getDefaultFeatures: () => JSON.parse(JSON.stringify(defaultData)),

  // lyrics:
  fetchLyricsUrlTop,
  getLyricsCacheEntry,
  sanitizeArtists,
  sanitizeSong,

  // auto-like:
  /*🔒*/ getAutoLikeData: getAutoLikeDataInterface,
  /*🔒*/ saveAutoLikeData: saveAutoLikeDataInterface,
  fetchVideoVotes,

  // components:
  createHotkeyInput,
  createToggleInput,
  createCircularBtn,
  createRipple,
  showToast,
  showIconToast,
  showPrompt,

  // other:
  formatNumber,
});

/** Initializes the BYTM interface */
export function initInterface() {
  const props = {
    // meta / constants
    mode,
    branch,
    host,
    buildNumber,
    initialParams,
    compressionFormat,
    sessionStorageAvailable,
    ...scriptInfo,
    // functions
    ...globalFuncs,
    // classes
    NanoEmitter,
    MultiNanoEmitter,
    BytmDialog,
    ExImDialog,
    MarkdownDialog,
    // libraries
    UserUtils,
    compareVersions,
  };

  for(const [key, value] of Object.entries(props))
    setGlobalProp(key, value);

  log("Initialized BYTM interface");
}

/** Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page! */
export function setGlobalProp<
  TKey extends keyof BytmObject,
  TValue = BytmObject[TKey],
>(
  key: TKey | (string & {}),
  value: TValue,
) {
  // use unsafeWindow so the properties are available to plugins outside of the userscript's scope
  const win = getUnsafeWindow();

  if(typeof win.BYTM !== "object")
    win.BYTM = purifyObj({}) as BytmObject;

  win.BYTM[key] = value;
}

/** Emits an event on the BYTM interface */
export function emitInterface<
  TEvt extends keyof InterfaceEvents,
  TDetail extends InterfaceEvents[TEvt],
>(
  type: TEvt | `bytm:siteEvent:${keyof SiteEventsMap}`,
  ...detail: (TDetail extends undefined ? [undefined?] : [TDetail])
) {
  try {
    getUnsafeWindow().dispatchEvent(new CustomEvent(type, { detail: detail?.[0] ?? undefined }));
    //@ts-expect-error
    emitOnPlugins(type, undefined, ...detail);
    log(`Emitted interface event '${type}'${detail.length > 0 && detail?.[0] ? " with data:" : ""}`, ...detail);
  }
  catch(err) {
    error(`Couldn't emit interface event '${type}' due to an error:\n`, err);
  }
}

//#region register plugins

/** Map of plugin ID and all registered plugins */
const registeredPlugins = new Map<string, PluginItem>();

/** Map of plugin ID to auth token for plugins that have been registered */
const registeredPluginTokens = new Map<string, string>();

let pluginsInitialized = false;

/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
export function initPlugins() {
  emitInterface("bytm:registerPlugin", (def: PluginDef) => registerPlugin(def));

  window.addEventListener("bytm:ready", () => {
    pluginsInitialized = true;
    if(registeredPlugins.size > 0)
      log(`Registered ${registeredPlugins.size} ${autoPlural("plugin", registeredPlugins.size)}`);
  }, {
    once: true,
  });
}

/** Registers a plugin on the BYTM interface. */
function registerPlugin(def: PluginDef): PluginRegisterResult {
  // TODO: check perms and ask user for initial activation
  try {
    if(pluginsInitialized)
      throw new PluginError(`Failed to register plugin '${getPluginKey(def)}': BYTM interface has already been initialized - plugins can only be registered after the 'bytm:registerPlugin' event and before the 'bytm:ready' event`);

    const plKey = getPluginKey(def);

    if(registeredPlugins.has(plKey))
      throw new PluginError(`Failed to register plugin '${plKey}': Plugin with the same name and namespace is already registered`);

    const validationErrors = validatePluginDef(def);
    if(validationErrors)
      throw new PluginError(`Failed to register plugin${def?.plugin?.name ? ` '${def?.plugin?.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`);

    const events = new MultiNanoEmitter<PluginEventMap>({ publicEmit: true });
    const token = crypto.randomUUID();

    registeredPlugins.set(plKey, {
      def: def,
      events,
    });
    registeredPluginTokens.set(plKey, token);

    info(`Successfully registered plugin '${plKey}'`);
    setTimeout(() => emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def)!), 1);

    return {
      info: getPluginInfo(token, def)!,
      events,
      token,
    };
  }
  catch(err) {
    error(`Failed to register plugin '${getPluginKey(def)}':`, err instanceof PluginError ? err : new PluginError(String(err)));
    throw err;
  }
};

/** Returns the registered plugins as an array of tuples with the items `[id: string, item: PluginItem]` */
export function getRegisteredPlugins() {
  return [...registeredPlugins.entries()];
}

/** Returns the key for a given plugin definition */
function getPluginKey(plugin: PluginDefResolvable) {
  return `${plugin.plugin.namespace}/${plugin.plugin.name}`;
}

/** Converts a PluginDef object (full definition) into a PluginInfo object (restricted definition) or undefined, if undefined is passed */
function pluginDefToInfo(plugin?: PluginDef): PluginInfo | undefined {
  return plugin
    ? {
      name: plugin.plugin.name,
      namespace: plugin.plugin.namespace,
      version: plugin.plugin.version,
    }
    : undefined;
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
  for(const { def, events } of registeredPlugins.values())
    if(typeof predicate === "boolean" ? predicate : predicate(def))
      events.emit(event, ...data);
}

/**
 * @private FOR INTERNAL USE ONLY!  
 * Returns the internal plugin def and events objects via its name and namespace, or undefined if it doesn't exist.
 */
export function getPlugin(pluginName: string, namespace: string): PluginItem | undefined
/**
 * @private FOR INTERNAL USE ONLY!  
 * Returns the internal plugin def and events objects via resolvable definition, or undefined if it doesn't exist.
 */
export function getPlugin(pluginDef: PluginDefResolvable): PluginItem | undefined
/**
 * @private FOR INTERNAL USE ONLY!  
 * Returns the internal plugin def and events objects via plugin ID (consisting of namespace and name), or undefined if it doesn't exist.
 */
export function getPlugin(pluginId: string): PluginItem | undefined
/**
 * @private FOR INTERNAL USE ONLY!  
 * Returns the internal plugin def and events objects, or undefined if it doesn't exist.
 */
export function getPlugin(...args: [pluginDefOrNameOrId: PluginDefResolvable | string, namespace?: string]): PluginItem | undefined {
  return typeof args[0] === "string" && typeof args[1] === "undefined"
    ? registeredPlugins.get(args[0])
    : args.length === 2
      ? registeredPlugins.get(`${args[1]}/${args[0]}`)
      : registeredPlugins.get(getPluginKey(args[0] as PluginDefResolvable));
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
 * Returns info about a registered plugin on the BYTM interface by its ID (consisting of namespace and name), or undefined if the plugin isn't registered.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 * @public Intended for general use in plugins.
 */
export function getPluginInfo(token: string | undefined, pluginId: string): PluginInfo | undefined
/**
 * Returns info about a registered plugin on the BYTM interface, or undefined if the plugin isn't registered.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.  
 * @public Intended for general use in plugins.
 */
export function getPluginInfo(...args: [token: string | undefined, pluginDefOrNameOrId: PluginDefResolvable | string, namespace?: string]): PluginInfo | undefined {
  if(resolveToken(args[0]) === undefined)
    return undefined;

  return pluginDefToInfo(
    registeredPlugins.get(
      typeof args[1] === "string" && typeof args[2] === "undefined"
        ? args[1]
        : args.length === 2
          ? `${args[2]}/${args[1]}`
          : getPluginKey(args[1] as PluginDefResolvable)
    )?.def
  );
}

/**
 * @private FOR INTERNAL USE ONLY!  
 * Whether the given plugin has the given granted intents.
 */
export function pluginHasPerms(pluginName: string, namespace: string, perms: PluginIntent | PluginIntent[]): boolean
/**
 * @private FOR INTERNAL USE ONLY!  
 * Whether the given plugin has the given granted intents.
 */
export function pluginHasPerms(pluginDef: PluginDefResolvable, perms: PluginIntent | PluginIntent[]): boolean
/**
 * @private FOR INTERNAL USE ONLY!  
 * Whether the given plugin has the given granted intents.
 */
export function pluginHasPerms(pluginId: string, perms: PluginIntent | PluginIntent[]): boolean
/**
 * @private FOR INTERNAL USE ONLY!  
 * Whether the given plugin has the given granted intents.
 */
export function pluginHasPerms(...args: [pluginDefOrNameOrId: PluginDefResolvable | string, namespaceOrPerms: string | PluginIntent | PluginIntent[], perms?: PluginIntent | PluginIntent[]]): boolean {
  const plugin = typeof args[0] === "string" && typeof args[1] === "string"
    ? getPlugin(args[0], args[1])
    : getPlugin(args[0] as PluginDefResolvable);

  if(!plugin)
    return false;

  const asArray = (value: PluginIntent | PluginIntent[]) =>
    Array.isArray(value) ? value : [value];

  const perms = (typeof args[0] === "string" && typeof args[1] === "string" ? asArray(args[2] as PluginIntent) : asArray(args[1] as PluginIntent) as PluginIntent[]) ?? [];
  if(!Array.isArray(perms))
    throw new TypeError("The second argument must be an array of PluginIntent values");

  const pluginIntents = defToIntentsBitSet(plugin.def);

  return UserUtils.bitSetHas(pluginIntents, PluginIntent.FullAccess) || perms.every((perm) => UserUtils.bitSetHas(pluginIntents, perm));
}

function defToIntentsBitSet(def: PluginDef): number {
  if(Array.isArray(def.intents))
    return def.intents.reduce((acc, intent) => acc | intent, 0);
  else if(typeof def.intents === "number")
    return def.intents;
  else
    return 0;
}

/** Validates the passed PluginDef object and returns an array of errors - returns undefined if there were no errors - never returns an empty array */
function validatePluginDef(pluginDef: Partial<PluginDef>) {
  const errors = [] as string[];

  const addNoPropErr = (jsonPath: string, type: string) =>
    errors.push(t("plugin_validation_error_no_property", jsonPath, type));

  const addInvalidPropErr = (jsonPath: string, value: string, examples: string[]) =>
    errors.push(tp("plugin_validation_error_invalid_property", examples, jsonPath, value, `'${examples.join("', '")}'`));

  // def.plugin and its properties:
  typeof pluginDef.plugin !== "object" && addNoPropErr("plugin", "object");
  const { plugin } = pluginDef;
  !plugin?.name && addNoPropErr("plugin.name", "string");
  !plugin?.namespace && addNoPropErr("plugin.namespace", "string");
  if(typeof plugin?.version !== "string")
    addNoPropErr("plugin.version", "MAJOR.MINOR.PATCH");
  else if(!compareVersions.validateStrict(plugin.version))
    addInvalidPropErr("plugin.version", plugin.version, ["0.0.1", "2.5.21-rc.1"]);

  return errors.length > 0 ? errors : undefined;
}

/** Checks whether the passed token is a valid auth token for any registered plugin and returns the plugin ID, else returns undefined */
export function resolveToken(token: string | undefined): string | undefined {
  return typeof token === "string" && token.length > 0
    ? [...registeredPluginTokens.entries()]
      .find(([k, t]) => registeredPlugins.has(k) && token === t)?.[0] ?? undefined
    : undefined;
}

//#region proxy funcs

/**
 * Sets the new locale on the BYTM interface  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
export function setLocaleInterface(token: string | undefined, locale: TrLocale) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteTranslations))
    return;
  setLocale(locale);
  emitInterface("bytm:setLocale", { pluginId, locale });
}

/**
 * Returns the current feature config, with sensitive values replaced by `undefined`, unless the `SeeHiddenConfigValues` intent is granted.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
export function getFeaturesInterface(token: string | undefined) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.ReadFeatureConfig))
    return undefined;
  const hiddenAccess = pluginHasPerms(pluginId, PluginIntent.SeeHiddenConfigValues);
  const features = getFeatures();
  for(const ftKey of Object.keys(features)) {
    const info = featInfo[ftKey as keyof typeof featInfo] as FeatureInfo[keyof FeatureInfo];
    if(info && info.valueHidden && !hiddenAccess) // @ts-expect-error
      features[ftKey as keyof typeof features] = undefined;
  }
  return features as FeatureConfig;
}

/**
 * Saves the passed feature config synchronously to the in-memory cache and asynchronously to the persistent storage.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
export function saveFeaturesInterface(token: string | undefined, features: FeatureConfig) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteFeatureConfig))
    return;
  setFeatures(features);
}

/**
 * Returns the auto-like data.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
export function getAutoLikeDataInterface(token: string | undefined) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.ReadAutoLikeData))
    return;
  return autoLikeStore.getData();
}

/**
 * Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.  
 * This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.
 */
export function saveAutoLikeDataInterface(token: string | undefined, data: AutoLikeData) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.WriteAutoLikeData))
    return;
  return autoLikeStore.setData(data);
}

//#region library hook

/** Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins. */
export function getLibraryHook(token: string | undefined) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.InternalAccess))
    return undefined;

  return {
    constants,
    emitInterface,
    emitSiteEvent,
    siteEvents,
    addSelectorListener,
    showPrompt,
    setGlobalProp,
    enableDiscardBeforeUnload,
    disableDiscardBeforeUnload,
  };
}
