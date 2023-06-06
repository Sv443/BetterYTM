import { scriptInfo } from "../constants";

export * from "./input";
export * from "./layout";
export * from "./lyrics";
export { initMenu } from "./menu/menu"; // TODO
export * from "./menu/menu_old";

export type FeatureCategory = "input" | "layout" | "lyrics";

/** Contains all possible features with their default values and other config */
export const featInfo = {
  //#SECTION input
  arrowKeySupport: {
    desc: "Arrow keys skip forwards and backwards by 10 seconds",
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
    desc: "TODO: Which hotkey needs to be pressed to switch sites?",
    type: "hotkey",
    category: "input",
    default: {
      key: "F9",
      shift: false,
      ctrl: false,
      meta: false,
    },
    visible: false,
  },
  disableBeforeUnloadPopup: {
    desc: "Completely disable the popup that sometimes appears before leaving the site",
    type: "toggle",
    category: "input",
    default: false,
  },
  anchorImprovements: {
    desc: "TODO: Make it so middle clicking a song to open it in a new tab is easier",
    type: "toggle",
    category: "input",
    default: true,
    visible: false,
  },

  //#SECTION layout
  removeUpgradeTab: {
    desc: "Remove the \"Upgrade\" / YT Music Premium tab",
    type: "toggle",
    category: "layout",
    default: true,
  },
  volumeSliderSize: {
    desc: "The width of the volume slider in pixels",
    type: "number",
    category: "layout",
    min: 10,
    max: 1000,
    step: 5,
    default: 160,
    unit: "px",
  },
  volumeSliderStep: {
    desc: "Volume slider sensitivity - the smaller this number, the finer the volume control",
    type: "slider",
    category: "layout",
    min: 1,
    max: 20,
    default: 2,
  },
  watermarkEnabled: {
    desc: `Show a ${scriptInfo.name} watermark under the YTM logo`,
    type: "toggle",
    category: "layout",
    default: true,
  },
  queueButtons: {
    desc: "TODO: Add buttons while hovering over a song in a queue to quickly remove it or open its lyrics",
    type: "toggle",
    category: "layout",
    default: true,
    visible: false,
  },
  dismissPopup: {
    desc: "TODO: Automatically dismisses the \"are you still there\" popup",
    type: "toggle",
    category: "layout",
    default: true,
    visible: false,
  },

  //#SECTION lyrics
  geniusLyrics: {
    desc: "Add a button to the media controls to open the current song's lyrics on genius.com in a new tab",
    type: "toggle",
    category: "lyrics",
    default: true,
  },
};
