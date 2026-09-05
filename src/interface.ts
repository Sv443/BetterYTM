import * as CoreUtils from "@sv443-network/coreutils";
import * as UserUtils from "@sv443-network/userutils";
import * as compareVersions from "compare-versions";
import { broadcastTxID, emitBroadcast } from "@util/broadcast.ts";
import * as constants from "@/constants.ts";
import { getDomain, waitVideoElementReady, getResourceUrl, getSessionId, getVideoTime, setLocale, getLocale, hasKey, hasKeyFor, t, tp, type TrLocale, onInteraction, getThumbnailUrl, getBestThumbnailUrl, fetchVideoVotes, setInnerHtml, getCurrentMediaType, tl, tlp, PluginError, formatNumber, reloadTab, getVideoElement, getVideoSelector, getLikeDislikeBtns, fetchITunesAlbumInfo, resourceAsString, createTranslatable, sanitizeUnicode } from "@util/index.ts";
import { loggers } from "@util/logging.ts";
import { Logger } from "@util/Logger.ts";
import { addSelectorListener, globservers } from "@/observers.ts";
import { getSerializerStores, getSerializerStoresFull } from "@/serializers.ts";
import { cfgDefaultData, getFeature, getFeatures, getFeaturesNoHidden, setFeatures } from "@/config.ts";
import { autoLikeStore, disableDiscardBeforeUnload, enableDiscardBeforeUnload, fetchLyricsUrlTop, fuzzyFetchLyricsInfo, getLyricsCacheEntry, isIgnoredInputElement, sanitizeArtists, sanitizeSong, type ArtCacheEntry } from "@feat/index.ts";
import { allSiteEvents, emitSiteEvent, siteEvents, type SiteEventsMapPrefixed } from "@/siteEvents.ts";
import { PluginIntent, type FeatureConfig, type LyricsCacheEntry, type PluginDef, type PluginInfo, type PluginRegisterResult, type PluginDefResolvable, type PluginEventMap, type PluginItem, type BytmObject, type AutoLikeData, type InterfaceFunctions, type BitSetTSEnum, LogLevel } from "@/types.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { BytmDialog } from "@comp/BytmDialog.ts";
import { createHotkeyInput } from "@comp/hotkeyInput.ts";
import { createToggleInput } from "@comp/toggleInput.ts";
import { createCircularBtn } from "@comp/circularButton.ts";
import { createRipple } from "@comp/ripple.ts";
import { showIconToast, showToast } from "@comp/toast.ts";
import { ExImDialog } from "@comp/ExImDialog.ts";
import { MarkdownDialog } from "@comp/MarkdownDialog.ts";
import pkgJson from "@root/package.json" with { type: "json" };

const { mode, branch, host, buildNumber, compressionFormat, scriptInfo, initialParams, sessionStorageAvailable, repo } = constants;
const { autoPlural, NanoEmitter, pureObj } = CoreUtils;
const { getUnsafeWindow } = UserUtils;

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
  /** When this is emitted, plugins may register themselves at a much earlier stage, before things like the feature config are even loaded */
  "bytm:preInitPlugin": (pluginDef: PluginDef) => PluginRegisterResult;
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
  /** Emitted when the feature with the specified key has been initialized - in TS, use `"bytm:featureInitialized:myFeatureKey" as "bytm:featureInitialized:id"` to make the error go away */
  "bytm:featureInitialized:id": void;


  /** Emitted when BYTM has finished general initialization. */
  "bytm:ready": undefined;
  /** Emitted when all features have been initialized or initialization has timed out. */
  "bytm:allReady": undefined;

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
  /** Emitted when an entry is added to the artwork cache. Note: `entry.url` will be the *template URL* with a default resolution of 100x100. Use a simple string replacement to get any other resolution */
  "bytm:artworkCacheEntryAdded": { artist: string, album: string, entry: ArtCacheEntry };

  /** Emitted when the full DataStoreSerializer instance (containing crucial as well as cache and misc. volatile data) was initialized and all the stores' data was loaded. */
  "bytm:dataStoreSerializerLoaded": undefined;

  // NOTE:
  // Additionally, all events from `SiteEventsMap` in `src/siteEvents.ts`
  // are emitted in this format: "bytm:siteEvent:nameOfSiteEvent"
};

/** Array of all events emittable on the interface (excluding plugin-specific, private events) */
export const allInterfaceEvents = [
  "bytm:registerPlugin",
  "bytm:featureInitStarted",
  "bytm:featureInitialized",
  "bytm:featureInitialized:id",
  "bytm:ready",
  "bytm:allReady",
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
  "bytm:artworkCacheEntryAdded",
  "bytm:dataStoreSerializerLoaded",
  ...allSiteEvents.map(e => `bytm:siteEvent:${e}`),
] as const;

/**
 * All functions that can be called on the BYTM interface using `unsafeWindow.BYTM.functionName();` (or `const { functionName } = unsafeWindow.BYTM;`)  
 * If prefixed with /\*🔒\*\/, the function is authenticated and requires a token to be passed as the first argument.
 */
const globalFuncs: InterfaceFunctions = pureObj({
  // meta:
  /*🔒*/ getPluginInfo,
  /*🔒*/ getInternals,

  // bytm-specific:
  getDomain,
  getResourceUrl,
  resourceAsString,
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
  onSiteEvent: siteEvents.on.bind(siteEvents),
  onceSiteEvent: siteEvents.once.bind(siteEvents),
  onMultiSiteEvents: siteEvents.onMulti.bind(siteEvents),

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
  getDefaultFeatures: () => structuredClone(cfgDefaultData),

  // lyrics:
  sanitizeArtists,
  sanitizeSong,
  fetchLyricsUrlTop,
  fuzzyFetchLyricsInfo, // TODO: docs
  getLyricsCacheEntry, // TODO: docs
  // TODO:
  // getLyricsCache: getLyricsCacheInterface,
  // saveLyricsCache: saveLyricsCacheInterface,

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
  /*🔒*/ showPrompt: showPromptInterface,

  // other:
  formatNumber,
  sanitizeUnicode, // TODO: docs
});

/** Initializes the BYTM interface */
export function preInitInterface() {
  const props = {
    // constants
    sessionId: getSessionId(),
    mode,
    branch,
    host,
    buildNumber,
    initialParams,
    compressionFormat,
    sessionStorageAvailable,

    // meta
    ...scriptInfo,

    // functions
    ...globalFuncs,

    // classes
    NanoEmitter, // legacy (also available via CoreUtils and UserUtils now)
    loggers,
    Logger,

    // dialogs legacy (TODO: remove in v4)
    BytmDialog,
    ExImDialog,
    MarkdownDialog,

    // dialogs
    getBytmDialog,
    getExImDialog,
    getMarkdownDialog,

    // libraries
    CoreUtils,
    UserUtils,
    compareVersions,
  } satisfies Omit<BytmObject, "locale" | "logLevel">; // omit dynamic values set after initialization - see setGlobalProp() usages

  for(const [key, value] of Object.entries(props))
    setGlobalProp(key, value);

  loggers.plugin.log("Initialized BYTM interface");
}

/** Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page! */
export function setGlobalProp<
  TKey extends keyof BytmObject,
  TValue = BytmObject[TKey],
>(
  key: TKey | (string & {}),
  value: TValue,
) {
  // use unsafeWindow so the properties are available to plugins (outside of the userscript's scope)
  const win = getUnsafeWindow();

  if(typeof win.BYTM !== "object")
    win.BYTM = pureObj({}) as BytmObject;

  win.BYTM[key] = value;
}

/** Emits an event on the BYTM interface */
export function emitInterface<
  TEvt extends keyof InterfaceEvents,
  TDetail extends InterfaceEvents[TEvt],
>(
  type: TEvt | keyof SiteEventsMapPrefixed,
  ...detail: (TDetail extends undefined ? [undefined?] : [TDetail])
) {
  try {
    unsafeWindow.dispatchEvent(new CustomEvent(type, { detail: detail?.[0] ?? undefined }));
    //@ts-expect-error
    emitOnPlugins(type, undefined, ...detail);
    if(getFeature("logEvents")) {
      detail.length > 0 && detail?.[0]
        ? loggers.plugin.log(`Emitted interface event '${type}' with data:`, ...detail)
        : loggers.plugin.log(`Emitted interface event '${type}' (without data)`);
    }
  }
  catch(err) {
    loggers.plugin.error(`Couldn't emit interface event '${type}' due to an error:\n`, err);
  }
}

//#region register plugins

/**
 * Data stored by the {@linkcode pluginPermissionsStore}.  
 * Maps a plugin key (see {@linkcode getPluginKey()}) to a tuple of granted permissions (index 0), at the point in time where the plugin requested the given intents (index 1).  
 * At init time, should the plugin register itself with an intent bitset that doesn't match the requested intents (tuple index 1), the plugin permission dialog should be shown again, since permissions need to be re-granted or reconfigured.
 */
type PluginPermissionsStoreData = {
  [pluginKey: string]: [grantedPermissions: number, requestedIntents: number];
};

/**
 * Stores information about plugins that have been registered and have had their intents granted (thus turning them into permissions).  
 * Maps a plugin key (see {@linkcode getPluginKey()}) to a tuple of granted permissions (index 0), at the point in time where the plugin requested the given intents (index 1).  
 * At init time, should the plugin register itself with an intent bitset that doesn't match the requested intents (tuple index 1), the plugin permission dialog should be shown again, since permissions need to be re-granted or reconfigured.
 */
export const pluginPermissionsStore = new CoreUtils.DataStore<PluginPermissionsStoreData>({
  id: "bytm-plugin-permissions",
  engine: new UserUtils.GMStorageEngine(),
  defaultData: {},
  formatVersion: 0,
  compressionFormat: null,
});

/** Map of plugin key to all registered plugins */
const registeredPlugins = new Map<string, PluginItem>();

/** Map of plugin key to auth token for plugins that have been registered */
const registeredPluginTokens = new Map<string, string>();

let pluginsInitialized = false;

/** Pre-init for eager plugins that need to be initialized as soon as physically possible */
export function preInitPlugins() {
  emitInterface("bytm:preInitPlugin", registerPlugin);
}

/** Initializes plugins that have been registered already. Needs to be run after `bytm:ready`! */
export function initPlugins() {
  emitInterface("bytm:registerPlugin", registerPlugin);

  registerDevPlugin();

  window.addEventListener("bytm:ready", () => {
    pluginsInitialized = true;
    if(registeredPlugins.size > 0)
      loggers.plugin.info(`Registered ${registeredPlugins.size} ${autoPlural("plugin", registeredPlugins.size)}${mode === "development" ? " (including dev plugin)" : ""}`, LogLevel.Info);
    else
      loggers.plugin.log("No plugins registered");
  }, { once: true });
}

/** Registers a plugin on the BYTM interface. */
export function registerPlugin(def: PluginDef): PluginRegisterResult {
  try {
    if(pluginsInitialized)
      throw new PluginError(`Failed to register plugin '${getPluginKey(def)}': BYTM interface has already been initialized - plugins can only be registered after the 'bytm:registerPlugin' event and before the 'bytm:ready' event`);

    const plKey = getPluginKey(def);

    if(registeredPlugins.has(plKey))
      throw new PluginError(`Failed to register plugin '${plKey}': Plugin with the same name and namespace is already registered`);

    const validationErrors = validatePluginDef(def);
    if(validationErrors)
      throw new PluginError(`Failed to register plugin${def?.plugin?.name ? ` '${def?.plugin?.name}'` : ""} with invalid definition:\n- ${validationErrors.join("\n- ")}`);

    const events = new NanoEmitter<PluginEventMap>({ publicEmit: true });
    const token = crypto.randomUUID();

    registeredPlugins.set(plKey, {
      def: def,
      events,
    });
    registeredPluginTokens.set(plKey, token);

    // TODO: check perms and ask user for initial activation
    const permissionInt = defToIntentsBitSet(def);

    const permissions: PluginRegisterResult["permissions"] = {
      int: permissionInt,
      array: parseBitSetEnumArray(permissionInt, PluginIntent as unknown as BitSetTSEnum),
    };

    loggers.plugin.info(`Successfully registered plugin '${plKey}'`, LogLevel.Info);

    setTimeout(() => emitOnPlugins("pluginRegistered", (d) => sameDef(d, def), pluginDefToInfo(def)!), 0);

    return {
      info: getPluginInfo(token, def)!,
      events,
      token,
      permissions,
    };
  }
  catch(err) {
    loggers.plugin.error(`Failed to register plugin '${getPluginKey(def)}':`, err instanceof PluginError ? err : new PluginError(String(err)));
    throw err;
  }
};

/** After the dev plugin is registered, this token can be used to access anything on the plugin interface */
export let devPluginToken: string | undefined;
export const devPluginId = CoreUtils.randomId(8, 36, true, true);

/** Registers a plugin that only exists in development mode to test the plugin system */
function registerDevPlugin() {
  if(mode !== "development")
    return;
  try {
    const { token, events } = registerPlugin({
      plugin: {
        name: t("dev_plugin.name"),
        namespace: `${pkgJson.namespace}+${devPluginId}`,
        version: pkgJson.version,
        description: createTranslatable("dev_plugin.description"),
        homepage: {
          source: `https://github.com/${repo}/blob/${branch}/docs/almanac.md#developer-plugin`,
          changelog: `${pkgJson.homepage}/blob/${branch}/changelog.md`,
          bug: pkgJson.bugs.url,
          greasyfork: pkgJson.hosts.greasyfork,
          openuserjs: pkgJson.hosts.openuserjs,
          other: pkgJson.hosts.github,
        },
        iconUrl: "https://raw.githubusercontent.com/Sv443/BetterYTM/main/assets/images/logo/logo_dev_128.png",
      },
      intents: PluginIntent.FullAccess,
    });

    devPluginToken = token;
    setGlobalProp("devPluginEvents", events);
  }
  catch(err) {
    loggers.plugin.error("Failed to register dev plugin:", err instanceof PluginError ? err : new PluginError(String(err), { cause: err }));
  }
}

/** Returns the registered plugins as an array of tuples with the items `[id: string, item: PluginItem]` */
export function getRegisteredPlugins() {
  return [...registeredPlugins.entries()];
}

/** Returns the key for a given plugin definition */
export function getPluginKey(plugin: PluginDefResolvable) {
  return `${plugin.plugin.namespace}/${plugin.plugin.name}`;
}

/** Converts a PluginDef object (full definition) into a PluginInfo object (restricted definition) or undefined, if undefined is passed */
export function pluginDefToInfo(plugin?: PluginDef): PluginInfo | undefined {
  return plugin
    ? {
      name: plugin.plugin.name,
      namespace: plugin.plugin.namespace,
      version: plugin.plugin.version,
    }
    : undefined;
}

/** Checks whether two plugins are the same, given their resolvable definition objects */
export function sameDef(def1: PluginDefResolvable, def2: PluginDefResolvable) {
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
          ? getPluginKey(args[1] as PluginDefResolvable)
          : `${args[2]}/${args[1]}`
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

  return UserUtils.bitSetHas(pluginIntents, PluginIntent.FullAccess) || perms.every((perm) => CoreUtils.bitSetHas(pluginIntents, perm));
}

/** Converts the intents from a PluginDef object into a bit set value. */
export function defToIntentsBitSet(def: PluginDef): number {
  if(Array.isArray(def.intents))
    return def.intents.reduce((acc, intent) => acc | intent, 0);
  else if(typeof def.intents === "number")
    return def.intents;
  else
    return 0;
}

/** Iterates over the {@linkcode enumRef} and returns an array of all intents that are set in the passed {@linkcode bitSet} value. */
export function parseBitSetEnumArray<TNum extends number | bigint>(bitSet: TNum, enumRef: BitSetTSEnum): TNum[] {
  const result: TNum[] = [];
  for(const [, val] of Object.entries(enumRef))
    if((typeof val === "number" || typeof val === "bigint") && CoreUtils.bitSetHas(bitSet, val as TNum))
      result.push(val as TNum);
  return result;
}

/** Validates the passed PluginDef object and returns an array of errors - returns undefined if there were no errors - never returns an empty array */
export function validatePluginDef(pluginDef: Partial<PluginDef>) {
  const errors = [] as string[];

  const addNoPropErr = (jsonPath: string, type: string) =>
    errors.push(t("plugin_validation_error.no_property", jsonPath, type));

  const addInvalidPropErr = (jsonPath: string, value: string, examples: string[]) =>
    errors.push(tp("plugin_validation_error.invalid_property", examples, jsonPath, value, `'${examples.join("', '")}'`));

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
  const features = hiddenAccess ? getFeatures() : getFeaturesNoHidden();
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

/** Returns the BytmDialog class, used to create BetterYTM's absolutely stunning and iconic and sexy and cool modal dialogs. */
export function getBytmDialog(token: string | undefined) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
    return;
  return BytmDialog;
}

/** Returns the ExImDialog class, used to create dialogs for importing and exporting serializable data. */
export function getExImDialog(token: string | undefined) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
    return;
  return ExImDialog;
}

/** Returns the MarkdownDialog class, used to create dialogs with custom rendered markdown content. */
export function getMarkdownDialog(token: string | undefined) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
    return;
  return MarkdownDialog;
}

/** Wrapper around {@linkcode showPrompt()} to check for the permission to show dialogs */
export function showPromptInterface(token: string | undefined, ...args: Parameters<typeof showPrompt>) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.CreateModalDialogs))
    return;
  return showPrompt(...args);
}

//#region internals

/** Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins. */
export function getInternals(token: string | undefined) {
  const pluginId = resolveToken(token);
  if(pluginId === undefined || !pluginHasPerms(pluginId, PluginIntent.InternalAccess))
    return undefined;

  return {
    constants,
    globservers,
    getSerializerStores,
    getSerializerStoresFull,
    emitInterface,
    emitSiteEvent,
    siteEvents,
    addSelectorListener,
    showPrompt,
    setGlobalProp,
    enableDiscardBeforeUnload,
    disableDiscardBeforeUnload,
    broadcastTxID,
    emitBroadcast,
  };
}
