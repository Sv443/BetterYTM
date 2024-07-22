import { DataStoreSerializer } from "@sv443-network/userutils";

import { cfgDataStore } from "./config.js";
import { autoLikeStore } from "./features/input.js";

/** Central serializer for all data stores */
export const storeSerializer = new DataStoreSerializer([
  cfgDataStore,
  autoLikeStore,
], {
  addChecksum: true,
  ensureIntegrity: true,
});
