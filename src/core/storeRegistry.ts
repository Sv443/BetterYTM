import type { DataStore } from "@sv443-network/userutils";

/**
 * @module core/storeRegistry Central registry of every {@linkcode DataStore} instance in the codebase, so `@/serializers.ts` can collect them without importing the module that owns each one.
 */

/**
 * A {@linkcode DataStore} instance that has been registered in the storeRegistry module (using {@linkcode registerStore()}).
 */
type RegisteredStore = { store: DataStore<any, boolean>, full: boolean };

const stores = new Map<string, RegisteredStore>();

/**
 * Registers a {@linkcode DataStore} instance so it is picked up by the DataStoreSerializers in `@/serializers.ts`.
 * @param full If true, the store is only included in the "full" serializer (see `@/serializers.ts`'s `getSerializerStoresFull`) - use this for caches and other volatile-ish data.
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
