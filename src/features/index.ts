import { consumeStringGen, type StringGen } from "@sv443-network/userutils";
import { formatNumber, getLocale, getPreferredLocale, getResourceUrl, reloadTab, resourceAsString, t, tp } from "../utils/index.js";
import { clearLyricsCache, getLyricsCache } from "./lyricsCache.js";
import { doVersionCheck } from "./versionCheck.js";
import { getFeature, promptResetConfig } from "../config.js";
import { FeatureInfo, LogLevel, type ColorLightnessPref, type ResourceKey, type SiteSelection, type SiteSelectionOrNone } from "../types.js";
import { emitSiteEvent } from "../siteEvents.js";
import langMapping from "../../assets/locales.json" with { type: "json" };
import { showIconToast } from "../components/toast.js";
import { mode } from "../constants.js";
import { getStoreSerializer } from "../serializer.js";
import { getAutoLikeDialog } from "../dialogs/autoLike.js";
import { showPrompt } from "../dialogs/prompt.js";
import { getPluginListDialog } from "../dialogs/pluginList.js";

//#region re-exports

export * from "./layout.js";
export * from "./behavior.js";
export * from "./input.js";
export * from "./hotkeys.js";
export * from "./integrations.js";
export * from "./lyrics.js";
export * from "./lyricsCache.js";
export * from "./songLists.js";
export * from "./versionCheck.js";
export * from "./volume.js";

//#region misc

/** No-operation function used when `reloadRequired` is set to `false` to explicitly indicate that no `enable` function is needed */
const noop = () => void 0;

//#region adornments

type AdornmentFunc =
  | ((...args: any[]) => Promise<string | undefined>)
  | Promise<string | undefined>;

/** Creates an HTML string for the given adornment properties */
const getAdornHtml = async (className: string, title: StringGen | undefined, resource: ResourceKey, extraAttributes?: StringGen) => {
  title = title ? await consumeStringGen(title) : undefined;
  extraAttributes = extraAttributes ? await consumeStringGen(extraAttributes) : undefined;
  return `<span class="${className} bytm-adorn-icon" ${title ? `title="${title}" aria-label="${title}"` : ""}${extraAttributes ? ` ${extraAttributes}` : ""}>${await resourceAsString(resource) ?? ""}</span>`;
};

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

/** Decoration elements that can be added next to the label */
const adornments = {
  advanced: async () => getAdornHtml("bytm-advanced-mode-icon", t("advanced_feature"), "icon-advanced_mode"),
  experimental: async () => getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental"),
  globe: async () => getAdornHtml("bytm-locale-icon", undefined, "icon-globe_small"),
  alert: async (title: StringGen) => getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""),
  reload: async () => getFeature("advancedMode") ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined,
  ytmOnly: async () => getAdornHtml("bytm-ytm-only-icon", t("feature_only_works_on_ytm"), "icon-ytm"),
} as const satisfies Record<string, AdornmentFunc>;

/** Order of adornment elements in the {@linkcode combineAdornments()} function */
const adornmentOrder = new Map<AdornmentFunc, number>();
adornmentOrder.set(adornments.alert, 0);
adornmentOrder.set(adornments.experimental, 1);
adornmentOrder.set(adornments.ytmOnly, 2);
adornmentOrder.set(adornments.globe, 3);
adornmentOrder.set(adornments.reload, 4);
adornmentOrder.set(adornments.advanced, 5);

//#region select options

type SelectOption<TValue = number | string> = {
  value: TValue;
  label: string;
};

/** Common options for config items of type "select" */
const options = {
  siteSelection: () => [
    { value: "all", label: t("site_selection_both_sites") },
    { value: "yt", label: t("site_selection_only_yt") },
    { value: "ytm", label: t("site_selection_only_ytm") },
  ] satisfies SelectOption<SiteSelection>[],
  siteSelectionOrNone: () => [
    { value: "all", label: t("site_selection_both_sites") },
    { value: "yt", label: t("site_selection_only_yt") },
    { value: "ytm", label: t("site_selection_only_ytm") },
    { value: "none", label: t("site_selection_none") },
  ] satisfies SelectOption<SiteSelectionOrNone>[],
  locale: () => Object.entries(langMapping)
    .reduce((a, [locale, { name }]) => {
      return [...a, {
        value: locale,
        label: name,
      }];
    }, [] as SelectOption[])
    .sort((a, b) => a.label.localeCompare(b.label)),
  colorLightness: () => [
    { value: "darker", label: t("color_lightness_darker") },
    { value: "normal", label: t("color_lightness_normal") },
    { value: "lighter", label: t("color_lightness_lighter") },
  ] satisfies SelectOption<ColorLightnessPref>[],
} as const;

//#region # features

/**
 * Contains all possible features with their default values and other configuration.  
 *   
 * **Required props:**
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------>
 * | Property                       | Description                                                                                                                      |
 * | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | `type: string`                 | Type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`                       |
 * | `category: string`             | Category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`                                          |
 * | `default: unknown`             | Default value of the feature - type of the value depends on the given `type`                                                     |
 * | `enable(value: unknown): void` | (required if reloadRequired = false) - function that will be called when the feature is enabled / initialized for the first time |
 * | `supportedSites: Domain[]`     | On which sites the feature is available - values can be `"yt"` or `"ytm"`                                                        |
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------>
 * 
 * 
 * **Optional props:**
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property                                                           | Description                                                                                                                                         |
 * | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------|
 * | `disable(newValue: unknown): void`                                 | For type `toggle` only - function that will be called when the feature is disabled - can be a synchronous or asynchronous function                  |
 * | `change(key: string, prevValue: unknown, newValue: unknown): void` | For types `number`, `select`, `slider` and `hotkey` only - function that will be called when the value is changed                                   |
 * | `click(): void`                                                    | For type `button` only - function that will be called when the button is clicked                                                                    |
 * | `helpText: string \| () => string`                                 | Function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext_featureKey` will be used instead, if available |
 * | `textAdornment(): string \| Promise<string>`                       | Function that returns an HTML string that will be appended to the text in the config menu as an adornment element                                   |
 * | `unit: string \| (val: number) => string`                          | For types `number` or `slider` only - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added too! |
 * | `min: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `min` property of the HTML input element                                        |
 * | `max: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `max` property of the HTML input element                                        |
 * | `step: number`                                                     | For types `number` or `slider` only - Overwrites the default of the `step` property of the HTML input element                                       |
 * | `options: SelectOption[] \| () => SelectOption[]`                  | For type `select` only - function that returns an array of objects with `value` and `label` properties                                              |
 * | `reloadRequired: boolean`                                          | If true (default), the page needs to be reloaded for the changes to take effect - if false, `enable()` needs to be provided                         |
 * | `advanced: boolean`                                                | If true, the feature will only be shown if the advanced mode feature has been turned on                                                             |
 * | `hidden: boolean`                                                  | If true, the feature will not be shown in the settings - default is undefined (false)                                                               |
 * | `valueHidden: boolean`                                             | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false)                        |
 * | `normalize(val: unknown): unknown`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations                     |
 * | `renderValue(val: string): string`                                 | If provided, is used to render the value's label in the config menu                                                                                 |
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * 
 * TODO: go through all features and set as many as possible to reloadRequired = false
 */
export const featInfo = {
  //#region cat:layout
  watermarkEnabled: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  removeShareTrackingParam: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm", "yt"],
    default: true,
    textAdornment: adornments.reload,
  },
  removeShareTrackingParamSites: {
    type: "select",
    category: "layout",
    supportedSites: ["ytm", "yt"],
    options: options.siteSelection,
    default: "all",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced, adornments.reload]),
  },
  thumbnailOverlayBehavior: {
    type: "select",
    category: "layout",
    supportedSites: ["ytm"],
    options: () => [
      { value: "songsOnly", label: t("thumbnail_overlay_behavior_songs_only") },
      { value: "videosOnly", label: t("thumbnail_overlay_behavior_videos_only") },
      { value: "always", label: t("thumbnail_overlay_behavior_always") },
      { value: "never", label: t("thumbnail_overlay_behavior_never") },
    ],
    default: "songsOnly",
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  thumbnailOverlayToggleBtnShown: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  thumbnailOverlayShowIndicator: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  thumbnailOverlayIndicatorOpacity: {
    type: "slider",
    category: "layout",
    supportedSites: ["ytm"],
    min: 5,
    max: 100,
    step: 5,
    default: 40,
    unit: "%",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced, adornments.reload]),
  },
  hideCursorOnIdle: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  hideCursorOnIdleDelay: {
    type: "slider",
    category: "layout",
    supportedSites: ["ytm"],
    min: 0.5,
    max: 10,
    step: 0.25,
    default: 2,
    unit: "s",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
    reloadRequired: false,
    enable: noop,
  },
  fixHdrIssues: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced, adornments.reload]),
  },
  showVotes: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  watchPageFullSize: {
    type: "toggle",
    category: "layout",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  // archived idea for future version (shows a bar under the like/dislike buttons that shows the ratio of likes to dislikes):
  // showVoteRatio: {
  //   type: "select",
  //   category: "layout",
  //   supportedSites: ["ytm"],
  //   options: () => [
  //     { value: "disabled", label: t("vote_ratio_disabled") },
  //     { value: "greenRed", label: t("vote_ratio_green_red") },
  //     { value: "blueGray", label: t("vote_ratio_blue_gray") },
  //   ],
  //   default: "disabled",
  //   textAdornment: adornments.reload,
  // },

  //#region cat:volume
  volumeSliderLabel: {
    type: "toggle",
    category: "volume",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  volumeSliderSize: {
    type: "number",
    category: "volume",
    supportedSites: ["ytm"],
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  volumeSliderStep: {
    type: "slider",
    category: "volume",
    supportedSites: ["ytm"],
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  volumeSliderScrollStep: {
    type: "slider",
    category: "volume",
    supportedSites: ["ytm"],
    min: 1,
    max: 25,
    default: 4,
    unit: "%",
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  volumeSharedBetweenTabs: {
    type: "toggle",
    category: "volume",
    supportedSites: ["ytm"],
    default: false,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  setInitialTabVolume: {
    type: "toggle",
    category: "volume",
    supportedSites: ["ytm"],
    default: false,
    textAdornment: () => getFeature("volumeSharedBetweenTabs")
      ? combineAdornments([adornments.ytmOnly, adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload])
      : combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  initialTabVolumeLevel: {
    type: "slider",
    category: "volume",
    supportedSites: ["ytm"],
    min: 0,
    max: 100,
    step: 1,
    default: 100,
    unit: "%",
    textAdornment: () => getFeature("volumeSharedBetweenTabs")
      ? combineAdornments([adornments.ytmOnly, adornments.alert(t("feature_warning_setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload])
      : combineAdornments([adornments.ytmOnly, adornments.reload]),
    reloadRequired: false,
    enable: noop,
  },

  //#region cat:song lists
  lyricsQueueButton: {
    type: "toggle",
    category: "songLists",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  deleteFromQueueButton: {
    type: "toggle",
    category: "songLists",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  listButtonsPlacement: {
    type: "select",
    category: "songLists",
    supportedSites: ["ytm"],
    options: () => [
      { value: "queueOnly", label: t("list_button_placement_queue_only") },
      { value: "everywhere", label: t("list_button_placement_everywhere") },
    ],
    default: "everywhere",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced, adornments.reload]),
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    category: "songLists",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  clearQueueBtn: {
    type: "toggle",
    category: "songLists",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  aboveQueueBtnsSticky: {
    type: "toggle",
    category: "songLists",
    supportedSites: ["ytm"],
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced, adornments.reload]),
  },

  //#region cat:behavior
  disableBeforeUnloadPopup: {
    type: "toggle",
    category: "behavior",
    supportedSites: ["ytm", "yt"],
    default: false,
    textAdornment: adornments.reload,
  },
  autoCloseToasts: {
    type: "toggle",
    category: "behavior",
    supportedSites: ["ytm", "yt"],
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  closeToastsTimeout: {
    type: "slider",
    category: "behavior",
    supportedSites: ["ytm", "yt"],
    min: 0.5,
    max: 20,
    step: 0.5,
    default: 3,
    unit: "s",
    reloadRequired: false,
    enable: noop,
  },
  rememberSongTime: {
    type: "toggle",
    category: "behavior",
    supportedSites: ["ytm", "yt"],
    default: true,
    helpText: () => tp("feature_helptext_rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
    textAdornment: adornments.reload,
  },
  rememberSongTimeSites: {
    type: "select",
    category: "behavior",
    supportedSites: ["ytm", "yt"],
    options: options.siteSelection,
    default: "all",
    textAdornment: adornments.reload,
  },
  rememberSongTimeDuration: {
    type: "number",
    category: "behavior",
    supportedSites: ["ytm", "yt"],
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
    supportedSites: ["ytm", "yt"],
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
    supportedSites: ["ytm", "yt"],
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
  autoScrollToActiveSongMode: {
    type: "select",
    category: "behavior",
    supportedSites: ["ytm"],
    options: () => [
      { value: "never", label: t("auto_scroll_to_active_song_mode_never") },
      { value: "initialPageLoad", label: t("auto_scroll_to_active_song_mode_initial_page_load") },
      { value: "videoChangeAll", label: t("auto_scroll_to_active_song_mode_video_change_all") },
      { value: "videoChangeManual", label: t("auto_scroll_to_active_song_mode_video_change_manual") },
      { value: "videoChangeAuto", label: t("auto_scroll_to_active_song_mode_video_change_auto") },
    ],
    default: "videoChangeManual",
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },

  //#region cat:input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    supportedSites: ["ytm"],
    default: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  arrowKeySkipBy: {
    type: "slider",
    category: "input",
    supportedSites: ["ytm"],
    min: 0.5,
    max: 30,
    step: 0.5,
    default: 5,
    unit: "s",
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  arrowKeyVolumeStep: {
    type: "slider",
    category: "input",
    supportedSites: ["ytm"],
    min: 1,
    max: 25,
    step: 1,
    default: 2,
    unit: "%",
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  frameSkip: {
    type: "toggle",
    category: "input",
    supportedSites: ["ytm"],
    default: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  frameSkipWhilePlaying: {
    type: "toggle",
    category: "input",
    supportedSites: ["ytm"],
    default: false,
    reloadRequired: false,
    enable: noop,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
  },
  frameSkipAmount: {
    type: "number",
    category: "input",
    supportedSites: ["ytm"],
    min: 0,
    max: 1,
    step: 0.0001,
    default: 0.0417,
    reloadRequired: false,
    enable: noop,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
  },
  anchorImprovements: {
    type: "toggle",
    category: "input",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  numKeysSkipToTime: {
    type: "toggle",
    category: "input",
    supportedSites: ["ytm"],
    default: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  autoLikeChannels: {
    type: "toggle",
    category: "input",
    supportedSites: ["ytm", "yt"],
    default: true,
    textAdornment: adornments.reload,
  },
  autoLikeChannelToggleBtn: {
    type: "toggle",
    category: "input",
    supportedSites: ["ytm", "yt"],
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
  //   textAdornment: adornments.reload,
  // },
  autoLikeTimeout: {
    type: "slider",
    category: "input",
    supportedSites: ["ytm", "yt"],
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
    supportedSites: ["ytm", "yt"],
    default: true,
    reloadRequired: false,
    advanced: true,
    enable: noop,
    textAdornment: adornments.advanced,
  },
  autoLikeOpenMgmtDialog: {
    type: "button",
    category: "input",
    supportedSites: ["ytm", "yt"],
    click: () => getAutoLikeDialog().then(d => d.open()),
  },

  //#region cat:hotkeys

  switchBetweenSites: {
    type: "toggle",
    category: "hotkeys",
    supportedSites: ["ytm", "yt"],
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  switchSitesHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm", "yt"],
    default: {
      code: "F9",
      shift: false,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
  },
  likeDislikeHotkeys: {
    type: "toggle",
    category: "hotkeys",
    supportedSites: ["ytm", "yt"],
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  likeHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm", "yt"],
    default: {
      code: "KeyL",
      shift: false,
      ctrl: false,
      alt: true,
    },
    reloadRequired: false,
    enable: noop,
  },
  dislikeHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm", "yt"],
    default: {
      code: "KeyL",
      shift: false,
      ctrl: true,
      alt: true,
    },
    reloadRequired: false,
    enable: noop,
  },
  currentLyricsHotkeyEnabled: {
    type: "toggle",
    category: "hotkeys",
    supportedSites: ["ytm"],
    default: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  currentLyricsHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm"],
    default: {
      code: "KeyO",
      shift: false,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  skipToRemTimeHotkeyEnabled: {
    type: "toggle",
    category: "hotkeys",
    supportedSites: ["ytm", "yt"],
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  skipToRemTimeHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm", "yt"],
    default: {
      code: "KeyR",
      shift: false,
      ctrl: false,
      alt: true,
    },
    reloadRequired: false,
    enable: noop,
  },
  rebindNextAndPrevious: {
    type: "toggle",
    category: "hotkeys",
    supportedSites: ["ytm"],
    default: false,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  nextHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm"],
    default: {
      code: "KeyN",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  previousHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm"],
    default: {
      code: "KeyP",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  rebindPlayPause: {
    type: "toggle",
    category: "hotkeys",
    supportedSites: ["ytm"],
    default: false,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  playPauseHotkey: {
    type: "hotkey",
    category: "hotkeys",
    supportedSites: ["ytm"],
    default: {
      code: "Pause",
      shift: false,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },

  //#region cat:lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    supportedSites: ["ytm"],
    default: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  errorOnLyricsNotFound: {
    type: "toggle",
    category: "lyrics",
    supportedSites: ["ytm"],
    default: false,
    reloadRequired: false,
    enable: noop,
    textAdornment: adornments.ytmOnly,
  },
  geniUrlBase: {
    type: "text",
    category: "lyrics",
    supportedSites: ["ytm"],
    default: "https://api.sv443.net/geniurl",
    normalize: (val: string) => val.trim().replace(/\/+$/, ""),
    advanced: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
  },
  geniUrlToken: {
    type: "text",
    category: "lyrics",
    supportedSites: ["ytm"],
    valueHidden: true,
    default: "",
    normalize: (val: string) => val.trim(),
    advanced: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
  },
  lyricsCacheMaxSize: {
    type: "slider",
    category: "lyrics",
    supportedSites: ["ytm"],
    default: 5000,
    min: 1000,
    max: 25_000,
    step: 500,
    unit: (val: number) => ` ${tp("unit_entries", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    advanced: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
  },
  lyricsCacheTTL: {
    type: "slider",
    category: "lyrics",
    supportedSites: ["ytm"],
    default: 21,
    min: 1,
    max: 100,
    step: 1,
    unit: (val: number) => ` ${tp("unit_days", val)}`,
    advanced: true,
    reloadRequired: false,
    enable: noop,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
  },
  clearLyricsCache: {
    type: "button",
    category: "lyrics",
    supportedSites: ["ytm"],
    async click() {
      const entries = getLyricsCache().length;
      const formattedEntries = entries.toLocaleString(getLocale(), { style: "decimal", maximumFractionDigits: 0 });
      if(await showPrompt({ type: "confirm", message: tp("lyrics_clear_cache_confirm_prompt", entries, formattedEntries) })) {
        await clearLyricsCache();
        await showPrompt({ type: "alert", message: t("lyrics_clear_cache_success") });
      }
    },
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced]),
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
    supportedSites: ["ytm", "yt"],
    options: options.siteSelectionOrNone,
    default: "all",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
  },
  sponsorBlockIntegration: {
    type: "toggle",
    category: "integrations",
    supportedSites: ["ytm"],
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.advanced, adornments.reload]),
  },
  themeSongIntegration: {
    type: "toggle",
    category: "integrations",
    supportedSites: ["ytm"],
    default: false,
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },
  themeSongLightness: {
    type: "select",
    category: "integrations",
    supportedSites: ["ytm"],
    options: options.colorLightness,
    default: "darker",
    textAdornment: () => combineAdornments([adornments.ytmOnly, adornments.reload]),
  },

  //#region cat:plugins
  openPluginList: {
    type: "button",
    category: "plugins",
    supportedSites: ["ytm", "yt"],
    default: undefined,
    click: () => getPluginListDialog().then(d => d.open()),
  },
  initTimeout: {
    type: "number",
    category: "plugins",
    supportedSites: ["ytm", "yt"],
    min: 3,
    max: 30,
    default: 8,
    step: 0.1,
    unit: "s",
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
  },

  //#region cat:general
  locale: {
    type: "select",
    category: "general",
    supportedSites: ["ytm", "yt"],
    options: options.locale,
    default: getPreferredLocale(),
    textAdornment: () => combineAdornments([adornments.globe, adornments.reload]),
  },
  localeFallback: {
    type: "toggle",
    category: "general",
    supportedSites: ["ytm", "yt"],
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
  },
  versionCheck: {
    type: "toggle",
    category: "general",
    supportedSites: ["ytm", "yt"],
    default: true,
    textAdornment: adornments.reload,
  },
  checkVersionNow: {
    type: "button",
    category: "general",
    supportedSites: ["ytm", "yt"],
    click: () => doVersionCheck(true),
  },
  numbersFormat: {
    type: "select",
    category: "general",
    supportedSites: ["ytm", "yt"],
    options: () => [
      { value: "long", label: `${formatNumber(12_345_678, "long")} (${t("votes_format_long")})` },
      { value: "short", label: `${formatNumber(12_345_678, "short")} (${t("votes_format_short")})` },
    ],
    default: "short",
    reloadRequired: false,
    enable: noop,
  },
  toastDuration: {
    type: "slider",
    category: "general",
    supportedSites: ["ytm", "yt"],
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
    supportedSites: ["ytm", "yt"],
    default: true,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
  },
  resetConfig: {
    type: "button",
    category: "general",
    supportedSites: ["ytm", "yt"],
    click: promptResetConfig,
    textAdornment: adornments.reload,
  },
  resetEverything: {
    type: "button",
    category: "general",
    supportedSites: ["ytm", "yt"],
    click: async () => {
      if(await showPrompt({
        type: "confirm",
        message: t("reset_everything_confirm"),
      })) {
        await getStoreSerializer().resetStoresData();
        const gmKeys = await GM.listValues();
        await Promise.allSettled(gmKeys.map(key => GM.deleteValue(key)));
        await reloadTab();
      }
    },
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
  },
  logLevel: {
    type: "select",
    category: "general",
    supportedSites: ["ytm", "yt"],
    options: () => [
      { value: LogLevel.Debug, label: t("log_level_debug") },
      { value: LogLevel.Info, label: t("log_level_info") },
    ],
    default: LogLevel.Info,
    advanced: true,
    textAdornment: () => combineAdornments([adornments.advanced, adornments.reload]),
  },
  advancedMode: {
    type: "toggle",
    category: "general",
    supportedSites: ["ytm", "yt"],
    default: false,
    change: (_key, prevValue, newValue) => prevValue !== newValue && emitSiteEvent("recreateCfgMenu"),
    textAdornment: () => getFeature("advancedMode") ? adornments.advanced() : undefined,
  },
} as const satisfies FeatureInfo;
