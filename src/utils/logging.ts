import { DatedError, debounce } from "@sv443-network/coreutils";
import { showIconToast } from "@comp/toast.ts";
import { MarkdownDialog } from "@comp/MarkdownDialog.ts";
import { getFeature } from "@/config.ts";
import { setGlobalProp } from "@/interface.ts";
import { t } from "@util/translations.ts";
import { onInteraction } from "@util/input.ts";
import { downloadFile } from "@util/dom.ts";
import { LogLevel } from "@/types.ts";
import { Logger, loggerCategoryMapping, type LoggerOptions } from "@util/Logger.ts";
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
  400,
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
export const loggers = Object.entries(loggerCategoryMapping).reduce((a, [catId, catName]) => ({
  ...a,
  [catId as keyof typeof loggerCategoryMapping]: new Logger(catName, loggerOpts),
}), {} as Record<keyof typeof loggerCategoryMapping, Logger>);

/** Returns a string representation of all logs across all Logger instances, formatted for downloading as a file. */
export const serializeLogs = Logger.serializeLogs.bind(Logger);

/** Sets the current log level across all Logger instances. 0 = Debug, 1 = Info */
export function setLogLevel(level: LogLevel) {
  setGlobalProp("logLevel", level);
  if(Logger.curLogLevel !== level)
    loggers.misc.log("Set the log level to", LogLevel[level]);
  Logger.curLogLevel = level;
}

//#region legacy log functions

/**
 * Logs all passed values to the console, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.
 * @deprecated This function logs using the "Uncategorized" category. You should use the instances in {@linkcode loggers} instead!
 */
export function log(...args: unknown[]): void {
  loggers.uncategorized.log(...args);
}

/**
 * Logs all passed values to the console as info, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.
 * @deprecated This function logs using the "Uncategorized" category. You should use the instances in {@linkcode loggers} instead!
 */
export function info(...args: unknown[]): void {
  loggers.uncategorized.info(...args);
}

/**
 * Logs all passed values to the console as a warning, no matter the log level.
 * @deprecated This function logs using the "Uncategorized" category. You should use the instances in {@linkcode loggers} instead!
 */
export function warn(...args: unknown[]): void {
  loggers.uncategorized.warn(...args);
}

/**
 * Logs all passed values to the console as an error, no matter the log level.
 * @deprecated This function logs using the "Uncategorized" category. You should use the instances in {@linkcode loggers} instead!
 */
export function error(...args: unknown[]): void {
  loggers.uncategorized.error(...args);
}

/**
 * Logs all passed values to the console as an error, no matter the log level. Doesn't show an error toast.
 * @deprecated This function logs using the "Uncategorized" category. You should use the instances in {@linkcode loggers} instead!
 */
export function errorNoToast(...args: unknown[]): void {
  loggers.uncategorized.errorNoToast(...args);
}

/**
 * Logs all passed values to the console with a debug-specific prefix.
 * @deprecated This function logs using the "Uncategorized" category. You should use the instances in {@linkcode loggers} instead!
 */
export function dbg(...args: unknown[]): void {
  loggers.uncategorized.dbg(...args);
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

