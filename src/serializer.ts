import { DataStoreSerializer } from "@sv443-network/userutils";

import { configStore } from "./config.js";
import { autoLikeStore } from "./features/input.js";
import { showPrompt } from "./dialogs/prompt.js";
import { t } from "./utils/translations.js";
import { error } from "./utils/logging.js";
import { downloadFile } from "./utils/dom.js";
import packageJson from "../package.json" with { type: "json" };

/** Central serializer for all data stores */
let serializer: DataStoreSerializer | undefined;

/** Returns the serializer for all data stores */
export function getStoreSerializer() {
  if(!serializer) {
    serializer = new DataStoreSerializer([
      configStore,
      autoLikeStore,
    ], {
      addChecksum: true,
      ensureIntegrity: true,
    });
  }
  return serializer;
}

/** Imports data from a file into all data stores */
export async function importData(blob: File | Blob) {
  try {
    const serializer = getStoreSerializer();

    const data = await blob.text();
    await serializer.deserialize(data);

    const reload = await showPrompt({
      type: "confirm",
      message: t("import_success_confirm_reload"),
    });

    reload && location.reload();
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
export async function downloadData() {
  const serializer = getStoreSerializer();

  const pad = (num: number, len = 2) => String(num).padStart(len, "0");

  const d = new Date();
  const dateStr = `${pad(d.getFullYear(), 4)}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
  const fileName = `BetterYTM ${packageJson.version} data export ${dateStr}.json`;

  const data = JSON.stringify(JSON.parse(await serializer.serialize()), undefined, 2);

  downloadFile(fileName, data, "application/json");
}
