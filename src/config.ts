import { DataStore, compress, type DataMigrationsDict, decompress, type LooseUnion, clamp, purifyObj } from "@sv443-network/userutils";
import { enableDiscardBeforeUnload, featInfo } from "./features/index.js";
import { compressionSupported, error, getVideoTime, info, log, reloadTab, t, type TrLocale } from "./utils/index.js";
import { emitSiteEvent } from "./siteEvents.js";
import { compressionFormat } from "./constants.js";
import { emitInterface } from "./interface.js";
import { closeCfgMenu } from "./menu/menu_old.js";
import type { FeatureConfig, FeatureKey, NumberLengthFormat } from "./types.js";
import { showPrompt } from "./dialogs/prompt.js";

/** If this number is incremented, the features object data will be migrated to the new format */
export const formatVersion = 11;

export const defaultData = purifyObj(
  (Object.keys(featInfo) as (keyof typeof featInfo)[])
    // @ts-expect-error
    .filter((ftKey) => featInfo?.[ftKey]?.default !== undefined)
    .reduce<Partial<FeatureConfig>>((acc, key) => {
      // @ts-expect-error
      acc[key] = featInfo?.[key]?.default as unknown as undefined;
      return acc;
    }, {}) as FeatureConfig
);

/** Config data format migration dictionary */
export const migrations: DataMigrationsDict = {
  // 1 -> 2 (<=v1.0)
  2: (oldData: Record<string, unknown>) => {
    if(typeof oldData !== "object" || oldData === null)
      return defaultData;
    const queueBtnsEnabled = Boolean(oldData.queueButtons);
    delete oldData.queueButtons;
    return {
      ...oldData,
      deleteFromQueueButton: queueBtnsEnabled,
      lyricsQueueButton: queueBtnsEnabled,
    };
  },

  // 2 -> 3 (v1.0)
  3: (oldData: FeatureConfig) => useDefaultConfig(oldData, [
    "removeShareTrackingParam", "numKeysSkipToTime",
    "fixSpacing", "scrollToActiveSongBtn", "logLevel",
  ]),

  // 3 -> 4 (v1.1)
  4: (oldData: FeatureConfig) => {
    const oldSwitchSitesHotkey = oldData.switchSitesHotkey as Record<string, unknown>;
    return {
      ...useDefaultConfig(oldData, [
        "rememberSongTime", "rememberSongTimeSites",
        "volumeSliderScrollStep", "locale", "versionCheck",
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
  5: (oldData: FeatureConfig) => useDefaultConfig(oldData, [
    "localeFallback", "geniUrlBase", "geniUrlToken",
    "lyricsCacheMaxSize", "lyricsCacheTTL",
    "clearLyricsCache", "advancedMode",
    "checkVersionNow", "advancedLyricsFilter",
    "rememberSongTimeDuration", "rememberSongTimeReduction",
    "rememberSongTimeMinPlayTime", "volumeSharedBetweenTabs",
    "setInitialTabVolume", "initialTabVolumeLevel",
    "thumbnailOverlayBehavior", "thumbnailOverlayToggleBtnShown",
    "thumbnailOverlayShowIndicator", "thumbnailOverlayIndicatorOpacity",
    "thumbnailOverlayImageFit", "removeShareTrackingParamSites",
    "fixHdrIssues", "clearQueueBtn",
    "closeToastsTimeout", "disableDarkReaderSites",
  ]),

  // 5 -> 6 (v2.1)
  6: (oldData: FeatureConfig) => {
    const newData = useNewDefaultIfUnchanged(
      useDefaultConfig(oldData, [
        "autoLikeChannels", "autoLikeChannelToggleBtn",
        "autoLikeTimeout", "autoLikeShowToast",
        "autoLikeOpenMgmtDialog", "showVotes",
        "numbersFormat", "toastDuration",
        "initTimeout",
        // forgot to add this to the migration when adding the feature way before so now will have to do:
        "volumeSliderLabel",
      ]), [
        { key: "rememberSongTimeSites", oldDefault: "ytm" },
        { key: "volumeSliderScrollStep", oldDefault: 10 },
      ],
    );
    "removeUpgradeTab" in newData && delete newData.removeUpgradeTab;
    "advancedLyricsFilter" in newData && delete newData.advancedLyricsFilter;
    return newData;
  },

  // 6 -> 7 (v2.1-dev)
  7: (oldData: FeatureConfig) => {
    const newData = useNewDefaultIfUnchanged(
      useDefaultConfig(oldData, [
        "showToastOnGenericError", "sponsorBlockIntegration",
        "themeSongIntegration", "themeSongLightness",
        "errorOnLyricsNotFound", "openPluginList",
      ]), [
        { key: "toastDuration", oldDefault: 3 },
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
    return useDefaultConfig(oldData, [
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

    return useDefaultConfig(oldData, ["resetEverything"]);
  },

  // 9 -> 10 (v3.0)
  10: (oldData: FeatureConfig) => {
    oldData.closeToastsTimeout = clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);

    oldData.lyricsCacheMaxSize = clamp(oldData.lyricsCacheMaxSize, featInfo.lyricsCacheMaxSize.min, featInfo.lyricsCacheMaxSize.max);

    oldData.autoCloseToasts = oldData.closeToastsTimeout > 0;
    oldData.closeToastsTimeout = clamp(oldData.closeToastsTimeout, featInfo.closeToastsTimeout.min, featInfo.closeToastsTimeout.max);

    if("thumbnailOverlayImageFit" in oldData)
      delete oldData.thumbnailOverlayImageFit;

    return useNewDefaultIfUnchanged(
      useDefaultConfig(oldData, [
        "aboveQueueBtnsSticky", "autoScrollToActiveSongMode",
        "frameSkip", "frameSkipWhilePlaying",
        "frameSkipAmount", "watchPageFullSize",
        "arrowKeyVolumeStep", "likeDislikeHotkeys",
        "likeHotkey", "dislikeHotkey",
        "currentLyricsHotkeyEnabled", "currentLyricsHotkey",
        "skipToRemTimeHotkeyEnabled", "skipToRemTimeHotkey",
        "rebindNextAndPrevious", "nextHotkey",
        "previousHotkey", "rebindPlayPause",
        "playPauseHotkey", "thumbnailOverlayITunesImgRes",
      ]), [
        { key: "lyricsCacheMaxSize", oldDefault: 2000 },
      ],
    );
  },

  // 10 -> 11 (v3.1)
  11: (oldData: FeatureConfig) => useDefaultConfig(oldData, [
    "thumbnailOverlayPreferITunes",
  ]),
} as const satisfies DataMigrationsDict;

/** Uses the default config as the base, then overwrites all values with the passed {@linkcode baseData}, then sets all passed {@linkcode resetKeys} to their default values */
function useDefaultConfig(baseData: Partial<FeatureConfig> | undefined, resetKeys: LooseUnion<keyof typeof featInfo>[]): FeatureConfig {
  const newData = { ...defaultData, ...(baseData ?? {}) };
  for(const key of resetKeys) // @ts-expect-error
    newData[key] = featInfo?.[key]?.default as never; // typescript funny moments
  return newData;
}

/**
 * Uses {@linkcode oldData} as the base, then sets all keys provided in {@linkcode defaults} to their old default values, as long as their current value is equal to the provided old default.  
 * This essentially means if someone has changed a feature's value from its old default value, that decision will be respected. Only if it has been left on its old default value, it will be reset to the new default value.  
 * Returns a copy of the object.
 */
function useNewDefaultIfUnchanged<TConfig extends Partial<FeatureConfig>>(
  oldData: TConfig,
  defaults: Array<{ key: FeatureKey, oldDefault: unknown }>,
) {
  const newData = { ...oldData };
  for(const { key, oldDefault } of defaults) {
    // @ts-expect-error
    const defaultVal = featInfo?.[key]?.default as TConfig[typeof key];
    if(newData[key] === oldDefault)
      newData[key] = defaultVal as never; // we love TS
  }
  return newData as TConfig;
}

let canCompress = true;

export const configStore = new DataStore({
  id: "bytm-config",
  formatVersion,
  defaultData,
  migrations,
  encodeData: (data) => canCompress ? compress(data, compressionFormat, "string") : data,
  decodeData: (data) => canCompress ? decompress(data, compressionFormat, "string") : data,
});

/** Initializes the DataStore instance and loads persistent data into memory. Returns a copy of the config object. */
export async function initConfig() {
  canCompress = await compressionSupported();
  const oldFmtVer = Number(await GM.getValue(`_uucfgver-${configStore.id}`, NaN));

  // remove extraneous keys
  let data = fixCfgKeys(await configStore.loadData());
  await configStore.setData(data);

  log(`Initialized feature config DataStore with version ${configStore.formatVersion}`);
  if(isNaN(oldFmtVer))
    info("  !- Config data was initialized with default values");
  else if(oldFmtVer !== configStore.formatVersion) {
    try {
      await configStore.setData(data = fixCfgKeys(data));
      info(`  !- Config data was migrated from version ${oldFmtVer} to ${configStore.formatVersion}`);
    }
    catch(err) {
      error("  !- Config data migration failed, falling back to default data:", err);
      await configStore.setData(data = configStore.defaultData);
    }
  }

  emitInterface("bytm:configReady");

  return { ...data };
}

/**
 * Fixes missing keys in the passed config object with their default values or removes extraneous keys and returns a copy of the fixed object.  
 * Returns a copy of the originally passed object if nothing needs to be fixed.
 */
export function fixCfgKeys(cfg: Partial<FeatureConfig>): FeatureConfig {
  const newCfg = { ...cfg };
  const passedKeys = Object.keys(cfg);
  const defaultKeys = Object.keys(defaultData);
  const missingKeys = defaultKeys.filter(k => !passedKeys.includes(k));
  if(missingKeys.length > 0) {
    for(const key of missingKeys)
      newCfg[key as keyof FeatureConfig] = defaultData[key as keyof FeatureConfig] as never;
  }
  const extraKeys = passedKeys.filter(k => !defaultKeys.includes(k));
  if(extraKeys.length > 0) {
    for(const key of extraKeys)
      delete newCfg[key as keyof FeatureConfig];
  }
  return newCfg as FeatureConfig;
}

/** Returns the current feature config from the in-memory cache as a copy */
export function getFeatures(): FeatureConfig {
  return configStore.getData();
}

/** Returns the value of the feature with the given key from the in-memory cache, as a copy */
export function getFeature<TKey extends FeatureKey>(key: TKey | "_"): FeatureConfig[TKey] {
  return configStore.getData()[key as TKey];
}

/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
export function setFeatures(featureConf: FeatureConfig) {
  const res = configStore.setData(featureConf);
  emitSiteEvent("configChanged", configStore.getData());
  info("Saved new feature config:", featureConf);
  return res;
}

/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
export function setDefaultFeatures() {
  const res = configStore.saveDefaultData();
  emitSiteEvent("configChanged", configStore.getData());
  info("Reset feature config to its default values");
  return res;
}

export async function promptResetConfig() {
  if(await showPrompt({ type: "confirm", message: t("reset_config_confirm") })) {
    closeCfgMenu();
    enableDiscardBeforeUnload();
    await setDefaultFeatures();
    if(location.pathname.startsWith("/watch")) {
      const videoTime = await getVideoTime(0);
      const url = new URL(location.href);
      url.searchParams.delete("t");
      if(videoTime)
        url.searchParams.set("time_continue", String(videoTime));
      location.replace(url.href);
    }
    else
      await reloadTab();
  }
}

/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
export async function clearConfig() {
  await configStore.deleteData();
  info("Deleted config from persistent storage");
}
