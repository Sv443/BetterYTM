import { DataStoreSerializer } from "@sv443-network/userutils";
import { configStore } from "./config.js";
import { autoLikeStore } from "./features/autoLike.js";
import { showPrompt } from "./dialogs/prompt.js";
import { t } from "./utils/translations.js";
import { error } from "./utils/logging.js";
import { downloadFile } from "./utils/dom.js";
import { reloadTab, resourceCacheStore } from "./utils/misc.js";
import packageJson from "../package.json" with { type: "json" };
import { albumArtCacheStore } from "./features/layout.js";
import { lyricsCacheStore } from "./features/lyricsCache.js";

/** Central serializer for all data stores */
let serializer: DataStoreSerializer | undefined;

/** Central serializer for all data stores, including the caches and other stores that have volatile enough data */
let fullSerializer: DataStoreSerializer | undefined;

/** Array of all data stores that are included in the DataStoreSerializer instance */
export const getSerializerStores = () => [
  configStore,
  autoLikeStore,
];

/** Array of all data stores, including the caches and other stores that have volatile enough data */
export const getSerializerStoresFull = () => [
  ...getSerializerStores(),
  albumArtCacheStore,
  lyricsCacheStore,
  resourceCacheStore,
];

/** Array of IDs of all stores included in the DataStoreSerializer instance */
export const getSerializerStoresIds = () => getSerializerStores().map(store => store.id);

/** Returns the serializer for all data stores. Doesn't include the full list of stores by default. */
export function getDSSerializer(full = false): DataStoreSerializer {
  if(!full && !serializer)
    return serializer = new DataStoreSerializer(getSerializerStores(), {
      addChecksum: true,
      ensureIntegrity: true,
    });
  else if(full && !fullSerializer)
    return fullSerializer = new DataStoreSerializer(getSerializerStoresFull(), {
      addChecksum: true,
      ensureIntegrity: true,
    });
  return full ? fullSerializer! : serializer!;
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
    error("Error while importing serialized DataStores:", err);

    await showPrompt({
      type: "alert",
      message: t("import_error_invalid"),
    });
  }
}

/** Downloads the current data stores as a single file */
export async function downloadData(useEncoding = true, full = false) {
  const serializer = getDSSerializer(full);

  // const pad = (val: Stringifiable, len = 2) => String(val).padStart(len, "0");
  // const fileName = `BetterYTM ${packageJson.version}${full ? " full" : ""} data export ${dateStr}.json`;

  const fileName = t(`data_export_file_name${full ? "_full" : ""}`, { version: packageJson.version, date: new Date().toISOString() });

  const data = JSON.stringify(JSON.parse(await serializer.serialize(useEncoding)), undefined, 2);

  downloadFile(fileName, data, "application/json");
}
