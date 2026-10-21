import { type DataMigrationsDict, type LooseUnion, clamp, pureObj } from "@sv443-network/userutils";
import { featDefaults } from "@feat/featDefaults.ts";
import { tryUse } from "@/core/hooks.ts";
import { LogLevel, type FeatKeysOfType, type FeatureConfig, type FeatureKey, type NumberLengthFormat } from "@/types.ts";
import type { TrLocale } from "@util/translations.ts";
import { loggers } from "@util/logging.ts";

/**
 * The feature config's default values, migrations and shape-fixing.
 *
 * Split out of {@linkcode "@/config.ts"} - which owns the live config store and needs to be
 * importable from almost every layer - because computing {@linkcode cfgDefaultData} needs
 * {@linkcode featDefaults} at module-init time. Kept separate from `featInfo` itself
 * ({@linkcode "@feat/featInfo.ts"}), which pulls in dialogs, the menu and serializers to power its
 * config-menu UI callbacks; this module only needs the plain default-value data.
 */

//#region >> format version

/** If this number is incremented, the features object data will be migrated to the new format */
export const cfgFormatVersion = 12;

//#region >> default data

/** Default feature config data using the current feature info object, used when no data is found in persistent storage or when the user resets the config */
export const cfgDefaultData = pureObj(
  (Object.keys(featDefaults) as (keyof typeof featDefaults)[])
    .filter((ftKey) => "default" in featDefaults[ftKey] && featDefaults[ftKey].default !== undefined)
    .reduce<Partial<FeatureConfig>>((acc, key) => {
      acc[key] = "default" in featDefaults[key]
        ? featDefaults[key].default as undefined // TypeScript moments to relax and study to part 578
        : undefined;
      return acc;
    }, {}) as FeatureConfig
);

//#region >> migrations

/**
 * Config data format migration functions.  
 * Each key is the version to migrate *to*, and the value is a function that takes the old data as an argument and returns the new data.  
 *   
 * Some helper functions are used to make writing migration functions easier and less error-prone:
 * - **When a new feature was added,** the migration function should use {@linkcode useNewDefaults()} to set the new feature to its default value, while keeping all other values from the old config.  
 * - **When a feature's default value was changed,** the migration function should use {@linkcode useNewDefaultsIfUnchanged()} to set the feature to its new default value, but only if the user hasn't changed it from its old default value. This way, a user's preference will be respected instead of being reset without their knowledge.
 * - **When a feature's valid value range was changed,** the migration function should use {@linkcode useNewRanges()} to clamp the feature's value to the new valid range. This only applies to numeric features with a `min` and `max` property defined in the {@linkcode featDefaults} object.
 */
export const cfgMigrations: DataMigrationsDict = {
  // 1 -> 2 (<=v1.0)
  2: (oldData: Record<string, unknown>) => {
    if(typeof oldData !== "object" || oldData === null)
      return cfgDefaultData;
    const queueBtnsEnabled = Boolean(oldData.queueButtons);
    delete oldData.queueButtons;
    return {
      ...oldData,
      deleteFromQueueButton: queueBtnsEnabled,
      lyricsQueueButton: queueBtnsEnabled,
    };
  },

  // 2 -> 3 (v1.0)
  3: (oldData: FeatureConfig) => useNewDefaults(oldData, [
    "removeShareTrackingParam",
    "numKeysSkipToTime",
    "fixSpacing",
    "scrollToActiveSongBtn",
    "logLevel",
  ]),

  // 3 -> 4 (v1.1)
  4: (oldData: FeatureConfig) => {
    const oldSwitchSitesHotkey = oldData.switchSitesHotkey as Record<string, unknown>;
    return {
      ...useNewDefaults(oldData, [
        "rememberSongTime",
        "rememberSongTimeSites",
        "volumeSliderScrollStep",
        "locale",
        "versionCheck",
      ]),
      arrowKeySkipBy: 10,
      switchSitesHotkey: {
        code: oldSwitchSitesHotkey.key ?? "F9",
        shift: Boolean(oldSwitchSitesHotkey.shift ?? false),
        ctrl: Boolean(oldSwitchSitesHotkey.ctrl ?? false),
        alt: Boolean(oldSwitchSitesHotkey.meta ?? false),
      },
      listButtonsPlacement: "queueOnly",
    };
  },

  // 4 -> 5 (v2.0)
  5: (oldData: FeatureConfig) => useNewDefaults(oldData, [
    "localeFallback",
    "geniUrlBase",
    "geniUrlToken",
    "lyricsCacheMaxSize",
    "lyricsCacheTTL",
    "clearLyricsCache",
    "advancedMode",
    "checkVersionNow",
    "advancedLyricsFilter",
    "rememberSongTimeDuration",
    "rememberSongTimeReduction",
    "rememberSongTimeMinPlayTime",
    "volumeSharedBetweenTabs",
    "setInitialTabVolume",
    "initialTabVolumeLevel",
    "thumbnailOverlayBehavior",
    "thumbnailOverlayToggleBtnShown",
    "thumbnailOverlayShowIndicator",
    "thumbnailOverlayIndicatorOpacity",
    "thumbnailOverlayImageFit",
    "removeShareTrackingParamSites",
    "fixHdrIssues",
    "clearQueueBtn",
    "closeToastsTimeout",
    "disableDarkReaderSites",
  ]),

  // 5 -> 6 (v2.1)
  6: (oldData: FeatureConfig) => {
    const newData = useNewDefaultsIfUnchanged(
      useNewDefaults(oldData, [
        "autoLikeChannels",
        "autoLikeChannelToggleBtn",
        "autoLikeTimeout",
        "autoLikeShowToast",
        "autoLikeOpenMgmtDialog",
        "showVotes",
        "numbersFormat",
        "toastDuration",
        "initTimeout",
        // forgot to add this to the migration when adding the feature way before so now will have to do:
        "volumeSliderLabel",
      ]), [
        { key: "rememberSongTimeSites", oldDefault: "ytm" }, // new: "all"
        { key: "volumeSliderScrollStep", oldDefault: 10 },   // new: 4
      ],
    );
    "removeUpgradeTab" in newData && delete newData.removeUpgradeTab;
    "advancedLyricsFilter" in newData && delete newData.advancedLyricsFilter;
    return newData;
  },

  // 6 -> 7 (v2.1-preview.1)
  7: (oldData: FeatureConfig) => {
    const newData = useNewDefaultsIfUnchanged(
      useNewDefaults(oldData, [
        "showToastOnGenericError",
        "sponsorBlockIntegration",
        "themeSongIntegration",
        "themeSongLightness",
        "errorOnLyricsNotFound",
        "openPluginList",
      ]), [
        { key: "toastDuration", oldDefault: 3 }, // new: 4
      ],
    );
    newData.arrowKeySkipBy = clamp(newData.arrowKeySkipBy, 0.5, 30);
    return newData;
  },

  // 7 -> 8 (v2.1)
  8: (oldData: FeatureConfig) => {
    if("showVotesFormat" in oldData) {
      oldData.numbersFormat = oldData.showVotesFormat as NumberLengthFormat;
      delete oldData.showVotesFormat;
    }
    return useNewDefaults(oldData, [
      "autoLikeChannels"
    ]);
  },

  // 8 -> 9 (v2.2)
  9: (oldData: FeatureConfig) => {
    oldData.locale = oldData.locale.replace("_", "-") as TrLocale;
    if(oldData.locale as string === "ja-JA")
      oldData.locale = "ja-JP";
    if(oldData.locale as string === "en-GB")
      oldData.locale = "en-GB";

    return useNewDefaults(oldData, ["resetEverything"]);
  },

  // 9 -> 10 (v3.0)
  10: (oldData: FeatureConfig) => {
    oldData.closeToastsTimeout = clamp(oldData.closeToastsTimeout, featDefaults.closeToastsTimeout.min, featDefaults.closeToastsTimeout.max);

    oldData.lyricsCacheMaxSize = clamp(oldData.lyricsCacheMaxSize, featDefaults.lyricsCacheMaxSize.min, featDefaults.lyricsCacheMaxSize.max);

    oldData.autoCloseToasts = oldData.closeToastsTimeout > 0;
    oldData.closeToastsTimeout = clamp(oldData.closeToastsTimeout, featDefaults.closeToastsTimeout.min, featDefaults.closeToastsTimeout.max);

    if("thumbnailOverlayImageFit" in oldData)
      delete oldData.thumbnailOverlayImageFit;

    return useNewDefaultsIfUnchanged(
      useNewDefaults(oldData, [
        "aboveQueueBtnsSticky",
        "autoScrollToActiveSongMode",
        "frameSkip",
        "frameSkipWhilePlaying",
        "frameSkipAmount",
        "watchPageFullSize",
        "arrowKeyVolumeStep",
        "likeDislikeHotkeys",
        "likeHotkey",
        "dislikeHotkey",
        "currentLyricsHotkeyEnabled",
        "currentLyricsHotkey",
        "skipToRemTimeHotkeyEnabled",
        "skipToRemTimeHotkey",
        "rebindNextAndPrevious",
        "nextHotkey",
        "previousHotkey",
        "rebindPlayPause",
        "playPauseHotkey",
        "thumbnailOverlayITunesImgRes",
      ]), [
        { key: "lyricsCacheMaxSize", oldDefault: 2000 }, // new: 5000
      ],
    );
  },

  // 10 -> 11 (v3.1)
  11: (oldData: FeatureConfig) => {
    const newCfg = useNewDefaultsIfUnchanged(
      useNewDefaults(oldData, [
        "thumbnailOverlayPreferredSource",
        "swapLikeDislikeButtons",
        "thumbnailOverlayAlbumArtCacheTTL",
        "thumbnailOverlayAlbumArtCacheMaxSize",
        "focusSearchBarHotkeyEnabled",
        "focusSearchBarHotkey",
        "clearSearchBarHotkeyEnabled",
        "clearSearchBarHotkey",
        "songListTrackNumbersEnabled",
        "songListTrackNumbers",
        "yesImStillThere",
        "removeThumbnailRatingBar",
        "numKeysSkipToTimeDoublePress",
        "numKeysSkipToTimeDoublePressBuffer",
        "volumeSliderExponential",
        "volumeSliderExponentialLabelType",
        "likeDislikeHotkeysToggle",
        "openPluginDiscoverySite",
        "hidePlayerBarOnIdleInFullscreen",
        "themeSongVisualizerOpacity",
        "themeSongVisualizerHotkeyEnabled",
        "themeSongVisualizerHotkey",
        "truncatePlayerBarSubtitles",
        "logHttp",
        "switchSitesNewTabHotkey",
      ]),
      [
        { key: "thumbnailOverlayAlbumArtCacheMaxSize", oldDefault: 2_000 }, // new: 10_000
        { key: "thumbnailOverlayITunesImgRes", oldDefault: 1_500 },         // new: 2_000
        { key: "thumbnailOverlayIndicatorOpacity", oldDefault: 40 },        // new: 25
        { key: "lyricsCacheMaxSize", oldDefault: 5_000 },                   // new: 10_000
        { key: "rememberSongTimeMinPlayTime", oldDefault: 10 },             // new: 5
        { key: "hideCursorOnIdleDelay", oldDefault: 2 },                    // new: 3
        { key: "initTimeout", oldDefault: 8 },                              // new: 3_000
        { key: "rememberSongTimeDuration", oldDefault: 60 },                // new: 180
        { key: "frameSkipAmount", oldDefault: 0.0417 },                     // new: 0.0166
      ],
    );

    // dont wanna make a whole new system just for this:
    tryUse("clearArtCache")?.().then(() => {
      // no need to load data since artCacheStore.memoryCache === false
      loggers.data.info("Cleared album artwork cache due to improvements in the way album artworks are resolved, which made a large portion of the cached artworks wrong.", LogLevel.Info);
    });

    // scale was changed from seconds to milliseconds
    if(newCfg.initTimeout <= 10)
      newCfg.initTimeout = toClamped("initTimeout", newCfg.initTimeout * 1000);

    return useNewRanges(newCfg, [
      "initTimeout",
      "thumbnailOverlayITunesImgRes",
    ]);
  },

  // 11 -> 12 (v3.2)
  12: (oldData: FeatureConfig) => {
    // add extra thumbnailOverlayEnabled feature instead of combining it with thumbnailOverlayBehavior:
    oldData.thumbnailOverlayEnabled = oldData.thumbnailOverlayBehavior !== "never";

    // @ts-expect-error this one is also newly split:
    oldData.autoScrollToActiveSongEnabled = oldData.autoScrollToActiveSongMode !== "never";

    return useNewDefaults(oldData, [
      "configMenuFocusContentButtonEnabled",
      "lyricsSearchPromptHotkeyEnabled",
      "lyricsSearchPromptHotkey",
      "defaultObserverDebounce",
      "globalAlertMode",
      "openWelcomeMenu",
      "verboseObservers",
      "interactionLockHotkeyEnabled",
      "interactionLockHotkey",
      "interactionLockOverlayTimeout",
      "songListTrackNumbersDomains",
      "listButtonsStyle",
      "aboveQueueHeaderStyle",
      "volumeSliderLabelStyle",
      "searchablePlaylistPopupsEnabled",
      "searchableSongListsEnabled",
    ]);
  },
} as const satisfies DataMigrationsDict;

//#region migration helpers

/**
 * Uses the default config data ({@linkcode cfgDefaultData}) as the base, then overwrites all values with the passed {@linkcode config} (can be a partial object), then sets all feature values defined by {@linkcode resetKeys} to their default values.  
 * This function is basically used for migrations where new features have been introduced, or where some features absolutely NEED to be reset to their new default value, like for a breaking change.  
 * Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
 */
function useNewDefaults(config: Partial<FeatureConfig> | undefined, resetKeys: LooseUnion<keyof typeof featDefaults>[]): FeatureConfig {
  const newData = structuredClone({ ...cfgDefaultData, ...(config ?? {}) });
  for(const key of resetKeys) // @ts-expect-error typescript funny moments part 0x1a4
    newData[key] = featDefaults[key as keyof typeof featDefaults]?.default as never;
  return newData;
}

/**
 * Uses {@linkcode config} as the base, then sets all keys provided in {@linkcode oldDefaults} to their old default values, as long as their current value is equal to the provided old default.  
 * This essentially means if someone has changed a feature's value from its old default value, that decision will be respected. Only if it has been left on its old default value, it will be set to the new default.  
 * This function is basically used for migrations where some features' default values have changed, but we don't want to upset users who have changed the value from its old default. May only be used for non-breaking changes.  
 * Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
 */
function useNewDefaultsIfUnchanged<TConfig extends Partial<FeatureConfig>>(
  config: TConfig,
  oldDefaults: Array<{ key: FeatureKey, oldDefault: unknown }>,
): TConfig {
  const newData = structuredClone(config);
  for(const { key, oldDefault } of oldDefaults) {
    const defaultVal = featDefaults[key as keyof typeof featDefaults]?.default as TConfig[typeof key];
    if(newData[key] === oldDefault)
      newData[key] = defaultVal as never; // have you ever heard of the song "never gonna give you up" by rick astley?
  }
  return newData as TConfig;
}

/**
 * Uses the passed config as the base, then clamps all numeric feature values defined by {@linkcode keys} to their defined min/max ranges.  
 * Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
 */
function useNewRanges(config: FeatureConfig, keys: FeatKeysOfType<number>[]): FeatureConfig {
  const newCfg = structuredClone(config);
  for(const key of keys) {
    const info = featDefaults[key as keyof typeof featDefaults];
    if(info && "min" in info && "max" in info)
      newCfg[key as FeatKeysOfType<number>] = clampNewRange(newCfg, key as FeatKeysOfType<number>) as never;
  }
  return newCfg;
}

/** Clamps the value of the given numeric feature key in the passed config object to its defined min/max range. */
function clampNewRange(config: FeatureConfig, key: FeatKeysOfType<number>): number {
  const val = config[key];
  const info = featDefaults[key] as FeatureConfig[typeof key] extends number ? { min: number; max?: number } : never;
  return clamp(val as number, info.min, "max" in info && typeof info.max === "number" ? info.max : Infinity);
}

/** Clamps the given numerical value using the given numerical feature's `min` and `max` props (see {@linkcode featDefaults}) if they exist. Otherwise returns the given value as-is. */
function toClamped(ftKey: FeatKeysOfType<number>, newValue: number) {
  const ftInf = featDefaults[ftKey];
  if("min" in ftInf)
    return clamp(newValue, ftInf.min, "max" in ftInf ? ftInf.max : Infinity);
  return newValue;
}

//#region fix keys

/**
 * Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
 * Doesn't traverse nested objects.  
 * Returns a copy of the originally passed object if nothing needs to be fixed.
 */
export function fixCfgKeys(cfg: Partial<FeatureConfig>): FeatureConfig {
  const newCfg = structuredClone(cfg);
  const currentKeys = Object.keys(newCfg).filter(ck => typeof cfg[ck as keyof typeof cfg] !== "undefined" && featDefaults[ck as keyof typeof featDefaults]?.type !== "button");
  const defaultKeys = Object.keys(cfgDefaultData);

  // add missing keys with default values:
  for(const key of defaultKeys.filter(k => !currentKeys.includes(k)))
    currentKeys.push(newCfg[key as keyof FeatureConfig] = cfgDefaultData[key as keyof FeatureConfig] as never);

  // remove extraneous keys that are not in the default config:
  for(const key of currentKeys.filter(k => !defaultKeys.includes(k)))
    delete newCfg[key as keyof FeatureConfig];

  return newCfg as FeatureConfig;
}
