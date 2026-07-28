import { ChecksumMismatchError, DataStoreSerializer, type DataStore, type DataStoreSerializerOptions } from "@sv443-network/coreutils";
import { configStore } from "@/config.ts";
import { scriptInfo } from "@/constants.ts";
import { autoLikeStore } from "@feat/autoLike.ts";
import { artCacheStore } from "@feat/layout.ts";
import { lyricsCacheStore } from "@feat/lyricsCache.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { t } from "@util/translations.ts";
import { loggers } from "@util/logging.ts";
import { downloadFile } from "@util/dom.ts";
import { alertsStore } from "@util/data.ts";
import { reloadTab, resourceCacheStore } from "@util/misc.ts";
import packageJson from "@root/package.json" with { type: "json" };

/** Central serializer for all data stores */
let serializer: DataStoreSerializer | undefined;

/** Central serializer for all data stores, including the caches and other stores that have volatile enough data */
let fullSerializer: DataStoreSerializer | undefined;

/** Array of all data stores that are included in the DataStoreSerializer instance */
export const getSerializerStores = () => [
  configStore,
  autoLikeStore,
  alertsStore,
] satisfies DataStore<any, boolean>[];

/** Array of all data stores, including the caches and other stores that have volatile enough data */
export const getSerializerStoresFull = () => [
  ...getSerializerStores(),
  artCacheStore,
  lyricsCacheStore,
  resourceCacheStore,
] satisfies DataStore<any, boolean>[];

/** Array of IDs of all stores included in the DataStoreSerializer instance */
export const getSerializerStoresIds = () => getSerializerStores().map(store => store.id);

/** Returns the serializer for all data stores. Doesn't include the full list of stores by default. */
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

/** Imports data from a file into all data stores */
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
