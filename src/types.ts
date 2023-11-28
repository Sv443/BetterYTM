import type { TrLocale } from "./translations";
import type * as consts from "./constants";
import type { scriptInfo } from "./constants";
import type resources from "../assets/resources.json";
import type langMapping from "../assets/locales.json";

/** Env object passed to webpack.config.js */
export type WebpackEnv = Partial<{
  mode: "production" | "development",
}> & Record<"WEBPACK_BUNDLE" | "WEBPACK_BUILD", boolean>;

export enum LogLevel {
  Debug = 0,
  Info = 1,
}

/** Which domain this script is currently running on */
export type Domain = "yt" | "ytm";

/** Key of a resource in `assets/resources.json` and extra keys defined by `tools/post-build.ts` */
export type ResourceKey = keyof typeof resources | `tr-${keyof typeof langMapping}` | "changelog";

/** Describes a single hotkey */
export type HotkeyObj = {
  code: string,
  shift: boolean,
  ctrl: boolean,
  alt: boolean,
};

declare global {
  interface Window {
    BYTM: {
      [key: string]: unknown;
      locale: TrLocale;
      logLevel: LogLevel;
    }
    & typeof scriptInfo
    & Pick<typeof consts, "mode" | "branch">;
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
  /** The console log level - 0 = Debug, 1 = Info */
  logLevel: LogLevel;
}
