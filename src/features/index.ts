import { getLocale, getPreferredLocale, getResourceUrl, resourceAsString, t, tp } from "../utils/index.js";
import { clearLyricsCache, getLyricsCache } from "./lyricsCache.js";
import { doVersionCheck } from "./versionCheck.js";
import { getFeature, promptResetConfig } from "../config.js";
import { FeatureInfo, type ColorLightness, type ResourceKey, type SiteSelection, type SiteSelectionOrNone } from "../types.js";
import { emitSiteEvent } from "../siteEvents.js";
import langMapping from "../../assets/locales.json" with { type: "json" };
import { getAutoLikeDialog, showPrompt } from "../dialogs/index.js";
import { showIconToast } from "../components/index.js";
import { mode } from "../constants.js";

//#region re-exports

export * from "./layout.js";
export * from "./behavior.js";
export * from "./input.js";
export * from "./integrations.js";
export * from "./lyrics.js";
export * from "./lyricsCache.js";
export * from "./songLists.js";
export * from "./versionCheck.js";
export * from "./volume.js";

//#region adornments

type AdornmentFunc =
  | ((...args: any[]) => Promise<string | undefined>)
  | Promise<string | undefined>;

/** Decoration elements that can be added next to the label */
const adornments = {
  advanced: async () => getAdornHtml("bytm-advanced-mode-icon", t("advanced_mode"), "icon-advanced_mode"),
  experimental: async () => getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental"),
  globe: async () => await resourceAsString("icon-globe_small") ?? "",
  alert: async (title: string) => getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""),
  reloadRequired: async () => getFeature("advancedMode") ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined,
} satisfies Record<string, AdornmentFunc>;

/** Order of adornment elements in the {@linkcode combineAdornments()} function */
const adornmentOrder = new Map<AdornmentFunc, number>();
adornmentOrder.set(adornments.alert, 0);
adornmentOrder.set(adornments.experimental, 1);
adornmentOrder.set(adornments.globe, 2);
adornmentOrder.set(adornments.reloadRequired, 3);
adornmentOrder.set(adornments.advanced, 4);

/** Creates an HTML string for the given adornment properties */
const getAdornHtml = async (className: string, title: string, resource: ResourceKey, extraAttributes?: string) =>
  `<span class="${className} bytm-adorn-icon" title="${title}" aria-label="${title}"${extraAttributes ? " " + extraAttributes : ""}>${await resourceAsString(resource) ?? ""}</span>`;

/** Combines multiple async functions or promises that resolve with an adornment HTML string into a single string */
const combineAdornments = (
  adornments: Array<AdornmentFunc>
) => new Promise<string>(
  async (resolve) => {
    const sortedAdornments = adornments.sort((a, b) => {
      const aIndex = adornmentOrder.get(a) ? adornmentOrder.get(a)! : -1;
      const bIndex = adornmentOrder.has(b) ? adornmentOrder.get(b)! : -1;
      return aIndex - bIndex;
    });
    const html = [] as string[];

    for(const adornment of sortedAdornments) {
      const val = typeof adornment === "function"
        ? await adornment()
        : await adornment;
      val && html.push(val);
    }

    resolve(html.join(""));
  }
);

//#region select options

interface SelectOption<TValue = number | string> {
  value: TValue;
  label: string;
}

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
  colorLightness: (): SelectOption<ColorLightness>[] => [
    { value: "darker", label: t("color_lightness_darker") },
    { value: "normal", label: t("color_lightness_normal") },
    { value: "lighter", label: t("color_lightness_lighter") },
  ],
};

//#region rendering

/** Renders a long number with a thousands separator */
function renderLongNumberValue(val: string, maximumFractionDigits = 0) {
  return Number(val).toLocaleString(
    getLocale().replace(/_/g, "-"),
    {
      style: "decimal",
      maximumFractionDigits,
    }
  );
}

//#region features

/**
 * Contains all possible features with their default values and other configuration.  
 *   
 * **Required props:**
 * <!-------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property             | Description                                                                                                                      |
 * | :------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | `type`               | type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`                       |
 * | `category`           | category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`                                          |
 * | `default`            | default value of the feature - type of the value depends on the given `type`                                                     |
 * | `enable(value: any)` | (required if reloadRequired = false) - function that will be called when the feature is enabled / initialized for the first time |
 * 
 * 
 * **Optional props:**
 * <!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property                                                       | Description                                                                                                                                              |
 * | :------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `disable: (newValue: any) => void`                             | for type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function                       |
 * | `change: (key: string, prevValue: any, newValue: any)` => void | for types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed                                        |
 * | `click: () => void`                                            | for type `button` only - function that will be called when the button is clicked                                                                         |
 * | `helpText: string / () => string`                              | function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment: () => string / Promise<string>`                | function that returns an HTML string that will be appended to the text in the config menu as an adornment element                                        |
 * | `unit: string / (val: number) => string`                       | Only if type is `number` or `slider` - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added too!     |
 * | `min: number`                                                  | Only if type is `number` or `slider` - Overwrites the default of the `min` property of the HTML input element                                            |
 * | `max: number`                                                  | Only if type is `number` or `slider` - Overwrites the default of the `max` property of the HTML input element                                            |
 * | `step: number`                                                 | Only if type is `number` or `slider` - Overwrites the default of the `step` property of the HTML input element                                           |
 * | `options: SelectOption[] / () => SelectOption[]`               | Only if type is `select` - function that returns an array of objects with `value` and `label` properties                                                 |
 * | `reloadRequired: boolean`                                      | if true (default), the page needs to be reloaded for the changes to take effect - if false, `enable()` needs to be provided                              |
 * | `advanced: boolean`                                            | if true, the feature will only be shown if the advanced mode feature has been turned on                                                                  |
 * | `hidden: boolean`                                              | if true, the feature will not be shown in the settings - default is undefined (false)                                                                    |
 * | `valueHidden: boolean`                                         | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false)                             |
 * | `normalize: (val: any) => any`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations                          |
 * | `renderValue: (val: string) => string`                         | If provided, is used to render the value's label in the config menu                                                                                      |
 * 
 * TODO: go through all features and set as many as possible to reloadRequired = false
 */
export const featInfo = {
  //#region cat:layout
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
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
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
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
  },
  showVotes: {
    type: "toggle",
    category: "layout",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  showVotesFormat: {
    type: "select",
    category: "layout",
    options: () => [
      { value: "long", label: t("votes_format_full") },
      { value: "short", label: t("votes_format_short") },
    ],
    default: "short",
    reloadRequired: false,
    enable: noop,
  },
  // archived idea for future version
  // (shows a bar under the like/dislike buttons that shows the ratio of likes to dislikes)
  // showVoteRatio: {
  //   type: "select",
  //   category: "layout",
  //   options: () => [
  //     { value: "disabled", label: t("vote_ratio_disabled") },
  //     { value: "greenRed", label: t("vote_ratio_green_red") },
  //     { value: "blueGray", label: t("vote_ratio_blue_gray") },
  //   ],
  //   default: "disabled",
  //   textAdornment: adornments.reloadRequired,
  // },

  //#region cat:volume
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
    textAdornment: () => getFeature("volumeSharedBetweenTabs")
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
    textAdornment: () => getFeature("volumeSharedBetweenTabs")
      ? combineAdornments([adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reloadRequired])
      : adornments.reloadRequired(),
    reloadRequired: false,
    enable: noop,
  },

  //#region cat:song lists
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
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
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

  //#region cat:behavior
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
    helpText: () => tp("feature_helptext_rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
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
    min: 3,
    max: 30,
    step: 0.5,
    default: 10,
    unit: "s",
    advanced: true,
    textAdornment: adornments.advanced,
    reloadRequired: false,
    enable: noop,
  },

  //#region cat:input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  arrowKeySkipBy: {
    type: "slider",
    category: "input",
    min: 0.5,
    max: 30,
    step: 0.5,
    default: 5,
    unit: "s",
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
    advanced: true,
    textAdornment: adornments.advanced,
  },
  // TODO(v2.2):
  // autoLikePlayerBarToggleBtn: {
  //   type: "toggle",
  //   category: "input",
  //   default: false,
  //   textAdornment: adornments.reloadRequired,
  // },
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

  //#region cat:lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  errorOnLyricsNotFound: {
    type: "toggle",
    category: "lyrics",
    default: false,
    reloadRequired: false,
    enable: noop,
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
    default: 2000,
    min: 100,
    max: 10000,
    step: 100,
    unit: (val: number) => ` ${tp("unit_entries", val)}`,
    renderValue: renderLongNumberValue,
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
      const formattedEntries = entries.toLocaleString(getLocale().replace(/_/g, "-"), { style: "decimal", maximumFractionDigits: 0 });
      if(await showPrompt({ type: "confirm", message: tp("lyrics_clear_cache_confirm_prompt", entries, formattedEntries) })) {
        await clearLyricsCache();
        await showPrompt({ type: "alert", message: t("lyrics_clear_cache_success") });
      }
    },
    advanced: true,
    textAdornment: adornments.advanced,
  },
  // advancedLyricsFilter: {
  //   type: "toggle",
  //   category: "lyrics",
  //   default: false,
  //   change: () => setTimeout(async () => await showPrompt({ type: "confirm", message: t("lyrics_cache_changed_clear_confirm") }) && clearLyricsCache(), 200),
  //   advanced: true,
  //   textAdornment: adornments.experimental,
  //   reloadRequired: false,
  //   enable: noop,
  // },

  //#region cat:integrations
  disableDarkReaderSites: {
    type: "select",
    category: "integrations",
    options: options.siteSelectionOrNone,
    default: "all",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
  },
  sponsorBlockIntegration: {
    type: "toggle",
    category: "integrations",
    default: true,
    textAdornment: adornments.reloadRequired,
  },
  themeSongIntegration: {
    type: "toggle",
    category: "integrations",
    default: false,
    textAdornment: adornments.reloadRequired,
  },
  themeSongLightness: {
    type: "select",
    category: "integrations",
    options: options.colorLightness,
    default: "darker",
    textAdornment: adornments.reloadRequired,
  },

  //#region cat:general
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
    default: 4,
    step: 0.5,
    unit: "s",
    reloadRequired: false,
    advanced: true,
    textAdornment: adornments.advanced,
    enable: noop,
    change: () => showIconToast({
      message: t("example_toast"),
      iconSrc: getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`),
    }),
  },
  showToastOnGenericError: {
    type: "toggle",
    category: "general",
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reloadRequired]),
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
    textAdornment: () => getFeature("advancedMode") ? adornments.advanced() : undefined,
    change: (_key, prevValue, newValue) =>
      prevValue !== newValue &&
        emitSiteEvent("recreateCfgMenu"),
  },
} as const satisfies FeatureInfo;


function noop() {
  void 0;
}

void [noop];
