import { t, trInfo } from "../translations";

export * from "./input";
export * from "./layout";
export * from "./lyrics";
export { initMenu } from "../menu/menu";
export * from "../menu/menu_old";

/** Union of all feature keys */
export type FeatInfoKey = keyof typeof featInfo;

/** Union of all feature categories */
export type FeatureCategory = typeof featInfo[FeatInfoKey]["category"];

type SelectOption = { value: number | string, label: string };

const langOptions = Object.entries(trInfo).reduce((a, [lang, langInfo]) => {
  return [...a, {
    value: lang,
    label: `${langInfo.name}`,
  }];
}, [] as SelectOption[])
  .sort((a, b) => a.label.localeCompare(b.label));

/** Contains all possible features with their default values and other configuration */
export const featInfo = {
  //#SECTION layout
  removeUpgradeTab: {
    type: "toggle",
    category: "layout",
    default: true,
  },
  volumeSliderLabel: {
    type: "toggle",
    category: "layout",
    default: true,
  },
  volumeSliderSize: {
    type: "number",
    category: "layout",
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
  },
  volumeSliderStep: {
    type: "slider",
    category: "layout",
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
  },
  watermarkEnabled: {
    type: "toggle",
    category: "layout",
    default: true,
  },
  deleteFromQueueButton: {
    type: "toggle",
    category: "layout",
    default: true,
  },
  closeToastsTimeout: {
    type: "number",
    category: "layout",
    min: 0,
    max: 30,
    step: 0.5,
    default: 0,
    unit: "s",
  },
  removeShareTrackingParam: {
    type: "toggle",
    category: "layout",
    default: true,
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    default: true,
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    category: "layout",
    default: true,
  },

  //#SECTION input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    default: true,
  },
  switchBetweenSites: {
    type: "toggle",
    category: "input",
    default: true,
  },
  switchSitesHotkey: {
    hidden: true,
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
    type: "toggle",
    category: "input",
    default: false,
  },
  anchorImprovements: {
    type: "toggle",
    category: "input",
    default: true,
  },
  numKeysSkipToTime: {
    type: "toggle",
    category: "input",
    default: true,
  },

  //#SECTION lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    default: true,
  },
  lyricsQueueButton: {
    type: "toggle",
    category: "lyrics",
    default: true,
  },

  //#SECTION misc
  language: {
    type: "select",
    category: "misc",
    options: langOptions,
    default: "en-US",
  },
  logLevel: {
    type: "select",
    category: "misc",
    options: () => [
      { value: 0, label: t("log_level_debug") },
      { value: 1, label: t("log_level_info") },
    ],
    default: 1,
  },
} as const;
