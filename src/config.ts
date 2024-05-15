import { DataStore, compress, type DataMigrationsDict, decompress } from "@sv443-network/userutils";
import { featInfo } from "./features/index";
import { compressionSupported, info, log } from "./utils";
import { emitSiteEvent } from "./siteEvents";
import { compressionFormat } from "./constants";
import type { FeatureConfig, FeatureKey } from "./types";
import { emitInterface, getFeaturesInterface } from "./interface";

/** If this number is incremented, the features object data will be migrated to the new format */
export const formatVersion = 5;
/** Config data format migration dictionary */
export const migrations: DataMigrationsDict = {
  // 1 -> 2 (v1.0)
  2: (oldData: Record<string, unknown>) => {
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
  // 4 -> 5 (v1.2)
  5: (oldData: FeatureConfig) => ({
    ...useDefaultConfig(oldData, [
      "geniUrlBase", "geniUrlToken",
      "lyricsCacheMaxSize", "lyricsCacheTTL",
      "clearLyricsCache", "advancedMode",
      "checkVersionNow", "advancedLyricsFilter",
      "rememberSongTimeDuration", "rememberSongTimeReduction",
      "rememberSongTimeMinPlayTime", "volumeSharedBetweenTabs",
      "setInitialTabVolume", "initialTabVolumeLevel",
      "thumbnailOverlayBehavior", "thumbnailOverlayToggleBtnShown",
      "thumbnailOverlayShowIndicator", "thumbnailOverlayIndicatorOpacity",
      "thumbnailOverlayImageFit", "removeShareTrackingParamSites",
      "fixHdrIssues", "clearQueueBtn", "closeToastsTimeout",
    ]),
  }),
  // TODO: once advanced filtering is fully implemented, clear cache on migration to fv6
  // 5 -> 6 (v1.3)
  // 6: (oldData: FeatureConfig) => 
} as const satisfies DataMigrationsDict;

export const defaultData = (Object.keys(featInfo) as (keyof typeof featInfo)[])
  .reduce<Partial<FeatureConfig>>((acc, key) => {
    // @ts-ignore
    acc[key] = featInfo?.[key]?.default as unknown as undefined;
    return acc;
  }, {}) as FeatureConfig;

/** Uses the default config as the base, then overwrites all values with the passed {@linkcode baseData}, then sets all passed {@linkcode resetKeys} to their default values */
function useDefaultConfig(baseData: Partial<FeatureConfig> | undefined, resetKeys: (keyof typeof featInfo)[]): FeatureConfig {
  const newData = { ...defaultData, ...(baseData ?? {}) };
  for(const key of resetKeys) // @ts-ignore
    newData[key] = featInfo?.[key]?.default as never; // typescript funny moments
  return newData;
}

let canCompress = true;

const bytmCfgStore = new DataStore({
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
  const oldFmtVer = Number(await GM.getValue(`_uucfgver-${bytmCfgStore.id}`, NaN));
  let data = await bytmCfgStore.loadData();
  log(`Initialized feature config DataStore (formatVersion = ${bytmCfgStore.formatVersion})`);
  if(isNaN(oldFmtVer))
    info("  !- Config data was initialized with default values");
  else if(oldFmtVer !== bytmCfgStore.formatVersion) {
    data = fixMissingCfgKeys(data);
    await bytmCfgStore.setData(data);
    info(`  !- Config data was migrated from version ${oldFmtVer} to ${bytmCfgStore.formatVersion}`);
  }

  emitInterface("bytm:configReady", getFeaturesInterface());

  return { ...data };
}

/**
 * Fixes missing keys in the passed config object with their default values and returns a copy of the fixed object.  
 * Returns a copy of the originally passed object if nothing needs to be fixed.
 */
export function fixMissingCfgKeys(cfg: Partial<FeatureConfig>): FeatureConfig {
  cfg = { ...cfg };
  const passedKeys = Object.keys(cfg);
  const defaultKeys = Object.keys(defaultData);
  const missingKeys = defaultKeys.filter(k => !passedKeys.includes(k));
  if(missingKeys.length > 0) {
    info("Fixed missing feature config keys:", missingKeys);
    for(const key of missingKeys)
      cfg[key as keyof FeatureConfig] = defaultData[key as keyof FeatureConfig] as never;
  }
  return cfg as FeatureConfig;
}

/** Returns the current feature config from the in-memory cache as a copy */
export function getFeatures(): FeatureConfig {
  return bytmCfgStore.getData();
}

/** Returns the value of the feature with the given key from the in-memory cache, as a copy */
export function getFeature<TKey extends FeatureKey>(key: TKey): FeatureConfig[TKey] {
  return bytmCfgStore.getData()[key];
}

/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
export function setFeatures(featureConf: FeatureConfig) {
  const res = bytmCfgStore.setData(featureConf);
  emitSiteEvent("configChanged", bytmCfgStore.getData());
  info("Saved new feature config:", featureConf);
  return res;
}

/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
export function setDefaultFeatures() {
  const res = bytmCfgStore.saveDefaultData();
  emitSiteEvent("configChanged", bytmCfgStore.getData());
  info("Reset feature config to its default values");
  return res;
}

/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
export async function clearConfig() {
  await bytmCfgStore.deleteData();
  info("Deleted config from persistent storage");
}
