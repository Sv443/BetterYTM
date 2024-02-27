import { getPreferredLocale, resourceToHTMLString, t, tp } from "../utils";
import langMapping from "../../assets/locales.json" assert { type: "json" };
import { remSongMinPlayTime } from "./behavior";
import { clearLyricsCache, getLyricsCache } from "./lyrics";
import { mode } from "../constants";
import { getFeatures } from "../config";
import { FeatureInfo } from "../types";

export * from "./layout";
export * from "./behavior";
export * from "./input";
export * from "./lyrics";
export * from "./songLists";
export * from "./versionCheck";

type SelectOption = { value: number | string, label: string };

//#MARKER feature dependencies

const localeOptions = Object.entries(langMapping).reduce((a, [locale, { name }]) => {
  return [...a, {
    value: locale,
    label: name,
  }];
}, [] as SelectOption[])
  .sort((a, b) => a.label.localeCompare(b.label));

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
 * | `disable(newValue: any)`                    | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function |
 * | `change(prevValue: any, newValue: any)`     | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed |
 * | `click: () => void`                         | for type `button` only - function that will be called when the button is clicked |
 * | `helpText(): string / () => string`         | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment(): string / Promise<string>` | function that returns an HTML string that will be appended to the text in the config menu as an adornment element - TODO: to be replaced in the big menu rework |
 * | `hidden`                                    | if true, the feature will not be shown in the settings - default is undefined (false) |
 * | `min`                                       | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element |
 * | `max`                                       | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element |
 * | `step`                                      | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element |
 * | `unit: string / (val: number) => string`    | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. "px" |
 *   
 * **Notes:**
 * - If no `disable()` or `change()` function is present, the page needs to be reloaded for the changes to take effect
 */
export const featInfo = {
  //#SECTION layout
  removeUpgradeTab: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noopTODO,
  },
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
    helpText: () => tp("feature_helptext_rememberSongTime", remSongMinPlayTime, remSongMinPlayTime)
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
    textAdornment: getAdvancedModeAdornment,
  },
  geniUrlToken: {
    type: "text",
    valueHidden: true,
    category: "lyrics",
    default: "",
    normalize: (val: string) => val.trim(),
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: getAdvancedModeAdornment,
  },
  lyricsCacheMaxSize: {
    type: "slider",
    category: "lyrics",
    default: 500,
    min: 50,
    max: 2000,
    step: 50,
    unit: (val: number) => tp("unit_entries", val),
    enable: noopTODO,
    change: noopTODO,
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: getAdvancedModeAdornment,
  },
  lyricsCacheTTL: {
    type: "slider",
    category: "lyrics",
    default: 21,
    min: 3,
    max: 100,
    step: 1,
    unit: (val: number) => tp("unit_days", val),
    enable: noopTODO,
    change: noopTODO,
    advanced: true,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: getAdvancedModeAdornment,
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
    textAdornment: getAdvancedModeAdornment,
  },

  //#SECTION general
  locale: {
    type: "select",
    category: "general",
    options: localeOptions,
    default: getPreferredLocale(),
    enable: noopTODO,
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: async () => await resourceToHTMLString("icon-globe") ?? "",
  },
  versionCheck: {
    type: "toggle",
    category: "general",
    default: true,
    enable: noopTODO,
    disable: noopTODO,
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
    textAdornment: () => getFeatures().advancedMode ? getAdvancedModeAdornment() : undefined,
  },
} as const satisfies FeatureInfo;

async function getAdvancedModeAdornment() {
  return `<span class="bytm-advanced-mode-icon" title="${t("advanced_mode")}">${await resourceToHTMLString("icon-advanced_mode") ?? ""}</span>`;
}

function noop() {
  void 0;
}

function noopTODO() {
  void 0;
}
