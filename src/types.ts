import type { LooseUnion, NanoEmitter, Prettify, Stringifiable } from "@sv443-network/coreutils";
import type * as consts from "@/constants.ts";
import type { scriptInfo } from "@/constants.ts";
import type { addSelectorListener } from "@/observers.ts";
import type { getResourceUrl, getSessionId, getVideoTime, TrLocale, t, tp, fetchVideoVotes, onInteraction, getThumbnailUrl, getBestThumbnailUrl, getLocale, hasKey, hasKeyFor, getDomain, waitVideoElementReady, setInnerHtml, getCurrentMediaType, tl, tlp, formatNumber, getVideoElement, getVideoSelector, reloadTab, getLikeDislikeBtns, fetchITunesAlbumInfo, resourceAsString, loggers } from "@util/index.ts";
import type { siteEvents, SiteEventsMapPrefixed } from "@/siteEvents.ts";
import type { InterfaceEventsMap, getAutoLikeDataInterface, getFeaturesInterface, getInternals, getPluginInfo, saveAutoLikeDataInterface, saveFeaturesInterface, setLocaleInterface, showPromptInterface } from "@/interface.ts";
import type { fetchLyricsUrlTop, sanitizeArtists, sanitizeSong } from "@feat/lyrics.ts";
import type { getLyricsCacheEntry } from "@feat/lyricsCache.ts";
import type { isIgnoredInputElement } from "@feat/input.ts";
import type { BytmDialog } from "@comp/BytmDialog.ts";
import type { ExImDialog } from "@comp/ExImDialog.ts";
import type { MarkdownDialog } from "@comp/MarkdownDialog.ts";
import type { createHotkeyInput } from "@comp/hotkeyInput.ts";
import type { createToggleInput } from "@comp/toggleInput.ts";
import type { createCircularBtn } from "@comp/circularButton.ts";
import type { createRipple } from "@comp/ripple.ts";
import type { showIconToast, showToast } from "@comp/toast.ts";
import resources from "@asset/resources.json" with { type: "json" };
import locales from "@asset/locales.json" with { type: "json" };
import type { featInfo } from "@feat/index.ts";
import type { Logger } from "@util/Logger.ts";

void ["type imports only:", resources, locales];

//#region other

/** Custom CLI args passed to rollup */
export type RollupArgs = Partial<{
  "config-mode": "development" | "production";
  "config-branch": "main" | "develop";
  "config-host": "greasyfork" | "github" | "openuserjs";
  "config-assetSource": "local" | "github" | "jsdelivr";
  "config-suffix": string;
  "config-gen-meta": "true" | "false";
  "config-compat-mode": "strict" | "loose";
}>;

// I know TS enums are impure but it doesn't really matter here, plus imo they are cooler than pure enums anyway
export enum LogLevel {
  Debug,
  Info,
}

/** Which domain this script is currently running on. */
export type Domain = "yt" | "ytm";

/** A selection option between one of the supported domains, or all of them. */
export type SiteSelection = Domain | "all";

/** A selection option between one of the supported domains, or none of them. */
export type SiteSelectionOrNone = SiteSelection | "none";

/** Key of a resource in `assets/resources.json` and extra keys defined by `tools/post-build.ts` */
export type ResourceKey = keyof typeof resources["resources"] | `trans-${keyof typeof locales}`;

/** Key of a CSS resource in `assets/resources.json` */
export type StyleResourceKey = ResourceKey & `css-${string}`;

/** Describes a hotkey. */
export type HotkeyObj = {
  /** [`KeyboardEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) value of the key. */
  code: string,
  /** Whether the Shift key must be held. */
  shift: boolean,
  /** Whether the Ctrl key (or Cmd key on Mac) must be held. */
  ctrl: boolean,
  /** Whether the Alt key (or Option key on Mac) must be held. */
  alt: boolean,
};

/** An entry in the lyrics cache. */
export type LyricsCacheEntry = {
  /** Sanitized artist name. */
  artist: string;
  /** Sanitized song name. */
  song: string;
  /** genius.com URL path, starting with a slash, e.g. `/Adele-Hello-Lyrics`. */
  path: string;
  /** UNIX timestamp of when this entry was last fetched. */
  viewed: number;
  /** UNIX timestamp of when this entry was added. */
  added: number;
};

export type AutoLikeData = {
  channels: {
    /** 24-character channel ID or user ID including the @ prefix */
    id: string;
    /** Channel name (for display purposes only) */
    name: string;
    /** Whether the channel should be auto-liked */
    enabled: boolean;
  }[];
};

/** Object returned by the [Return YouTube Dislike API](https://returnyoutubedislike.com/docs) */
export type RYDVotesObj = {
  /** The watch ID of the video */
  id: string;
  /** ISO 8601 timestamp of when the video was uploaded */
  dateCreated: string;
  /** Amount of likes */
  likes: number;
  /** Amount of dislikes */
  dislikes: number;
  /** Like to dislike ratio from 0.0 to 5.0 */
  rating: number;
  /** Amount of views */
  viewCount: number;
  /** Whether the video was deleted */
  deleted: boolean;
};

/** Video votes object internally used by BYTM, which is a subset of {@linkcode RYDVotesObj} */
export type VideoVotesObj = Prettify<
  & Pick<RYDVotesObj, "id" | "likes" | "dislikes" | "rating">
  & {
    /** Timestamp of when the data was fetched */
    timestamp: number;
  }
>;

/** Response from the Apple Music / iTunes API endpoint at `https://itunes.apple.com/search?country=us&limit=5&entity=album&term=$ARTIST%20$SONG` */
export type ITunesAPIResponse = {
  /** Number of results in the results array */
  resultCount: number;
  /** Array of album objects - see {@linkcode ITunesAlbumObj} */
  results: ITunesAlbumObj[];
};

/** One album object returned by the Apple Music / iTunes API */
export type ITunesAlbumObj = Prettify<{
  /** "collection" for albums */
  wrapperType: LooseUnion<"collection">;
  /** "Album" for albums */
  collectionType: LooseUnion<"Album">;
  /** API-internal ID of the artist */
  artistId: number;
  /** API-internal ID of the album */
  collectionId: number;
  /** Artist name */
  artistName: string;
  /** Album name */
  collectionName: string;
  /** Censored album name */
  collectionCensoredName: string;
  /** Artist's page on Apple Music / iTunes */
  artistViewUrl: `https://music.apple.com/us/artist/${string}/${number}?uo=${number}`;
  /** Album's page on Apple Music / iTunes */
  collectionViewUrl: `https://music.apple.com/us/album/${string}/${number}?uo=${number}`;
  /** Apple Music / iTunes only returns 60x60 and 100x100 out of the box, but the numbers can simply be string-replaced all the way up to 3000x3000 */
  artworkUrl60: `https://${string}.mzstatic.com/image/thumb/${string}/${number}x${number}bb.jpg`;
  /** Apple Music / iTunes only returns 60x60 and 100x100 out of the box, but the numbers can simply be string-replaced all the way up to 3000x3000 */
  artworkUrl100: `https://${string}.mzstatic.com/image/thumb/${string}/${number}x${number}bb.jpg`;
  /** Price of the album in the store */
  collectionPrice: number;
  /** Whether the album contains explicit content, or has been "cleaned" (censored) */
  collectionExplicitness: LooseUnion<"explicit" | "notExplicit" | "cleaned">;
  /** Whether the album is explicit or clean */
  contentAdvisoryRating?: LooseUnion<"Explicit" | "Clean">;
  /** Number of tracks in the album */
  trackCount: number;
  /** Copyright text */
  copyright: string;
  /** Country where the album is available - BYTM always fetches from the US store so this is always "USA" */
  country: LooseUnion<"USA">;
  /** Currency of the price value - BYTM always fetches from the US store so this is always "USD" */
  currency: LooseUnion<"USD">;
  /** ISO 8601 timestamp of the album release date */
  releaseDate: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
  /** Primary genre of the album */
  primaryGenreName: string;
}>;

/** Format for large numbers - differs for each locale - to see the [`Intl.NumberFormatOptions`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) used for each type, search for `function formatNumber` in `src/utils/misc.ts` */
export type NumberLengthFormat = "short" | "long";

/** Preferred lightness of derived colors in the UI */
export type ColorLightnessPref = "darker" | "normal" | "lighter";

/** Like/dislike state identifier, as presented by the attribute `like-status` on the YTM element `ytmusic-player-bar ytmusic-like-button-renderer` */
export type LikeDislikeState = "LIKE" | "DISLIKE" | "INDIFFERENT";

/** Object for storing various timings related to the initialization process, for performance monitoring and debugging purposes. */
export type PerformanceReport = {
  [key: string]: unknown;
  /** Meta information about the environment at the time of generating the report. */
  meta: {
    /** The domain the script ran on. */
    domain: Domain;
    /** BYTM's version. */
    version: string;
    /** BYTM's build number. */
    buildNumber: typeof consts.buildNumber;
    /** ISO timestamp of when BYTM was built. */
    buildTime: string;
    /** The mode BYTM was built in. Can be "development" or "production" */
    mode: typeof consts.mode;
    /** The userscript manager extension's identifier (`GM.info.scriptHandler`). */
    scriptHandler: string;
    /** Version of the userscript manager extension (`GM.info.version`). */
    scriptHandlerVersion: string;
    /** User agent string of the browser. */
    userAgent: string;
    /** Whether the page was loaded in incognito mode, which means other extensions are probably disabled. */
    isIncognito?: boolean;
    /** Which kind of sandboxing the userscript manager extension uses (Tampermonkey-only prop). */
    sandboxMode?: string;
    /** How the script was injected into the page (Violentmonkey-only prop). */
    injectInto?: string;
    /** Whether first-party isolation is enabled in the browser (Tampermonkey-only prop). */
    isFirstPartyIsolation?: boolean;
  };
  /** Timestamp when the script starts synchronously executing, before the call to {@linkcode preInit()}. */
  start: number;
  /** Contains generic durations for specific initialization phases (or just noteworthy function calls), starting from whenever that phase starts, and recorded when that phase ends. The keys are not strictly typed, but should be descriptive of the phase they measure. */
  durations?: Record<LooseUnion<keyof PerformanceReport & FeatureKey>, number>;
  /** For each feature identifier (not strictly typed), the time in milliseconds **since feature initialization started**, recorded when that feature's async initialization function finishes executing. */
  featureDurations?: Record<LooseUnion<FeatureKey>, number>;
  /** Time in milliseconds since `start`, recorded at the end of {@linkcode preInit()}. */
  preInitEnd?: number;
  /** Time in milliseconds since `start`, recorded when the `DOMContentLoaded` event fires. */
  domLoaded?: number;
  /** Time in milliseconds since `start` when the `bytm:ready` event is emitted, which signals that the bulk of BYTM is ready and all features have *started* initialization. */
  ready?: number;
  /** Time in milliseconds since `start` when all features have finished their async initialization functions and BYTM is fully ready. For plugins, this only factors in their deferred initialization. */
  allReady?: number;
  /** Time in milliseconds since `start` when the entire initialization process finishes, including any synchronous, post-ready, developer-only code. Runs very slightly after `ready`. */
  postInitEnd?: number;
};

//#region utility

/** Returns a union of all keys of {@linkcode T} whose values are of type {@linkcode U} */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T];

/** Bitset-like TS enum type, where the keys are strings and the values are numbers (plus the reverse mapping) */
export type BitSetTSEnum = TSEnum<string, number>;

/** Generic type for TS enums, where there is a key-value as well as value-key mapping */
export type TSEnum<K extends string | number, V extends string | number> = Record<K, V> & Record<V, K>;

//#region global

/**
 * All properties of the `unsafeWindow.BYTM` object (major part of the plugin interface next to the events emitted on `unsafeWindow`).  
 * - ⚠️ Do not overwrite these properties, only call the functions or read the values!
 */
export type BytmObject =
  {
    [key: string]: unknown;
    /** Current BYTM locale */
    locale: TrLocale;
    /** Current log level */
    logLevel: LogLevel;
    /** Session ID (unique per tab). Is null if sessionStorage is not available. */
    sessionId: string | null;
  }
  // meta info from the BYTM userscript header
  & typeof scriptInfo
  // certain variables from `src/constants.ts`
  & Pick<typeof consts, "mode" | "branch" | "host" | "buildNumber" | "initialParams" | "compressionFormat" | "sessionStorageAvailable" | "scriptInfo">
  // global functions exposed through the interface in `src/interface.ts`
  & InterfaceFunctions
  // classes
  & {
    // utility
    /** [NanoEmitter](https://github.com/Sv443-Network/CoreUtils/blob/main/docs.md#nanoemitter) class reference to create your own event emitters */
    NanoEmitter: typeof NanoEmitter;
    /** Object of predefined Logger instances for different categories. In general, it's better to create your own Logger instances for your plugin or feature, but these can also be used when appropriate. */
    loggers: typeof loggers;
    /** The Logger class, which can be used to create a new logging category. Any created Logger instance will automatically share its logs with BYTM's internal logging system. */
    Logger: typeof Logger;

    // dialogs legacy (TODO: remove in v4)
    /** @deprecated Please use the authenticated function `getBytmDialog()` instead. This property will be removed in BYTM v4.0.0 */
    BytmDialog: typeof BytmDialog,
    /** @deprecated Please use the authenticated function `getExImDialog()` instead. This property will be removed in BYTM v4.0.0 */
    ExImDialog: typeof ExImDialog,
    /** @deprecated Please use the authenticated function `getMarkdownDialog()` instead. This property will be removed in BYTM v4.0.0 */
    MarkdownDialog: typeof MarkdownDialog,

    // dialogs
    /** Returns a reference to the {@linkcode BytmDialog} class, which can be used to create new dialogs */
    getBytmDialog: (token?: string) => typeof BytmDialog | undefined;
    /** Returns a reference to the {@linkcode ExImDialog} class, which can be used to create new export/import dialogs */
    getExImDialog: (token?: string) => typeof ExImDialog | undefined;
    /** Returns a reference to the {@linkcode MarkdownDialog} class, which can be used to create new markdown rendering dialogs */
    getMarkdownDialog: (token?: string) => typeof MarkdownDialog | undefined;
  }
  // libraries
  & {
    /** The entire CoreUtils library */
    CoreUtils: typeof import("@sv443-network/coreutils");
    /** The entire UserUtils library */
    UserUtils: typeof import("@sv443-network/userutils");
    /** The entire compare-versions library */
    compareVersions: typeof import("compare-versions");
  };

/** [Trusted Type Policy](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy) */
export type TTPolicy = {
  createHTML: (dirty: Stringifiable) => string;
};

// this block communicates to TypeScript that the `BYTM` property exists on the `window` object:
declare global {
  interface Window {
    // to see the expanded type, install the VS Code extension "MylesMurphy.prettify-ts" and hover over the property below
    // alternatively, navigate with ctrl+click to traverse all the different types
    BYTM: BytmObject;
    // polyfill for the new Trusted Types API
    trustedTypes?: {
      createPolicy(name: string, policy: TTPolicy): TTPolicy;
    };
  }
}

//#region translations

/** An object containing translation strings for any supported locales. `en-US` is always required, all other locales are optional. */
export type Translatable = {
  "en-US": string;
} & {
  [key in TrLocale]?: string;
};

//#region plugins

/**
 * Intents (permissions) BYTM has to grant your plugin for it to be able to access certain features.  
 * TODO: this feature is unfinished, but you should still specify the intents your plugin needs.  
 * Never request more permissions than you need, as this is a bad practice and can lead to your plugin being rejected.
 */
export enum PluginIntent {
  /** Plugin can read the feature configuration */
  ReadFeatureConfig = 1,
  /** Plugin can write to the feature configuration */
  WriteFeatureConfig = 2,
  /** Plugin has access to hidden config values */
  SeeHiddenConfigValues = 4,
  /** Plugin can write to the lyrics cache */
  WriteLyricsCache = 8,
  /** Plugin can add new translations and overwrite existing ones */
  WriteTranslations = 16,
  /** Plugin can create modal dialogs */
  CreateModalDialogs = 32,
  /** Plugin can read auto-like data */
  ReadAutoLikeData = 64,
  /** Plugin can write to auto-like data */
  WriteAutoLikeData = 128,
  /** Plugin has access to deeply internal functions and instances */
  InternalAccess = 256,
  /** Grants all other intents */
  FullAccess = 512,
}

/** Result of a plugin registration */
export type PluginRegisterResult = {
  /** Public info about the registered plugin */
  info: PluginInfo;
  /** NanoEmitter instance for plugin events - see {@linkcode PluginEventMap} for a list of events */
  events: NanoEmitter<PluginEventMap>;
  /** Authentication token for the plugin to use in certain restricted function calls */
  token: string;
  /** Permissions granted to the plugin - this is a bitwise OR of {@linkcode PluginIntent} values under the `int` prop, or an array of them under the `array` prop */
  permissions: {
    int: number;
    array: PluginIntent[];
  };
}

/** Minimal object that describes a plugin - this is all info the other installed plugins can see */
export type PluginInfo = {
  /** Name of the plugin */
  name: string;
  /**
   * Adding the namespace and the name property makes the unique identifier for a plugin.  
   * If one exists with the same name and namespace as this plugin, it may be overwritten at registration.  
   * I recommend to set this value to a URL pointing to your homepage, or the author's username.
   */
  namespace: string;
  /** Version of the plugin as a semver-compliant string */
  version: string;
};

/** Minimum part of the PluginDef object needed to make up the resolvable plugin identifier */
export type PluginDefResolvable = PluginDef | { plugin: Pick<PluginDef["plugin"], "name" | "namespace"> };

/** An object that describes a BYTM plugin */
export type PluginDef = {
  plugin: PluginInfo & {
    /**
     * Descriptions of at least en-US and optionally any other locale supported by BYTM.  
     * When an untranslated locale is set, the description will default to the value of en-US
     */
    description: Partial<Record<keyof typeof locales, string>> & {
      "en-US": string;
    };
    /** URL to the plugin's icon - recommended size: 48x48 to 128x128 */
    iconUrl?: string;
    /** Optional license information for the plugin */
    license?: {
      /** License [SPDX identifier](https://spdx.org/licenses/) or short name */
      name: string;
      /** URL to the license text */
      url: string;
    };
    /** Homepage URLs for the plugin */
    homepage: {
      /** URL to the plugin's source code (i.e. Git repo) - closed source plugins are not officially accepted at the moment. */
      source: string;
      /** URL to the plugin's changelog file. */
      changelog?: string;
      /** Any other homepage URL. */
      other?: string;
      /** URL to the plugin's bug tracker page, like GitHub issues. */
      bug?: string;
      /** URL to the plugin's Greasy Fork page. */
      greasyfork?: string;
      /** URL to the plugin's OpenUserJS page. */
      openuserjs?: string;
    };
  };
  /** Intents (permissions) BYTM has to grant the plugin for it to work - use bitwise OR to combine multiple intents */
  intents?: number | PluginIntent[];
  /** Info about the plugin contributors */
  contributors?: Array<{
    /** Name of this contributor */
    name: string;
    /** (optional) Email address of this contributor */
    email?: string;
    /** (optional) URL to this plugin contributor's homepage / GitHub profile */
    url?: string;
  }>;
};

/** All events that are dispatched to plugins individually, including everything in {@linkcode SiteEventsMap} and {@linkcode InterfaceEventsMap} - these don't have a prefix since they can't conflict with other events */
export type PluginEventMap =
  // These are emitted on each plugin individually, with individual data:
  & {
    /** Emitted when a plugin is registered on BYTM's side and can make use of authenticated API calls */
    pluginRegistered: (info: PluginInfo) => void;
  }
  // These are emitted on every plugin simultaneously, with the same or similar data:
  & SiteEventsMapPrefixed
  & InterfaceEventsMap;

/** A plugin in either the queue or registered map */
export type PluginItem = Prettify<
  & {
    def: PluginDef;
  }
  & Pick<PluginRegisterResult, "events">
>;

//#region plugin interface

/** All functions exposed by the interface on the global `BYTM` object */
export type InterfaceFunctions = {
  // meta:
  /** 🔒 Checks if the plugin with the given name and namespace is registered and returns an info object about it */
  getPluginInfo: typeof getPluginInfo;
  /** 🔒 Returns a selection of internal functions and objects that can be used by core libraries and deeper reaching plugins */
  getInternals: typeof getInternals;

  // bytm-specific:
  /** Returns the current domain as a constant string representation */
  getDomain: typeof getDomain;
  /**
   * Returns the URL of a resource as defined in `assets/resources.json`  
   * There are also some resources like translation files that get added by `tools/post-build.ts`  
   *   
   * The returned URL is a `blob:` URL served up by the userscript extension  
   * This makes the resource fast to fetch and also prevents CORS issues
   */
  getResourceUrl: typeof getResourceUrl;
  /**
   * Returns the string content of a resource as defined in `assets/resources.json` as a Promise.  
   * Uses a builtin cache to speed up subsequent calls, even across sessions.
   */
  resourceAsString: typeof resourceAsString;
  /** Returns the unique session ID for the current tab */
  getSessionId: typeof getSessionId;
  /** Smarter version of `location.reload()` that remembers video time and volume and makes other features like initial tab volume stand down if used */
  reloadTab: typeof reloadTab;

  // dom:
  /** Sets the innerHTML property of the provided element to a sanitized version of the provided HTML string */
  setInnerHtml: typeof setInnerHtml;
  /** Adds a listener to one of the already present SelectorObserver instances */
  addSelectorListener: typeof addSelectorListener;
  /** Registers accessible interaction listeners (click, enter, space) on the provided element */
  onInteraction: typeof onInteraction;
  /**
   * Returns the current video time (on both YT and YTM)  
   * In case it can't be determined on YT, mouse movement is simulated to bring up the video time  
   * In order for that edge case not to error out, the function would need to be called in response to a user interaction event (e.g. click) due to the strict autoplay policy in browsers
   */
  getVideoTime: typeof getVideoTime;
  /** Returns the thumbnail URL for the provided video ID and thumbnail quality */
  getThumbnailUrl: typeof getThumbnailUrl;
  /** Returns the thumbnail URL with the best quality for the provided video ID */
  getBestThumbnailUrl: typeof getBestThumbnailUrl;
  /** Fetches the Apple Music / iTunes album info objects for the given artist and album names */
  fetchITunesAlbumInfo: typeof fetchITunesAlbumInfo;
  /** Resolves the returned promise when the video element is queryable in the DOM */
  waitVideoElementReady: typeof waitVideoElementReady;
  /** Returns the video element on the current page for both YTM and YT - returns null if it couldn't be found */
  getVideoElement: typeof getVideoElement;
  /** Returns the CSS selector to the video element for both YTM and YT */
  getVideoSelector: typeof getVideoSelector;
  /** (On YTM only) returns the current media type (video or song) */
  getCurrentMediaType: typeof getCurrentMediaType;
  /** Returns the like and dislike elements, as well as the current state of them as a string constant */
  getLikeDislikeBtns: typeof getLikeDislikeBtns;
  /** Checks whether the given element (or document.activeElement by default) is input element, so all other global keypresses should be ignored */
  isIgnoredInputElement: typeof isIgnoredInputElement;
  
  // site events:
  /** Adds a site event listener */
  onSiteEvent: typeof siteEvents.on,
  /** Adds a site event listener that is only called once and also returns a Promise for use with the async/await pattern */
  onceSiteEvent: typeof siteEvents.once,
  /** Adds a listener for multiple site events at once, with configurable behavior */
  onMultiSiteEvents: typeof siteEvents.onMulti,

  // translations:
  /** 🔒 Sets the locale for all new translations */
  setLocale: typeof setLocaleInterface;
  /** Returns the current locale */
  getLocale: typeof getLocale;
  /** Returns whether a translation key exists for the set locale */
  hasKey: typeof hasKey;
  /** Returns whether a translation key exists for the provided locale */
  hasKeyFor: typeof hasKeyFor;
  /** Returns the translation for the provided translation key and currently set locale (check the files in the folder `assets/translations`) */
  t: typeof t;
  /** Returns the translation for the provided translation key, including pluralization identifier and set locale (check the files in the folder `assets/translations`) */
  tp: typeof tp;
  /** Returns the translation for the provided translation key and provided locale (check the files in the folder `assets/translations`) */
  tl: typeof tl;
  /** Returns the translation for the provided translation key, including pluralization identifier and provided locale (check the files in the folder `assets/translations`) */
  tlp: typeof tlp;

  // feature config:
  /** 🔒 Returns the current feature configuration */
  getFeatures: typeof getFeaturesInterface;
  /** 🔒 Overwrites the feature configuration with the provided one */
  saveFeatures: typeof saveFeaturesInterface;
  /** Returns the default feature configuration */
  getDefaultFeatures: () => FeatureConfig;

  // lyrics:
  /** Sanitizes the provided artist string - this needs to be done before calling other lyrics related functions! */
  sanitizeArtists: typeof sanitizeArtists;
  /** Sanitizes the provided song title string - this needs to be done before calling other lyrics related functions! */
  sanitizeSong: typeof sanitizeSong;
  /** Fetches the lyrics URL of the top search result for the provided song and artist. Before a request is sent, the cache is checked for a match. */
  fetchLyricsUrlTop: typeof fetchLyricsUrlTop;
  /** Returns the lyrics cache entry for the provided song and artist, if there is one. Never sends a request on its own. */
  getLyricsCacheEntry: typeof getLyricsCacheEntry;

  // auto-like:
  /** 🔒 Returns the current auto-like data */
  getAutoLikeData: typeof getAutoLikeDataInterface;
  /** 🔒 Overwrites the auto-like data */
  saveAutoLikeData: typeof saveAutoLikeDataInterface;
  /** Returns the votes for the provided video ID from the ReturnYoutubeDislike API */
  fetchVideoVotes: typeof fetchVideoVotes;

  // components:
  /** Creates a new hotkey input component */
  createHotkeyInput: typeof createHotkeyInput;
  /** Creates a new toggle input component */
  createToggleInput: typeof createToggleInput;
  /** Creates a new circular button component */
  createCircularBtn: typeof createCircularBtn;
  /** Creates a new ripple effect on the provided element or creates an empty element that has the effect */
  createRipple: typeof createRipple;
  /** Shows a toast with the provided text */
  showToast: typeof showToast;
  /** Shows a toast with the provided text and an icon */
  showIconToast: typeof showIconToast;
  /** Shows a styled confirm() or alert() dialog with the provided message */
  showPrompt: typeof showPromptInterface;

  // other:
  /** Formats a number to a string using the configured locale and configured or passed number notation */
  formatNumber: typeof formatNumber;
};

//#region feature defs

/** Feature identifier key. */
export type FeatureKey = keyof FeatureConfig;

/** All feature group keys, as defined by the "group" property of each entry in the feature info list in `src/features/index.ts` */
export type FeatureGroupKey = (typeof featInfo)[FeatureKey]["group"];

/** Union of all feature identifier keys, where the value is of the specified type {@linkcode TType} */
export type FeatKeysOfType<TType> = KeysOfType<FeatureConfig, TType>;

/** Feature category identifier. */
export type FeatureCategory =
  | "general"
  | "layout"
  | "volume"
  | "songLists"
  | "behavior"
  | "input"
  | "hotkeys"
  | "autoLike"
  | "lyrics"
  | "integrations"
  | "plugins";

/** One option in a select input. */
export type SelectOption = {
  value: string | number;
  label: string;
};

/** A unit string or a function that returns a unit string for the provided value. */
export type FeatUnit = string | ((val: number) => string);

/** Contains all possible value types of the feature configuration. */
export type FeatureConfigValue = FeatureConfig[FeatureKey];

/** Feature configuration object, as a union of all possible feature types. */
export type FeatureTypeProps = 
  | ({
    /** Custom toggle input - uses a `input[type="checkbox"]` under the hood. */
    type: "toggle";
    /** Default checked state of the toggle */
    default: boolean;
  } & FeatureFuncProps)
  | ({
    /** Uses the default `input[type="number"]` element. */
    type: "number";
    /** Default value of the number input. */
    default: number;
    /** Minimum allowed value. When a number less than this is entered, the value will be set to this minimum instead. */
    min: number;
    /** Maximum allowed value. When a number greater than this is entered, the value will be set to this maximum instead. */
    max?: number;
    /** Granularity of the number input. Defaults to 1. */
    step?: number;
    /** 
     * String or function that returns a string to render the unit of measurement for the provided value. If unset, no unit will be rendered.  
     * For translation purposes, specify a function instead, because translations must be loaded first.
     */
    unit?: FeatUnit;
  } & FeatureFuncProps)
  | ({
    /** Uses a default `select` element. */
    type: "select";
    /**
     * Default value of the select input.  
     * - ⚠️ Must match the value of one of the options!
     */
    default: string | number;
    /**
     * Array of options to populate the select input with.  
     * For translation purposes, specify a function instead, because translations must be loaded first.
     */
    options: SelectOption[] | (() => SelectOption[]);
  } & FeatureFuncProps)
  | ({
    /** Uses the default `input[type="range"]` element. */
    type: "slider";
    /** Default value of the slider input. */
    default: number;
    /** Minimum allowed value. */
    min: number;
    /** Maximum allowed value. */
    max: number;
    /**
     * Granularity of the slider input. Defaults to 1.  
     * - ⚠️ Make sure this isn't set too fine, otherwise the slider thumb will become very hard to control.  
     *   In cases where more granularity is needed, consider using the "number" type instead.
     */
    step?: number;
    /**
     * String or function that returns a string to render the unit of measurement for the provided value. If unset, no unit will be rendered.  
     * For translation purposes, specify a function instead, because translations must be loaded first.
     */
    unit?: FeatUnit;
  } & FeatureFuncProps)
  | ({
    /** Custom hotkey input component using a `button` under the hood to enable and disable global keydown event listeners. */
    type: "hotkey";
    /** Default value of the hotkey input, as a {@linkcode HotkeyObj} object. */
    default: HotkeyObj;
  } & FeatureFuncProps)
  | ({
    /** Uses the default `input[type="text"]` element. */
    type: "text";
    /** Default value of the text input. */
    default: string;
    /**
     * Called to normalize the configured value before it gets saved.  
     * This can be used to, for example, trim whitespace from the value, enforce a certain letter case, validate the value and show an error toast, etc.
     */
    normalize?: (val: string) => string;
  } & FeatureFuncProps)
  | {
    /**
     * `button` with a loading state that disables the button while the provided click handler is running (until the returned Promise is resolved or rejected, or after a short delay).  
     * Use the translation keys `feature_btn.${featureKey}` to configure the button text, and `feature_btn.${featureKey}_running` for the button text while the click handler is running.
     */
    type: "button";
    /** The value is always `undefined` for buttons, meaning it gets stripped out when serializing. */
    default?: undefined;
    /**
     * Called when the button is clicked.  
     * If it returns a Promise, the button will only be re-enabled after it resolves or rejects.  
     * If the function is synchronous, the button will be re-enabled after a short artificial delay.
     */
    click: () => Promise<void | unknown> | void | unknown;
  }

/** Additional properties for "input-bearing" features (any except `button`), regardless of their type. */
export type FeatureFuncProps = {
  /**
   * Whether changing the feature requires a page reload to take effect.  
   * Prompts the user to reload the page when changing the feature value in the config menu.
   * - ⚠️ When setting this to true, also make sure to add the `reload` adornment to the `adornments` property.
   */
  reloadRequired?: boolean;
  /**
   * Called whenever the feature's value was changed.  
   * This is useful for features that need special active treatment to react to config changes instead of passively reading the config on demand.  
   * @param newVal The new value of the feature after the change. May sometimes be the same as `initialVal`, when the user changes the value back and forth.
   * @param initialVal The value of the feature when the feature configuration was *first loaded*. Effectively only updates when the session is reloaded.
   */
  change?: (newVal: FeatureConfigValue, initialVal: FeatureConfigValue) => void,
};

/** Any kind of adornment function used by the feature info list in `src/features/index.ts` to render icons in the config menu. */
export type AdornFunc =
  | ((...args: any[]) => (Promise<string | undefined> | string | undefined))
  | Promise<string | undefined>;

/** An array of adornment functions or a function that returns the array, used by the feature info list in `src/features/index.ts` to render icons in the config menu. */
export type FeatAdornments = AdornFunc[] | (() => AdornFunc[]);

/** An entry of the feature info list in `src/features/index.ts`, containing all information necessary to construct the config menu, manage the persistent data, and instantiate the feature. */
export type FeatureInfoEntry = {
    /** Feature category, see {@link FeatureCategory} */
    category: FeatureCategory;
    /**
     * Group name for related features - groups features together in the config menu.  
     * This is usually the name of the first feature or "main feature" but can be any string.  
     * - ⚠️ Don't reuse group names across multiple cateogories!
     */
    group: string;
    /** On which sites the feature is available. */
    supportedSites: Domain[];
    /** Semver version since when this feature was added. Responsible for showing the "new feature" icon in the config menu. */
    since: `${number}.${number}.${number}` | `${number}.${number}.${number}-${string}`;
    /**
     * String that may contain HTML that will be the help text for this feature.  
     * Specifying a function may be useful for pluralizing or inserting values into the translation at runtime.
     */
    helpText?: string | (() => string);
    /** Whether the value should be hidden in the config menu (when of type "text") and from plugins that don't have the `SeeHiddenConfigValues` intent granted. */
    valueHidden?: boolean;
    /** Transformation function that will be called before the value is rendered in the config menu, to modify it in fun ways. */
    renderValue?: (value: string) => string | Promise<string>;
    /**
     * Array of functions returning HTML strings that are prepended to the feature's text description in the config menu.  
     * For a list of available adornments, search for `const adornments` in `src/features/index.ts`.
     */
    adornments?: FeatAdornments;

    /** Whether to only show this feature when advanced mode is activated (default is false). */
    advanced?: boolean;
  }
  & FeatureTypeProps;

/**
 * The feature info object that contains all properties necessary to construct the config menu and the feature config object.  
 * All values are loosely typed so try to only use this via `const myObj = {} satisfies FeatureInfo;`  
 * For full type safety, use `typeof featInfo` (from `src/features/index.ts`) instead.
 */
export type FeatureInfo = Record<keyof FeatureConfig, FeatureInfoEntry>;

//#region feature config

/** Feature configuration object, as saved in memory and persistent storage */
export interface FeatureConfig {
  //#region general
  /** The locale to use for translations */
  locale: TrLocale;
  /** Whether to default to US-English if the translation for the set locale is missing */
  localeFallback: boolean;
  /** Whether to check for updates to the script */
  versionCheck: boolean;
  /** Button to check for updates */
  checkVersionNow: undefined;
  /** The console log level - 0 = Debug, 1 = Info */
  logLevel: LogLevel;
  /** Whether to log interface and site events to the console */
  logEvents: boolean;
  /** Whether to log HTTP requests sent via `GM.xmlHttpRequest` to the console */
  logHttp: boolean;
  /** Amount of seconds to show BYTM's toasts for */
  toastDuration: number;
  /** Whether to show a toast on generic errors */
  showToastOnGenericError: boolean;
  /** Amount of seconds until the feature initialization times out */
  initTimeout: number;
  /** Time in milliseconds between SelectorObserver checks - lower number = faster reaction to DOM changes but also more CPU usage */
  defaultObserverDebounce: number;
  /** Whether to show global alert messages and which ones to show */
  globalAlertMode: "never" | "all" | "importantOnly";
  /** Button that resets the config to the default state */
  resetConfig: undefined;
  /** Button to reset every DataStore instance to their default values */
  resetEverything: undefined;
  /** Whether to show advanced settings in the config menu */
  advancedMode: boolean;

  //#region layout
  /** Show a BetterYTM watermark under the YTM logo */
  watermarkEnabled: boolean;
  /** Remove the "si" tracking parameter from links in the share menu? */
  removeShareTrackingParam: boolean;
  /** On which sites to remove the "si" tracking parameter from links in the share menu */
  removeShareTrackingParamSites: SiteSelection;
  /** Fix spacing issues in the layout */
  fixSpacing: boolean;
  /** Whether to truncate the song title, artist name, album name, release year, and like/dislike ratio in the player bar using an ellipsis */
  truncatePlayerBarSubtitles: boolean;
  /** Where to show a thumbnail overlay over the video element and whether to show it at all */
  thumbnailOverlayBehavior: "never" | "videosOnly" | "songsOnly" | "always";
  /** Whether to show a button to toggle the thumbnail overlay in the media controls */
  thumbnailOverlayToggleBtnShown: boolean;
  /** Whether to show a duplicate of the thumbnail as the background of the thumbnail overlay, with a blur and dim effect */
  thumbnailOverlayBlurredDuplicateBackground: boolean;
  /** The width and height of the image fetched from the iTunes API */
  thumbnailOverlayITunesImgRes: number;
  /** For how long to cache the album art images fetched from the iTunes API */
  thumbnailOverlayAlbumArtCacheTTL: number;
  /** Maximum number of entries in the album art cache */
  thumbnailOverlayAlbumArtCacheMaxSize: number;
  /** Whether to show an indicator on the thumbnail overlay when it is active */
  thumbnailOverlayShowIndicator: boolean;
  /** The opacity of the thumbnail overlay indicator element */
  thumbnailOverlayIndicatorOpacity: number;
  /** Whether to prefer fetching iTunes album covers over YT thumbnails */
  thumbnailOverlayPreferredSource: "yt" | "am";
  /** Hide the cursor when it's idling on the video element for a while */
  hideCursorOnIdle: boolean;
  /** Delay in seconds after which the cursor should be hidden */
  hideCursorOnIdleDelay: number;
  /** When in fullscreen and the cursor is idling according to the `hideCursorOnIdle` feature, also hide the player bar */
  hidePlayerBarOnIdleInFullscreen: boolean;
  /** Whether to fix various issues in the layout when HDR is supported and active */
  fixHdrIssues: boolean;
  /** Whether to show the like/dislike ratio on the currently playing song */
  showVotes: boolean;
  /** Whether to swap the like and dislike buttons in the media controls */
  swapLikeDislikeButtons: boolean;
  /** Which format to use for the like/dislike ratio on the currently playing song */
  numbersFormat: NumberLengthFormat;
  /** Whether to remove all padding around the main content on the /watch page on YTM */
  watchPageFullSize: boolean;

  //#region songLists
  /** Add a button to each song in the queue to quickly open its lyrics page */
  lyricsQueueButton: boolean;
  /** Add a button to each song in the queue to quickly remove it */
  deleteFromQueueButton: boolean;
  /** Where to place the buttons in the queue */
  listButtonsPlacement: "currentQueue" | "genericLists" | "everywhere";
  /** Add a button above the queue to scroll to the currently playing song */
  scrollToActiveSongBtn: boolean;
  /** Add a button above the queue to clear it */
  clearQueueBtn: boolean;
  /** Whether the above queue button container should use sticky positioning */
  aboveQueueBtnsSticky: boolean;
  /** Add track numbers to each song list item */
  songListTrackNumbersEnabled: boolean;
  /** Where to add track numbers */
  songListTrackNumbers: "currentQueue" | "genericLists" | "everywhere";

  //#region lyrics
  /** Add a button to the media controls to open the current song's lyrics on genius.com in a new tab */
  geniusLyrics: boolean;
  /** Whether to show an error when no lyrics were found */
  errorOnLyricsNotFound: boolean;
  /** Base URL to use for GeniURL */
  geniUrlBase: string;
  /** Token to use for GeniURL */
  geniUrlToken: string;
  /** Max size of lyrics cache */
  lyricsCacheMaxSize: number;
  /** Max TTL of lyrics cache entries, in ms */
  lyricsCacheTTL: number;
  /** Button to clear lyrics cache */
  clearLyricsCache: undefined;

  //#region volume
  /** Use exponential scaling for the volume slider */
  volumeSliderExponential: "linear" | "x^2" | "x^3" | "x^4" | "x^5";
  /** Type of label to show on the volume slider when using exponential scaling */
  volumeSliderExponentialLabelType: "positionBased" | "valueBased" | "both";
  /** Add a percentage label to the volume slider */
  volumeSliderLabel: boolean;
  /** The width of the volume slider in pixels */
  volumeSliderSize: number;
  /** Volume slider sensitivity - the smaller this number, the finer the volume control */
  volumeSliderStep: number;
  /** Volume slider scroll wheel sensitivity */
  volumeSliderScrollStep: number;
  /** Whether the volume should be locked to the same level across all tabs (changing in one changes in all others too) */
  volumeSharedBetweenTabs: boolean;
  /** Whether to set an initial volume level for each new session */
  setInitialTabVolume: boolean;
  /** The initial volume level to set for each new session */
  initialTabVolumeLevel: number;

  //#region behavior
  /** Whether to completely disable the popup that sometimes appears before leaving the site */
  disableBeforeUnloadPopup: boolean;
  /** Whether to automatically close permanent toasts */
  autoCloseToasts: boolean;
  /** After how many seconds to close permanent toasts */
  closeToastsTimeout: number;
  /** Remember the last song's time when reloading or restoring the tab */
  rememberSongTime: boolean;
  /** Where to remember the song time */
  rememberSongTimeSites: SiteSelection;
  /** Time in seconds to remember the song time for */
  rememberSongTimeDuration: number;
  /** Time in seconds to subtract from the remembered song time */
  rememberSongTimeReduction: number;
  /** Minimum time in seconds the song needs to be played before it is remembered */
  rememberSongTimeMinPlayTime: number;
  /** When to automatically scroll to the active song in the queue */
  autoScrollToActiveSongMode: "never" | "initialPageLoad" | "videoChangeAll" | "videoChangeManual" | "videoChangeAuto";
  /** Whether to automatically click the "Yes" button on the "Are you still there?" popup */
  yesImStillThere: boolean;

  //#region autoLike
  /** Whether to auto-like all played videos of configured channels */
  autoLikeChannels: boolean;
  /** Whether to show toggle buttons on the channel page to enable/disable auto-liking for that channel */
  autoLikeChannelToggleBtn: boolean;
  // TODO:
  // /** Whether to show a toggle button in the media controls to enable/disable auto-liking for those channel(s) */
  // autoLikePlayerBarToggleBtn: boolean;
  /** How long to wait after a video has started playing to auto-like it */
  autoLikeTimeout: number;
  /** Whether to show a toast when a video is auto-liked */
  autoLikeShowToast: boolean;
  /** Opens the auto-like channels management dialog */
  autoLikeOpenMgmtDialog: undefined;

  //#region input
  /** Arrow keys to skip forwards and backwards and change volume */
  arrowKeySupport: boolean;
  /** By how many seconds to skip when pressing the left/right arrow keys */
  arrowKeySkipBy: number;
  /** By how much to change the volume when pressing the up/down arrow keys */
  arrowKeyVolumeStep: number;
  /** Use . and , keys to skip by a frame while the video is paused */
  frameSkip: boolean;
  /** Allow frame skipping while the song is playing */
  frameSkipWhilePlaying: boolean;
  /** Amount of seconds to skip when pressing the . and , keys */
  frameSkipAmount: number;
  /** Make it so middle clicking a song to open it in a new tab (through thumbnail and song title) is easier */
  anchorImprovements: boolean;
  /** Enable skipping to a specific time in the video by pressing a number key (0-9) */
  numKeysSkipToTime: boolean;
  /** Whether skipping to a specific time requires two key presses and in which time frame */
  numKeysSkipToTimeDoublePress: number;
  /** Whether there's a buffer for double pressing the number keys to skip to a specific time, and how long it is in seconds */
  numKeysSkipToTimeDoublePressBuffer: number;

  //#region hotkeys
  /** Add a hotkey to switch between the YT and YTM sites on a video/song */
  switchBetweenSites: boolean;
  /** The hotkey that needs to be pressed to initiate the site switch */
  switchSitesHotkey: HotkeyObj;
  /** The hotkey that initiates a site switch but opens it in a new tab instead of the current one */
  switchSitesNewTabHotkey: HotkeyObj;
  /** Add hotkeys for liking and disliking the current video/song */
  likeDislikeHotkeys: boolean;
  /** Whether the hotkeys should toggle the like/dislike buttons instead of only setting them */
  likeDislikeHotkeysToggle: boolean;
  /** The hotkey that needs to be pressed to like the current video/song */
  likeHotkey: HotkeyObj;
  /** The hotkey that needs to be pressed to dislike the current video/song */
  dislikeHotkey: HotkeyObj;
  /** Add a hotkey to open the current song's lyrics in a new tab */
  currentLyricsHotkeyEnabled: boolean;
  /** The hotkey that needs to be pressed to open the current song's lyrics in a new tab */
  currentLyricsHotkey: HotkeyObj;
  /** Add a hotkey to skip to the last remembered time of the current video/song */
  skipToRemTimeHotkeyEnabled: boolean;
  /** The hotkey that needs to be pressed to skip to the last remembered time of the current video/song */
  skipToRemTimeHotkey: HotkeyObj;
  /** Add a hotkey to focus the search bar on both pages */
  focusSearchBarHotkeyEnabled: boolean;
  /** The hotkey that needs to be pressed to focus the search bar */
  focusSearchBarHotkey: HotkeyObj;
  /** Add a hotkey to clear the search bar on both pages */
  clearSearchBarHotkeyEnabled: boolean;
  /** The hotkey that needs to be pressed to clear the search bar */
  clearSearchBarHotkey: HotkeyObj;
  /** Whether to rebind the next [J] and previous [K] keys */
  rebindNextAndPrevious: boolean;
  /** The hotkey that needs to be pressed to skip to the next video/song */
  nextHotkey: HotkeyObj;
  /** The hotkey that needs to be pressed to skip to the previous video/song */
  previousHotkey: HotkeyObj;
  /** Whether to rebind the play/pause hotkey */
  rebindPlayPause: boolean;
  /** The hotkey that needs to be pressed to play/pause the current video/song */
  playPauseHotkey: HotkeyObj;

  //#region integrations
  /** On which sites to disable Dark Reader - does nothing if the extension is not installed */
  disableDarkReaderSites: SiteSelectionOrNone;
  /** Whether to fix the styling of some elements from the SponsorBlock extension - does nothing if the extension is not installed */
  sponsorBlockIntegration: boolean;
  /** Whether to adjust styles so they look better when using the ThemeSong extension */
  themeSongIntegration: boolean;
  /** Lightness of the color used when ThemeSong is enabled */
  themeSongLightness: ColorLightnessPref;
  /** 0-100 value for how opaque the ThemeSong visualizer should be when it's enabled */
  themeSongVisualizerOpacity: number;
  /** Whether to add a hotkey to toggle the ThemeSong visualizer on and off */
  themeSongVisualizerHotkeyEnabled: boolean;
  /** The hotkey that needs to be pressed to toggle the ThemeSong visualizer on and off */
  themeSongVisualizerHotkey: HotkeyObj;
  /** Removes all thumbnail rating bars if the extension is installed */
  removeThumbnailRatingBar: boolean;

  //#region plugins
  /** Button that opens the plugin list dialog */
  openPluginList: undefined;
  /** Button that opens the plugin discovery site */
  openPluginDiscoverySite: undefined;
}
