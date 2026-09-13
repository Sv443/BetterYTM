import type { DataStore } from "@sv443-network/coreutils";

/**
 * Central registry of every {@linkcode DataStore} instance in the codebase, so
 * `@/serializers.ts` can collect them without importing the module that owns each one.
 *
 * Before this existed, `serializers.ts` imported `configStore`, `autoLikeStore`, `alertsStore`,
 * `pluginPermissionsStore`, `artCacheStore` and `lyricsCacheStore` directly, which pulled
 * `interface.ts` and several feature modules into a cycle with `serializers.ts` (and, through it,
 * with each other). Each store now registers itself here, right next to its own
 * `new DataStore(...)` call, and `serializers.ts` only depends on this leaf.
 */

type RegisteredStore = { store: DataStore<any, boolean>, full: boolean };

const stores = new Map<string, RegisteredStore>();

/**
 * Registers a {@linkcode DataStore} instance so it is picked up by the DataStoreSerializer.
 * @param full If true, the store is only included in the "full" serializer (see
 * `@/serializers.ts`'s `getSerializerStoresFull`) - use this for caches and other volatile-ish data.
 */
export function registerStore(store: DataStore<any, boolean>, opts: { full?: boolean } = {}): void {
  stores.set(store.id, { store, full: opts.full ?? false });
}

/** Returns every registered store, or only the "crucial" ones (not registered with `full: true`) if {@linkcode full} is false. */
export function getStores(full = false): DataStore<any, boolean>[] {
  return [...stores.values()]
    .filter(s => full || !s.full)
    .map(s => s.store);
}
