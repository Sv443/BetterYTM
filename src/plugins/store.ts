import { DataStore, DatedError, GMStorageEngine, bitSetHas } from "@sv443-network/userutils";
import { registerStore } from "@/core/storeRegistry.ts";
import type { PluginDef, PluginEventMap, PluginItem, PluginDefResolvable, BitSetTSEnum } from "@/types.ts";

/**
 * The registry of plugins that have registered themselves with BYTM.  
 *   
 * Kept apart from {@linkcode "@/interface.ts"} - which owns the registration *flow* - because
 * {@linkcode "@/core/interfaceEvents.ts"} needs {@linkcode emitOnPlugins} from far down the
 * dependency graph. Must stay free of internal value imports.
 */

/** Map of plugin key to all registered plugins */
export const registeredPlugins = new Map<string, PluginItem>();

/** Map of plugin key to auth token for plugins that have been registered */
export const registeredPluginTokens = new Map<string, string>();

/** Returns the key for a given plugin definition */
export function getPluginKey({ plugin }: PluginDefResolvable) {
  return `${plugin.namespace}/${plugin.name}`;
}

/** Emits an event on all plugins that match the predicate (all plugins by default) */
export function emitOnPlugins<TEvtKey extends keyof PluginEventMap>(
  event: TEvtKey,
  predicate: ((def: PluginDef) => boolean) | boolean = true,
  ...data: Parameters<PluginEventMap[TEvtKey]>
) {
  for(const { def, events } of registeredPlugins.values())
    if(typeof predicate === "boolean" ? predicate : predicate(def))
      events.emit(event, ...data);
}

//#region permissions

/**
 * Data stored by the {@linkcode pluginPermissionsStore}.  
 * Maps a plugin key (see {@linkcode getPluginKey()}) to a tuple of granted permissions (index 0), at the point in time where the plugin requested the given intents (index 1).  
 * At init time, should the plugin register itself with an intent bitset that doesn't match the requested intents (tuple index 1), the plugin permission dialog should be shown again, since permissions need to be re-granted or reconfigured.
 */
type PluginPermissionsStoreData = {
  [pluginKey: string]: [grantedPermissions: number, requestedIntents: number];
};

/**
 * Stores information about plugins that have been registered and have had their intents granted (thus turning them into permissions).  
 * Maps a plugin key (see {@linkcode getPluginKey()}) to a tuple of granted permissions (index 0), at the point in time where the plugin requested the given intents (index 1).  
 * At init time, should the plugin register itself with an intent bitset that doesn't match the requested intents (tuple index 1), the plugin permission dialog should be shown again, since permissions need to be re-granted or reconfigured.
 */
export const pluginPermissionsStore = new DataStore<PluginPermissionsStoreData>({
  id: "bytm-plugin-permissions",
  engine: new GMStorageEngine(),
  defaultData: {},
  formatVersion: 0,
  compressionFormat: null,
});
registerStore(pluginPermissionsStore);

let pluginPermissionsStoreLoaded = false;

/** Ensures the {@linkcode pluginPermissionsStore} has loaded at least once. Safe to call more than once. */
export async function ensurePluginPermissionsLoaded(): Promise<void> {
  if(!pluginPermissionsStoreLoaded) {
    await pluginPermissionsStore.loadData();
    pluginPermissionsStoreLoaded = true;
  }
}

/** Returns the permission integers from the {@linkcode pluginPermissionsStore} for the given plugin. */
export function getPermStorePerms(def: PluginDefResolvable): [grantedPerms: number, requestedIntents: number] | undefined {
  if(!pluginPermissionsStoreLoaded)
    throw new DatedError(`Couldn't get permissions for plugin '${getPluginKey(def)}' because the permissions store isn't loaded yet.`);
  return pluginPermissionsStore.getData()?.[getPluginKey(def)];
}

/** Updates the given plugin to the given permissions in memory. Doesn't emit the `pluginsUpdated` broadcast event. */
export function setRegisteredPluginPerms(plugin: PluginDefResolvable, perms: number) {
  const plKey = getPluginKey(plugin);
  const regPl = registeredPlugins.get(plKey);

  if(regPl) {
    regPl.grantedPerms = perms;

    registeredPlugins.set(plKey, regPl);
  }
}

/** Converts the intents from a PluginDef object into a bit set value. */
export function defToIntentsBitSet(def: PluginDef): number {
  if(Array.isArray(def.intents))
    return def.intents.reduce((acc, intent) => acc | intent, 0);
  else if(typeof def.intents === "number")
    return def.intents;
  else
    return 0;
}

/** Iterates over the {@linkcode enumRef} and returns an array of all intents that are set in the passed {@linkcode bitSet} value. */
export function parseBitSetEnumArray<TNum extends number | bigint>(bitSet: TNum, enumRef: BitSetTSEnum): TNum[] {
  const result: TNum[] = [];
  for(const [, val] of Object.entries(enumRef))
    if((typeof val === "number" || typeof val === "bigint") && bitSetHas(bitSet, val as TNum))
      result.push(val as TNum);
  return result;
}
