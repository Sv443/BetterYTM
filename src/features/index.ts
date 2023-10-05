import { t } from "../translations";
import { getPreferredLocale } from "../utils";
import langMapping from "../../assets/locales.json" assert { type: "json" };

export * from "./layout";
export * from "./behavior";
export * from "./input";
export * from "./lyrics";

/** Union of all feature keys */
export type FeatInfoKey = keyof typeof featInfo;

/** Union of all feature categories */
export type FeatureCategory = typeof featInfo[FeatInfoKey]["category"];

type SelectOption = { value: number | string, label: string };

const localeOptions = Object.entries(langMapping).reduce((a, [locale, langInfo]) => {
  return [...a, {
    value: locale,
    label: `${langInfo.name}`,
  }];
}, [] as SelectOption[])
  .sort((a, b) => a.label.localeCompare(b.label));

//#MARKER features

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
  boostGain: {
    type: "toggle",
    category: "layout",
    default: true,
  },
  boostGainPercentage: {
    type: "slider",
    category: "layout",
    min: 125,
    max: 300,
    default: 200,
    step: 25,
    unit: "%",
  },

  //#SECTION behavior
  disableBeforeUnloadPopup: {
    type: "toggle",
    category: "behavior",
    default: false,
  },
  closeToastsTimeout: {
    type: "number",
    category: "behavior",
    min: 0,
    max: 30,
    step: 0.5,
    default: 0,
    unit: "s",
  },
  rememberSongTime: {
    type: "toggle",
    category: "behavior",
    default: true,
  },

  //#SECTION input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    default: true,
  },
  arrowKeySkipBy: {
    type: "number",
    category: "input",
    min: 0.5,
    max: 60,
    step: 0.5,
    default: 5,
  },
  switchBetweenSites: {
    type: "toggle",
    category: "input",
    default: true,
  },
  switchSitesHotkey: {
    type: "hotkey",
    category: "input",
    default: {
      code: "F9",
      shift: false,
      ctrl: false,
      alt: false,
    },
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

  //#SECTION general
  locale: {
    type: "select",
    category: "general",
    options: localeOptions,
    default: getPreferredLocale(),
  },
  logLevel: {
    type: "select",
    category: "general",
    options: () => [
      { value: 0, label: t("log_level_debug") },
      { value: 1, label: t("log_level_info") },
    ],
    default: 1,
  },
} as const;
