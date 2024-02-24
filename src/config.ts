import { ConfigManager, compress, type ConfigMigrationsDict, decompress } from "@sv443-network/userutils";
import { featInfo } from "./features/index";
import { compressionSupported, info, log } from "./utils";
import { emitSiteEvent } from "./siteEvents";
import { compressionFormat } from "./constants";
import type { FeatureConfig } from "./types";

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
  3: (oldData: Record<string, unknown>) => ({
    ...oldData,
    removeShareTrackingParam: getFeatureDefault("removeShareTrackingParam"),
    numKeysSkipToTime: getFeatureDefault("numKeysSkipToTime"),
    fixSpacing: getFeatureDefault("fixSpacing"),
    scrollToActiveSongBtn: getFeatureDefault("scrollToActiveSongBtn"),
    logLevel: getFeatureDefault("logLevel"),
  }),
  // 3 -> 4
  4: (oldData: Record<string, unknown>) => {
    const oldSwitchSitesHotkey = oldData.switchSitesHotkey as Record<string, unknown>;
    return {
      ...oldData,
      rememberSongTime: getFeatureDefault("rememberSongTime"),
      rememberSongTimeSites: getFeatureDefault("rememberSongTimeSites"),
      arrowKeySkipBy: 10,
      switchSitesHotkey: {
        code: oldSwitchSitesHotkey.key ?? "F9",
        shift: Boolean(oldSwitchSitesHotkey.shift ?? false),
        ctrl: Boolean(oldSwitchSitesHotkey.ctrl ?? false),
        alt: Boolean(oldSwitchSitesHotkey.meta ?? false),
      },
      listButtonsPlacement: "queueOnly",
      volumeSliderScrollStep: getFeatureDefault("volumeSliderScrollStep"),
      locale: getFeatureDefault("locale"),
      versionCheck: getFeatureDefault("versionCheck"),
    };
  },
  // 4 -> 5
  5: (oldData: Record<string, unknown>) => {
    return {
      ...oldData,
      geniUrlBase: getFeatureDefault("geniUrlBase"),
      lyricsCacheMaxSize: getFeatureDefault("lyricsCacheMaxSize"),
      lyricsCacheTTL: getFeatureDefault("lyricsCacheTTL"),
      clearLyricsCache: getFeatureDefault("clearLyricsCache"),
      advancedMode: getFeatureDefault("advancedMode"),
    };
  },
};

function getFeatureDefault<TKey extends keyof typeof featInfo>(key: TKey): typeof featInfo[TKey]["default"] {
  return featInfo[key].default;
}

export const defaultConfig = (Object.keys(featInfo) as (keyof typeof featInfo)[])
  .reduce<Partial<FeatureConfig>>((acc, key) => {
    acc[key] = featInfo[key].default as unknown as undefined;
    return acc;
  }, {}) as FeatureConfig;

let canCompress = true;

const cfgMgr = new ConfigManager({
  id: "bytm-config",
  formatVersion,
  defaultConfig,
  migrations,
  encodeData: (data) => canCompress ? compress(data, compressionFormat, "string") : data,
  decodeData: (data) => canCompress ? decompress(data, compressionFormat, "string") : data,
});

/** Initializes the ConfigManager instance and loads persistent data into memory */
export async function initConfig() {
  canCompress = await compressionSupported();
  const oldFmtVer = Number(await GM.getValue(`_uucfgver-${cfgMgr.id}`, NaN));
  const data = await cfgMgr.loadData();
  log(`Initialized ConfigManager (format version = ${cfgMgr.formatVersion})`);
  if(isNaN(oldFmtVer))
    info("Config data initialized with default values");
  else if(oldFmtVer !== cfgMgr.formatVersion)
    info(`Config data migrated from version ${oldFmtVer} to ${cfgMgr.formatVersion}`);
  return { ...data };
}

/** Returns the current feature config from the in-memory cache as a copy */
export function getFeatures() {
  return cfgMgr.getData();
}

/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
export function saveFeatures(featureConf: FeatureConfig) {
  const res = cfgMgr.setData(featureConf);
  emitSiteEvent("configChanged", cfgMgr.getData());
  info("Saved new feature config:", featureConf);
  return res;
}

/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
export function setDefaultFeatures() {
  const res = cfgMgr.saveDefaultData();
  emitSiteEvent("configChanged", cfgMgr.getData());
  info("Reset feature config to its default values");
  return res;
}

/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
export async function clearConfig() {
  await cfgMgr.deleteConfig();
  info("Deleted config from persistent storage");
}
