import { debounce } from "@sv443-network/userutils";
import { getPreferredLocale, resourceToHTMLString, t, tp } from "../utils";
import langMapping from "../../assets/locales.json" assert { type: "json" };
import { clearLyricsCache, getLyricsCache } from "./lyricsCache";
import { doVersionCheck } from "./versionCheck";
import { mode } from "../constants";
import { getFeatures } from "../config";
import { FeatureInfo } from "../types";

export * from "./layout";
export * from "./behavior";
export * from "./input";
export * from "./lyrics";
export * from "./lyricsCache";
export * from "./songLists";
export * from "./versionCheck";

type SelectOption = { value: number | string, label: string };

//#MARKER feature dependencies

/** List of all available locale SelectOptions */
const localeOptions = Object.entries(langMapping).reduce((a, [locale, { name }]) => {
  return [...a, {
    value: locale,
    label: name,
  }];
}, [] as SelectOption[])
  .sort((a, b) => a.label.localeCompare(b.label));

/** Decoration elements that can be added next to the label */
const adornments = {
  advanced: async () => `<span class="bytm-advanced-mode-icon bytm-adorn-icon" title="${t("advanced_mode")}">${await resourceToHTMLString("icon-advanced_mode") ?? ""}</span>`,
  experimental: async () => `<span class="bytm-experimental-icon bytm-adorn-icon" title="${t("experimental_feature")}">${await resourceToHTMLString("icon-experimental") ?? ""}</span>`,
  globe: async () => await resourceToHTMLString("icon-globe") ?? "",
};

//#MARKER features

/**
 * Contains all possible features with their default values and other configuration.  
 *   
 * **Required props:**
 * | Property | Description |
 * | :-- | :-- |
 * | `type`               | type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts` |
 * | `category`           | category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts` |
 * | `default`            | default value of the feature - type of the value depends on the given `type` |
 * | `enable(value: any)` | function that will be called when the feature is enabled / initialized for the first time |
 *   
 * **Optional props:**
 * | Property | Description |
 * | :-- | :-- |
 * | `disable: (newValue: any) => void`                | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function |
 * | `change: (prevValue: any, newValue: any)` => void | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed |
 * | `click: () => void`                               | for type `button` only - function that will be called when the button is clicked |
 * | `helpText: string / () => string`                 | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment: () => string / Promise<string>`   | function that returns an HTML string that will be appended to the text in the config menu as an adornment element - TODO: to be replaced in the big menu rework |
 * | `unit: string / (val: number) => string`          | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added by hand! |
 * | `min: number`                                     | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element |
 * | `max: number`                                     | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element |
 * | `step: number`                                    | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element |
 * | `options: SelectOption[] / () => SelectOption[]`  | Only if type is `select` - function that returns an array of objects with `value` and `label` properties |
 * | `advanced: boolean`                               | if true, the feature will only be shown if the advanced mode feature has been turned on |
 * | `hidden: boolean`                                 | if true, the feature will not be shown in the settings - default is undefined (false) |
 * | `valueHidden: boolean`                            | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false) |
 * | `normalize: (val: any) => any`                    | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations |
 *   
 * **Notes:**
 * - If no `disable()` or `change()` function is present, the page needs to be reloaded for the changes to take effect
 */
export const featInfo = {
  //#SECTION layout
  volumeSliderLabel: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  volumeSliderSize: {
    type: "number",
    category: "layout",
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
    enable: noopTODO,
    change: noopTODO,
  },
  volumeSliderStep: {
    type: "slider",
    category: "layout",
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
    enable: noopTODO,
    change: noopTODO,
  },
  volumeSliderScrollStep: {
    type: "slider",
    category: "layout",
    min: 1,
    max: 25,
    default: 10,
    unit: "%",
    enable: noopTODO,
    change: noopTODO,
  },
  watermarkEnabled: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  removeShareTrackingParam: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  removeUpgradeTab: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noopTODO,
  },

  //#SECTION song lists
  lyricsQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  deleteFromQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  listButtonsPlacement: {
    type: "select",
    category: "songLists",
    options: () => [
      { value: "queueOnly", label: t("list_button_placement_queue_only") },
      { value: "everywhere", label: t("list_button_placement_everywhere") },
    ],
    default: "everywhere",
    enable: noopTODO,
    disable: noopTODO,
  },

  //#SECTION behavior
  disableBeforeUnloadPopup: {
    type: "toggle",
    category: "behavior",
    default: false,
    enable: noopTODO,
  },
  closeToastsTimeout: {
    type: "number",
    category: "behavior",
    min: 0,
    max: 30,
    step: 0.5,
    default: 0,
    unit: "s",
    enable: noopTODO,
    change: noopTODO,
  },
  rememberSongTime: {
    type: "toggle",
    category: "behavior",
    default: true,
    enable: noopTODO,
    disable: noopTODO, // TODO: feasible?
    helpText: () => tp("feature_helptext_rememberSongTime", getFeatures().rememberSongTimeMinPlayTime, getFeatures().rememberSongTimeMinPlayTime)
  },
  rememberSongTimeSites: {
    type: "select",
    category: "behavior",
    options: () => [
      { value: "all", label: t("remember_song_time_sites_all") },
      { value: "yt", label: t("remember_song_time_sites_yt") },
      { value: "ytm", label: t("remember_song_time_sites_ytm") },
    ],
    default: "ytm",
    enable: noopTODO,
    change: noopTODO,
  },
  rememberSongTimeDuration: {
    type: "number",
    category: "behavior",
    min: 3,
    max: 60 * 60 * 24 * 7,
    step: 1,
    default: 60,
    unit: "s",
    enable: noopTODO,
    change: noopTODO,
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  rememberSongTimeReduction: {
    type: "number",
    category: "behavior",
    min: 0,
    max: 30,
    step: 0.1,
    default: 0,
    unit: "s",
    enable: noopTODO,
    change: noopTODO,
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  rememberSongTimeMinPlayTime: {
    type: "slider",
    category: "behavior",
    min: 1,
    max: 30,
    step: 0.5,
    default: 10,
    unit: "s",
    enable: noopTODO,
    change: noopTODO,
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  lockVolume: {
    type: "toggle",
    category: "behavior",
    default: false,
    enable: () => noopTODO,
    disable: () => noopTODO,
  },
  lockVolumeLevel: {
    type: "slider",
    category: "behavior",
    min: 0,
    max: 100,
    step: 1,
    default: 100,
    unit: "%",
    enable: noop,
    change: () => noopTODO,
  },

  //#SECTION input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  arrowKeySkipBy: {
    type: "number",
    category: "input",
    min: 0.5,
    max: 60,
    step: 0.5,
    default: 5,
    enable: noopTODO,
    change: noopTODO,
  },
  switchBetweenSites: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
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
    enable: noopTODO,
    change: noopTODO,
  },
  anchorImprovements: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  numKeysSkipToTime: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },

  //#SECTION lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  geniUrlBase: {
    type: "text",
    category: "lyrics",
    default: "https://api.sv443.net/geniurl",
    normalize: (val: string) => val.trim().replace(/\/+$/, ""),
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  geniUrlToken: {
    type: "text",
    valueHidden: true,
    category: "lyrics",
    default: "",
    normalize: (val: string) => val.trim(),
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  lyricsCacheMaxSize: {
    type: "slider",
    category: "lyrics",
    default: 1000,
    min: 100,
    max: 5000,
    step: 100,
    unit: (val: number) => " " + tp("unit_entries", val),
    enable: noopTODO,
    change: noopTODO,
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  lyricsCacheTTL: {
    type: "slider",
    category: "lyrics",
    default: 21,
    min: 1,
    max: 100,
    step: 1,
    unit: (val: number) => " " + tp("unit_days", val),
    enable: noopTODO,
    change: noopTODO,
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  clearLyricsCache: {
    type: "button",
    category: "lyrics",
    default: undefined,
    click() {
      const entries = getLyricsCache().length;
      if(confirm(tp("lyrics_clear_cache_confirm_prompt", entries, entries))) {
        clearLyricsCache();
        alert(t("lyrics_clear_cache_success"));
      }
    },
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.advanced,
  },
  advancedLyricsFilter: {
    type: "toggle",
    category: "lyrics",
    default: false,
    enable: noopTODO,
    disable: noopTODO,
    // TODO: use dialog here?
    change: () => confirm(t("lyrics_cache_changed_clear_confirm")) && clearLyricsCache(),
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.experimental,
  },

  //#SECTION general
  locale: {
    type: "select",
    category: "general",
    options: localeOptions,
    default: getPreferredLocale(),
    enable: noopTODO,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: adornments.globe,
  },
  versionCheck: {
    type: "toggle",
    category: "general",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
  },
  checkVersionNow: {
    type: "button",
    category: "general",
    default: undefined,
    click: debounce(() => doVersionCheck(true), 750),
  },
  logLevel: {
    type: "select",
    category: "general",
    options: () => [
      { value: 0, label: t("log_level_debug") },
      { value: 1, label: t("log_level_info") },
    ],
    default: 1,
    enable: noopTODO,
  },
  advancedMode: {
    type: "toggle",
    category: "general",
    default: mode === "development",
    enable: noopTODO,
    disable: noopTODO,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: () => getFeatures().advancedMode ? adornments.advanced() : undefined,
  },
} as const satisfies FeatureInfo;

function noop() {
  void 0;
}

function noopTODO() {
  void 0;
}
