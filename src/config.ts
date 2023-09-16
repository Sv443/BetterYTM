import { ConfigManager, ConfigMigrationsDict } from "@sv443-network/userutils";
import { featInfo } from "./features/index";
import { FeatureConfig } from "./types";
import { info, log } from "./utils";

/** If this number is incremented, the features object data will be migrated to the new format */
const formatVersion = 3;

const migrations: ConfigMigrationsDict = {
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
  const oldFmtVer = await GM.getValue(`_uucfgver-${cfgMgr.id}`, -1);
  const data = await cfgMgr.loadData();
  log(`Initialized ConfigManager (format version = ${cfgMgr.formatVersion})`);
  if(oldFmtVer !== cfgMgr.formatVersion)
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
  info("Saved new feature config:", featureConf);
}

/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
export async function setDefaultFeatures() {
  await cfgMgr.saveDefaultData();
  info("Reset feature config to its default values");
}
