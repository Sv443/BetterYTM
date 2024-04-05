import { getPreferredLocale, resourceToHTMLString, t, tp } from "../utils";
import langMapping from "../../assets/locales.json" assert { type: "json" };
import { clearLyricsCache, getLyricsCache } from "./lyricsCache";
import { doVersionCheck } from "./versionCheck";
import { mode } from "../constants";
import { getFeatures } from "../config";
import { FeatureInfo, type ResourceKey, type SiteSelection } from "../types";
import { volumeSharedBetweenTabsDisabled } from "./volume";

export * from "./layout";
export * from "./behavior";
export * from "./input";
export * from "./lyrics";
export * from "./lyricsCache";
export * from "./songLists";
export * from "./versionCheck";
export * from "./volume";

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

const getAdornHtml = async (className: string, title: string, resource: ResourceKey, extraParams?: string) =>
  `<span class="${className}" title="${title}" aria-label="${title}"${extraParams ? " " + extraParams : ""}>${await resourceToHTMLString(resource) ?? ""}</span>`;

/** Decoration elements that can be added next to the label */
const adornments = {
  advanced: async () => getAdornHtml("bytm-advanced-mode-icon", t("advanced_mode"), "icon-advanced_mode"),
  experimental: async () => getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental"),
  globe: async () => await resourceToHTMLString("icon-globe") ?? "",
  warning: async (title: string) => getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""),
};

/** Common options for config items of type "select" */
const options = {
  siteSelection: (): { value: SiteSelection, label: string }[] => [
    { value: "all", label: t("site_selection_both_sites") },
    { value: "yt", label: t("site_selection_only_yt") },
    { value: "ytm", label: t("site_selection_only_ytm") },
  ],
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
 * | `textAdornment: () => string / Promise<string>`   | function that returns an HTML string that will be appended to the text in the config menu as an adornment element |
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
  watermarkEnabled: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
    disable: noop,
  },
  removeShareTrackingParam: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
    disable: noop,
  },
  removeShareTrackingParamSites: {
    type: "select",
    category: "layout",
    options: options.siteSelection,
    default: "all",
    enable: noop,
    disable: noop,
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
    disable: noop,
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
    disable: noop,
  },
  removeUpgradeTab: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
  },
  thumbnailOverlayBehavior: {
    type: "select",
    category: "layout",
    options: () => [
      { value: "songsOnly", label: t("thumbnail_overlay_behavior_songs_only") },
      { value: "videosOnly", label: t("thumbnail_overlay_behavior_videos_only") },
      { value: "always", label: t("thumbnail_overlay_behavior_always") },
      { value: "never", label: t("thumbnail_overlay_behavior_never") },
    ],
    default: "songsOnly",
    enable: noop,
    change: noop,
  },
  thumbnailOverlayToggleBtnShown: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
    disable: noop,
  },
  thumbnailOverlayShowIndicator: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
    disable: noop,
    advanced: true,
    textAdornment: adornments.advanced,
  },
  thumbnailOverlayImageFit: {
    type: "select",
    category: "layout",
    options: () => [
      { value: "cover", label: t("thumbnail_overlay_image_fit_crop") },
      { value: "contain", label: t("thumbnail_overlay_image_fit_full") },
      { value: "fill", label: t("thumbnail_overlay_image_fit_stretch") },
    ],
    default: "cover",
    enable: noop,
    change: noop,
    advanced: true,
    textAdornment: adornments.advanced,
  },
  hideCursorOnIdle: {
    type: "toggle",
    category: "layout",
    default: true,
    enable: noop,
    disable: noop,
  },
  hideCursorOnIdleDelay: {
    type: "slider",
    category: "layout",
    min: 0.5,
    max: 10,
    step: 0.5,
    default: 3,
    unit: "s",
    enable: noop,
    change: noop,
    advanced: true,
    textAdornment: adornments.advanced,
  },

  //#SECTION volume
  volumeSliderLabel: {
    type: "toggle",
    category: "volume",
    default: true,
    enable: noop,
    disable: noop,
  },
  volumeSliderSize: {
    type: "number",
    category: "volume",
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
    enable: noop,
    change: noop,
  },
  volumeSliderStep: {
    type: "slider",
    category: "volume",
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
    enable: noop,
    change: noop,
  },
  volumeSliderScrollStep: {
    type: "slider",
    category: "volume",
    min: 1,
    max: 25,
    default: 10,
    unit: "%",
    enable: noop,
    change: noop,
  },
  volumeSharedBetweenTabs: {
    type: "toggle",
    category: "volume",
    default: false,
    enable: noop,
    disable: () => volumeSharedBetweenTabsDisabled,
  },
  setInitialTabVolume: {
    type: "toggle",
    category: "volume",
    default: false,
    enable: noop,
    disable: noop,
    textAdornment: () => getFeatures().volumeSharedBetweenTabs ? adornments.warning(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")) : undefined,
  },
  initialTabVolumeLevel: {
    type: "slider",
    category: "volume",
    min: 0,
    max: 100,
    step: 1,
    default: 100,
    unit: "%",
    enable: noop,
    change: noop,
    textAdornment: () => getFeatures().volumeSharedBetweenTabs ? adornments.warning(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")) : undefined,
  },

  //#SECTION song lists
  lyricsQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    enable: noop,
    disable: noop,
  },
  deleteFromQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    enable: noop,
    disable: noop,
  },
  listButtonsPlacement: {
    type: "select",
    category: "songLists",
    options: () => [
      { value: "queueOnly", label: t("list_button_placement_queue_only") },
      { value: "everywhere", label: t("list_button_placement_everywhere") },
    ],
    default: "everywhere",
    enable: noop,
    disable: noop,
  },

  //#SECTION behavior
  disableBeforeUnloadPopup: {
    type: "toggle",
    category: "behavior",
    default: false,
    enable: noop,
  },
  closeToastsTimeout: {
    type: "number",
    category: "behavior",
    min: 0,
    max: 30,
    step: 0.5,
    default: 0,
    unit: "s",
    enable: noop,
    change: noop,
  },
  rememberSongTime: {
    type: "toggle",
    category: "behavior",
    default: true,
    enable: noop,
    disable: noop, // TODO: feasible?
    helpText: () => tp("feature_helptext_rememberSongTime", getFeatures().rememberSongTimeMinPlayTime, getFeatures().rememberSongTimeMinPlayTime)
  },
  rememberSongTimeSites: {
    type: "select",
    category: "behavior",
    options: options.siteSelection,
    default: "ytm",
    enable: noop,
    change: noop,
  },
  rememberSongTimeDuration: {
    type: "number",
    category: "behavior",
    min: 3,
    max: 60 * 60 * 24 * 7,
    step: 1,
    default: 60,
    unit: "s",
    enable: noop,
    change: noop,
    advanced: true,
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
    enable: noop,
    change: noop,
    advanced: true,
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
    enable: noop,
    change: noop,
    advanced: true,
    textAdornment: adornments.advanced,
  },

  //#SECTION input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noop,
    disable: noop,
  },
  arrowKeySkipBy: {
    type: "number",
    category: "input",
    min: 0.5,
    max: 60,
    step: 0.5,
    default: 5,
    enable: noop,
    change: noop,
  },
  switchBetweenSites: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noop,
    disable: noop,
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
    enable: noop,
    change: noop,
  },
  anchorImprovements: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noop,
    disable: noop,
  },
  numKeysSkipToTime: {
    type: "toggle",
    category: "input",
    default: true,
    enable: noop,
    disable: noop,
  },

  //#SECTION lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    default: true,
    enable: noop,
    disable: noop,
  },
  geniUrlBase: {
    type: "text",
    category: "lyrics",
    default: "https://api.sv443.net/geniurl",
    normalize: (val: string) => val.trim().replace(/\/+$/, ""),
    advanced: true,
    textAdornment: adornments.advanced,
  },
  geniUrlToken: {
    type: "text",
    valueHidden: true,
    category: "lyrics",
    default: "",
    normalize: (val: string) => val.trim(),
    advanced: true,
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
    enable: noop,
    change: noop,
    advanced: true,
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
    enable: noop,
    change: noop,
    advanced: true,
    textAdornment: adornments.advanced,
  },
  clearLyricsCache: {
    type: "button",
    category: "lyrics",
    default: undefined,
    async click() {
      const entries = getLyricsCache().length;
      if(confirm(tp("lyrics_clear_cache_confirm_prompt", entries, entries))) {
        await clearLyricsCache();
        alert(t("lyrics_clear_cache_success"));
      }
    },
    advanced: true,
    textAdornment: adornments.advanced,
  },
  advancedLyricsFilter: {
    type: "toggle",
    category: "lyrics",
    default: false,
    enable: noop,
    disable: noop,
    change: () => confirm(t("lyrics_cache_changed_clear_confirm")) && clearLyricsCache(),
    advanced: true,
    textAdornment: adornments.experimental,
  },

  //#SECTION general
  locale: {
    type: "select",
    category: "general",
    options: localeOptions,
    default: getPreferredLocale(),
    enable: noop,
    textAdornment: adornments.globe,
  },
  versionCheck: {
    type: "toggle",
    category: "general",
    default: true,
    enable: noop,
    disable: noop,
  },
  checkVersionNow: {
    type: "button",
    category: "general",
    default: undefined,
    click: () => doVersionCheck(true),
  },
  logLevel: {
    type: "select",
    category: "general",
    options: () => [
      { value: 0, label: t("log_level_debug") },
      { value: 1, label: t("log_level_info") },
    ],
    default: 1,
    enable: noop,
  },
  advancedMode: {
    type: "toggle",
    category: "general",
    default: mode === "development",
    enable: noop,
    disable: noop,
    textAdornment: () => getFeatures().advancedMode ? adornments.advanced() : undefined,
  },
} as const satisfies FeatureInfo;


function noop() {
  void 0;
}

void [noop];
