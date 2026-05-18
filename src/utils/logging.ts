import { DatedError, debounce } from "@sv443-network/coreutils";
import { showIconToast } from "@comp/toast.ts";
import { MarkdownDialog } from "@comp/MarkdownDialog.ts";
import { getFeature } from "@/config.ts";
import { setGlobalProp } from "@/interface.ts";
import { t } from "@util/translations.ts";
import { onInteraction } from "@util/input.ts";
import { downloadFile } from "@util/dom.ts";
import { LogLevel } from "@/types.ts";
import { Logger, type LoggerOptions } from "@util/Logger.ts";
import packageJson from "@root/package.json" with { type: "json" };

export type { LogLine } from "@util/Logger.ts";

//#region loggers

const showErrToast = debounce(
  (errName: string, ...args: unknown[]) =>
    showIconToast({
      message: t("generic_error_toast_encountered_error_type", errName),
      subtitle: t("generic_error_toast_click_for_details"),
      icon: "icon-error",
      iconFill: "var(--bytm-error-col)",
      onClick: () => getErrorDialog(errName, Array.isArray(args) ? args : []).open(),
    }),
  1000,
);

const loggerOpts: LoggerOptions = {
  onError(...args): void {
    if(getFeature("showToastOnGenericError")) {
      const err = args.find(a => a instanceof Error);
      showErrToast(err?.name ?? t("error"), ...args);
    }
  },
};

/** Pre-instantiated Logger instances, one per category. */
export const loggers = {
  uncategorized: new Logger("Uncategorized", loggerOpts),

  api: new Logger("API", loggerOpts),
  autoLike: new Logger("AutoLike", loggerOpts),
  behavior: new Logger("Behavior", loggerOpts),
  broadcast: new Logger("Broadcast", loggerOpts),
  command: new Logger("Command", loggerOpts),
  configMenu: new Logger("ConfigMenu", loggerOpts),
  data: new Logger("Data", loggerOpts),
  dialog: new Logger("Dialog", loggerOpts),
  feature: new Logger("Feature", loggerOpts),
  hotkey: new Logger("Hotkey", loggerOpts),
  init: new Logger("Init", loggerOpts),
  input: new Logger("Input", loggerOpts),
  integration: new Logger("Integration", loggerOpts),
  layout: new Logger("Layout", loggerOpts),
  lyrics: new Logger("Lyrics", loggerOpts),
  misc: new Logger("Misc", loggerOpts),
  performance: new Logger("Performance", loggerOpts),
  plugin: new Logger("Plugin", loggerOpts),
  selectorObserver: new Logger("SelectorObserver", loggerOpts),
  siteEvent: new Logger("SiteEvent", loggerOpts),
  translation: new Logger("Translation", loggerOpts),
  volume: new Logger("Volume", loggerOpts),
  xhr: new Logger("XHR", loggerOpts),
} as const;

/** Returns a string representation of all logs across all Logger instances, formatted for downloading as a file. */
export const serializeLogs = Logger.serializeLogs.bind(Logger);

/** Sets the current log level across all Logger instances. 0 = Debug, 1 = Info */
export function setLogLevel(level: LogLevel) {
  Logger.curLogLevel = level;
  setGlobalProp("logLevel", level);
  if(Logger.curLogLevel !== level)
    loggers.misc.log("Set the log level to", LogLevel[level]);
}

//#region error dialog

export function getErrorDialog(errName: string, args: unknown[]) {
  return new MarkdownDialog({
    id: "generic-error",
    height: 400,
    width: 500,
    small: true,
    destroyOnClose: true,
    renderHeader() {
      const header = document.createElement("h2");
      header.classList.add("bytm-dialog-title");
      header.role = "heading";
      header.ariaLevel = "1";
      header.tabIndex = 0;
      header.textContent = header.ariaLabel = errName;

      return header;
    },
    renderFooter() {
      const footer = document.createElement("div");
      footer.classList.add("bytm-dialog-footer", "align-right");

      const dlLogsBtn = document.createElement("button");
      dlLogsBtn.type = "button";
      dlLogsBtn.textContent = dlLogsBtn.ariaLabel = t("download_log_file");
      onInteraction(dlLogsBtn, () => {
        downloadFile(`bytm-log-${new Date().toISOString()}.log`, Logger.serializeLogs(), "text/plain");
      });

      footer.appendChild(dlLogsBtn);
      return footer;
    },
    body: `\
${args.length > 0 ? args.join(" ") : t("generic_error_dialog_message")}  
  
${t("generic_error_dialog_open_console_note", packageJson.bugs.url)}`,
  });
}

//#region error classes

/** Error class for errors thrown by the lyrics fetching functions - extends {@linkcode DatedError} */
export class LyricsError extends DatedError {
  constructor(message: string, opts?: ErrorOptions) {
    super(message, opts);
    this.name = "LyricsError";
  }
}

/** Error class for errors thrown by the plugin interface - extends {@linkcode DatedError} */
export class PluginError extends DatedError {
  constructor(message: string, opts?: ErrorOptions) {
    super(message, opts);
    this.name = "PluginError";
  }
}

