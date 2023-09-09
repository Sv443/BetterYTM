import { scriptInfo } from "../constants";

export * from "./input";
export * from "./layout";
export * from "./lyrics";
export { initMenu } from "./menu/menu";
export * from "./menu/menu_old";

export type FeatInfoKeys = keyof typeof featInfo;

/** Contains all possible features with their default values and other config */
export const featInfo = {
  //#SECTION input
  arrowKeySupport: {
    desc: "Arrow keys to skip forwards and backwards by 10 seconds",
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
    desc: "TODO(v1.1): Which hotkey needs to be pressed to switch sites?",
    type: "hotkey",
    category: "input",
    default: {
      key: "F9",
      shift: false,
      ctrl: false,
      meta: false,
    },
    hidden: true,
  },
  disableBeforeUnloadPopup: {
    desc: "Disable the confirmation popup that sometimes appears when trying to leave the site",
    type: "toggle",
    category: "input",
    default: false,
  },
  anchorImprovements: {
    desc: "TODO:FIXME: Add link elements all over the page so things can be opened in a new tab easier",
    type: "toggle",
    category: "input",
    default: true,
  },

  //#SECTION layout
  removeUpgradeTab: {
    desc: "Remove the Upgrade / Premium tab",
    type: "toggle",
    category: "layout",
    default: true,
  },
  volumeSliderLabel: {
    desc: "Add a percentage label to the volume slider",
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
  // TODO(v1.1): Make each button configurable
  queueButtons: {
    desc: "Add buttons to each song in the queue to quickly open their lyrics or remove them from the queue",
    type: "toggle",
    category: "layout",
    default: true,
  },
  closeToastsTimeout: {
    desc: "After how long to close permanent notifications - 0 to only close them manually (default behavior)",
    type: "number",
    category: "layout",
    min: 0,
    max: 30,
    step: 0.5,
    default: 0,
    unit: "s",
  },

  //#SECTION lyrics
  geniusLyrics: {
    desc: "Add a button to the media controls of the currently playing song to open its lyrics on genius.com",
    type: "toggle",
    category: "lyrics",
    default: true,
  },
} as const;
