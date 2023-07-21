import { featInfo } from "./features/index";
import { FeatureConfig } from "./types";
import { log } from "./utils";

/** If this number is incremented, the features object needs to be migrated (TODO: migration not implemented yet) */
const formatVersion = 1;

export const defaultFeatures = (Object.keys(featInfo) as (keyof typeof featInfo)[])
  .reduce<Partial<FeatureConfig>>((acc, key) => {
    acc[key] = featInfo[key].default as unknown as undefined;
    return acc;
  }, {}) as FeatureConfig;

/** In-memory features object to save on a little bit of I/O */
let featuresCache: FeatureConfig | undefined;

/**
 * Returns the current FeatureConfig in memory or reads it from GM storage  
 * Automatically applies defaults for non-existant keys
 * @param forceRead Set to true to force reading the config from GM storage
 */
export async function getFeatures(forceRead = false) {
  if(featuresCache === undefined || forceRead)
    await saveFeatureConf(featuresCache = { ...defaultFeatures, ...await loadFeatureConf() }); // look at this sexy one liner
  return featuresCache;
}

/** Loads a feature configuration saved persistently, returns an empty object if no feature configuration was saved */
export async function loadFeatureConf(): Promise<FeatureConfig> {
  const defConf = { ...defaultFeatures };

  try {
    const featureConf = await GM.getValue("betterytm-config") as string;

    if(typeof featureConf !== "string") {
      await setDefaultFeatConf();
      return featuresCache = defConf;
    }

    return featuresCache = Object.freeze(featureConf ? JSON.parse(featureConf) as FeatureConfig : defConf);
  }
  catch(err) {
    await setDefaultFeatConf();
    return featuresCache = defConf;
  }
}

/**
 * Saves the passed feature configuration persistently in GM storage and in the in-memory cache
 * @param featureConf
 */
export function saveFeatureConf(featureConf: FeatureConfig) {
  if(!featureConf || typeof featureConf != "object")
    throw new TypeError("Feature config not provided or invalid");
 
  log("Saving new feature config:", featureConf);
  featuresCache = { ...featureConf };

  GM.setValue("betterytm-config-ver", formatVersion);
  return GM.setValue("betterytm-config", JSON.stringify(featureConf));
}

/** Resets the featuresCache synchronously and the persistent features storage asynchronously to their default values */
export function setDefaultFeatConf() {
  featuresCache = { ...defaultFeatures };
  GM.setValue("betterytm-config-ver", formatVersion);
  return GM.setValue("betterytm-config", JSON.stringify(defaultFeatures));
}
