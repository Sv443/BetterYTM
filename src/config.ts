import { DataStore, compress, type ConfigMigrationsDict, decompress } from "@sv443-network/userutils";
import { featInfo } from "./features/index";
import { compressionSupported, info, log } from "./utils";
import { emitSiteEvent } from "./siteEvents";
import { compressionFormat } from "./constants";
import type { FeatureConfig } from "./types";
import { emitInterface, getFeaturesInterface } from "./interface";

/** If this number is incremented, the features object data will be migrated to the new format */
export const formatVersion = 5;
/** Config data format migration dictionary */
export const migrations: ConfigMigrationsDict = {
  // 1 -> 2
  2: (oldData: Record<string, unknown>) => {
    const queueBtnsEnabled = Boolean(oldData.queueButtons);
    delete oldData.queueButtons;
    return {
      ...oldData,
      deleteFromQueueButton: queueBtnsEnabled,
      lyricsQueueButton: queueBtnsEnabled,
    };
  },
  // 2 -> 3
  3: (oldData: FeatureConfig) => useDefaultConfig([
    "removeShareTrackingParam", "numKeysSkipToTime",
    "fixSpacing", "scrollToActiveSongBtn", "logLevel",
  ], oldData),
  // 3 -> 4
  4: (oldData: FeatureConfig) => {
    const oldSwitchSitesHotkey = oldData.switchSitesHotkey as Record<string, unknown>;
    return {
      ...useDefaultConfig([
        "rememberSongTime", "rememberSongTimeSites",
        "volumeSliderScrollStep", "locale", "versionCheck",
      ], oldData),
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
  // 4 -> 5
  5: (oldData: FeatureConfig) => useDefaultConfig([
    "geniUrlBase", "geniUrlToken",
    "lyricsCacheMaxSize", "lyricsCacheTTL",
    "clearLyricsCache", "advancedMode",
    "checkVersionNow", "advancedLyricsFilter",
    "rememberSongTimeDuration", "rememberSongTimeReduction",
    "rememberSongTimeMinPlayTime", "volumeSharedBetweenTabs",
    "setInitialTabVolume", "initialTabVolumeLevel",
  ], oldData),
} as const satisfies ConfigMigrationsDict;
// TODO: once advanced filtering is fully implemented, clear cache on migration (to v6)

/** Uses the passed {@linkcode oldData} as the base (if given) and sets all passed {@linkcode keys} to their feature default - returns a copy of the object */
function useDefaultConfig(keys: (keyof typeof featInfo)[], oldData?: FeatureConfig): Partial<FeatureConfig> {
  const newData = { ...(oldData ?? {}) };
  for(const key of keys)
    newData[key as keyof typeof featInfo] = getFeatureDefault(key as keyof typeof featInfo) as unknown as never;
  return newData;
}

/** Returns the default value for the given feature key */
function getFeatureDefault<TKey extends keyof typeof featInfo>(key: TKey): typeof featInfo[TKey]["default"] {
  return featInfo[key].default;
}

export const defaultData = (Object.keys(featInfo) as (keyof typeof featInfo)[])
  .reduce<Partial<FeatureConfig>>((acc, key) => {
    acc[key] = featInfo[key].default as unknown as undefined;
    return acc;
  }, {}) as FeatureConfig;

let canCompress = true;

const bytmCfgStore = new DataStore({
  id: "bytm-config",
  formatVersion,
  defaultData,
  migrations,
  encodeData: (data) => canCompress ? compress(data, compressionFormat, "string") : data,
  decodeData: (data) => canCompress ? decompress(data, compressionFormat, "string") : data,
});

/** Initializes the DataStore instance and loads persistent data into memory */
export async function initConfig() {
  canCompress = await compressionSupported();
  const oldFmtVer = Number(await GM.getValue(`_uucfgver-${bytmCfgStore.id}`, NaN));
  const data = await bytmCfgStore.loadData();
  log(`Initialized DataStore (format version = ${bytmCfgStore.formatVersion})`);
  if(isNaN(oldFmtVer))
    info("Config data initialized with default values");
  else if(oldFmtVer !== bytmCfgStore.formatVersion)
    info(`Config data migrated from version ${oldFmtVer} to ${bytmCfgStore.formatVersion}`);

  emitInterface("bytm:configReady", getFeaturesInterface());

  return { ...data };
}

/** Returns the current feature config from the in-memory cache as a copy */
export function getFeatures() {
  return bytmCfgStore.getData();
}

/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
export function saveFeatures(featureConf: FeatureConfig) {
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
