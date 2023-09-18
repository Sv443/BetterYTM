import { scriptInfo } from "../constants";

export * from "./input";
export * from "./layout";
export * from "./lyrics";
export { initMenu } from "../menu/menu";
export * from "../menu/menu_old";

/** Union of all feature keys */
export type FeatInfoKey = keyof typeof featInfo;

/** Union of all feature categories */
export type FeatureCategory = typeof featInfo[FeatInfoKey]["category"];

/** Mapping of feature category identifiers to readable strings */
export const categoryNames: Record<FeatureCategory, string> = {
  input: "Input",
  layout: "Layout",
  lyrics: "Lyrics",
  misc: "Other",
} as const;

/** Contains all possible features with their default values and other configuration */
export const featInfo = {
  //#SECTION layout
  removeUpgradeTab: {
    desc: "Remove the Upgrade / Premium tab",
    type: "toggle",
    category: "layout",
    default: true,
  },
  volumeSliderLabel: {
    desc: "Add a percentage label next to the volume slider",
    type: "toggle",
    category: "layout",
    default: true,
  },
  volumeSliderSize: {
    desc: "The width of the volume slider in pixels",
    type: "number",
    category: "layout",
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
  },
  volumeSliderStep: {
    desc: "Volume slider sensitivity (by how little percent the volume can be changed at a time)",
    type: "slider",
    category: "layout",
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
  },
  watermarkEnabled: {
    desc: `Show a ${scriptInfo.name} watermark under the site logo that opens this config menu`,
    type: "toggle",
    category: "layout",
    default: true,
  },
  deleteFromQueueButton: {
    desc: "Add a button to each song in the queue to quickly remove it",
    type: "toggle",
    category: "layout",
    default: true,
  },
  closeToastsTimeout: {
    desc: "After how many seconds to close permanent notifications - 0 to only close them manually (default behavior)",
    type: "number",
    category: "layout",
    min: 0,
    max: 30,
    step: 0.5,
    default: 0,
    unit: "s",
  },
  removeShareTrackingParam: {
    desc: "Remove the tracking parameter (&si=...) from links in the share popup",
    type: "toggle",
    category: "layout",
    default: true,
  },
  fixSpacing: {
    desc: "Fix spacing issues in the layout",
    type: "toggle",
    category: "layout",
    default: true,
  },
  scrollToActiveSongBtn: {
    desc: "Add a button to the queue to scroll to the currently playing song",
    type: "toggle",
    category: "layout",
    default: true,
  },

  //#SECTION input
  arrowKeySupport: {
    desc: "Use arrow keys to skip forwards and backwards by 10 seconds",
    type: "toggle",
    category: "input",
    default: true,
  },
  switchBetweenSites: {
    desc: "Add F9 as a hotkey to switch between the YT and YTM sites on a video / song",
    type: "toggle",
    category: "input",
    default: true,
  },
  switchSitesHotkey: {
    hidden: true,
    desc: "TODO(v1.1): Which hotkey needs to be pressed to switch sites?",
    type: "hotkey",
    category: "input",
    default: {
      key: "F9",
      shift: false,
      ctrl: false,
      meta: false,
    },
  },
  disableBeforeUnloadPopup: {
    desc: "Prevent the confirmation popup that appears when trying to leave the site while a song is playing",
    type: "toggle",
    category: "input",
    default: false,
  },
  anchorImprovements: {
    desc: "Add and improve links all over the page so things can be opened in a new tab easier",
    type: "toggle",
    category: "input",
    default: true,
  },
  numKeysSkipToTime: {
    desc: "Enable skipping to a specific time in the video by pressing a number key (0-9)",
    type: "toggle",
    category: "input",
    default: true,
  },

  //#SECTION lyrics
  geniusLyrics: {
    desc: "Add a button to the media controls of the currently playing song to open its lyrics on genius.com",
    type: "toggle",
    category: "lyrics",
    default: true,
  },
  lyricsQueueButton: {
    desc: "Add a button to each song in the queue to quickly open its lyrics page",
    type: "toggle",
    category: "lyrics",
    default: true,
  },

  //#SECTION misc
  logLevel: {
    desc: "How much information to log to the console",
    type: "select",
    category: "misc",
    options: [
      { value: 0, label: "Debug (most)" },
      { value: 1, label: "Info (only important)" },
    ],
    default: 1,
  },
} as const;
