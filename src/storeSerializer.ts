import { DataStoreSerializer } from "@sv443-network/userutils";

import { configStore } from "./config.js";
import { autoLikeStore } from "./features/input.js";

/** Central serializer for all data stores */
let serializer: DataStoreSerializer | undefined;

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
