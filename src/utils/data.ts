import { DataStore, fetchAdvanced } from "@sv443-network/coreutils";
import { GMStorageEngine } from "@sv443-network/userutils";
import { compareVersions } from "compare-versions";
import { repo, scriptInfo } from "@/constants.ts";
import { setInnerHtml } from "@util/dom.ts";
import { loggers } from "@util/logging.ts";
import { getDomain, getterifyObj, resourceAsString } from "@util/misc.ts";
import { resolveTranslatable, t } from "@util/translations.ts";
import { MarkdownDialog } from "@comp/MarkdownDialog.ts";
import type { Domain, FeatureConfig, Translatable } from "@/types.ts";
import defaultStaticData from "@asset/data.json" with { type: "json" };
import { onInteraction } from "@util/input.ts";
import { getFeature } from "@/config.ts";

//#region types

// TODO: extract union type from {@linkcode defaultStaticData.selectors} keys.
/** Union of all selector identifiers defined in the static data JSON. */
export type StaticSelector = string;

/** Static data used by BYTM at runtime, including domain definitions, alerts, and DOM selector mappings. */
export type StaticData = {
  /** Format version for future compatibility checks. */
  formatVersion: number;
  /** List of supported domains, used for resolving hostnames to domain identifiers. */
  domains: Array<{
    /** A supported domain with a unique identifier and its associated hostnames. */
    id: Domain;
    /** List of hostnames that map to this domain identifier. */
    hostnames: string[];
  }>;
  /** List of alerts to potentially display to users. May be empty. */
  alerts: GlobalAlert[];
  /** Mapping of selector identifiers to per-domain selector strings. */
  selectors: Record<StaticSelector, {
    /** DOM selector strings for all domains supported by BYTM, keyed by domain identifier (can be \"ytm\" or \"yt\"). */
    [domain in Domain]?: string;
  }>;
};

/** Alert to be shown globally on the supported sites. */
export type GlobalAlert = {
  /** Unique identifier for the alert. */
  id: string;
  /** Localized title strings. \"en-US\" is required; other locales are optional. */
  title: Translatable;
  /** Localized message strings. Supports Markdown. \"en-US\" is required; other locales are optional. */
  message: Translatable;
  /** If true, Escape and background-click don't close the dialog, and there'll be a short timer before the user can dismiss the alert. Defaults to false. */
  domains: Domain[];
  /** List of domain identifiers on which the alert should be shown. If dismissed on one domain, it will be dismissed on all domains. */
  important?: boolean;
  /** Optional earliest date (inclusive) for which this alert applies. Must be a valid ISO 8601 date-time string. */
  dateMin?: string;
  /** Optional latest date (inclusive) for which this alert applies. Must be a valid ISO 8601 date-time string. */
  dateMax?: string;
} & (
  | {
    /** Optional exact BYTM version for which this alert applies. Must be a valid semver string. If this is specified, `versionMin` and `versionMax` are ignored. */
    version: string;
  }
  | {
    /** Optional minimum BYTM version (inclusive) for which this alert applies. Must be a valid semver string. */
    versionMin?: string;
    /** Optional maximum BYTM version (inclusive) for which this alert applies. Must be a valid semver string. */
    versionMax?: string;
  }
);

//#region vars

/** URL to the remote data JSON file on a CDN. */
const remoteDataUrl = `https://raw.githubusercontent.com/${repo}/refs/heads/main/assets/data.json` as const;

/** Current format version of the static data JSON. If the fetched data has a different format version, it will be rejected and the bundled data will be used instead. */
const staticDataFormatVersion = 0;

let staticData: StaticData | undefined;

//#region get data

/** Loads the static data by fetching the remote JSON or falling back to the bundled JSON if the fetch fails. */
export async function getStaticData(): Promise<StaticData> {
  try {
    if(staticData)
      return staticData;

    const res = await fetchAdvanced(remoteDataUrl, {
      timeout: 10_000,
    });

    if(res.ok) {
      const data = await res.json();
      if(isStaticData(data)) {
        loggers.data.info("Successfully fetched remote static data:", data);
        return staticData = data;
      }
      else
        loggers.data.warn("Remote static data is in an unsupported format, falling back to bundled data:", getterifyObj(defaultStaticData));
    }
    return staticData = defaultStaticData as StaticData;
  }
  catch(e) {
    loggers.data.warn(`Failed to fetch remote static data from '${remoteDataUrl}' due to a non-fatal error:`, e);
    loggers.data.info("Falling back to the bundled static data:", getterifyObj(defaultStaticData));
    return staticData = defaultStaticData as StaticData;
  }
}

/** Returns the bundled static data JSON. Mainly used for synchronous access when the latest data isn't required. */
export function getDefaultStaticData() {
  return defaultStaticData;
}

//#region validate

/** Checks whether the given data matches the expected structure of the static data JSON at `assets/data.json`. */
function isStaticData(data: unknown): data is StaticData {
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

//#region alerts

type AlertsStoreData = {
  /** List of dismissed alert IDs. */
  dismissed: string[];
};

export const alertsStore = new DataStore<AlertsStoreData, false>({
  id: "bytm-alerts",
  defaultData: {
    dismissed: [] as string[],
  },
  formatVersion: 0,
  engine: new GMStorageEngine(),
  memoryCache: false,
  compressionFormat: null,
});

/** Checks if there are active alerts and shows a prompt for each of them. */
async function checkActiveAlerts(alertMode: FeatureConfig["globalAlertMode"], { alerts }: StaticData, alertsData: AlertsStoreData): Promise<void> {
  const activeAlerts = alerts.filter(alert => isAlertActive(alert, alertsData));

  for(const alert of activeAlerts) {
    if(alertMode === "importantOnly" && !alert.important)
      continue;
    const dlg = createAlertDialog(alert);
    dlg.open();
    await dlg.once("close");
    alertsData = await alertsStore.loadData();
    await alertsStore.setData({
      dismissed: [alert.id, ...alertsData.dismissed],
    });
  }
}

/** Checks whether the given alert is active based on its constraints and whether it was already dismissed. */
function isAlertActive(alert: GlobalAlert, alertsData: AlertsStoreData): boolean {
  // check if dismissed
  if(alertsData.dismissed.includes(alert.id))
    return false;

  // check domain constraints
  if(alert.domains.length === 0)
    return false;
  if(!alert.domains.includes(getDomain()))
    return false;

  // check version constraints
  if("version" in alert && alert.version !== scriptInfo.version)
    return false;
  if("versionMin" in alert && alert.versionMin && compareVersions(alert.versionMin, scriptInfo.version) > 0)
    return false;
  if("versionMax" in alert && alert.versionMax && compareVersions(alert.versionMax, scriptInfo.version) < 0)
    return false;

  // check date constraints
  const now = new Date();
  if(alert.dateMin && new Date(alert.dateMin) > now)
    return false;
  if(alert.dateMax && new Date(alert.dateMax) < now)
    return false;

  return true;
}

/** Creates an alert dialog for the given alert data. */
export function createAlertDialog(alert: GlobalAlert) {
  return new MarkdownDialog({
    id: "static-data-alert",
    height: 500,
    width: 600,
    small: true,
    destroyOnClose: true,
    closeOnBgClick: !alert.important,
    closeOnEscPress: !alert.important,
    async renderHeader() {
      const headerEl = document.createElement("div");
      headerEl.id = "bytm-static-data-alert-dialog-header";
      headerEl.classList.add("bytm-flex-row");
      setInnerHtml(headerEl, await resourceAsString("icon-alert"));

      const header = document.createElement("h2");
      header.classList.add("bytm-dialog-title");
      header.role = "heading";
      header.ariaLevel = "1";
      header.tabIndex = 0;
      header.textContent = header.ariaLabel = resolveTranslatable(alert.title);

      headerEl.appendChild(header);

      return headerEl;
    },
    renderFooter() {
      const footer = document.createElement("div");
      footer.classList.add("bytm-dialog-footer", "align-right");
    
      const closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.textContent = closeBtn.ariaLabel = t("prompt_dismiss");
      onInteraction(closeBtn, () => {
        const titleCloseBtn = document.querySelector<HTMLElement>("#bytm-md-static-data-alert-dialog .bytm-dialog-close");
        if(titleCloseBtn)
          titleCloseBtn.click();
        else
          loggers.data.warn("Couldn't find the alert dialog's close button to trigger a click on it, closing the dialog won't work properly:", titleCloseBtn);
      });
    
      footer.appendChild(closeBtn);
      return footer;
    },
    body: resolveTranslatable(alert.message),
    sanitizeBody: true,
    modifyBodyElements(_bw, mdCont) {
      mdCont.ariaLive = "polite";
      mdCont.ariaAtomic = "true";
    }
  });
}

//#region init

/** Initializes the static data by fetching it and performing necessary checks and actions. */
export async function initStaticData() {
  const [staticData, alertsData] = await Promise.all([
    getStaticData(),
    alertsStore.loadData(),
  ]);

  const alertMode = getFeature("globalAlertMode", "importantOnly");

  return await Promise.allSettled([
    ...(alertMode !== "never" ? [checkActiveAlerts(alertMode, staticData, alertsData)] : []),
  ]);
}
