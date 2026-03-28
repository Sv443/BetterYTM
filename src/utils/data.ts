import { fetchAdvanced } from "@sv443-network/coreutils";
import { repo } from "@/constants.ts";
import { info, warn } from "@util/logging.ts";
import defaultStaticData from "@asset/data.json" with { type: "json" };

/** URL to the remote data JSON file on a CDN. */
const remoteDataUrl = `https://github.com/${repo}/raw/refs/heads/main/assets/data.json`;

/** Current format version of the static data JSON. If the fetched data has a different format version, it will be rejected and the bundled data will be used instead. */
const staticDataFormatVersion = 0;

let staticData: typeof defaultStaticData | undefined;

/** Loads the static data by fetching the remote JSON or falling back to the bundled JSON if the fetch fails. */
export async function getStaticData() {
  try {
    if(staticData)
      return staticData;

    const res = await fetchAdvanced(remoteDataUrl, {
      timeout: 10_000,
    });

    if(res.ok) {
      const data = await res.json();
      if(isStaticData(data)) {
        info("Successfully fetched remote static data:", data);
        return staticData = data;
      }
      else
        warn("Remote static data is in an unexpected format, falling back to bundled data:", defaultStaticData);
    }
    return staticData = defaultStaticData;
  }
  catch(e) {
    warn("Failed to fetch remote static data due to an error:", e);
    info("Falling back to the bundled static data:", defaultStaticData);
    return staticData = defaultStaticData;
  }
}

/** Returns the bundled static data JSON. Mainly used for synchronous access when the latest data isn't required. */
export function getDefaultStaticData() {
  return defaultStaticData;
}

/** Checks whether the given data matches the expected structure of the static data JSON at `assets/data.json`. */
function isStaticData(data: unknown): data is typeof defaultStaticData {
  return typeof data === "object"
    && data !== null
    // format version
    && "formatVersion" in data
    && typeof data.formatVersion === "number"
    && data.formatVersion === staticDataFormatVersion
    // domains
    && "domains" in data
    && typeof data.domains === "object"
    && Array.isArray(data.domains)
    // selectors
    && "selectors" in data
    && typeof data.selectors === "object"
    // alerts
    && "alerts" in data
    && typeof data.alerts === "object"
    && Array.isArray(data.alerts);
}
