import type { PluginDef, PluginEventMap, PluginItem, PluginDefResolvable } from "@/types.ts";

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
