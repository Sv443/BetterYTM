import { ConfigManager } from "@sv443-network/userutils";
import { featInfo } from "./features/index";
import { FeatureConfig } from "./types";
import { info, log } from "./utils";

/** If this number is incremented, the features object data will be migrated to the new format */
const formatVersion = 1;

export const defaultConfig = (Object.keys(featInfo) as (keyof typeof featInfo)[])
  .reduce<Partial<FeatureConfig>>((acc, key) => {
    acc[key] = featInfo[key].default as unknown as undefined;
    return acc;
  }, {}) as FeatureConfig;

const cfgMgr = new ConfigManager({
  id: "bytm-config",
  formatVersion,
  defaultConfig,
});

/** Initializes the ConfigManager instance and loads persistent data into memory */
export async function initConfig() {
  const data = await cfgMgr.loadData();
  log(`Initialized ConfigManager (format version = ${cfgMgr.formatVersion})`);
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
  info("Reset feature config to its default value");
}
