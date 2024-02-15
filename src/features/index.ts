import { getPreferredLocale, resourceToHTMLString, t, tp } from "../utils";
import langMapping from "../../assets/locales.json" assert { type: "json" };
import { remSongMinPlayTime } from "./behavior";
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
 * | `helpText(): string / () => string`         | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment(): string / Promise<string>` | function that returns an HTML string that will be appended to the text in the config menu as an adornment element - TODO: to be replaced in the big menu rework |
 * | `hidden`                                    | if true, the feature will not be shown in the settings - default is undefined (false) |
 * | `min`                                       | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element |
 * | `max`                                       | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element |
 * | `step`                                      | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element |
 * | `unit`                                      | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. "px" |
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
    enable: () => void "TODO",
  },
  volumeSliderLabel: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  volumeSliderSize: {
    type: "number",
    category: "layout",
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
    enable: () => void "TODO",
    change: () => void "TODO",
  },
  volumeSliderStep: {
    type: "slider",
    category: "layout",
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
    enable: () => void "TODO",
    change: () => void "TODO",
  },
  volumeSliderScrollStep: {
    type: "slider",
    category: "layout",
    min: 1,
    max: 25,
    default: 10,
    unit: "%",
    enable: () => void "TODO",
    change: () => void "TODO",
  },
  watermarkEnabled: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  removeShareTrackingParam: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },

  //#SECTION song lists
  lyricsQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  deleteFromQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  listButtonsPlacement: {
    type: "select",
    category: "songLists",
    options: () => [
      { value: "queueOnly", label: t("list_button_placement_queue_only") },
      { value: "everywhere", label: t("list_button_placement_everywhere") },
    ],
    default: "everywhere",
    enable: () => void "TODO",
    disable: () => void "TODO",
  },

  //#SECTION behavior
  disableBeforeUnloadPopup: {
    type: "toggle",
    category: "behavior",
    default: false,
    enable: () => void "TODO",
  },
  closeToastsTimeout: {
    type: "number",
    category: "behavior",
    min: 0,
    max: 30,
    step: 0.5,
    default: 0,
    unit: "s",
    enable: () => void "TODO",
    change: () => void "TODO",
  },
  rememberSongTime: {
    type: "toggle",
    category: "behavior",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO", // TODO: feasible?
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
    enable: () => void "TODO",
    change: () => void "TODO",
  },

  //#SECTION input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  arrowKeySkipBy: {
    type: "number",
    category: "input",
    min: 0.5,
    max: 60,
    step: 0.5,
    default: 5,
    enable: () => void "TODO",
    change: () => void "TODO",
  },
  switchBetweenSites: {
    type: "toggle",
    category: "input",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
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
    enable: () => void "TODO",
    change: () => void "TODO",
  },
  anchorImprovements: {
    type: "toggle",
    category: "input",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  numKeysSkipToTime: {
    type: "toggle",
    category: "input",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },

  //#SECTION lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },

  //#SECTION general
  locale: {
    type: "select",
    category: "general",
    options: localeOptions,
    default: getPreferredLocale(),
    enable: () => void "TODO",
    // TODO: to be reworked or removed in the big menu rework
    textAdornment: async () => await resourceToHTMLString("img-globe") ?? "",
  },
  versionCheck: {
    type: "toggle",
    category: "general",
    default: true,
    enable: () => void "TODO",
    disable: () => void "TODO",
  },
  logLevel: {
    type: "select",
    category: "general",
    options: () => [
      { value: 0, label: t("log_level_debug") },
      { value: 1, label: t("log_level_info") },
    ],
    default: 1,
    enable: () => void "TODO",
  },
} as const satisfies FeatureInfo;
