import { DataStore, type DataMigrationsDict, type LooseUnion, clamp, pureObj, computeHash } from "@sv443-network/coreutils";
import { GMStorageEngine } from "@sv443-network/userutils";
import { artCacheStore, enableDiscardBeforeUnload, featInfo } from "@feat/index.ts";
import { reloadTab, t, type TrLocale } from "@util/index.ts";
import { loggers } from "@util/logging.ts";
import { emitSiteEvent } from "@/siteEvents.ts";
import { compressionFormat } from "@/constants.ts";
import { emitInterface } from "@/interface.ts";
import { closeCfgMenu, openCfgMenu } from "@menu/menu.ts";
import { LogLevel, type FeatKeysOfType, type FeatureConfig, type FeatureInfo, type FeatureKey, type FeatureTag, type FeatureTypeProps, type NumberLengthFormat } from "@/types.ts";
import { showPrompt } from "@dialog/prompt.ts";

//#region >> format version

/** If this number is incremented, the features object data will be migrated to the new format */
export const cfgFormatVersion = 12;

//#region >> default data

/** Default feature config data using the current feature info object, used when no data is found in persistent storage or when the user resets the config */
export const cfgDefaultData = pureObj(
  (Object.keys(featInfo) as (keyof typeof featInfo)[])
    .filter((ftKey) => featInfo?.[ftKey] && "default" in featInfo[ftKey] && featInfo[ftKey].default !== undefined)
    .reduce<Partial<FeatureConfig>>((acc, key) => {
      acc[key] = featInfo?.[key] && "default" in featInfo[key]
        ? featInfo?.[key]?.default as undefined // TypeScript moments to relax and study to part 578
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
 * - **When a feature's valid value range was changed,** the migration function should use {@linkcode useNewRanges()} to clamp the feature's value to the new valid range. This only applies to numeric features with a `min` and `max` property defined in the {@linkcode featInfo} object.
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
    oldData.closeToastsTimeout = clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);

    oldData.lyricsCacheMaxSize = clamp(oldData.lyricsCacheMaxSize, featInfo.lyricsCacheMaxSize.min, featInfo.lyricsCacheMaxSize.max);

    oldData.autoCloseToasts = oldData.closeToastsTimeout > 0;
    oldData.closeToastsTimeout = clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);

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
    artCacheStore.deleteData().then(() => {
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
    ]);
  },
} as const satisfies DataMigrationsDict;

//#region migration helpers

/**
 * Uses the default config data ({@linkcode cfgDefaultData}) as the base, then overwrites all values with the passed {@linkcode config} (can be a partial object), then sets all feature values defined by {@linkcode resetKeys} to their default values.  
 * This function is basically used for migrations where new features have been introduced, or where some features absolutely NEED to be reset to their new default value, like for a breaking change.  
 * Returns a [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) copy of the updated config object.
 */
function useNewDefaults(config: Partial<FeatureConfig> | undefined, resetKeys: LooseUnion<keyof typeof featInfo>[]): FeatureConfig {
  const newData = structuredClone({ ...cfgDefaultData, ...(config ?? {}) });
  for(const key of resetKeys) // @ts-expect-error typescript funny moments part 0x1a4
    newData[key] = featInfo?.[key]?.default as never;
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
    const defaultVal = featInfo?.[key]?.default as TConfig[typeof key];
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
    const info = featInfo[key as keyof typeof featInfo];
    if(info && "min" in info && "max" in info)
      newCfg[key as FeatKeysOfType<number>] = clampNewRange(newCfg, key as FeatKeysOfType<number>) as never;
  }
  return newCfg;
}

/** Clamps the value of the given numeric feature key in the passed config object to its defined min/max range. */
function clampNewRange(config: FeatureConfig, key: FeatKeysOfType<number>): number {
  const val = config[key];
  const info = featInfo[key] as FeatureConfig[typeof key] extends number ? { min: number; max?: number } : never;
  return clamp(val as number, info.min, "max" in info && typeof info.max === "number" ? info.max : Infinity);
}

/** Clamps the given numerical value using the given numerical feature's `min` and `max` props (see {@linkcode featInfo}) if they exist. Otherwise returns the given value as-is. */
function toClamped(ftKey: FeatKeysOfType<number>, newValue: number) {
  const ftInf = featInfo[ftKey];
  if("min" in ftInf)
    return clamp(newValue, ftInf.min, "max" in ftInf ? ftInf.max : Infinity);
  return newValue;
}

//#region >> store

export const configStore = new DataStore<FeatureConfig>({
  id: "bytm-config",
  formatVersion: cfgFormatVersion,
  engine: new GMStorageEngine(),
  defaultData: cfgDefaultData,
  migrations: cfgMigrations,
  compressionFormat,
  nanoEmitterOptions: {
    publicEmit: false,
    catchUpEvents: ["loadData"],
  },
});

//#region >> init

/** Initializes the DataStore instance and loads persistent data into memory. Returns a copy of the config object. */
export async function initConfig() {
  const oldFmtVer = Number(await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-ver`, NaN));

  let oldDataHash: string | undefined;
  try {
    const oldData = await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-dat`, "{}");
    const oldDataObj = JSON.parse(oldData as string);
    // only show prompt if there is actual old data (not on the first initialization, resets, etc.)
    if(oldDataObj !== null && typeof oldDataObj === "object" && Object.keys(oldDataObj).length > 0)
      oldDataHash = await computeHash(JSON.stringify(oldDataObj), "sha256");
  }
  catch { void 0; }

  const rawData = await configStore.loadData();
  let data = fixCfgKeys(rawData);

  // show prompt if config data was migrated
  if(oldDataHash && oldDataHash !== await computeHash(JSON.stringify(data), "sha256")) {
    if(await showPrompt({
      type: "confirm",
      message: t("config_data_changed_prompt_open_menu"),
      confirmBtnText: t("open"),
      confirmBtnTooltip: t("open_menu_tooltip"),
      denyBtnText: t("prompt_close"),
      denyBtnTooltip: t("click_to_close_tooltip"),
    }))
      window.addEventListener("bytm:allReady", () => openCfgMenu(), { once: true });
  }

  loggers.data.log(`Initialized feature config DataStore with version ${configStore.formatVersion}`);
  if(isNaN(oldFmtVer))
    loggers.data.warn("  ⚠️ - Config data was initialized with default values");
  else if(oldFmtVer !== configStore.formatVersion) {
    try {
      await configStore.setData(data = fixCfgKeys(data));
      loggers.data.info(`  ⚠️ - Config data was migrated from version ${oldFmtVer} to ${configStore.formatVersion}`);
    }
    catch(err) {
      loggers.data.error("  ⚠️ - Config data migration failed, falling back to default data:", err);
      await configStore.setData(data = configStore.defaultData);
    }
  }
  // fixCfgKeys() may have added or removed keys even without a format version change
  // (e.g. new features added to a migration step after a client already recorded that version) - persist that fix too:
  else if(await computeHash(JSON.stringify(rawData), "SHA-256") !== await computeHash(JSON.stringify(data), "SHA-256")) {
    await configStore.setData(data);
    loggers.data.info("  ⚠️ - Fixed missing or extraneous config keys without a version change");
  }

  emitInterface("bytm:configReady");

  return structuredClone(data);
}

//#region fix keys

/**
 * Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
 * Doesn't traverse nested objects.  
 * Returns a copy of the originally passed object if nothing needs to be fixed.
 */
export function fixCfgKeys(cfg: Partial<FeatureConfig>): FeatureConfig {
  const newCfg = structuredClone(cfg);
  const currentKeys = Object.keys(newCfg).filter(ck => typeof cfg[ck as keyof typeof cfg] !== "undefined" && featInfo[ck as keyof typeof featInfo]?.type !== "button");
  const defaultKeys = Object.keys(cfgDefaultData);

  // add missing keys with default values:
  for(const key of defaultKeys.filter(k => !currentKeys.includes(k)))
    currentKeys.push(newCfg[key as keyof FeatureConfig] = cfgDefaultData[key as keyof FeatureConfig] as never);

  // remove extraneous keys that are not in the default config:
  for(const key of currentKeys.filter(k => !defaultKeys.includes(k)))
    delete newCfg[key as keyof FeatureConfig];

  return newCfg as FeatureConfig;
}

//#region feature getters/setters

/** Returns the current feature config from the in-memory cache as a copy */
export function getFeatures(): FeatureConfig {
  return configStore.getData();
}

/** Returns the value of the feature with the given key from the in-memory cache, as a copy */
export function getFeature<TKey extends FeatureKey>(key: TKey | "_", defaultVal?: FeatureConfig[TKey]): FeatureConfig[TKey] {
  const val = configStore.getData()[key as TKey];
  return val !== undefined ? val : defaultVal as never;
}

/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
export function setFeatures(featureConf: FeatureConfig) {
  const res = configStore.setData(featureConf);
  emitSiteEvent("configChanged", getFeaturesNoHidden());
  loggers.data.info("Saved new feature config:", getFeaturesNoHidden());
  return res;
}

/** Returns the feature config with all hidden features removed, as a copy */
export function getFeaturesNoHidden(featureCfg?: FeatureConfig): FeatureConfig {
  const feats = structuredClone({ ...(featureCfg ?? getFeatures()) });
  for(const ftKey of Object.keys(feats)) {
    const info = featInfo[ftKey as keyof typeof featInfo] as FeatureInfo[keyof FeatureInfo];
    if(info && "valueHidden" in info && info.valueHidden) // @ts-expect-error
      feats[ftKey as keyof typeof feats] = undefined;
  }
  return feats as FeatureConfig;
}

/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
export function setDefaultFeatures() {
  const res = configStore.saveDefaultData();
  emitSiteEvent("configChanged", getFeaturesNoHidden());
  loggers.data.info("Reset feature config to its default values");
  return res;
}

//#region reset config stuff

/** Shows a confirmation prompt to reset the config */
export async function promptResetConfig() {
  if(await showPrompt({ type: "confirm", message: t("reset_config_confirm") })) {
    closeCfgMenu();
    enableDiscardBeforeUnload();
    await setDefaultFeatures();
    await reloadTab();
  }
}

/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
export async function clearConfig() {
  await configStore.deleteData();
  loggers.data.info("Deleted config from persistent storage");
}

// #region tagged features

/** Object that maps feature types to their desired value types. All props are optional by default. */
type SetFeatureValues = {
  [T in FeatureTypeProps["type"]]?: Extract<FeatureTypeProps, { type: T }>["default"];
};

/** Object that maps modified feature keys to the new feature value. All props are optional by default. */
type ModifiedFeatureValues = {
  [T in keyof typeof featInfo]?: (typeof featInfo)[T]["default"];
};

/**
 * Sets all features in the config that match *all* the provided `tags` with the corresponding feature type value in the `setFeatureValues` object.  
 * Returns an object that maps modified feature keys to their new values.
 */
export async function configSetFeatsWithTags(tags: FeatureTag[], setFeatureValues: SetFeatureValues): Promise<ModifiedFeatureValues> {
  const modified: ModifiedFeatureValues = {};

  const features = getFeatures();

  for(const [ftKey, ftInfo] of Object.entries(featInfo)) {
    if(!("tags" in ftInfo) || ("tags" in ftInfo && !tags.every(tag => (ftInfo.tags as string[]).includes(tag))))
      continue;

    if(typeof setFeatureValues[ftInfo.type] !== "undefined") {
      // @ts-expect-error no good way to keep these generic without having a bunch of dumb type errors
      features[ftKey] = modified[ftKey] = setFeatureValues[ftInfo.type];
    }
  }

  await setFeatures(features);

  return modified;
}

/** Returns a subset of the feature config where each property's feature has *all* the given `tags`. */
export function getFeaturesWithTags(tags: FeatureTag[]): Partial<FeatureConfig> {
  const feats: Partial<FeatureConfig> = {};

  for(const [ftKey, ftInfo] of Object.entries(featInfo)) {
    if(!("tags" in ftInfo) || ("tags" in ftInfo && !tags.every(tag => (ftInfo.tags as string[]).includes(tag))))
      continue;

    // @ts-expect-error
    feats[ftKey] = getFeature(ftKey);
  }

  return feats;
}
