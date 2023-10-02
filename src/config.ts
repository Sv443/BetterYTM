import { ConfigManager, ConfigMigrationsDict } from "@sv443-network/userutils";
import { featInfo } from "./features/index";
import { FeatureConfig } from "./types";
import { info, log } from "./utils";
import { emitSiteEvent } from "./siteEvents";

/** If this number is incremented, the features object data will be migrated to the new format */
export const formatVersion = 4;
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
    removeShareTrackingParam: true,
    numKeysSkipToTime: true,
    fixSpacing: true,
    scrollToActiveSongBtn: true,
    logLevel: 1,
  }),
  // 3 -> 4
  4: (oldData: Record<string, unknown>) => ({
    ...oldData,
    locale: "en_US",
    boostGain: true,
    rememberSongTime: false,
  }),
};

export const defaultConfig = (Object.keys(featInfo) as (keyof typeof featInfo)[])
  .reduce<Partial<FeatureConfig>>((acc, key) => {
    acc[key] = featInfo[key].default as unknown as undefined;
    return acc;
  }, {}) as FeatureConfig;

const cfgMgr = new ConfigManager({
  id: "bytm-config",
  formatVersion,
  defaultConfig,
  migrations,
});

/** Initializes the ConfigManager instance and loads persistent data into memory */
export async function initConfig() {
  const oldFmtVer = Number(await GM.getValue(`_uucfgver-${cfgMgr.id}`, NaN));
  const data = await cfgMgr.loadData();
  log(`Initialized ConfigManager (format version = ${cfgMgr.formatVersion})`);
  if(isNaN(oldFmtVer))
    info("Config data initialized with default values");
  else if(oldFmtVer !== cfgMgr.formatVersion)
    info(`Config data migrated from version ${oldFmtVer} to ${cfgMgr.formatVersion}`);
  return data;
}

/** Returns the current feature config from the in-memory cache */
export function getFeatures() {
  return cfgMgr.getData();
}

/** Saves the feature config synchronously to the in-memory cache and asynchronously to the persistent storage */
export async function saveFeatures(featureConf: FeatureConfig) {
  await cfgMgr.setData(featureConf);
  emitSiteEvent("configChanged", cfgMgr.getData());
  info("Saved new feature config:", featureConf);
}

/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
export async function setDefaultFeatures() {
  await cfgMgr.saveDefaultData();
  emitSiteEvent("configChanged", cfgMgr.getData());
  info("Reset feature config to its default values");
}

/** Clears the feature config from the persistent storage - since the cache will be out of whack, this should only be run before a site re-/unload */
export async function clearConfig() {
  await cfgMgr.deleteConfig();
  info("Deleted config from persistent storage");
}
