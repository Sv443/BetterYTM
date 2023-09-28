import type { TrLocale } from "./translations";

/** Env object passed to webpack.config.js */
export type WebpackEnv = Partial<{
  mode: "production" | "development",
}> & Record<"WEBPACK_BUNDLE" | "WEBPACK_BUILD", boolean>;

/** 0 = Debug, 1 = Info */
export type LogLevel = 0 | 1;

/** Which domain this script is currently running on */
export type Domain = "yt" | "ytm";

/** Feature configuration */
export interface FeatureConfig {
  //#SECTION input
  /** Arrow keys skip forwards and backwards by 10 seconds */
  arrowKeySupport: boolean;
  /** Add F9 as a hotkey to switch between the YT and YTM sites on a video / song */
  switchBetweenSites: boolean;
  /** The hotkey that needs to be pressed to initiate the site switch */
  switchSitesHotkey: {
    key: string;
    shift: boolean;
    ctrl: boolean;
    meta: boolean;
  };
  /** Whether to completely disable the popup that sometimes appears before leaving the site */
  disableBeforeUnloadPopup: boolean;
  /** Make it so middle clicking a song to open it in a new tab (through thumbnail and song title) is easier */
  anchorImprovements: boolean;

  //#SECTION layout
  /** Remove the \"Upgrade\" / YT Music Premium tab */
  removeUpgradeTab: boolean;
  /** Add a percentage label to the volume slider */
  volumeSliderLabel: boolean;
  /** The width of the volume slider in pixels */
  volumeSliderSize: number;
  /** Volume slider sensitivity - the smaller this number, the finer the volume control */
  volumeSliderStep: number;
  /** Show a BetterYTM watermark under the YTM logo */
  watermarkEnabled: boolean;
  /** Add a button to each song in the queue to quickly remove it */
  deleteFromQueueButton: boolean;
  /** After how many milliseconds to close permanent toasts */
  closeToastsTimeout: number;
  /** Remove the "si" tracking parameter from links in the share popup */
  removeShareTrackingParam: boolean;
  /** Enable skipping to a specific time in the video by pressing a number key (0-9) */
  numKeysSkipToTime: boolean;
  /** Fix spacing issues in the layout */
  fixSpacing: boolean;
  /** Add a button to the queue to scroll to the currently playing song */
  scrollToActiveSongBtn: boolean;
  /** Add a button to the media controls to boost the current song's gain */
  boostGain: boolean;
  /** Remember the last song's time when reloading or restoring the tab */
  rememberSongTime: boolean;

  //#SECTION lyrics
  /** Add a button to the media controls to open the current song's lyrics on genius.com in a new tab */
  geniusLyrics: boolean;
  /** Add a button to each song in the queue to quickly open its lyrics page */
  lyricsQueueButton: boolean;

  //#SECTION misc
  /** The locale to use for translations */
  locale: TrLocale;
  /** The console log level - 0 = Debug, 1 = Info */
  logLevel: LogLevel;
}
