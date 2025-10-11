import { consumeStringGen, DatedError, type StringGen } from "@sv443-network/coreutils";
import { compare as compareVer } from "compare-versions";
import { error, formatNumber, getErrorDialog, getLocale, getPreferredLocale, getResourceUrl, getVersionSessionCount, reloadTab, resourceAsString, t, tp } from "../utils/index.js";
import { clearLyricsCache, getLyricsCache } from "./lyricsCache.js";
import { doVersionCheck } from "./versionCheck.js";
import { getFeature, promptResetConfig } from "../config.js";
import { FeatureInfo, LogLevel, type AdornFunc, type ColorLightnessPref, type FeatureCategory, type FeatureConfig, type FeatureKey, type ResourceKey, type SiteSelection, type SiteSelectionOrNone } from "../types.js";
import { emitSiteEvent } from "../siteEvents.js";
import langMapping from "../../assets/locales.json" with { type: "json" };
import { closeToast, showIconToast } from "../components/toast.js";
import { mode, scriptInfo } from "../constants.js";
import { getDSSerializer } from "../serializers.js";
import { getAutoLikeDialog } from "../dialogs/autoLike.js";
import { showPrompt } from "../dialogs/prompt.js";
import { getPluginListDialog } from "../dialogs/pluginList.js";

//#region re-exports

export * from "./autoLike.js";
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

class ExampleError extends DatedError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ExampleError";
  }
}

//#region adornments

/** Decoration elements that can be added next to the label */
const adornments = {
  alert: async (title: StringGen) => getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\""),
  experimental: async () => getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental"),
  ytmOnly: async () => getAdornHtml("bytm-ytm-only-icon", t("feature_only_works_on_ytm"), "icon-ytm"),
  globe: async () => getAdornHtml("bytm-locale-icon", undefined, "icon-globe_small"),
  reload: async () => getFeature("advancedMode") ? getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload") : undefined,
  advanced: async () => getAdornHtml("bytm-advanced-mode-icon", t("advanced_feature"), "icon-advanced_mode"),
  newFeature: async () => getAdornHtml("bytm-new-feature-icon", t("feature_is_new"), "icon-new"),
} as const satisfies Record<string, AdornFunc>;

/** Order of adornment elements in the {@linkcode combineAdornments()} function */
const adornmentOrder = new Map<AdornFunc, number>();
adornmentOrder.set(adornments.alert, 0);
adornmentOrder.set(adornments.experimental, 1);
adornmentOrder.set(adornments.ytmOnly, 2);
adornmentOrder.set(adornments.globe, 3);
adornmentOrder.set(adornments.reload, 4);
adornmentOrder.set(adornments.advanced, 5);
adornmentOrder.set(adornments.newFeature, 6);

/** Creates an HTML string for the given adornment properties */
const getAdornHtml = async (className: string, title: StringGen | undefined, resource: ResourceKey, extraAttributes?: StringGen) => {
  title = title ? await consumeStringGen(title) : undefined;
  extraAttributes = extraAttributes ? await consumeStringGen(extraAttributes) : undefined;
  return `<span class="${className} bytm-adorn-icon" ${title ? `title="${title}" aria-label="${title}"` : ""}${extraAttributes ? ` ${extraAttributes}` : ""}>${await resourceAsString(resource) ?? ""}</span>`;
};

/**
 * Resolves the adornments property from a {@linkcode featInfo} entry and returns an array of HTML strings.  
 * Also adds conditional adornments like the "new feature" adornment.
 */
export async function resolveAdornments(ftInfo: FeatureInfo, featKey: FeatureKey): Promise<string[]> {
  const feat = ftInfo[featKey];
  let adorns = feat.adornments;

  if(typeof adorns === "function")
    adorns = adorns();

  const isDev = mode === "development";
  const resolvedAdorns = adorns ? [...adorns] : [];

  if(feat.since && compareVer(feat.since, scriptInfo.version, isDev ? ">" : "=") && (getVersionSessionCount() < 5 || isDev))
    resolvedAdorns.push(adornments.newFeature);

  const sortedAdorns = resolvedAdorns.sort((a, b) => {
    const aIdx = adornmentOrder.has(a) ? adornmentOrder.get(a)! : 0;
    const bIdx = adornmentOrder.has(b) ? adornmentOrder.get(b)! : 0;
    return aIdx - bIdx;
  });

  const htmlStrings = await Promise.all(sortedAdorns.map(adorn => typeof adorn === "function" ? adorn() : adorn));
  return htmlStrings.filter(Boolean) as string[];
}

//#region select options

type SelectOption<TValue = number | string> = {
  value: TValue;
  label: string;
};

const removeEmoji = (str: string) => str.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, "").trim();

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
    .reduce((a, [locale, { name, emoji }]) => {
      return [...a, {
        value: locale,
        label: `${emoji} ${name}${mode === "development" || getFeature("advancedMode") ? ` [${locale}]` : ""}`,
      }];
    }, [] as SelectOption[])
    .sort((a, b) => removeEmoji(a.label).localeCompare(removeEmoji(b.label))),
  colorLightness: () => [
    { value: "darker", label: t("color_lightness_darker") },
    { value: "normal", label: t("color_lightness_normal") },
    { value: "lighter", label: t("color_lightness_lighter") },
  ] satisfies SelectOption<ColorLightnessPref>[],
  thumbOverlaySources: () => [
    { value: "am", label: t("thumbnail_overlay.source_am") },
    { value: "yt", label: t("thumbnail_overlay.source_yt") },
  ] satisfies SelectOption<FeatureConfig["thumbnailOverlayPreferredSource"]>[],
  songListType: () => [
    { value: "currentQueue", label: t("list_button_placement_queue_only") },
    { value: "genericLists", label: t("list_button_placement_generic_lists") },
    { value: "everywhere", label: t("list_button_placement_everywhere") },
  ] satisfies SelectOption<FeatureConfig["songListTrackNumbers"]>[],
} as const;

//#region # features

/** List of categories that are related to each other and can be grouped together in the config menu */
export const groupedCategories: FeatureCategory[][] = [
  ["general", "layout", "songLists", "lyrics", "volume"],
  ["behavior", "autoLike", "input", "hotkeys"],
  ["integrations", "plugins"],
];

/**
 * Contains all possible features with their default values and other configuration.  
 *   
 * **Required props:**
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------>
 * | Property                       | Description                                                                                                                      |
 * | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | `type: string`                 | Type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`                       |
 * | `category: string`             | Category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`                                          |
 * | `group: string`                | Shared group name for features related to each other - usually the name of the "main feature" - used to group features in the config menu - should not be used across categories! |
 * | `supportedSites: Domain[]`     | On which sites the feature is available - values can be `"yt"` or `"ytm"`                                                        |
 * | `since: string`                | Semver version since when this feature key was added - adds a "new" adornment to the config menu item for a while                |
 * | `default: unknown`             | Default value of the feature - type of the value depends on the given `type`                                                     |
 * | `enable(value: unknown): void` | (required if reloadRequired = false) - function that will be called when the feature is enabled / initialized for the first time |
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
 * | `helpText: string \| () => string`                                 | Function that returns an HTML string or the literal string itself that will be the help text for this feature - writing as function is useful for pluralizing or inserting values into the translation at runtime - if not set, translation with key `feature_helptext.<featKey>` will be used instead, if available |
 * | `adornments: AdornFunc[] | (() => AdornFunc[])`                    | Array of functions that return HTML strings that will be prepended to the label of the feature in the config menu - used to add icons               |
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
 */
export const featInfo = {
  //#region cat:general
  locale: {
    type: "select",
    category: "general",
    group: "locale",
    supportedSites: ["ytm", "yt"],
    since: "1.0.0",
    options: options.locale,
    default: getPreferredLocale(),
    adornments: [adornments.globe, adornments.reload],
  },
  localeFallback: {
    type: "toggle",
    category: "general",
    group: "locale",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    default: true,
    advanced: true,
    adornments: [adornments.advanced, adornments.reload],
  },
  versionCheck: {
    type: "toggle",
    category: "general",
    group: "versionCheck",
    supportedSites: ["ytm", "yt"],
    since: "1.1.0",
    default: true,
    adornments: [adornments.reload],
  },
  checkVersionNow: {
    type: "button",
    category: "general",
    group: "versionCheck",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    click: () => doVersionCheck(true),
  },
  numbersFormat: {
    type: "select",
    category: "general",
    group: "numbersFormat",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
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
    group: "toasts",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
    min: 0,
    max: 15,
    default: 4,
    step: 0.5,
    renderValue: (val) => Number(val) === 0 ? t("toggled_off") : `${val}s`,
    reloadRequired: false,
    enable: noop,
    change: (_k, _iV, newVal) => newVal === 0
      ? closeToast()
      : showIconToast({
        message: t("example_toast"),
        iconSrc: getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`),
      }).then(() => getFeature("toastDuration") === 0 ? closeToast() : void 0),
  },
  showToastOnGenericError: {
    type: "toggle",
    category: "general",
    group: "toasts",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0-preview.1",
    default: true,
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.advanced],
    change: (_k, _iV, newVal) => newVal ? error("Test error", new ExampleError("Example")) : void 0,
  },
  initTimeout: {
    type: "number",
    category: "general",
    group: "init",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
    min: mode === "development" ? 0.1 : 3,
    max: 10,
    default: 5,
    step: 0.1,
    unit: "s",
    advanced: true,
    adornments: [adornments.advanced, adornments.reload],
  },
  resetConfig: {
    type: "button",
    category: "general",
    group: "resetData",
    supportedSites: ["ytm", "yt"],
    since: "3.0.0",
    click: promptResetConfig,
    adornments: [adornments.reload],
  },
  resetEverything: {
    type: "button",
    category: "general",
    group: "resetData",
    supportedSites: ["ytm", "yt"],
    since: "2.2.0",
    click: async () => {
      if(await showPrompt({
        type: "confirm",
        message: t("reset_everything_confirm"),
      })) {
        await getDSSerializer().resetStoresData();
        const gmKeys = await GM.listValues();
        await Promise.allSettled(gmKeys.map(key => GM.deleteValue(key)));
        await reloadTab();
      }
    },
    advanced: true,
    adornments: [adornments.advanced, adornments.reload],
  },
  logLevel: {
    type: "select",
    category: "general",
    group: "logLevel",
    supportedSites: ["ytm", "yt"],
    since: "1.0.0",
    options: () => [
      { value: LogLevel.Debug, label: t("log_level_debug") },
      { value: LogLevel.Info, label: t("log_level_info") },
    ],
    default: LogLevel.Info,
    advanced: true,
    adornments: [adornments.advanced, adornments.reload],
  },
  advancedMode: {
    type: "toggle",
    category: "general",
    group: "advancedMode",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    default: false,
    change: (_key, prevValue, newValue) => prevValue !== newValue && emitSiteEvent("recreateCfgMenu"),
  },

  //#region cat:layout
  watermarkEnabled: {
    type: "toggle",
    category: "layout",
    group: "watermarkEnabled",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  removeShareTrackingParam: {
    type: "toggle",
    category: "layout",
    group: "removeShareTrackingParam",
    supportedSites: ["ytm", "yt"],
    since: "1.0.0",
    default: true,
    adornments: [adornments.reload],
  },
  removeShareTrackingParamSites: {
    type: "select",
    category: "layout",
    group: "removeShareTrackingParam",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    options: options.siteSelection,
    default: "all",
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.advanced],
  },
  fixSpacing: {
    type: "toggle",
    category: "layout",
    group: "fixSpacing",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    advanced: true,
    adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
  },
  thumbnailOverlayBehavior: {
    type: "select",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "2.0.0",
    options: () => [
      { value: "songsOnly", label: t("thumbnail_overlay.behavior_songs_only") },
      { value: "videosOnly", label: t("thumbnail_overlay.behavior_videos_only") },
      { value: "always", label: t("thumbnail_overlay.behavior_always") },
      { value: "never", label: t("thumbnail_overlay.behavior_never") },
    ],
    default: "songsOnly",
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  thumbnailOverlayToggleBtnShown: {
    type: "toggle",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  thumbnailOverlayITunesImgRes: {
    type: "slider",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: 2000,
    min: 100,
    max: 5000,
    step: 100,
    renderValue: (n: string) => `${n}x${n}`,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  thumbnailOverlayAlbumArtCacheMaxSize: {
    type: "slider",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "3.1.0",
    default: 2000,
    min: 500,
    max: 10_000,
    step: 250,
    unit: (val: number) => ` ${tp("unit_entries", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    reloadRequired: false,
    advanced: true,
    enable: noop,
    adornments: [adornments.advanced, adornments.ytmOnly],
  },
  thumbnailOverlayAlbumArtCacheTTL: {
    type: "slider",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "3.1.0",
    default: 30,
    min: 5,
    max: 100,
    step: 1,
    unit: (val: number) => ` ${tp("unit_days", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    reloadRequired: false,
    advanced: true,
    enable: noop,
    adornments: [adornments.advanced, adornments.ytmOnly],
  },
  thumbnailOverlayShowIndicator: {
    type: "toggle",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  thumbnailOverlayIndicatorOpacity: {
    type: "slider",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "2.0.0",
    min: 5,
    max: 100,
    step: 5,
    default: 40,
    unit: "%",
    advanced: true,
    adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
  },
  thumbnailOverlayPreferredSource: {
    type: "select",
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    since: "3.1.0",
    default: "am",
    options: options.thumbOverlaySources,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  hideCursorOnIdle: {
    type: "toggle",
    category: "layout",
    group: "hideCursorOnIdle",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  hideCursorOnIdleDelay: {
    type: "slider",
    category: "layout",
    group: "hideCursorOnIdle",
    supportedSites: ["ytm"],
    since: "2.0.0",
    min: 0.5,
    max: 10,
    step: 0.25,
    default: 2,
    unit: "s",
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  fixHdrIssues: {
    type: "toggle",
    category: "layout",
    group: "fixHdrIssues",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: true,
    advanced: true,
    adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
  },
  showVotes: {
    type: "toggle",
    category: "layout",
    group: "votes",
    supportedSites: ["ytm"],
    since: "2.1.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  swapLikeDislikeButtons: {
    type: "toggle",
    category: "layout",
    group: "votes",
    supportedSites: ["ytm", "yt"],
    since: "3.1.0",
    default: false,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  watchPageFullSize: {
    type: "toggle",
    category: "layout",
    group: "watchPageFullSize",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  // archived idea for future version (shows a bar under the like/dislike buttons that shows the ratio of likes to dislikes):
  // showVoteRatio: {
  //   type: "select",
  //   category: "layout",
  //   group: "showVoteRatio",
  //   supportedSites: ["ytm"],
  //   since: "x.x.x",
  //   options: () => [
  //     { value: "disabled", label: t("vote_ratio_disabled") },
  //     { value: "greenRed", label: t("vote_ratio_green_red") },
  //     { value: "blueGray", label: t("vote_ratio_blue_gray") },
  //   ],
  //   default: "disabled",
  //   adornments: [adornments.reload],
  // },

  //#region cat:song lists
  lyricsQueueButton: {
    type: "toggle",
    category: "songLists",
    group: "queueButtons",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  deleteFromQueueButton: {
    type: "toggle",
    category: "songLists",
    group: "queueButtons",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  listButtonsPlacement: {
    type: "select",
    category: "songLists",
    group: "queueButtons",
    supportedSites: ["ytm"],
    since: "1.1.0",
    options: options.songListType,
    default: "everywhere",
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  scrollToActiveSongBtn: {
    type: "toggle",
    category: "songLists",
    group: "aboveQueueButtons",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  clearQueueBtn: {
    type: "toggle",
    category: "songLists",
    group: "aboveQueueButtons",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  aboveQueueBtnsSticky: {
    type: "toggle",
    category: "songLists",
    group: "aboveQueueButtons",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: true,
    advanced: true,
    adornments: [adornments.ytmOnly, adornments.advanced, adornments.reload],
  },
  songListTrackNumbersEnabled: {
    type: "toggle",
    category: "songLists",
    group: "songListTrackNumbers",
    supportedSites: ["ytm"],
    since: "3.1.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  songListTrackNumbers: {
    type: "select",
    category: "songLists",
    group: "songListTrackNumbers",
    supportedSites: ["ytm"],
    since: "3.1.0",
    options: options.songListType,
    default: "genericLists",
    adornments: [adornments.ytmOnly, adornments.reload],
  },

  //#region cat:lyrics
  geniusLyrics: {
    type: "toggle",
    category: "lyrics",
    group: "geniusLyrics",
    supportedSites: ["ytm"],
    since: "0.2.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  errorOnLyricsNotFound: {
    type: "toggle",
    category: "lyrics",
    group: "geniusLyrics",
    supportedSites: ["ytm"],
    since: "2.1.0-preview.1",
    default: false,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  geniUrlBase: {
    type: "text",
    category: "lyrics",
    group: "geniURL",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: "https://api.sv443.net/geniurl",
    normalize: (val: string) => val.trim().replace(/\/+$/, ""),
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  geniUrlToken: {
    type: "text",
    category: "lyrics",
    group: "geniURL",
    supportedSites: ["ytm"],
    since: "2.0.0",
    valueHidden: true,
    default: "",
    normalize: (val: string) => val.trim(),
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  lyricsCacheMaxSize: {
    type: "slider",
    category: "lyrics",
    group: "lyricsCache",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: 5000,
    min: 1000,
    max: 25_000,
    step: 500,
    unit: (val: number) => ` ${tp("unit_entries", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  lyricsCacheTTL: {
    type: "slider",
    category: "lyrics",
    group: "lyricsCache",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: 30,
    min: 5,
    max: 100,
    step: 1,
    unit: (val: number) => ` ${tp("unit_days", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    advanced: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  clearLyricsCache: {
    type: "button",
    category: "lyrics",
    group: "lyricsCache",
    supportedSites: ["ytm"],
    since: "2.0.0",
    async click() {
      const entries = getLyricsCache().length;
      const formattedEntries = entries.toLocaleString(getLocale(), { style: "decimal", maximumFractionDigits: 0 });
      if(await showPrompt({ type: "confirm", message: tp("lyrics_clear_cache_confirm_prompt", entries, formattedEntries) })) {
        await clearLyricsCache();
        await showPrompt({ type: "alert", message: t("lyrics_clear_cache_success") });
      }
    },
    advanced: true,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  // scrapped feature, maybe will be re-added in the future:
  // advancedLyricsFilter: {
  //   type: "toggle",
  //   category: "lyrics",
  //   group: "geniusLyrics",
  //   supportedSites: ["ytm"],
  //   since: "x.x.x",
  //   default: false,
  //   change: () => setTimeout(async () => await showPrompt({ type: "confirm", message: t("lyrics_cache_changed_clear_confirm") }) && clearLyricsCache(), 200),
  //   advanced: true,
  //   adornments: [adornments.experimental],
  //   reloadRequired: false,
  //   enable: noop,
  // },

  //#region cat:volume
  volumeSliderExponential: {
    type: "select",
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    since: "3.1.0",
    options: () => [
      { value: "linear", label: t("volume_mapping_linear") },
      { value: "x^3", label: t("volume_mapping_x3") },
      { value: "x^4", label: t("volume_mapping_x4") },
      { value: "x^5", label: t("volume_mapping_x5") }
    ],
    default: "linear",
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  volumeSliderLabel: {
    type: "toggle",
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  volumeSliderSize: {
    type: "number",
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    since: "1.0.0",
    min: 50,
    max: 500,
    step: 5,
    default: 150,
    unit: "px",
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  volumeSliderStep: {
    type: "slider",
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    since: "1.0.0",
    min: 1,
    max: 25,
    default: 2,
    unit: "%",
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  volumeSliderScrollStep: {
    type: "slider",
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    since: "1.1.0",
    min: 1,
    max: 25,
    default: 4,
    unit: "%",
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  volumeSharedBetweenTabs: {
    type: "toggle",
    category: "volume",
    group: "volumeSharedBetweenTabs",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: false,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  setInitialTabVolume: {
    type: "toggle",
    category: "volume",
    group: "initialTabVolume",
    supportedSites: ["ytm"],
    since: "2.0.0",
    default: false,
    adornments: () => getFeature("volumeSharedBetweenTabs")
      ? [adornments.ytmOnly, adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload]
      : [adornments.ytmOnly, adornments.reload],
  },
  initialTabVolumeLevel: {
    type: "slider",
    category: "volume",
    group: "initialTabVolume",
    supportedSites: ["ytm"],
    since: "2.0.0",
    min: 0,
    max: 100,
    step: 1,
    default: 100,
    unit: "%",
    reloadRequired: false,
    enable: noop,
    adornments: () => getFeature("volumeSharedBetweenTabs")
      ? [adornments.ytmOnly, adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'")), adornments.reload]
      : [adornments.ytmOnly],
  },

  //#region cat:behavior
  disableBeforeUnloadPopup: {
    type: "toggle",
    category: "behavior",
    group: "disableBeforeUnloadPopup",
    supportedSites: ["ytm", "yt"],
    since: "1.0.0",
    default: false,
    adornments: [adornments.reload],
  },
  autoCloseToasts: {
    type: "toggle",
    category: "behavior",
    group: "autoCloseToasts",
    supportedSites: ["ytm", "yt"],
    since: "3.0.0",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  closeToastsTimeout: {
    type: "slider",
    category: "behavior",
    group: "autoCloseToasts",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    min: 0.5,
    max: 20,
    step: 0.5,
    default: 3,
    unit: "s",
    reloadRequired: false,
    enable: noop,
  },
  yesImStillThere: {
    category: "behavior",
    group: "yesImStillThere",
    type: "toggle",
    supportedSites: ["ytm"],
    since: "3.1.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  rememberSongTime: {
    type: "toggle",
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    since: "1.1.0",
    default: true,
    helpText: () => tp("feature_helptext.rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
    adornments: [adornments.reload],
  },
  rememberSongTimeSites: {
    type: "select",
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    since: "1.1.0",
    options: options.siteSelection,
    default: "all",
    adornments: [adornments.reload],
  },
  rememberSongTimeDuration: {
    type: "number",
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    min: 1,
    max: 60 * 60 * 24 * 7,
    step: 1,
    default: 180,
    unit: "s",
    reloadRequired: false,
    enable: noop,
  },
  rememberSongTimeReduction: {
    type: "number",
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    min: 0,
    step: 0.05,
    default: 0.2,
    unit: "s",
    reloadRequired: false,
    enable: noop,
  },
  rememberSongTimeMinPlayTime: {
    type: "slider",
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    min: 3,
    max: 30,
    step: 0.5,
    default: 10,
    unit: "s",
    reloadRequired: false,
    enable: noop,
  },
  autoScrollToActiveSongMode: {
    type: "select",
    category: "behavior",
    group: "autoScrollToActiveSongMode",
    supportedSites: ["ytm"],
    since: "3.0.0",
    options: () => [
      { value: "never", label: t("auto_scroll_to_active_song_mode.never") },
      { value: "initialPageLoad", label: t("auto_scroll_to_active_song_mode.initial_page_load") },
      { value: "videoChangeAll", label: t("auto_scroll_to_active_song_mode.video_change_all") },
      { value: "videoChangeManual", label: t("auto_scroll_to_active_song_mode.video_change_manual") },
      { value: "videoChangeAuto", label: t("auto_scroll_to_active_song_mode.video_change_auto") },
    ],
    default: "videoChangeManual",
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },

  //#region cat:autoLike
  autoLikeChannels: {
    type: "toggle",
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
    default: true,
    adornments: [adornments.reload],
  },
  autoLikeOpenMgmtDialog: {
    type: "button",
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
    click: () => getAutoLikeDialog().then(d => d.open()),
  },
  autoLikeChannelToggleBtn: {
    type: "toggle",
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
    default: true,
    reloadRequired: false,
    enable: noop,
    advanced: true,
    adornments: [adornments.advanced],
  },
  // TODO:
  // autoLikePlayerBarToggleBtn: {
  //   type: "toggle",
  //   category: "autoLike",
  //   group: "autoLikeChannels",
  //   supportedSites: ["ytm", "yt"],
  //   since: "x.x.x",
  //   default: false,
  //   adornments: [adornments.reload],
  // },
  autoLikeTimeout: {
    type: "slider",
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
    min: 3,
    max: 30,
    step: 0.5,
    default: 5,
    unit: "s",
    reloadRequired: false,
    enable: noop,
  },
  autoLikeShowToast: {
    type: "toggle",
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0",
    default: true,
    reloadRequired: false,
    enable: noop,
  },

  //#region cat:input
  arrowKeySupport: {
    type: "toggle",
    category: "input",
    group: "arrowKeySupport",
    supportedSites: ["ytm"],
    since: "0.1.0",
    default: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  arrowKeySkipBy: {
    type: "slider",
    category: "input",
    group: "arrowKeySupport",
    supportedSites: ["ytm"],
    since: "1.1.0",
    min: 0.5,
    max: 30,
    step: 0.5,
    default: 5,
    unit: "s",
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  arrowKeyVolumeStep: {
    type: "slider",
    category: "input",
    group: "arrowKeySupport",
    supportedSites: ["ytm"],
    since: "3.0.0",
    min: 1,
    max: 25,
    step: 1,
    default: 2,
    unit: "%",
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  frameSkip: {
    type: "toggle",
    category: "input",
    group: "frameSkip",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  frameSkipWhilePlaying: {
    type: "toggle",
    category: "input",
    group: "frameSkip",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: false,
    reloadRequired: false,
    enable: noop,
    advanced: true,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  frameSkipAmount: {
    type: "number",
    category: "input",
    group: "frameSkip",
    supportedSites: ["ytm"],
    since: "3.0.0",
    min: 0,
    max: 1,
    step: 0.0001,
    default: 0.0417,
    reloadRequired: false,
    enable: noop,
    advanced: true,
    adornments: [adornments.ytmOnly, adornments.advanced],
  },
  anchorImprovements: {
    type: "toggle",
    category: "input",
    group: "anchorImprovements",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  numKeysSkipToTime: {
    type: "toggle",
    category: "input",
    group: "numKeysSkipToTime",
    supportedSites: ["ytm"],
    since: "1.0.0",
    default: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  numKeysSkipToTimeDoublePress: {
    type: "slider",
    category: "input",
    group: "numKeysSkipToTime",
    supportedSites: ["ytm", "yt"],
    since: "3.1.0",
    default: 0,
    min: 0,
    max: 1500,
    step: 50,
    renderValue: (value) => String(
      Number(value) === 0
        ? t("toggled_off")
        : `${value}ms`
    ),
    reloadRequired: false,
    enable: noop,
  },
  numKeysSkipToTimeDoublePressBuffer: {
    type: "slider",
    category: "input",
    group: "numKeysSkipToTime",
    supportedSites: ["ytm", "yt"],
    since: "3.1.0",
    default: 5,
    min: 0,
    max: 30,
    step: 0.5,
    renderValue: (value) => String(
      Number(value) === 0
        ? t("toggled_off")
        : `${formatNumber(Number(value), "short")}s`
    ),
    reloadRequired: false,
    enable: noop,
    advanced: true,
    adornments: [adornments.advanced],
  },

  //#region cat:hotkeys

  switchBetweenSites: {
    type: "toggle",
    category: "hotkeys",
    group: "switchBetweenSites",
    supportedSites: ["ytm", "yt"],
    since: "0.2.0",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  switchSitesHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "switchBetweenSites",
    supportedSites: ["ytm", "yt"],
    since: "1.1.0",
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
    group: "likeDislikeHotkeys",
    supportedSites: ["ytm", "yt"],
    since: "3.0.0",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  likeHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "likeDislikeHotkeys",
    supportedSites: ["ytm", "yt"],
    since: "3.0.0",
    default: {
      code: "KeyL",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
  },
  dislikeHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "likeDislikeHotkeys",
    supportedSites: ["ytm", "yt"],
    since: "3.0.0",
    default: {
      code: "KeyD",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
  },
  currentLyricsHotkeyEnabled: {
    type: "toggle",
    category: "hotkeys",
    group: "currentLyricsHotkeyEnabled",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: true,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  currentLyricsHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "currentLyricsHotkeyEnabled",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: {
      code: "KeyO",
      shift: false,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  skipToRemTimeHotkeyEnabled: {
    type: "toggle",
    category: "hotkeys",
    group: "skipToRemTimeHotkeyEnabled",
    supportedSites: ["ytm", "yt"],
    since: "3.0.0",
    default: true,
    reloadRequired: false,
    enable: () => !getFeature("rememberSongTime") && showIconToast({
      icon: "icon-error",
      iconFill: "var(--bytm-error-col)",
      message: t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"),
      duration: 10,
      onClick: () => getErrorDialog(
        t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"),
        [t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled")]
      ).open(),
    }),
    adornments: () => !getFeature("rememberSongTime")
      ? [() => adornments.alert(t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled").replace(/"/g, "'"))]
      : [],
  },
  skipToRemTimeHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "skipToRemTimeHotkeyEnabled",
    supportedSites: ["ytm", "yt"],
    since: "3.0.0",
    default: {
      code: "KeyR",
      shift: false,
      ctrl: false,
      alt: true,
    },
    reloadRequired: false,
    enable: noop,
  },
  focusSearchBarHotkeyEnabled: {
    type: "toggle",
    category: "hotkeys",
    group: "searchBarHotkeys",
    supportedSites: ["ytm", "yt"],
    since: "3.1.0",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  focusSearchBarHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "searchBarHotkeys",
    supportedSites: ["ytm", "yt"],
    since: "3.1.0",
    default: {
      code: "KeyF",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
  },
  clearSearchBarHotkeyEnabled: {
    type: "toggle",
    category: "hotkeys",
    group: "searchBarHotkeys",
    supportedSites: ["ytm", "yt"],
    since: "3.1.0",
    default: true,
    reloadRequired: false,
    enable: noop,
  },
  clearSearchBarHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "searchBarHotkeys",
    supportedSites: ["ytm", "yt"],
    since: "3.1.0",
    default: {
      code: "Delete",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
  },
  rebindNextAndPrevious: {
    type: "toggle",
    category: "hotkeys",
    group: "rebindNextAndPrevious",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: false,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  nextHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "rebindNextAndPrevious",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: {
      code: "KeyN",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  previousHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "rebindNextAndPrevious",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: {
      code: "KeyP",
      shift: true,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  rebindPlayPause: {
    type: "toggle",
    category: "hotkeys",
    group: "rebindPlayPause",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: false,
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },
  playPauseHotkey: {
    type: "hotkey",
    category: "hotkeys",
    group: "rebindPlayPause",
    supportedSites: ["ytm"],
    since: "3.0.0",
    default: {
      code: "Pause",
      shift: false,
      ctrl: false,
      alt: false,
    },
    reloadRequired: false,
    enable: noop,
    adornments: [adornments.ytmOnly],
  },

  //#region cat:integrations
  disableDarkReaderSites: {
    type: "select",
    category: "integrations",
    group: "darkReader",
    supportedSites: ["ytm", "yt"],
    since: "2.0.0",
    options: options.siteSelectionOrNone,
    default: "all",
    adornments: [adornments.reload],
  },
  sponsorBlockIntegration: {
    type: "toggle",
    category: "integrations",
    group: "sponsorBlock",
    supportedSites: ["ytm"],
    since: "2.1.0-preview.1",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  themeSongIntegration: {
    type: "toggle",
    category: "integrations",
    group: "themeSong",
    supportedSites: ["ytm"],
    since: "2.1.0-preview.1",
    default: false,
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  themeSongLightness: {
    type: "select",
    category: "integrations",
    group: "themeSong",
    supportedSites: ["ytm"],
    since: "2.1.0-preview.1",
    options: options.colorLightness,
    default: "darker",
    adornments: [adornments.ytmOnly, adornments.reload],
  },
  removeThumbnailRatingBar: {
    type: "toggle",
    category: "integrations",
    group: "thumbnailRatingBar",
    supportedSites: ["ytm"],
    since: "3.1.0",
    default: true,
    adornments: [adornments.ytmOnly, adornments.reload],
  },

  //#region cat:plugins
  openPluginList: {
    type: "button",
    category: "plugins",
    group: "pluginList",
    supportedSites: ["ytm", "yt"],
    since: "2.1.0-preview.1",
    default: undefined,
    click: () => getPluginListDialog().then(d => d.open()),
  },
} as const satisfies FeatureInfo;
