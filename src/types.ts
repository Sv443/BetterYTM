import type { TrLocale, t, tp } from "./translations";
import type * as consts from "./constants";
import type { scriptInfo } from "./constants";
import type { addSelectorListener } from "./observers";
import type resources from "../assets/resources.json";
import type langMapping from "../assets/locales.json";
import type { getResourceUrl, getSessionId, getVideoTime } from "./utils";
import type { getFeatures, saveFeatures } from "./config";

/** Custom CLI args passed to rollup */
export interface RollupArgs {
  "config-mode"?: "development" | "production";
  "config-branch"?: "main" | "develop";
  "config-host"?: "greasyfork" | "github" | "openuserjs";
  "config-suffix"?: string;
}

// I know TS enums are impure but it doesn't really matter here, plus they look cooler
export enum LogLevel {
  Debug,
  Info,
}

/** Which domain this script is currently running on */
export type Domain = "yt" | "ytm";

/** A URL string that starts with "http://" or "https://" */
export type HttpUrlString = `http://${string}` | `https://${string}`;

/** Key of a resource in `assets/resources.json` and extra keys defined by `tools/post-build.ts` */
export type ResourceKey = keyof typeof resources | `tr-${keyof typeof langMapping}` | "changelog";

/** Describes a single hotkey */
export type HotkeyObj = {
  code: string,
  shift: boolean,
  ctrl: boolean,
  alt: boolean,
};

export type ObserverName = "body" | "playerBar" | "playerBarInfo";

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
  saveFeatures: typeof saveFeatures;
};

// shim for the BYTM interface properties
export type BytmObject =
  // properties defined and modified by BYTM at runtime
  {
    [key: string]: unknown;
    locale: TrLocale;
    logLevel: LogLevel;
  }
  // information from the userscript header
  & typeof scriptInfo
  // certain variables from `src/constants.ts`
  & Pick<typeof consts, "mode" | "branch">
  // global functions exposed through the interface in `src/interface.ts`
  & InterfaceFunctions
  // others
  & {
    // the entire UserUtils library
    UserUtils: typeof import("@sv443-network/userutils");
  };

declare global {
  interface Window {
    // to see the expanded type, install the VS Code extension "MylesMurphy.prettify-ts"
    // and hover over the "BytmObject" just below:
    BYTM: BytmObject;
  }
}

/** Feature configuration */
export interface FeatureConfig {
  //#SECTION layout
  /** Remove the \"Upgrade\" / YT Music Premium tab */
  removeUpgradeTab: boolean;
  /** Add a percentage label to the volume slider */
  volumeSliderLabel: boolean;
  /** The width of the volume slider in pixels */
  volumeSliderSize: number;
  /** Volume slider sensitivity - the smaller this number, the finer the volume control */
  volumeSliderStep: number;
  /** Volume slider scroll wheel sensitivity */
  volumeSliderScrollStep: number;
  /** Show a BetterYTM watermark under the YTM logo */
  watermarkEnabled: boolean;
  /** Remove the "si" tracking parameter from links in the share popup */
  removeShareTrackingParam: boolean;
  /** Enable skipping to a specific time in the video by pressing a number key (0-9) */
  numKeysSkipToTime: boolean;
  /** Fix spacing issues in the layout */
  fixSpacing: boolean;

  //#SECTION song lists
  /** Add a button to each song in the queue to quickly open its lyrics page */
  lyricsQueueButton: boolean;
  /** Add a button to each song in the queue to quickly remove it */
  deleteFromQueueButton: boolean;
  /** Where to place the buttons in the queue */
  listButtonsPlacement: "queueOnly" | "everywhere";
  /** Add a button to the queue to scroll to the currently playing song */
  scrollToActiveSongBtn: boolean;

  //#SECTION behavior
  /** Whether to completely disable the popup that sometimes appears before leaving the site */
  disableBeforeUnloadPopup: boolean;
  /** After how many milliseconds to close permanent toasts */
  closeToastsTimeout: number;
  /** Remember the last song's time when reloading or restoring the tab */
  rememberSongTime: boolean;
  /** Where to remember the song time */
  rememberSongTimeSites: Domain | "all";

  //#SECTION input
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

  //#SECTION lyrics
  /** Add a button to the media controls to open the current song's lyrics on genius.com in a new tab */
  geniusLyrics: boolean;

  //#SECTION misc
  /** The locale to use for translations */
  locale: TrLocale;
  /** Whether to check for updates to the script */
  versionCheck: boolean;
  /** The console log level - 0 = Debug, 1 = Info */
  logLevel: LogLevel;
}
