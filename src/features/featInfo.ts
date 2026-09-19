import { DatedError, openInNewTab } from "@sv443-network/userutils";
import { clearLyricsCache, getLyricsCache } from "@feat/lyricsCache.ts";
import { featDefaults } from "@feat/featDefaults.ts";
import { doVersionCheck } from "@feat/versionCheck.ts";
import { expVolFn } from "@feat/volume.ts";
import { adornments } from "@feat/featAdornments.ts";
import { getLocale, t, tp } from "@util/translations.ts";
import { formatNumber, reloadTab } from "@util/misc.ts";
import { getResourceUrl } from "@util/resourceUrl.ts";
import { loggers } from "@util/logging.ts";
import { getErrorDialog } from "@dialog/errorDialog.ts";
import { tryUse } from "@/core/hooks.ts";
import { getFeature } from "@/config.ts";
import { mode } from "@/constants.ts";
import { getDSSerializer } from "@/serializers.ts";
import { closeToast, showIconToast } from "@comp/toast.ts";
import { getAutoLikeDialog } from "@dialog/autoLike.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { getPluginListDialog } from "@dialog/pluginList.ts";
import { getWelcomeDialog } from "@dialog/welcome.ts";
import { LogLevel, type ColorLightnessPref, type FeatureCategory, type FeatureConfig, type FeatureInfo, type SiteSelection, type SiteSelectionOrNone } from "@/types.ts";
import langMapping from "@asset/locales.json" with { type: "json" };
import packageJson from "@root/package.json" with { type: "json" };

/**
 * The UI half of the feature registry: category/group placement, config-menu form fields, help
 * text, and the `click`/`change`/`renderValue` callbacks that wire features up to dialogs, the
 * menu and serializers.
 *
 * Split out of the old `@feat/index.ts` so that the default *values* ({@linkcode featDefaults},
 * L1) stay reachable from low layers like `@/configSchema.ts`, without dragging in everything
 * this file needs. Each entry spreads its {@linkcode featDefaults} counterpart rather than
 * repeating the value - see `@feat/featDefaults.ts` for why.
 */

//#region misc

class ExampleError extends DatedError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ExampleError";
  }
}

//#region select options

type SelectOption<TValue = number | string> = {
  value: TValue;
  label: string;
};

const removeEmoji = (str: string) => str.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, "").trim();

/** Common options for config items of type "select" */
const options = {
  /** `all`, `yt`, `ytm` */
  siteSelection: () => [
    { value: "all", label: t("site_selection_both_sites") },
    { value: "yt", label: t("site_selection_only_yt") },
    { value: "ytm", label: t("site_selection_only_ytm") },
  ] satisfies SelectOption<SiteSelection>[],
  /** `all`, `yt`, `ytm`, `none` */
  siteSelectionOrNone: () => [
    { value: "all", label: t("site_selection_both_sites") },
    { value: "yt", label: t("site_selection_only_yt") },
    { value: "ytm", label: t("site_selection_only_ytm") },
    { value: "none", label: t("site_selection_none") },
  ] satisfies SelectOption<SiteSelectionOrNone>[],
  /** Any key of {@linkcode langMapping} (`assets/locales.json`) */
  locale: () => Object.entries(langMapping)
    .reduce((a, [locale, { name, emoji }]) => (
      [...a, {
        value: locale,
        label: `${emoji} ${name}`,
      }]
    ), [] as SelectOption[])
    .sort((a, b) => removeEmoji(a.label).localeCompare(removeEmoji(b.label))),
  /** `darker`, `normal`, `lighter` */
  colorLightness: () => [
    { value: "darker", label: t("color_lightness.darker") },
    { value: "normal", label: t("color_lightness.normal") },
    { value: "lighter", label: t("color_lightness.lighter") },
  ] satisfies SelectOption<ColorLightnessPref>[],
  /** `am`, `yt` */
  thumbOverlaySources: () => [
    { value: "am", label: t("thumbnail_overlay.source_am") },
    { value: "yt", label: t("thumbnail_overlay.source_yt") },
  ] satisfies SelectOption<FeatureConfig["thumbnailOverlayPreferredSource"]>[],
  /** `currentQueue`, `genericLists`, `everywhere` */
  songListType: () => [
    { value: "currentQueue", label: t("list_button_placement_queue_only") },
    { value: "genericLists", label: t("list_button_placement_generic_lists") },
    { value: "everywhere", label: t("list_button_placement_everywhere") },
  ] satisfies SelectOption<FeatureConfig["songListTrackNumbers"]>[],
  /** `never`, `all`, `importantOnly` */
  alertMode: () => [
    { value: "never", label: t("alert_mode.never") },
    { value: "all", label: t("alert_mode.all") },
    { value: "importantOnly", label: t("alert_mode.important_only") },
  ] satisfies SelectOption<FeatureConfig["globalAlertMode"]>[],
  /** `opaque`, `transparent` */
  binaryOpacity: () => ([
    { value: "opaque", label: t("style_option.opaque") },
    { value: "transparent", label: t("style_option.transparent") },
  ]),
  /** `gradient`, `opaque`, `transparent` */
  gradientOpacity: () => ([
    { value: "gradient", label: t("style_option.gradient") },
    ...options.binaryOpacity(),
  ]),
} as const;

//#region # features

/** List of categories that are related to each other and can be grouped together in the config menu. */
export const groupedCategories: FeatureCategory[][] = [
  ["general", "layout", "songLists", "lyrics", "volume"],
  ["behavior", "autoLike", "input", "hotkeys"],
  ["integrations", "plugins"],
];

/**
 * Contains all possible features with their default values and other configuration.  
 *   
 * **Required props:**
 * <!--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property:                      | Description:                                                                                                                        |
 * | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
 * | `type: string`                 | Type of the feature configuration element - use autocomplete or check `FeatureTypeProps` in `src/types.ts`.                         |
 * | `category: string`             | Category of the feature - use autocomplete or check `FeatureCategory` in `src/types.ts`.                                            |
 * | `group: string`                | Shared group name for features related to each other - usually the name of the "main feature". Is used to group features in the config menu - don't use a single group across multiple categories! |
 * | `supportedSites: Domain[]`     | On which sites the feature is active - values can be `"yt"` or `"ytm"`.                                                             |
 * | `since: string`                | Semver version since when this feature key was added - adds a "new" adornment to the config menu item for a while.                  |
 * | `default: unknown`             | Default value of the feature - type of the value depends on the given `type`.                                                       |
 * <!--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * 
 * 
 * **Optional props:**
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 * | Property:                                                          | Description:                                                                                                                                        |
 * | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------|
 * | `change(key: string, prevValue: unknown, newValue: unknown): void` | Function that will be called when the value is changed - can be used for any feature type to react to value changes at runtime.                     |
 * | `click(): void`                                                    | For type `button` only - function that will be called when the button is clicked.                                                                   |
 * | `helpText: string \| () => string`                                 | If undefined, translation with key `feature_helptext.<featKey>` will be used. If set, needs to be a function that returns an HTML string or the literal string itself that will be the help text for this feature - this is useful for pluralizing or inserting values into the translation at runtime. |
 * | `adornments: AdornFunc[] \| (() => AdornFunc[])`                   | Array of functions that return HTML strings that will be prepended to the label of the feature in the config menu - used to add icons.              |
 * | `unit: string \| (val: number) => string`                          | For types `number` or `slider` only - The unit text that is displayed next to the input element, i.e. " px" - a leading space need to be added too! |
 * | `min: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `min` property of the HTML input element.                                       |
 * | `max: number`                                                      | For types `number` or `slider` only - Overwrites the default of the `max` property of the HTML input element.                                       |
 * | `step: number`                                                     | For types `number` or `slider` only - Overwrites the default of the `step` property of the HTML input element.                                      |
 * | `options: SelectOption[] \| () => SelectOption[]`                  | For type `select` only - function that returns an array of objects with `value` and `label` properties.                                             |
 * | `reloadRequired: boolean`                                          | If true (default), the page needs to be reloaded for the changes to take effect.                                                                    |
 * | `reloadMenuPrompt: boolean`                                        | If true, when the option is modified, shows a prompt to re-render the config menu - default is undefiled (false).                                   |
 * | `advanced: boolean`                                                | If true, the feature will only be shown if the advanced mode feature has been turned on.                                                            |
 * | `hidden: boolean`                                                  | If true, the feature will not be shown in the settings - default is undefined (false).                                                              |
 * | `valueHidden: boolean`                                             | If true, the value of the feature will be hidden in the settings and via the plugin interface - default is undefined (false).                       |
 * | `tags: LooseUnion<FeatureTag>[]`                                   | Array of extra tags for this feature. Used for bulk-editing features based on common tags, like when switching BYTM's privacy mode.                 |
 * | `normalize(val: unknown): unknown`                                 | Function that will be called to normalize the value before it is saved - useful for trimming strings or other simple operations.                    |
 * | `renderValue(val: string): string`                                 | If provided, is used to render the value's label in the config menu.                                                                                |
 * <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
 */
export const featInfo = {
  //#region cat:general
  locale: {
    ...featDefaults.locale,
    category: "general",
    group: "locale",
    supportedSites: ["ytm", "yt"],
    options: options.locale,
    adornments: [adornments.globe],
  },
  localeFallback: {
    ...featDefaults.localeFallback,
    category: "general",
    group: "locale",
    supportedSites: ["ytm", "yt"],
    advanced: true,
  },
  configMenuFocusContentButtonEnabled: {
    ...featDefaults.configMenuFocusContentButtonEnabled,
    category: "general",
    group: "accessibility",
    supportedSites: ["ytm", "yt"],
    reloadMenuPrompt: true,
    reloadRequired: false,
  },
  initTimeout: {
    ...featDefaults.initTimeout,
    category: "general",
    group: "bytmInternal",
    supportedSites: ["ytm", "yt"],
    step: 100,
    unit: "ms",
    advanced: true,
  },
  defaultObserverDebounce: {
    ...featDefaults.defaultObserverDebounce,
    category: "general",
    group: "bytmInternal",
    supportedSites: ["ytm", "yt"],
    step: 5,
    unit: "ms",
    advanced: true,
  },
  verboseObservers: {
    ...featDefaults.verboseObservers,
    category: "general",
    group: "bytmInternal",
    supportedSites: ["ytm", "yt"],
    advanced: true,
    reloadRequired: true,
  },
  globalAlertMode: {
    ...featDefaults.globalAlertMode,
    category: "general",
    group: "bytmInternal",
    supportedSites: ["ytm", "yt"],
    options: options.alertMode,
    advanced: true,
  },
  openWelcomeMenu: {
    ...featDefaults.openWelcomeMenu,
    category: "general",
    group: "bytmInternal",
    supportedSites: ["ytm", "yt"],
    click: async () => {
      tryUse("closeCfgMenu")?.();
      await (await getWelcomeDialog()).open();
    },
  },
  versionCheck: {
    ...featDefaults.versionCheck,
    category: "general",
    group: "versionCheck",
    supportedSites: ["ytm", "yt"],
  },
  checkVersionNow: {
    ...featDefaults.checkVersionNow,
    category: "general",
    group: "versionCheck",
    supportedSites: ["ytm", "yt"],
    click: () => doVersionCheck(true),
  },
  numbersFormat: {
    ...featDefaults.numbersFormat,
    category: "general",
    group: "numbersFormat",
    supportedSites: ["ytm", "yt"],
    options: () => [
      { value: "long", label: `${formatNumber(12_345_678, "long")} (${t("votes_format_long")})` },
      { value: "short", label: `${formatNumber(12_345_678, "short")} (${t("votes_format_short")})` },
    ],
    reloadRequired: false,
  },
  toastDuration: {
    ...featDefaults.toastDuration,
    category: "general",
    group: "toasts",
    supportedSites: ["ytm", "yt"],
    step: 0.5,
    renderValue: (val) => Number(val) === 0 ? t("toggled_off") : `${val}s`,
    reloadRequired: false,
    change: (newVal) => newVal === 0
      ? closeToast()
      : showIconToast({
        message: t("example_toast"),
        iconSrc: getResourceUrl(`img-logo${mode === "development" ? "_dev" : ""}`),
      }).then(() => getFeature("toastDuration") === 0 ? closeToast() : void 0),
  },
  showToastOnGenericError: {
    ...featDefaults.showToastOnGenericError,
    category: "general",
    group: "toasts",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
    change: (newVal) => newVal ? loggers.misc.error("Test error", new ExampleError("Example")) : void 0,
  },
  resetConfig: {
    ...featDefaults.resetConfig,
    category: "general",
    group: "resetData",
    supportedSites: ["ytm", "yt"],
    click: () => tryUse("promptResetConfig")?.(),
  },
  resetEverything: {
    ...featDefaults.resetEverything,
    category: "general",
    group: "resetData",
    supportedSites: ["ytm", "yt"],
    click: async () => {
      if(await showPrompt({
        type: "confirm",
        message: t("reset_everything_confirm"),
      })) {
        await getDSSerializer(true).resetStoresData();
        const gmKeys = await GM.listValues();
        await Promise.allSettled(gmKeys.map(key => GM.deleteValue(key)));
        await reloadTab();
      }
    },
    advanced: true,
  },
  logLevel: {
    ...featDefaults.logLevel,
    category: "general",
    group: "logging",
    supportedSites: ["ytm", "yt"],
    options: () => [
      { value: LogLevel.Debug, label: t("log_level_debug") },
      { value: LogLevel.Info, label: t("log_level_info") },
    ],
    advanced: true,
  },
  logEvents: {
    ...featDefaults.logEvents,
    category: "general",
    group: "logging",
    supportedSites: ["ytm", "yt"],
    advanced: true,
  },
  logHttp: {
    ...featDefaults.logHttp,
    category: "general",
    group: "logging",
    supportedSites: ["ytm", "yt"],
    advanced: true,
  },
  advancedMode: {
    ...featDefaults.advancedMode,
    category: "general",
    group: "advancedMode",
    supportedSites: ["ytm", "yt"],
    reloadMenuPrompt: true,
    reloadRequired: false,
  },

  //#region cat:layout
  watermarkEnabled: {
    ...featDefaults.watermarkEnabled,
    category: "layout",
    group: "watermarkEnabled",
    supportedSites: ["ytm"],
  },
  removeShareTrackingParam: {
    ...featDefaults.removeShareTrackingParam,
    category: "layout",
    group: "removeShareTrackingParam",
    supportedSites: ["ytm", "yt"],
  },
  removeShareTrackingParamSites: {
    ...featDefaults.removeShareTrackingParamSites,
    category: "layout",
    group: "removeShareTrackingParam",
    supportedSites: ["ytm", "yt"],
    options: options.siteSelection,
    advanced: true,
    reloadRequired: false,
  },
  fixSpacing: {
    ...featDefaults.fixSpacing,
    category: "layout",
    group: "fixLayout",
    supportedSites: ["ytm"],
    advanced: true,
  },
  truncatePlayerBarSubtitles: {
    ...featDefaults.truncatePlayerBarSubtitles,
    category: "layout",
    group: "fixLayout",
    supportedSites: ["ytm"],
  },
  thumbnailOverlayEnabled: {
    ...featDefaults.thumbnailOverlayEnabled,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    adornments: [adornments.privacy],
  },
  thumbnailOverlayBehavior: {
    ...featDefaults.thumbnailOverlayBehavior,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    options: () => [
      { value: "always", label: t("thumbnail_overlay.behavior_always") },
      { value: "never", label: t("thumbnail_overlay.behavior_never") },
      { value: "songsOnly", label: t("thumbnail_overlay.behavior_songs_only") },
      { value: "videosOnly", label: t("thumbnail_overlay.behavior_videos_only") },
    ],
    reloadRequired: false,
  },
  thumbnailOverlayToggleBtnShown: {
    ...featDefaults.thumbnailOverlayToggleBtnShown,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
  },
  thumbnailOverlayITunesImgRes: {
    ...featDefaults.thumbnailOverlayITunesImgRes,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    step: 100,
    renderValue: (n: string) => `${n}x${n}`,
    reloadRequired: false,
  },
  thumbnailOverlayAlbumArtCacheMaxSize: {
    ...featDefaults.thumbnailOverlayAlbumArtCacheMaxSize,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    step: 500,
    unit: (val: number) => ` ${tp("unit_entries", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    reloadRequired: false,
    advanced: true,
  },
  thumbnailOverlayAlbumArtCacheTTL: {
    ...featDefaults.thumbnailOverlayAlbumArtCacheTTL,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    step: 1,
    unit: (val: number) => ` ${tp("unit_days", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    reloadRequired: false,
    advanced: true,
  },
  thumbnailOverlayShowIndicator: {
    ...featDefaults.thumbnailOverlayShowIndicator,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
  },
  thumbnailOverlayIndicatorOpacity: {
    ...featDefaults.thumbnailOverlayIndicatorOpacity,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    step: 5,
    unit: "%",
    advanced: true,
  },
  thumbnailOverlayPreferredSource: {
    ...featDefaults.thumbnailOverlayPreferredSource,
    category: "layout",
    group: "thumbnailOverlay",
    supportedSites: ["ytm"],
    options: options.thumbOverlaySources,
    reloadRequired: false,
  },
  fixHdrIssues: {
    ...featDefaults.fixHdrIssues,
    category: "layout",
    group: "fixHdrIssues",
    supportedSites: ["ytm"],
    advanced: true,
  },
  showVotes: {
    ...featDefaults.showVotes,
    category: "layout",
    group: "votes",
    supportedSites: ["ytm"],
    adornments: [adornments.privacy],
  },
  swapLikeDislikeButtons: {
    ...featDefaults.swapLikeDislikeButtons,
    category: "layout",
    group: "votes",
    supportedSites: ["ytm", "yt"],
  },
  watchPageFullSize: {
    ...featDefaults.watchPageFullSize,
    category: "layout",
    group: "watchPageFullSize",
    supportedSites: ["ytm"],
  },
  searchablePlaylistPopupsEnabled: {
    ...featDefaults.searchablePlaylistPopupsEnabled,
    category: "layout",
    group: "searchableLists",
    supportedSites: ["ytm", "yt"],
  },
  searchableSongListsEnabled: {
    ...featDefaults.searchableSongListsEnabled,
    category: "layout",
    group: "searchableLists",
    supportedSites: ["ytm", "yt"],
  },

  //#region cat:song lists
  lyricsQueueButton: {
    ...featDefaults.lyricsQueueButton,
    category: "songLists",
    group: "queueButtons",
    supportedSites: ["ytm"],
  },
  deleteFromQueueButton: {
    ...featDefaults.deleteFromQueueButton,
    category: "songLists",
    group: "queueButtons",
    supportedSites: ["ytm"],
  },
  listButtonsPlacement: {
    ...featDefaults.listButtonsPlacement,
    category: "songLists",
    group: "queueButtons",
    supportedSites: ["ytm"],
    options: options.songListType,
    reloadRequired: false,
  },
  listButtonsStyle: {
    ...featDefaults.listButtonsStyle,
    options: options.gradientOpacity,
    category: "songLists",
    group: "queueButtons",
    supportedSites: ["ytm"],
  },
  scrollToActiveSongBtn: {
    ...featDefaults.scrollToActiveSongBtn,
    category: "songLists",
    group: "aboveQueueButtons",
    supportedSites: ["ytm"],
  },
  clearQueueBtn: {
    ...featDefaults.clearQueueBtn,
    category: "songLists",
    group: "aboveQueueButtons",
    supportedSites: ["ytm"],
  },
  aboveQueueBtnsSticky: {
    ...featDefaults.aboveQueueBtnsSticky,
    category: "songLists",
    group: "aboveQueueButtons",
    supportedSites: ["ytm"],
    advanced: true,
  },
  aboveQueueHeaderStyle: {
    ...featDefaults.aboveQueueHeaderStyle,
    options: options.binaryOpacity,
    category: "songLists",
    group: "aboveQueueButtons",
    supportedSites: ["ytm"],
  },
  songListTrackNumbersEnabled: {
    ...featDefaults.songListTrackNumbersEnabled,
    category: "songLists",
    group: "songListTrackNumbers",
    supportedSites: ["ytm", "yt"],
  },
  songListTrackNumbers: {
    ...featDefaults.songListTrackNumbers,
    category: "songLists",
    group: "songListTrackNumbers",
    supportedSites: ["ytm", "yt"],
    options: options.songListType,
  },
  songListTrackNumbersDomains: {
    ...featDefaults.songListTrackNumbersDomains,
    category: "songLists",
    group: "songListTrackNumbers",
    supportedSites: ["ytm", "yt"],
    options: options.siteSelection,
  },

  //#region cat:lyrics
  geniusLyrics: {
    ...featDefaults.geniusLyrics,
    category: "lyrics",
    group: "geniusLyrics",
    supportedSites: ["ytm"],
    adornments: [adornments.privacy],
  },
  errorOnLyricsNotFound: {
    ...featDefaults.errorOnLyricsNotFound,
    category: "lyrics",
    group: "geniusLyrics",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  geniUrlBase: {
    ...featDefaults.geniUrlBase,
    category: "lyrics",
    group: "geniURL",
    supportedSites: ["ytm"],
    normalize: (val: string) => val.trim().replace(/\/+$/, ""),
    advanced: true,
    reloadRequired: false,
  },
  geniUrlToken: {
    ...featDefaults.geniUrlToken,
    category: "lyrics",
    group: "geniURL",
    supportedSites: ["ytm"],
    normalize: (val: string) => val.trim(),
    advanced: true,
    reloadRequired: false,
  },
  lyricsCacheMaxSize: {
    ...featDefaults.lyricsCacheMaxSize,
    category: "lyrics",
    group: "lyricsCache",
    supportedSites: ["ytm"],
    step: 500,
    unit: (val: number) => ` ${tp("unit_entries", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    advanced: true,
    reloadRequired: false,
  },
  lyricsCacheTTL: {
    ...featDefaults.lyricsCacheTTL,
    category: "lyrics",
    group: "lyricsCache",
    supportedSites: ["ytm"],
    step: 1,
    unit: (val: number) => ` ${tp("unit_days", val)}`,
    renderValue: (val: string) => formatNumber(Number(val), "long"),
    advanced: true,
    reloadRequired: false,
  },
  clearLyricsCache: {
    ...featDefaults.clearLyricsCache,
    category: "lyrics",
    group: "lyricsCache",
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
  },

  //#region cat:volume
  volumeSliderExponential: {
    ...featDefaults.volumeSliderExponential,
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    options: () => [
      { value: "linear", label: t("volume_mapping.linear") },
      { value: "x^2", label: t("volume_mapping.x2") },
      { value: "x^3", label: t("volume_mapping.x3") },
      { value: "x^4", label: t("volume_mapping.x4") },
      { value: "x^5", label: t("volume_mapping.x5") }
    ],
  },
  volumeSliderExponentialLabelType: {
    ...featDefaults.volumeSliderExponentialLabelType,
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    options: () => [
      { value: "positionBased", label: t("volume_label_mapped_type.positionBased") },
      { value: "valueBased", label: t("volume_label_mapped_type.valueBased") },
      { value: "both", label: t("volume_label_mapped_type.both") },
    ],
    reloadRequired: false,
  },
  volumeSliderLabel: {
    ...featDefaults.volumeSliderLabel,
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
  },
  volumeSliderLabelStyle: {
    ...featDefaults.volumeSliderLabelStyle,
    options: options.gradientOpacity,
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
  },
  volumeSliderSize: {
    ...featDefaults.volumeSliderSize,
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    step: 1,
    unit: "px",
  },
  volumeSliderStep: {
    ...featDefaults.volumeSliderStep,
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    unit: "%",
  },
  volumeSliderScrollStep: {
    ...featDefaults.volumeSliderScrollStep,
    category: "volume",
    group: "volumeSlider",
    supportedSites: ["ytm"],
    unit: "%",
  },
  volumeSharedBetweenTabs: {
    ...featDefaults.volumeSharedBetweenTabs,
    category: "volume",
    group: "volumeSharedBetweenTabs",
    supportedSites: ["ytm"],
  },
  setInitialTabVolume: {
    ...featDefaults.setInitialTabVolume,
    category: "volume",
    group: "initialTabVolume",
    supportedSites: ["ytm"],
    adornments: () => getFeature("volumeSharedBetweenTabs")
      ? [adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'"))]
      : [],
  },
  initialTabVolumeLevel: {
    ...featDefaults.initialTabVolumeLevel,
    category: "volume",
    group: "initialTabVolume",
    supportedSites: ["ytm"],
    step: 1,
    unit: "%",
    renderValue: (value) => {
      if(getFeature("volumeSliderExponential") !== "linear") {
        const expMapped = (expVolFn(Number(value) / 100) * 100).toFixed(1);
        const fixedPtVal = ["0.0", "100.0"].includes(expMapped)
          ? expMapped.slice(0, -2)
          : expMapped;

        return `${value}% (${fixedPtVal}%)`;
      }
      return `${value}%`;
    },
    adornments: () => getFeature("volumeSharedBetweenTabs")
      ? [adornments.alert(t("feature_warning.setInitialTabVolume_volumeSharedBetweenTabs_incompatible").replace(/"/g, "'"))]
      : [],
  },

  //#region cat:behavior
  disableBeforeUnloadPopup: {
    ...featDefaults.disableBeforeUnloadPopup,
    category: "behavior",
    group: "disableBeforeUnloadPopup",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  autoCloseToasts: {
    ...featDefaults.autoCloseToasts,
    category: "behavior",
    group: "autoCloseToasts",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  closeToastsTimeout: {
    ...featDefaults.closeToastsTimeout,
    category: "behavior",
    group: "autoCloseToasts",
    supportedSites: ["ytm", "yt"],
    step: 0.5,
    unit: "s",
    reloadRequired: false,
  },
  rememberSongTime: {
    ...featDefaults.rememberSongTime,
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    helpText: () => tp("feature_helptext.rememberSongTime", getFeature("rememberSongTimeMinPlayTime"), getFeature("rememberSongTimeMinPlayTime")),
  },
  rememberSongTimeSites: {
    ...featDefaults.rememberSongTimeSites,
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    options: options.siteSelection,
  },
  rememberSongTimeDuration: {
    ...featDefaults.rememberSongTimeDuration,
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    step: 1,
    unit: "s",
    reloadRequired: false,
  },
  rememberSongTimeReduction: {
    ...featDefaults.rememberSongTimeReduction,
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    step: 0.01,
    unit: "s",
    reloadRequired: false,
  },
  rememberSongTimeMinPlayTime: {
    ...featDefaults.rememberSongTimeMinPlayTime,
    category: "behavior",
    group: "rememberSongTime",
    supportedSites: ["ytm", "yt"],
    step: 0.5,
    unit: "s",
    reloadRequired: false,
  },
  hideCursorOnIdle: {
    ...featDefaults.hideCursorOnIdle,
    category: "behavior",
    group: "hideCursorOnIdle",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  hideCursorOnIdleDelay: {
    ...featDefaults.hideCursorOnIdleDelay,
    category: "behavior",
    group: "hideCursorOnIdle",
    supportedSites: ["ytm"],
    step: 0.25,
    unit: "s",
    reloadRequired: false,
  },
  hidePlayerBarOnIdleInFullscreen: {
    ...featDefaults.hidePlayerBarOnIdleInFullscreen,
    category: "behavior",
    group: "hideCursorOnIdle",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  yesImStillThere: {
    ...featDefaults.yesImStillThere,
    category: "behavior",
    group: "yesImStillThere",
    supportedSites: ["ytm"],
  },
  autoScrollToActiveSongEnabled: {
    ...featDefaults.autoScrollToActiveSongEnabled,
    category: "behavior",
    group: "autoScrollToActiveSong",
    supportedSites: ["ytm"],
  },
  autoScrollToActiveSongMode: {
    ...featDefaults.autoScrollToActiveSongMode,
    category: "behavior",
    group: "autoScrollToActiveSong",
    supportedSites: ["ytm"],
    options: () => [
      { value: "initialPageLoad", label: t("auto_scroll_to_active_song_mode.initial_page_load") },
      { value: "videoChangeAll", label: t("auto_scroll_to_active_song_mode.video_change_all") },
      { value: "videoChangeManual", label: t("auto_scroll_to_active_song_mode.video_change_manual") },
      { value: "videoChangeAuto", label: t("auto_scroll_to_active_song_mode.video_change_auto") },
    ],
    reloadRequired: false,
  },

  //#region cat:autoLike
  autoLikeChannels: {
    ...featDefaults.autoLikeChannels,
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
  },
  autoLikeOpenMgmtDialog: {
    ...featDefaults.autoLikeOpenMgmtDialog,
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    click: () => getAutoLikeDialog().then(d => d.open()),
  },
  autoLikeChannelToggleBtn: {
    ...featDefaults.autoLikeChannelToggleBtn,
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
    advanced: true,
  },
  // TODO:
  // autoLikePlayerBarToggleBtn: {
  //   type: "toggle",
  //   category: "autoLike",
  //   group: "autoLikeChannels",
  //   supportedSites: ["ytm", "yt"],
  //   since: "x.x.x",
  //   default: false,
  // },
  autoLikeTimeout: {
    ...featDefaults.autoLikeTimeout,
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    step: 0.1,
    unit: "s",
    reloadRequired: false,
  },
  autoLikeShowToast: {
    ...featDefaults.autoLikeShowToast,
    category: "autoLike",
    group: "autoLikeChannels",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },

  //#region cat:input
  arrowKeySupport: {
    ...featDefaults.arrowKeySupport,
    category: "input",
    group: "arrowKeySupport",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  arrowKeySkipBy: {
    ...featDefaults.arrowKeySkipBy,
    category: "input",
    group: "arrowKeySupport",
    supportedSites: ["ytm"],
    step: 0.1,
    unit: "s",
    reloadRequired: false,
  },
  arrowKeyVolumeStep: {
    ...featDefaults.arrowKeyVolumeStep,
    category: "input",
    group: "arrowKeySupport",
    supportedSites: ["ytm"],
    step: 1,
    unit: "%",
    reloadRequired: false,
  },
  frameSkip: {
    ...featDefaults.frameSkip,
    category: "input",
    group: "frameSkip",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  frameSkipWhilePlaying: {
    ...featDefaults.frameSkipWhilePlaying,
    category: "input",
    group: "frameSkip",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  frameSkipAmount: {
    ...featDefaults.frameSkipAmount,
    category: "input",
    group: "frameSkip",
    supportedSites: ["ytm"],
    step: 0.0001,
    unit: "s",
    reloadRequired: false,
    advanced: true,
  },
  anchorImprovements: {
    ...featDefaults.anchorImprovements,
    category: "input",
    group: "anchorImprovements",
    supportedSites: ["ytm"],
  },
  numKeysSkipToTime: {
    ...featDefaults.numKeysSkipToTime,
    category: "input",
    group: "numKeysSkipToTime",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  numKeysSkipToTimeDoublePress: {
    ...featDefaults.numKeysSkipToTimeDoublePress,
    category: "input",
    group: "numKeysSkipToTime",
    supportedSites: ["ytm", "yt"],
    step: 100,
    renderValue: (value) => String(
      Number(value) === 0
        ? t("toggled_off")
        : `${value}ms`
    ),
    reloadRequired: false,
  },
  numKeysSkipToTimeDoublePressBuffer: {
    ...featDefaults.numKeysSkipToTimeDoublePressBuffer,
    category: "input",
    group: "numKeysSkipToTime",
    supportedSites: ["ytm", "yt"],
    step: 0.5,
    renderValue: (value) => String(
      Number(value) === 0
        ? t("toggled_off")
        : `${formatNumber(Number(value), "short")}s`
    ),
    reloadRequired: false,
    advanced: true,
  },

  //#region cat:hotkeys

  switchBetweenSites: {
    ...featDefaults.switchBetweenSites,
    category: "hotkeys",
    group: "switchBetweenSites",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  switchSitesHotkey: {
    ...featDefaults.switchSitesHotkey,
    category: "hotkeys",
    group: "switchBetweenSites",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  switchSitesNewTabHotkey: {
    ...featDefaults.switchSitesNewTabHotkey,
    category: "hotkeys",
    group: "switchBetweenSites",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  likeDislikeHotkeys: {
    ...featDefaults.likeDislikeHotkeys,
    category: "hotkeys",
    group: "likeDislikeHotkeys",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  likeDislikeHotkeysToggle: {
    ...featDefaults.likeDislikeHotkeysToggle,
    category: "hotkeys",
    group: "likeDislikeHotkeys",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  likeHotkey: {
    ...featDefaults.likeHotkey,
    category: "hotkeys",
    group: "likeDislikeHotkeys",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  dislikeHotkey: {
    ...featDefaults.dislikeHotkey,
    category: "hotkeys",
    group: "likeDislikeHotkeys",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  currentLyricsHotkeyEnabled: {
    ...featDefaults.currentLyricsHotkeyEnabled,
    category: "hotkeys",
    group: "currentLyricsHotkeyEnabled",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  currentLyricsHotkey: {
    ...featDefaults.currentLyricsHotkey,
    category: "hotkeys",
    group: "currentLyricsHotkeyEnabled",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  lyricsSearchPromptHotkeyEnabled: {
    ...featDefaults.lyricsSearchPromptHotkeyEnabled,
    category: "hotkeys",
    group: "lyricsSearchPromptHotkeyEnabled",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  lyricsSearchPromptHotkey: {
    ...featDefaults.lyricsSearchPromptHotkey,
    category: "hotkeys",
    group: "lyricsSearchPromptHotkeyEnabled",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  skipToRemTimeHotkeyEnabled: {
    ...featDefaults.skipToRemTimeHotkeyEnabled,
    category: "hotkeys",
    group: "skipToRemTimeHotkeyEnabled",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
    change: (newVal) => newVal && !getFeature("rememberSongTime") && showIconToast({
      icon: "icon-error",
      iconFill: "var(--bytm-error-col)",
      message: t("feature_warning.skipToRemTimeHotkeyEnabled_rememberSongTime_disabled_summary"),
      duration: 20_000,
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
    ...featDefaults.skipToRemTimeHotkey,
    category: "hotkeys",
    group: "skipToRemTimeHotkeyEnabled",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  focusSearchBarHotkeyEnabled: {
    ...featDefaults.focusSearchBarHotkeyEnabled,
    category: "hotkeys",
    group: "focusSearchBarHotkey",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  focusSearchBarHotkey: {
    ...featDefaults.focusSearchBarHotkey,
    category: "hotkeys",
    group: "focusSearchBarHotkey",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  clearSearchBarHotkeyEnabled: {
    ...featDefaults.clearSearchBarHotkeyEnabled,
    category: "hotkeys",
    group: "clearSearchBarHotkey",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  clearSearchBarHotkey: {
    ...featDefaults.clearSearchBarHotkey,
    category: "hotkeys",
    group: "clearSearchBarHotkey",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  interactionLockHotkeyEnabled: {
    ...featDefaults.interactionLockHotkeyEnabled,
    category: "hotkeys",
    group: "interactionLockHotkey",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  interactionLockHotkey: {
    ...featDefaults.interactionLockHotkey,
    category: "hotkeys",
    group: "interactionLockHotkey",
    supportedSites: ["ytm", "yt"],
    reloadRequired: false,
  },
  interactionLockOverlayTimeout: {
    ...featDefaults.interactionLockOverlayTimeout,
    category: "hotkeys",
    group: "interactionLockHotkey",
    supportedSites: ["ytm", "yt"],
    step: 0.5,
    renderValue: (val) => Number(val) === 0 ? t("toggled_off") : `${val}s`,
    reloadRequired: false,
  },
  rebindNextAndPrevious: {
    ...featDefaults.rebindNextAndPrevious,
    category: "hotkeys",
    group: "rebindNextAndPrevious",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  nextHotkey: {
    ...featDefaults.nextHotkey,
    category: "hotkeys",
    group: "rebindNextAndPrevious",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  previousHotkey: {
    ...featDefaults.previousHotkey,
    category: "hotkeys",
    group: "rebindNextAndPrevious",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  rebindPlayPause: {
    ...featDefaults.rebindPlayPause,
    category: "hotkeys",
    group: "rebindPlayPause",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  playPauseHotkey: {
    ...featDefaults.playPauseHotkey,
    category: "hotkeys",
    group: "rebindPlayPause",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },

  //#region cat:integrations
  disableDarkReaderSites: {
    ...featDefaults.disableDarkReaderSites,
    category: "integrations",
    group: "darkReader",
    supportedSites: ["ytm", "yt"],
    options: options.siteSelectionOrNone,
  },
  sponsorBlockIntegration: {
    ...featDefaults.sponsorBlockIntegration,
    category: "integrations",
    group: "sponsorBlock",
    supportedSites: ["ytm"],
  },
  themeSongIntegration: {
    ...featDefaults.themeSongIntegration,
    category: "integrations",
    group: "themeSong",
    supportedSites: ["ytm"],
  },
  themeSongLightness: {
    ...featDefaults.themeSongLightness,
    category: "integrations",
    group: "themeSong",
    supportedSites: ["ytm"],
    options: options.colorLightness,
  },
  themeSongVisualizerOpacity: {
    ...featDefaults.themeSongVisualizerOpacity,
    category: "integrations",
    group: "themeSongVisualizer",
    supportedSites: ["ytm"],
    step: 1,
    unit: "%",
  },
  themeSongVisualizerHotkeyEnabled: {
    ...featDefaults.themeSongVisualizerHotkeyEnabled,
    category: "integrations",
    group: "themeSongVisualizer",
    supportedSites: ["ytm"],
  },
  themeSongVisualizerHotkey: {
    ...featDefaults.themeSongVisualizerHotkey,
    category: "integrations",
    group: "themeSongVisualizer",
    supportedSites: ["ytm"],
    reloadRequired: false,
  },
  removeThumbnailRatingBar: {
    ...featDefaults.removeThumbnailRatingBar,
    category: "integrations",
    group: "thumbnailRatingBar",
    supportedSites: ["ytm"],
  },

  //#region cat:plugins
  openPluginList: {
    ...featDefaults.openPluginList,
    category: "plugins",
    group: "pluginList",
    supportedSites: ["ytm", "yt"],
    click: () => getPluginListDialog().then(d => d.open()),
  },
  openPluginDiscoverySite: {
    ...featDefaults.openPluginDiscoverySite,
    category: "plugins",
    group: "pluginList",
    supportedSites: ["ytm", "yt"],
    click: () => openInNewTab(packageJson.pluginDiscoveryUrl),
  },
} as const satisfies FeatureInfo;
