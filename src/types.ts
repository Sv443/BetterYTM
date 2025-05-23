import type { LooseUnion, NanoEmitter, Prettify } from "@sv443-network/userutils";
import type * as consts from "./constants.js";
import type { scriptInfo } from "./constants.js";
import type { addSelectorListener } from "./observers.js";
import type { getResourceUrl, getSessionId, getVideoTime, TrLocale, t, tp, fetchVideoVotes, onInteraction, getThumbnailUrl, getBestThumbnailUrl, getLocale, hasKey, hasKeyFor, getDomain, waitVideoElementReady, setInnerHtml, getCurrentMediaType, tl, tlp, formatNumber, getVideoElement, getVideoSelector, reloadTab, getLikeDislikeBtns, fetchITunesAlbumInfo } from "./utils/index.js";
import type { SiteEventsMap } from "./siteEvents.js";
import type { InterfaceEventsMap, getAutoLikeDataInterface, getFeaturesInterface, getPluginInfo, saveAutoLikeDataInterface, saveFeaturesInterface, setLocaleInterface } from "./interface.js";
import type { fetchLyricsUrlTop, sanitizeArtists, sanitizeSong } from "./features/lyrics.js";
import type { getLyricsCacheEntry } from "./features/lyricsCache.js";
import type { isIgnoredInputElement } from "./features/input.js";
import type { showPrompt } from "./dialogs/prompt.js";
import type { BytmDialog } from "./components/BytmDialog.js";
import type { ExImDialog } from "./components/ExImDialog.js";
import type { createHotkeyInput } from "./components/hotkeyInput.js";
import type { createToggleInput } from "./components/toggleInput.js";
import type { createCircularBtn } from "./components/circularButton.js";
import type { createRipple } from "./components/ripple.js";
import type { showIconToast, showToast } from "./components/toast.js";
import resources from "../assets/resources.json" with { type: "json" };
import locales from "../assets/locales.json" with { type: "json" };

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
}>;

// I know TS enums are impure but it doesn't really matter here, plus imo they are cooler than pure enums anyway
export enum LogLevel {
  Debug,
  Info,
}

/** Which domain this script is currently running on */
export type Domain = "yt" | "ytm";

/** A selection option between one of the supported domains, or all of them */
export type SiteSelection = Domain | "all";

/** A selection option between one of the supported domains, or none of them */
export type SiteSelectionOrNone = SiteSelection | "none";

/** Key of a resource in `assets/resources.json` and extra keys defined by `tools/post-build.ts` */
export type ResourceKey = keyof typeof resources["resources"] | `trans-${keyof typeof locales}`;

/** Key of a CSS resource in `assets/resources.json` */
export type StyleResourceKey = ResourceKey & `css-${string}`;

/** Describes a single hotkey */
export type HotkeyObj = {
  code: string,
  shift: boolean,
  ctrl: boolean,
  alt: boolean,
};

export type LyricsCacheEntry = {
  artist: string;
  song: string;
  url: string;
  viewed: number;
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

export type RYDVotesObj = {
  /** The watch ID of the video */
  id: string;
  /** ISO timestamp of when the video was uploaded */
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

export type VideoVotesObj = {
  /** The watch ID of the video */
  id: string;
  /** Amount of likes */
  likes: number;
  /** Amount of dislikes */
  dislikes: number;
  /** Like to dislike ratio from 0.0 to 5.0 */
  rating: number;
  /** Timestamp of when the data was fetched */
  timestamp: number;
};

/** Response from the Apple Music / iTunes API endpoint at `https://itunes.apple.com/search?country=us&limit=5&entity=album&term=$ARTIST%20$SONG` */
export type ITunesAPIResponse = {
  resultCount: number;
  results: ITunesAlbumObj[];
};

/** One album object returned by the iTunes API */
export type ITunesAlbumObj = Prettify<{
  wrapperType: LooseUnion<"collection">;
  collectionType: LooseUnion<"Album">;
  artistId: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: `https://music.apple.com/us/artist/${string}/${number}?uo=${number}`;
  collectionViewUrl: `https://music.apple.com/us/album/${string}/${number}?uo=${number}`;
  artworkUrl60: `https://${string}.mzstatic.com/image/thumb/${string}/${number}x${number}bb.jpg`;
  artworkUrl100: `https://${string}.mzstatic.com/image/thumb/${string}/${number}x${number}bb.jpg`;
  collectionPrice: number;
  collectionExplicitness: LooseUnion<"explicit" | "notExplicit" | "cleaned">;
  contentAdvisoryRating?: LooseUnion<"Explicit" | "Clean">;
  trackCount: number;
  copyright: string;
  country: LooseUnion<"USA">;
  currency: LooseUnion<"USD">;
  releaseDate: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
  primaryGenreName: string;
}>;

export type NumberLengthFormat = "short" | "long";

export type ColorLightnessPref = "darker" | "normal" | "lighter";

export type LikeDislikeState = "LIKE" | "DISLIKE" | "INDIFFERENT";

//#region utility

/** Returns a union of all keys of {@linkcode T} whose values are of type {@linkcode U} */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T];

//#region global

/** All properties of the `unsafeWindow.BYTM` object (also called "plugin interface") */
export type BytmObject =
  {
    [key: string]: unknown;
    locale: TrLocale;
    logLevel: LogLevel;
  }
  // information from the userscript header
  & typeof scriptInfo
  // certain variables from `src/constants.ts`
  & Pick<typeof consts, "mode" | "branch" | "host" | "buildNumber" | "initialParams" | "compressionFormat" | "sessionStorageAvailable" | "scriptInfo">
  // global functions exposed through the interface in `src/interface.ts`
  & InterfaceFunctions
  // others
  & {
    NanoEmitter: NanoEmitter;
    BytmDialog: typeof BytmDialog;
    ExImDialog: typeof ExImDialog;
    // the entire UserUtils library
    UserUtils: typeof import("@sv443-network/userutils");
    // the entire compare-versions library
    compareVersions: typeof import("compare-versions");
  };

export type TTPolicy = {
  createHTML: (dirty: string) => string;
};

declare global {
  interface Window {
    // to see the expanded type, install the VS Code extension "MylesMurphy.prettify-ts" and hover over the property below
    // alternatively navigate with ctrl+click to find the types
    BYTM: BytmObject;
    // polyfill for the new Trusted Types API
    trustedTypes: {
      createPolicy(name: string, policy: TTPolicy): TTPolicy;
    };
  }
}

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
}

/** Result of a plugin registration */
export type PluginRegisterResult = {
  /** Public info about the registered plugin */
  info: PluginInfo;
  /** NanoEmitter instance for plugin events - see {@linkcode PluginEventMap} for a list of events */
  events: NanoEmitter<PluginEventMap>;
  /** Authentication token for the plugin to use in certain restricted function calls */
  token: string;
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
    license?: {
      /** License name */
      name: string;
      /** URL to the license text */
      url: string;
    };
    /** Homepage URLs for the plugin */
    homepage: {
      /** URL to the plugin's source code (i.e. Git repo) - closed source plugins are not officially accepted at the moment. */
      source: string;
      /** Any other homepage URL */
      other?: string;
      /** URL to the plugin's bug tracker page, like GitHub issues */
      bug?: string;
      /** URL to the plugin's GreasyFork page */
      greasyfork?: string;
      /** URL to the plugin's OpenUserJS page */
      openuserjs?: string;
    };
  };
  /** Intents (permissions) BYTM has to grant the plugin for it to work - use bitwise OR to combine multiple intents */
  intents?: number;
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
    /** Emitted when the plugin is fully registered on BYTM's side and can use authenticated API calls */
    pluginRegistered: (info: PluginInfo) => void;
  }
  // These are emitted on every plugin simultaneously, with the same or similar data:
  & SiteEventsMap
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
  /** Fetches the iTunes album info objects for the given artist and album names */
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
  showPrompt: typeof showPrompt;

  // other:
  /** Formats a number to a string using the configured locale and configured or passed number notation */
  formatNumber: typeof formatNumber;
};

//#region feature defs

/** Feature identifier key */
export type FeatureKey = keyof FeatureConfig;

/** Union of all feature identifier keys, where the value is of the specified type {@linkcode TType} */
export type FeatKeysOfType<TType> = KeysOfType<FeatureConfig, TType>;

/** Feature category identifier */
export type FeatureCategory =
  | "layout"
  | "volume"
  | "songLists"
  | "behavior"
  | "input"
  | "autoLike"
  | "hotkeys"
  | "lyrics"
  | "integrations"
  | "plugins"
  | "general";

type SelectOption = {
  value: string | number;
  label: string;
};

type FeatureTypeProps = ({
    type: "toggle";
    default: boolean;
  } & FeatureFuncProps)
  | ({
    type: "number";
    default: number;
    min: number;
    max?: number;
    step?: number;
    unit?: string | ((val: number) => string);
  } & FeatureFuncProps)
  | ({
    type: "select";
    default: string | number;
    options: SelectOption[] | (() => SelectOption[]);
  } & FeatureFuncProps)
  | ({
    type: "slider";
    default: number;
    min: number;
    max: number;
    step?: number;
    unit?: string | ((val: number) => string);
  } & FeatureFuncProps)
  | ({
    type: "hotkey";
    default: HotkeyObj;
  } & FeatureFuncProps)
  | ({
    type: "text";
    default: string;
    normalize?: (val: string) => string;
  } & FeatureFuncProps)
  | {
    type: "button";
    default?: undefined;
    click: () => Promise<void | unknown> | void | unknown;
  }

type FeatureFuncProps = (
  {
    /** Whether the feature requires a page reload to take effect */
    reloadRequired: false;
    /** Called to instantiate the feature on the page */
    enable: (featCfg: FeatureConfig) => void,
  }
  | {
    /** Whether the feature requires a page reload to take effect */
    reloadRequired?: true;
    /** Called to instantiate the feature on the page */
    enable?: undefined;
  }
) & (
  {
    /** Called to remove all traces of the feature from the page and memory (includes event listeners) */
    disable?: (feats: FeatureConfig) => void,
  }
  | {
    /** Called to update the feature's behavior when the config changes */
    change?: (key: FeatureKey, initialVal: number | boolean | Record<string, unknown>, newVal: number | boolean | Record<string, unknown>) => void,
  }
);

/**
 * The feature info object that contains all properties necessary to construct the config menu and the feature config object.  
 * All values are loosely typed so try to only use this via `const myObj = {} satisfies FeatureInfo;`  
 * For full type safety, use `typeof featInfo` (from `src/features/index.ts`) instead.
 */
export type FeatureInfo = Record<
  keyof FeatureConfig,
  {
    /** Feature category */
    category: FeatureCategory;
    /** On which sites the feature is available */
    supportedSites: Domain[];
    /**
     * HTML string that will be the help text for this feature  
     * Specifying a function is useful for pluralizing or inserting values into the translation at runtime
     */
    helpText?: string | (() => string);
    /** Whether the value should be hidden in the config menu and from plugins */
    valueHidden?: boolean;
    /** Transformation function called before the value is rendered in the config menu */
    renderValue?: (value: string) => string | Promise<string>;
    /** HTML string that is prepended to the feature's text description */
    textAdornment?: () => (Promise<string | undefined> | string | undefined);

    /** Whether to only show this feature when advanced mode is activated (default false) */
    advanced?: boolean;
  }
  & FeatureTypeProps
>;

//#region feature config

/** Feature configuration object, as saved in memory and persistent storage */
export interface FeatureConfig {
  //#region layout
  /** Show a BetterYTM watermark under the YTM logo */
  watermarkEnabled: boolean;
  /** Remove the "si" tracking parameter from links in the share menu? */
  removeShareTrackingParam: boolean;
  /** On which sites to remove the "si" tracking parameter from links in the share menu */
  removeShareTrackingParamSites: SiteSelection;
  /** Enable skipping to a specific time in the video by pressing a number key (0-9) */
  numKeysSkipToTime: boolean;
  /** Fix spacing issues in the layout */
  fixSpacing: boolean;
  /** Where to show a thumbnail overlay over the video element and whether to show it at all */
  thumbnailOverlayBehavior: "never" | "videosOnly" | "songsOnly" | "always";
  /** Whether to show a button to toggle the thumbnail overlay in the media controls */
  thumbnailOverlayToggleBtnShown: boolean;
  /** The width and height of the image fetched from the iTunes API */
  thumbnailOverlayITunesImgRes: number;
  /** Whether to show an indicator on the thumbnail overlay when it is active */
  thumbnailOverlayShowIndicator: boolean;
  /** The opacity of the thumbnail overlay indicator element */
  thumbnailOverlayIndicatorOpacity: number;
  /** Hide the cursor when it's idling on the video element for a while */
  hideCursorOnIdle: boolean;
  /** Delay in seconds after which the cursor should be hidden */
  hideCursorOnIdleDelay: number;
  /** Whether to fix various issues in the layout when HDR is supported and active */
  fixHdrIssues: boolean;
  /** Whether to show the like/dislike ratio on the currently playing song */
  showVotes: boolean;
  /** Which format to use for the like/dislike ratio on the currently playing song */
  numbersFormat: NumberLengthFormat;
  /** Whether to remove all padding around the main content on the /watch page on YTM */
  watchPageFullSize: boolean;

  //#region volume
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

  //#region song lists
  /** Add a button to each song in the queue to quickly open its lyrics page */
  lyricsQueueButton: boolean;
  /** Add a button to each song in the queue to quickly remove it */
  deleteFromQueueButton: boolean;
  /** Where to place the buttons in the queue */
  listButtonsPlacement: "queueOnly" | "everywhere";
  /** Add a button above the queue to scroll to the currently playing song */
  scrollToActiveSongBtn: boolean;
  /** Add a button above the queue to clear it */
  clearQueueBtn: boolean;

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
  /** Whether the above queue button container should use sticky positioning */
  aboveQueueBtnsSticky: boolean;
  /** When to automatically scroll to the active song in the queue */
  autoScrollToActiveSongMode: "never" | "initialPageLoad" | "videoChangeAll" | "videoChangeManual" | "videoChangeAuto";

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

  //#region auto-like
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

  //#region hotkeys
  /** Add a hotkey to switch between the YT and YTM sites on a video/song */
  switchBetweenSites: boolean;
  /** The hotkey that needs to be pressed to initiate the site switch */
  switchSitesHotkey: HotkeyObj;
  /** Add hotkeys for liking and disliking the current video/song */
  likeDislikeHotkeys: boolean;
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
  // /** Whether to use advanced filtering when searching for lyrics (exact, exact-ish) */
  // advancedLyricsFilter: boolean;

  //#region integrations
  /** On which sites to disable Dark Reader - does nothing if the extension is not installed */
  disableDarkReaderSites: SiteSelectionOrNone;
  /** Whether to fix the styling of some elements from the SponsorBlock extension - does nothing if the extension is not installed */
  sponsorBlockIntegration: boolean;
  /** Whether to adjust styles so they look better when using the ThemeSong extension */
  themeSongIntegration: boolean;
  /** Lightness of the color used when ThemeSong is enabled */
  themeSongLightness: ColorLightnessPref;

  //#region plugins
  /** Button that opens the plugin list dialog */
  openPluginList: undefined;

  //#region misc
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
  /** Amount of seconds to show BYTM's toasts for */
  toastDuration: number;
  /** Whether to show a toast on generic errors */
  showToastOnGenericError: boolean;
  /** Amount of seconds until the feature initialization times out */
  initTimeout: number;
  /** Button that resets the config to the default state */
  resetConfig: undefined;
  /** Button to reset every DataStore instance to their default values */
  resetEverything: undefined;
  /** Whether to show advanced settings in the config menu */
  advancedMode: boolean;
}
