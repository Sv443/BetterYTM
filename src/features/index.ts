import { getPreferredLocale, getResourceUrl, resourceToHTMLString, t, tp } from "../utils";
import { clearLyricsCache, getLyricsCache } from "./lyricsCache";
import { doVersionCheck } from "./versionCheck";
import { getFeatures, promptResetConfig } from "../config";
import { FeatureInfo, type ResourceKey, type SiteSelection, type SiteSelectionOrNone } from "../types";
import { emitSiteEvent } from "../siteEvents";
import langMapping from "../../assets/locales.json" with { type: "json" };
import { getAutoLikeDialog } from "../dialogs";
import { showIconToast } from "../components";
import { mode } from "../constants";

export * from "./layout";
export * from "./behavior";
export * from "./input";
export * from "./lyrics";
export * from "./lyricsCache";
export * from "./songLists";
export * from "./versionCheck";
export * from "./volume";

interface SelectOption<TValue = number | string> {
  value: TValue;
  label: string;
}

//#region dependencies

/** Creates an HTML string for the given adornment properties */
const getAdornHtml = async (className: string, title: string, resource: ResourceKey, extraParams?: string) =>
  `<span class="${className} bytm-adorn-icon" title="${title}" aria-label="${title}"${extraParams ? " " + extraParams : ""}>${await resourceToHTMLString(resource) ?? ""}</span>`;

/** Combines multiple async functions or promises that resolve with an adornment HTML string into a single string */
const combineAdornments = (
  adornments: Array<(
    | (() => Promise<string | undefined>)
    | Promise<string | undefined>
  )>
) =>
  new Promise<string>(async (resolve) => {
    const html = [] as string[];
    for(const adornment of adornments) {
      const val = typeof adornment === "function" ? await adornment() : await adornment;
      val && html.push(val);
    }
    resolve(html.join(""));
  });

/** Decoration elements that can be added next to the label */
const adornments = {
  advanced: async () => getAdornHtml("bytm-advanced-mode-icon", t("advanced_mode"), "icon-advanced_mode"),
  experimental: async () => getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental"),
  globe: async () => await resourceToHTMLString("icon-globe_small") ?? "",
  alert: async (title: string) => getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""),
  reloadRequired: async () => getFeatures().advancedMode ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined,
} satisfies Record<string, (...args: any[]) => Promise<string | undefined>>;

/** Common options for config items of type "select" */
const options = {
  siteSelection: (): SelectOption<SiteSelection>[] => [
    { value: "all", label: t("site_selection_both_sites") },
    { value: "yt", label: t("site_selection_only_yt") },
    { value: "ytm", label: t("site_selection_only_ytm") },
  ],
  siteSelectionOrNone: (): SelectOption<SiteSelectionOrNone>[] => [
    { value: "all", label: t("site_selection_both_sites") },
    { value: "yt", label: t("site_selection_only_yt") },
    { value: "ytm", label: t("site_selection_only_ytm") },
    { value: "none", label: t("site_selection_none") },
  ],
  locale: () => Object.entries(langMapping)
    .reduce((a, [locale, { name }]) => {
      return [...a, {
        value: locale,
        label: name,
      }];
    }, [] as SelectOption[])
    .sort((a, b) => a.label.localeCompare(b.label)),
};

//#region features

/**
 * Contains all possible features with their default values and other configuration.  
 *   
 * **Required props:**
 * | Property             | Description                                                                                                                      |
 * | :------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | `type`               | type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`                       |
 * | `category`           | category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`                                          |
 * | `default`            | default value of the feature - type of the value depends on the given `type`                                                     |
 * | `enable(value: any)` | (required if reloadRequired = false) - function that will be called when the feature is enabled / initialized for the first time |
 *   
 * **Optional props:**
 * | Property                                                       | Description                                                                                                                                              |
 * | :------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `disable: (newValue: any) => void`                             | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function                       |
 * | `change: (key: string, prevValue: any, newValue: any)` => void | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed                                        |
 * | `click: () => void`                                            | for type `button` only - function that will be called when the button is clicked                                                                         |
 * | `helpText: string / () => string`                              | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment: () => string / Promise<string>`                | function that returns an HTML string that will be appended to the text in the config menu as an adornment element                                        |
 * | `unit: string / (val: number) => string`                       | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added by hand! |
 * | `min: number`                                                  | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element                                            |
 * | `max: number`                                                  | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element                                            |
 * | `step: number`                                                 | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element                                           |
 * | `options: SelectOption[] / () => SelectOption[]`               | Only if type is `select` - function that returns an array of objects with `value` and `label` properties                                                 |
 * | `reloadRequired: boolean`                                      | if true (default), the page needs to be reloaded for the changes to take effect - if false, `enable()` needs to be provided                              |
 * | `advanced: boolean`                                            | if true, the feature will only be shown if the advanced mode feature has been turned on                                                                  |
 * | `hidden: boolean`                                              | if true, the feature will not be shown in the settings - default is undefined (false)                                                                    |
 * | `valueHidden: boolean`                                         | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false)                             |
 * | `normalize: (val: any) => any`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations                          |
 * 
 * TODO: go through all features and set as many as possible to reloadRequired = false
 */
export const featInfo = {
  //#region layout
  watermarkEnabled: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  removeShareTrackingParam: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  removeShareTrackingParamSites: {
    type: "select",
    category: "layout",
    options: options.siteSelection,
    default: "all",
    textAdornment: adornments.reloadRequired,
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  removeUpgradeTab: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
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
    reloadRequired: false,
    enable: noop,
  },
  thumbnailOverlayToggleBtnShown: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  thumbnailOverlayShowIndicator: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  thumbnailOverlayIndicatorOpacity: {
    type: "slider",
    category: "layout",
    min: 5,
    max: 100,
    step: 5,
    default: 40,
    unit: "%",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
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
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
  },
  hideCursorOnIdle: {
    type: "toggle",
    category: "layout",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  hideCursorOnIdleDelay: {
    type: "slider",
    category: "layout",
    min: 0.5,
    max: 10,
    step: 0.25,
    default: 2,
    unit: "s",
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },
  fixHdrIssues: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  disableDarkReaderSites: {
    type: "select",
    category: "layout",
    options: options.siteSelectionOrNone,
    default: "all",
    textAdornment: adornments.reloadRequired,
  },

  //#region volume
  volumeSliderLabel: {
    type: "toggle",
    category: "volume",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  volumeSliderSize: {
    type: "number",
    category: "volume",
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
    textAdornment: adornments.reloadRequired,
  },
  volumeSliderStep: {
    type: "slider",
    category: "volume",
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
    textAdornment: adornments.reloadRequired,
  },
  volumeSliderScrollStep: {
    type: "slider",
    category: "volume",
    min: 1,
    max: 25,
    default: 4,
    unit: "%",
    textAdornment: adornments.reloadRequired,
  },
  volumeSharedBetweenTabs: {
    type: "toggle",
    category: "volume",
    default: false,
    textAdornment: adornments.reloadRequired,
  },
  setInitialTabVolume: {
    type: "toggle",
    category: "volume",
    default: false,
    textAdornment: () => getFeatures().volumeSharedBetweenTabs
      ? combineAdornments([adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reloadRequired])
      : adornments.reloadRequired(),
  },
  initialTabVolumeLevel: {
    type: "slider",
    category: "volume",
    min: 0,
    max: 100,
    step: 1,
    default: 100,
    unit: "%",
    textAdornment: () => getFeatures().volumeSharedBetweenTabs
      ? combineAdornments([adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reloadRequired])
      : adornments.reloadRequired(),
    reloadRequired: false,
    enable: noop,
  },

  //#region song lists
  lyricsQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  deleteFromQueueButton: {
    type: "toggle",
    category: "songLists",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  listButtonsPlacement: {
    type: "select",
    category: "songLists",
    options: () => [
      { value: "queueOnly", label: t("list_button_placement_queue_only") },
      { value: "everywhere", label: t("list_button_placement_everywhere") },
    ],
    default: "everywhere",
    textAdornment: adornments.reloadRequired,
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    category: "songLists",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  clearQueueBtn: {
    type: "toggle",
    category: "songLists",
    default: true,
    textAdornment: adornments.reloadRequired,
  },

  //#region behavior
  disableBeforeUnloadPopup: {
    type: "toggle",
    category: "behavior",
    default: false,
    textAdornment: adornments.reloadRequired,
  },
  closeToastsTimeout: {
    type: "number",
    category: "behavior",
    min: 0,
    max: 30,
    step: 0.5,
    default: 3,
    unit: "s",
    reloadRequired: false,
    enable: noop,
  },
  rememberSongTime: {
    type: "toggle",
    category: "behavior",
    default: true,
    helpText: () => tp("feature_helptext_rememberSongTime", getFeatures().rememberSongTimeMinPlayTime, getFeatures().rememberSongTimeMinPlayTime),
    textAdornment: adornments.reloadRequired,
  },
  rememberSongTimeSites: {
    type: "select",
    category: "behavior",
    options: options.siteSelection,
    default: "all",
    textAdornment: adornments.reloadRequired,
  },
  rememberSongTimeDuration: {
    type: "number",
    category: "behavior",
    min: 1,
    max: 60 * 60 * 24 * 7,
    step: 1,
    default: 60,
    unit: "s",
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },
  rememberSongTimeReduction: {
    type: "number",
    category: "behavior",
    min: 0,
    max: 30,
    step: 0.05,
    default: 0.2,
    unit: "s",
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },
  rememberSongTimeMinPlayTime: {
    type: "slider",
    category: "behavior",
    min: 0.5,
    max: 30,
    step: 0.5,
    default: 10,
    unit: "s",
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },

  //#region input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  arrowKeySkipBy: {
    type: "number",
    category: "input",
    min: 0.5,
    max: 60,
    step: 0.5,
    default: 5,
    reloadRequired: false,
    enable: noop,
  },
  switchBetweenSites: {
    type: "toggle",
    category: "input",
    default: true,
    reloadRequired: false,
    enable: noop,
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
    reloadRequired: false,
    enable: noop,
  },
  anchorImprovements: {
    type: "toggle",
    category: "input",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  numKeysSkipToTime: {
    type: "toggle",
    category: "input",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  autoLikeChannels: {
    type: "toggle",
    category: "input",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  autoLikeChannelToggleBtn: {
    type: "toggle",
    category: "input",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  autoLikePlayerBarToggleBtn: {
    type: "toggle",
    category: "input",
    default: false,
    textAdornment: adornments.reloadRequired,
  },
  autoLikeTimeout: {
    type: "slider",
    category: "input",
    min: 3,
    max: 30,
    step: 0.5,
    default: 5,
    unit: "s",
    advanced: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.advanced,
  },
  autoLikeShowToast: {
    type: "toggle",
    category: "input",
    default: true,
    reloadRequired: false,
    advanced: true,
    enable: noop,
    textAdornment: adornments.advanced,
  },
  autoLikeOpenMgmtDialog: {
    type: "button",
    category: "input",
    click: () => getAutoLikeDialog().then(d => d.open()),
  },

  //#region lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    default: true,
  },
  geniUrlBase: {
    type: "text",
    category: "lyrics",
    default: "https://api.sv443.net/geniurl",
    normalize: (val: string) => val.trim().replace(/\/+$/, ""),
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },
  geniUrlToken: {
    type: "text",
    valueHidden: true,
    category: "lyrics",
    default: "",
    normalize: (val: string) => val.trim(),
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },
  lyricsCacheMaxSize: {
    type: "slider",
    category: "lyrics",
    default: 1000,
    min: 100,
    max: 5000,
    step: 100,
    unit: (val: number) => " " + tp("unit_entries", val),
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },
  lyricsCacheTTL: {
    type: "slider",
    category: "lyrics",
    default: 21,
    min: 1,
    max: 100,
    step: 1,
    unit: (val: number) => " " + tp("unit_days", val),
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },
  clearLyricsCache: {
    type: "button",
    category: "lyrics",
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
    change: () => setTimeout(() => confirm(t("lyrics_cache_changed_clear_confirm")) && clearLyricsCache(), 200),
    advanced: true,
    textAdornment: adornments.experimental,
    reloadRequired: false,
    enable: noop,
  },

  //#region general
  locale: {
    type: "select",
    category: "general",
    options: options.locale,
    default: getPreferredLocale(),
    textAdornment: () => combineAdornments([adornments.globe, adornments.reloadRequired]),
  },
  localeFallback: {
    type: "toggle",
    category: "general",
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
  },
  versionCheck: {
    type: "toggle",
    category: "general",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  checkVersionNow: {
    type: "button",
    category: "general",
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
    textAdornment: adornments.reloadRequired,
  },
  initTimeout: {
    type: "number",
    category: "general",
    min: 3,
    max: 30,
    default: 8,
    step: 0.1,
    unit: "s",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
  },
  toastDuration: {
    type: "slider",
    category: "general",
    min: 0,
    max: 15,
    default: 5,
    step: 0.5,
    unit: "s",
    reloadRequired: false,
    advanced: true,
    textAdornment: adornments.advanced,
    enable: noop,
    change: () => showIconToast({
      duration: getFeatures().toastDuration * 1000,
      message: "Example",
      iconSrc: getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`),
    }),
  },
  resetConfig: {
    type: "button",
    category: "general",
    click: promptResetConfig,
    textAdornment: adornments.reloadRequired,
  },
  advancedMode: {
    type: "toggle",
    category: "general",
    default: false,
    textAdornment: () => getFeatures().advancedMode ? adornments.advanced() : undefined,
    change: (_key, prevValue, newValue) =>
      prevValue !== newValue &&
        emitSiteEvent("recreateCfgMenu"),
  },
} as const satisfies FeatureInfo;


function noop() {
  void 0;
}

void [noop];
