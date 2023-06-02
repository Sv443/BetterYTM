import { featInfo } from "./features/index";
import { FeatureConfig } from "./types";

export const defaultFeatures = (Object.keys(featInfo) as (keyof typeof featInfo)[]).reduce<Partial<FeatureConfig>>((acc, key) => {
  acc[key] = featInfo[key].default as unknown as undefined;
  return acc;
}, {}) as FeatureConfig;

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
  const defConf = Object.freeze({ ...defaultFeatures });

  try {
    const featureConf = await GM.getValue("betterytm-config") as string;

    if(typeof featureConf !== "string") {
      await setDefaultFeatConf();
      return featuresCache = defConf;
    }

    return Object.freeze(featureConf ? JSON.parse(featureConf) : {});
  }
  catch(err) {
    await setDefaultFeatConf();
    return featuresCache = defConf;
  }
}

/**
 * Saves a feature configuration saved persistently
 * @param featureConf
 */
export function saveFeatureConf(featureConf: FeatureConfig) {
  if(!featureConf || typeof featureConf != "object")
    throw new TypeError("Feature config not provided or invalid");

  featuresCache = { ...featureConf };
  return GM.setValue("betterytm-config", JSON.stringify(featureConf));
}

/** Resets the featuresCache synchronously and the persistent features storage asynchronously to its default values */
export function setDefaultFeatConf() {
  featuresCache = { ...defaultFeatures };
  return GM.setValue("betterytm-config", JSON.stringify(defaultFeatures));
}
