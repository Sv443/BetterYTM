import type * as consts from "./constants.js";
import type { scriptInfo } from "./constants.js";
import type { addSelectorListener } from "./observers.js";
import type resources from "../assets/resources.json";
import type locales from "../assets/locales.json";
import type { getResourceUrl, getSessionId, getVideoTime, TrLocale, t, tp, NanoEmitter } from "./utils/index.js";
import type { getFeatures, setFeatures } from "./config.js";
import type { SiteEventsMap } from "./siteEvents.js";
import type { InterfaceEventsMap } from "./interface.js";

/** Custom CLI args passed to rollup */
export type RollupArgs = Partial<{
  "config-mode": "development" | "production";
  "config-branch": "main" | "develop";
  "config-host": "greasyfork" | "github" | "openuserjs";
  "config-assetSource": "local" | "github";
  "config-suffix": string;
}>;

// I know TS enums are impure but it doesn't really matter here, plus they look cooler
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
export type ResourceKey = keyof typeof resources | `trans-${keyof typeof locales}` | "changelog" | "css-bundle";

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

//#region global

// shim for the BYTM interface properties
export type BytmObject =
  {
    [key: string]: unknown;
    locale: TrLocale;
    logLevel: LogLevel;
  }
  // information from the userscript header
  & typeof scriptInfo
  // certain variables from `src/constants.ts`
  & Pick<typeof consts, "mode" | "branch" | "host" | "buildNumber" | "compressionFormat">
  // global functions exposed through the interface in `src/interface.ts`
  & InterfaceFunctions
  // others
  & {
    // the entire UserUtils library
    UserUtils: typeof import("@sv443-network/userutils");
  };

declare global {
  interface Window {
    // to see the expanded type, install the VS Code extension "MylesMurphy.prettify-ts" and hover over the property below
    // alternatively navigate with ctrl+click to find the types
    BYTM: BytmObject;
  }
}

//#region plugins

/**
 * Intents (permissions) BYTM has to grant your plugin for it to be able to access certain features.  
 * TODO: this feature is unfinished, but you should still specify the intents your plugin needs.  
 * Never request more permissions than you need, as this is a bad practice and can lead to your plugin being rejected.
 */
export enum PluginIntent {
  /** Plugin has access to hidden config values */
  HiddenConfigValues = 1,
  /** Plugin can write to the feature configuration */
  WriteFeatureConfig = 2,
  /** Plugin can write to the lyrics cache */
  WriteLyricsCache = 4,
  /** Plugin can add new translations and overwrite existing ones */
  WriteTranslations = 8,
  /** Plugin can create modal dialogs */
  CreateModalDialogs = 16,
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
     * Descriptions of at least en_US and optionally any other locale supported by BYTM.  
     * When an untranslated locale is set, the description will default to the value of en_US
     */
    description: Partial<Record<keyof typeof locales, string>> & {
      en_US: string;
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
      /** Any other homepage URL */
      other?: string;
      /** URL to the plugin's source code (i.e. Git repo) - closed source plugins are not officially accepted at the moment. */
      source: string;
      /** URL to the plugin's bug tracker page, like GitHub issues */
      bug?: string;
      /** URL to the plugin's GreasyFork page */
      greasyfork?: string;
      /** URL to the plugin's OpenUserJS page */
      openuserjs?: string;
    };
  };
  /** Intents (permissions) BYTM has to grant the plugin for it to work */
  intents?: Array<PluginIntent>;
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
  // Emitted on each plugin individually:
  & {
    /** Emitted when the plugin is registered on BYTM's side */
    pluginRegistered: (info: PluginInfo) => void;
  }
  // Emitted on every plugin simultaneously:
  & SiteEventsMap
  & InterfaceEventsMap;

/** A plugin in either the queue or registered map */
export type PluginItem = 
  & {
    def: PluginDef;
  }
  & Pick<PluginRegisterResult, "events">;

/** All functions exposed by the interface on the global `BYTM` object */
export type InterfaceFunctions = {
  /** Adds a listener to one of the already present SelectorObserver instances */
  addSelectorListener: typeof addSelectorListener;
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
  /**
   * Returns the current video time (on both YT and YTM)  
   * In case it can't be determined on YT, mouse movement is simulated to bring up the video time  
   * In order for that edge case not to error out, the function would need to be called in response to a user interaction event (e.g. click) due to the strict autoplay policy in browsers
   */
  getVideoTime: typeof getVideoTime;
  /** Returns the translation for the provided translation key and set locale (check the files in the folder `assets/translations`) */
  t: typeof t;
  /** Returns the translation for the provided translation key, including pluralization identifier and set locale (check the files in the folder `assets/translations`) */
  tp: typeof tp;
  /** Returns the current feature configuration */
  getFeatures: typeof getFeatures;
  /** Overwrites the feature configuration with the provided one */
  saveFeatures: typeof setFeatures;
};

//#region features

export type FeatureKey = keyof FeatureConfig;

export type FeatureCategory =
  | "layout"
  | "volume"
  | "songLists"
  | "behavior"
  | "input"
  | "lyrics"
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
 * All values are loosely typed so try to only use this with the `satisfies` keyword.  
 * Use `typeof featInfo` (from `src/features/index.ts`) instead for full type safety.
 */
export type FeatureInfo = Record<
  keyof FeatureConfig,
  {
    category: FeatureCategory;
    /**
     * HTML string that will be the help text for this feature  
     * Specifying a function is useful for pluralizing or inserting values into the translation at runtime
     */
    helpText?: string | (() => string);
    /** Whether the value should be hidden in the config menu and from plugins */
    valueHidden?: boolean;
    /** Transformation function called before the value is rendered in the config menu */
    renderValue?: (value: string) => string | Promise<string>;
    /** HTML string that is appended to the end of a feature's text description */
    textAdornment?: () => (Promise<string | undefined> | string | undefined);

    /** Whether to only show this feature when advanced mode is activated (default false) */
    advanced?: boolean;
  }
  & FeatureTypeProps
>;

/** Feature configuration */
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
  /** Remove the \"Upgrade\" / YT Music Premium tab */
  removeUpgradeTab: boolean;
  /** Where to show a thumbnail overlay over the video element and whether to show it at all */
  thumbnailOverlayBehavior: "never" | "videosOnly" | "songsOnly" | "always";
  /** Whether to show a button to toggle the thumbnail overlay in the media controls */
  thumbnailOverlayToggleBtnShown: boolean;
  /** Whether to show an indicator on the thumbnail overlay when it is active */
  thumbnailOverlayShowIndicator: boolean;
  /** The opacity of the thumbnail overlay indicator element */
  thumbnailOverlayIndicatorOpacity: number;
  /** How to fit the thumbnail overlay image */
  thumbnailOverlayImageFit: "cover" | "contain" | "fill";
  /** Hide the cursor when it's idling on the video element for a while */
  hideCursorOnIdle: boolean;
  /** Delay in seconds after which the cursor should be hidden */
  hideCursorOnIdleDelay: number;
  /** Whether to fix various issues in the layout when HDR is supported and active */
  fixHdrIssues: boolean;
  /** On which sites to disable Dark Reader - does nothing if the extension is not installed */
  disableDarkReaderSites: SiteSelectionOrNone;

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
  /** After how many milliseconds to close permanent toasts */
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

  //#region input
  /** Arrow keys skip forwards and backwards */
  arrowKeySupport: boolean;
  /** By how many seconds to skip when pressing the arrow keys */
  arrowKeySkipBy: number;
  /** Add a hotkey to switch between the YT and YTM sites on a video / song */
  switchBetweenSites: boolean;
  /** The hotkey that needs to be pressed to initiate the site switch */
  switchSitesHotkey: HotkeyObj;
  /** Make it so middle clicking a song to open it in a new tab (through thumbnail and song title) is easier */
  anchorImprovements: boolean;
  /** Whether to auto-like all played videos of configured channels */
  autoLikeChannels: boolean;
  /** Whether to show toggle buttons on the channel page to enable/disable auto-liking for that channel */
  autoLikeChannelToggleBtn: boolean;
  /** Whether to show a toggle button in the media controls to enable/disable auto-liking for those channel(s) */
  autoLikePlayerBarToggleBtn: boolean;
  /** How long to wait after a video has started playing to auto-like it */
  autoLikeTimeout: number;
  /** Whether to show a toast when a video is auto-liked */
  autoLikeShowToast: boolean;
  /** Opens the auto-like channels management dialog */
  autoLikeOpenMgmtDialog: undefined;

  //#region lyrics
  /** Add a button to the media controls to open the current song's lyrics on genius.com in a new tab */
  geniusLyrics: boolean;
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
  /** Whether to use advanced filtering when searching for lyrics (exact, exact-ish) */
  advancedLyricsFilter: boolean;

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
  /** Amount of seconds until the feature initialization times out */
  initTimeout: number;
  /** Amount of seconds to show BYTM's toasts for */
  toastDuration: number;
  /** Button that resets the config to the default state */
  resetConfig: undefined;
  /** Whether to show advanced settings in the config menu */
  advancedMode: boolean;
}
