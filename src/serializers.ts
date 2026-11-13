import { ChecksumMismatchError, DataStoreSerializer, type DataStore, type DataStoreSerializerOptions } from "@sv443-network/userutils";
import { getStores } from "@/core/storeRegistry.ts";
import { scriptInfo } from "@/constants.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { t } from "@util/translations.ts";
import { loggers } from "@util/logging.ts";
import { downloadFile } from "@util/dom.ts";
import { reloadTab } from "@util/misc.ts";
import packageJson from "@root/package.json" with { type: "json" };
import { emitInterface } from "@/core/interfaceEvents.ts";

/** Central serializer for all data stores */
let serializer: DataStoreSerializer | undefined;

/** Central serializer for all data stores, including the caches and other stores that have volatile enough data */
let fullSerializer: DataStoreSerializer | undefined;

/** Set of IDs of all {@linkcode DataStore} instances whose data has finished loading at least once. */
export const loadedStores = new Set<string>();

/** Wraps an array of {@linkcode DataStore} instances to attach event listeners. */
function wrapStores(stores: DataStore<any, boolean>[]): DataStore<any, boolean>[] {
  for(const store of stores)
    store.once("loadData", () => loadedStores.add(store.id));

  return stores;
}

/**
 * Array of all "crucial" {@linkcode DataStore} instances (registered without `full: true` in
 * {@linkcode "@/core/storeRegistry.ts"}) that are included in the crucial-data-only
 * DataStoreSerializer instance.
 */
export const getSerializerStores = () => wrapStores(getStores(false));

/**
 * Array of every registered {@linkcode DataStore} instance, including the caches and other stores
 * that store volatile-ish data.
 */
export const getSerializerStoresFull = () => wrapStores(getStores(true));

/** Array of IDs of all stores included in the DataStoreSerializer instance obtained via {@linkcode getSerializerStores()} or {@linkcode getSerializerStores()}, depending on if {@linkcode full} is set to true or false (default). */
export const getSerializerStoresIds = (full = false) => (full ? getSerializerStoresFull : getSerializerStores)().map(store => store.id);

/** Returns the DataStoreSerializer instance for all DataStore instances that manage crucial data. Doesn't include the full list of stores (caches, etc.) by default. */
export function getDSSerializer(full = false): DataStoreSerializer {
  const dsOpts: DataStoreSerializerOptions = {
    addChecksum: false,
    ensureIntegrity: false,
    stringifyData: false,
  };

  if(!full)
    return serializer ??= new DataStoreSerializer(getSerializerStores() as DataStore<any, boolean>[], dsOpts);
  else
    return fullSerializer ??= new DataStoreSerializer(getSerializerStoresFull() as DataStore<any, boolean>[], dsOpts);
}

// load stores & emit interface events
window.addEventListener("bytm:ready", async () => {
  const promises: Promise<unknown>[] = [];
  const stores = getSerializerStoresFull();

  for(const store of stores) {
    if(loadedStores.has(store.id) || !store.memoryCache)
      continue;

    loadedStores.add(store.id);
    promises.push(store.loadData());
  }

  await Promise.all(promises);
  emitInterface("bytm:dataStoreSerializerLoaded");

  loggers.init.info(`Lazy-loaded all ${stores.length} DataStore instances.`);
});

/** Imports data from a user-provided file into all specified and valid DataStores. */
export async function importData(blob: File | Blob) {
  try {
    // full DSS import won't fail, even with missing stores
    const serializer = getDSSerializer(true);

    const data = await blob.text();
    await serializer.deserialize(data);

    if(await showPrompt({
      type: "confirm",
      message: t("import_success_confirm_reload"),
    }))
      await reloadTab();
  }
  catch(err) {
    loggers.data.error("Error while importing serialized DataStores:", err);

    if(err instanceof TypeError)
      await showPrompt({
        type: "alert",
        message: t("import_error.no_data"),
      });
    else if(err instanceof ChecksumMismatchError)
      await showPrompt({
        type: "alert",
        message: t("import_error.checksum_mismatch"),
      });
    else
      await showPrompt({
        type: "alert",
        message: t("import_error.invalid"),
      });
  }
}

/**
 * Downloads the current data stores as a single file.
 * @param useEncoding Whether to encode the data using the DataStoreSerializer's encoding method. Defaults to `true`.
 * @param full Whether to include all stores (the list returned by {@linkcode getSerializerStoresFull()}) or just the most important ones (the list returned by {@linkcode getSerializerStores()}). Defaults to `false`.
 */
export async function downloadData(useEncoding = true, full = false) {
  const serializer = getDSSerializer(full);

  const fileName = t(`data_export_file_name${full ? "_full" : ""}`, {
    scriptName: scriptInfo.name,
    version: packageJson.version,
    date: new Date().toISOString(),
  });

  const data = JSON.stringify(JSON.parse(await serializer.serialize(useEncoding)), undefined, 2);

  downloadFile(fileName, data, "application/json");
}
