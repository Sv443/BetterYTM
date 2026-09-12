import { computeHash } from "@sv443-network/coreutils";
import { configEvents, configStore } from "@/config.ts";
import { fixCfgKeys } from "@/configSchema.ts";
import { loggers, setErrorToastsEnabled } from "@util/logging.ts";
import { emitInterface, setLogEventsEnabled } from "@/core/interfaceEvents.ts";
import { emitSiteEvent, setSiteEventLogging } from "@/siteEvents.ts";
import { t } from "@util/translations.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { openCfgMenu } from "@menu/menu.ts";

/**
 * Loads and migrates the feature config, and prompts the user to reopen the config menu if their
 * data was just migrated.
 *
 * Lives above {@linkcode "@/config.ts"} because it needs {@linkcode showPrompt} and
 * {@linkcode openCfgMenu}, which the config store itself must not depend on.
 */

//#region >> init

/** Initializes the DataStore instance and loads persistent data into memory. Returns a copy of the config object. */
// @util/broadcast.ts and other low modules can't depend on config.ts to read "configChanged"
// listeners, so bridge the config store's own emitter onto the site-event bus here instead
configEvents.on("changed", (cfg) => emitSiteEvent("configChanged", cfg));

export async function initConfig() {
  const oldFmtVer = Number(await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-ver`, NaN));

  let oldDataHash: string | undefined;
  try {
    const oldData = await configStore.engine.getValue(`${configStore.keyPrefix}${configStore.id}-dat`, "{}");
    const oldDataObj = JSON.parse(oldData as string);
    // only show prompt if there is actual old data (not on the first initialization, resets, etc.)
    if(oldDataObj !== null && typeof oldDataObj === "object" && Object.keys(oldDataObj).length > 0)
      oldDataHash = await computeHash(JSON.stringify(oldDataObj), "sha256");
  }
  catch { void 0; }

  const rawData = await configStore.loadData();
  let data = fixCfgKeys(rawData);

  // @util/logging.ts can't read the config itself (it sits below it), so push the value in
  setErrorToastsEnabled(Boolean(data.showToastOnGenericError));
  setLogEventsEnabled(Boolean(data.logEvents));
  setSiteEventLogging(Boolean(data.logEvents));

  // show prompt if config data was migrated
  if(oldDataHash && oldDataHash !== await computeHash(JSON.stringify(data), "sha256")) {
    if(await showPrompt({
      type: "confirm",
      message: t("config_data_changed_prompt_open_menu"),
      confirmBtnText: t("open"),
      confirmBtnTooltip: t("open_menu_tooltip"),
      denyBtnText: t("prompt_close"),
      denyBtnTooltip: t("click_to_close_tooltip"),
    }))
      window.addEventListener("bytm:allReady", () => openCfgMenu(), { once: true });
  }

  loggers.data.log(`Initialized feature config DataStore with version ${configStore.formatVersion}`);
  if(isNaN(oldFmtVer))
    loggers.data.warn("  ⚠️ - Config data was initialized with default values");
  else if(oldFmtVer !== configStore.formatVersion) {
    try {
      await configStore.setData(data = fixCfgKeys(data));
      loggers.data.info(`  ⚠️ - Config data was migrated from version ${oldFmtVer} to ${configStore.formatVersion}`);
    }
    catch(err) {
      loggers.data.error("  ⚠️ - Config data migration failed, falling back to default data:", err);
      await configStore.setData(data = configStore.defaultData);
    }
  }
  // fixCfgKeys() may have added or removed keys even without a format version change
  // (e.g. new features added to a migration step after a client already recorded that version) - persist that fix too:
  else if(await computeHash(JSON.stringify(rawData), "SHA-256") !== await computeHash(JSON.stringify(data), "SHA-256")) {
    await configStore.setData(data);
    loggers.data.info("  ⚠️ - Fixed missing or extraneous config keys without a version change");
  }

  emitInterface("bytm:configReady");

  return structuredClone(data);
}
