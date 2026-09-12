import { DataStore, NanoEmitter } from "@sv443-network/coreutils";
import { GMStorageEngine } from "@sv443-network/userutils";
import { featDefaults } from "@feat/featDefaults.ts";
import { compressionFormat } from "@/constants.ts";
import { loggers, setErrorToastsEnabled } from "@util/logging.ts";
import { setLogEventsEnabled } from "@/core/interfaceEvents.ts";
import { cfgDefaultData, cfgFormatVersion, cfgMigrations } from "@/configSchema.ts";
import type { FeatureConfig, FeatureKey, FeatureTag, FeatureTypeProps } from "@/types.ts";

/**
 * The live feature config store and its getters/setters.
 *
 * This is the module nearly everything needs ({@linkcode getFeature} alone has the highest
 * in-degree in the codebase), so it must stay free of anything above it - the schema
 * ({@linkcode "@/configSchema.ts"}), the init flow ({@linkcode "@/configInit.ts"}) and the reset
 * prompt ({@linkcode "@menu/resetConfig.ts"}) all live elsewhere for exactly this reason.
 */

//#region >> store

/** Emits "changed" whenever the feature config is saved. Bridged onto the site-event bus by {@linkcode "@/configInit.ts"}, so this module doesn't have to depend on it. */
export const configEvents = new NanoEmitter<{ changed: (cfg: FeatureConfig) => void }>({ publicEmit: false });

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
  setErrorToastsEnabled(Boolean(featureConf.showToastOnGenericError));
  setLogEventsEnabled(Boolean(featureConf.logEvents));
  configEvents.emit("changed", getFeaturesNoHidden());
  loggers.data.info("Saved new feature config:", getFeaturesNoHidden());
  return res;
}

/** Returns the feature config with all hidden features removed, as a copy */
export function getFeaturesNoHidden(featureCfg?: FeatureConfig): FeatureConfig {
  const feats = structuredClone({ ...(featureCfg ?? getFeatures()) });
  for(const ftKey of Object.keys(feats)) {
    const info = featDefaults[ftKey as keyof typeof featDefaults] as { valueHidden?: boolean };
    if(info && "valueHidden" in info && info.valueHidden) // @ts-expect-error
      feats[ftKey as keyof typeof feats] = undefined;
  }
  return feats as FeatureConfig;
}

/** Saves the default feature config synchronously to the in-memory cache and asynchronously to persistent storage */
export function setDefaultFeatures() {
  const res = configStore.saveDefaultData();
  configEvents.emit("changed", getFeaturesNoHidden());
  loggers.data.info("Reset feature config to its default values");
  return res;
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
  [T in keyof typeof featDefaults]?: (typeof featDefaults)[T]["default"];
};

/**
 * Sets all features in the config that match *all* the provided `tags` with the corresponding feature type value in the `setFeatureValues` object.  
 * Returns an object that maps modified feature keys to their new values.
 */
export async function configSetFeatsWithTags(tags: FeatureTag[], setFeatureValues: SetFeatureValues): Promise<ModifiedFeatureValues> {
  const modified: ModifiedFeatureValues = {};

  const features = getFeatures();

  for(const [ftKey, ftInfo] of Object.entries(featDefaults)) {
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

  for(const [ftKey, ftInfo] of Object.entries(featDefaults)) {
    if(!("tags" in ftInfo) || ("tags" in ftInfo && !tags.every(tag => (ftInfo.tags as string[]).includes(tag))))
      continue;

    // @ts-expect-error
    feats[ftKey] = getFeature(ftKey);
  }

  return feats;
}
