import { DataStoreSerializer, type Stringifiable } from "@sv443-network/userutils";

import { configStore } from "./config.js";
import { autoLikeStore } from "./features/input.js";
import { showPrompt } from "./dialogs/prompt.js";
import { t } from "./utils/translations.js";
import { error } from "./utils/logging.js";
import { downloadFile } from "./utils/dom.js";
import { reloadTab } from "./utils/misc.js";
import packageJson from "../package.json" with { type: "json" };

/** Central serializer for all data stores */
let serializer: DataStoreSerializer | undefined;

/** Array of all data stores that are included in the DataStoreSerializer instance */
export const getSerializerStores = () => [
  configStore,
  autoLikeStore,
];

/** Array of IDs of all stores included in the DataStoreSerializer instance */
export const getSerializerStoresIds = () => getSerializerStores().map(store => store.id);

/** Returns the serializer for all data stores */
export function getStoreSerializer() {
  if(!serializer)
    serializer = new DataStoreSerializer(getSerializerStores(), {
      addChecksum: true,
      ensureIntegrity: true,
    });
  return serializer;
}

/** Imports data from a file into all data stores */
export async function importData(blob: File | Blob) {
  try {
    const serializer = getStoreSerializer();

    const data = await blob.text();
    await serializer.deserialize(data);

    if(await showPrompt({
      type: "confirm",
      message: t("import_success_confirm_reload"),
    }))
      await reloadTab();
  }
  catch(err) {
    error(err);
    await showPrompt({
      type: "alert",
      message: t("import_error_invalid"),
    });
  }
}

/** Downloads the current data stores as a single file */
export async function downloadData(useEncoding = true) {
  const serializer = getStoreSerializer();

  const pad = (val: Stringifiable, len = 2) => String(val).padStart(len, "0");

  const d = new Date();
  const dateStr = `${pad(d.getFullYear(), 4)}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
  const fileName = `BetterYTM ${packageJson.version} data export ${dateStr}.json`;

  const data = JSON.stringify(JSON.parse(await serializer.serialize(useEncoding)), undefined, 2);

  downloadFile(fileName, data, "application/json");
}
