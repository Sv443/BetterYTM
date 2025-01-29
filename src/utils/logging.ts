import { clamp, debounce } from "@sv443-network/userutils";
import { showIconToast } from "../components/toast.js";
import { MarkdownDialog } from "../components/MarkdownDialog.js";
import { scriptInfo } from "../constants.js";
import { setGlobalProp } from "../interface.js";
import { LogLevel } from "../types.js";
import { t } from "./translations.js";
import { getFeature } from "../config.js";
import packageJson from "../../package.json" with { type: "json" };

//#region logging fns

let curLogLevel = LogLevel.Info;

/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${scriptInfo.name}]`;
const consPrefixDbg = `[${scriptInfo.name}/#DEBUG]`;

/** Sets the current log level. 0 = Debug, 1 = Info */
export function setLogLevel(level: LogLevel) {
  curLogLevel = level;
  setGlobalProp("logLevel", level);
  if(curLogLevel !== level)
    log("Set the log level to", LogLevel[level]);
}

/** Extracts the log level from the last item from spread arguments - returns 0 if the last item is not a number or too low or high */
function getLogLevel(args: unknown[]): number {
  const minLogLvl = 0, maxLogLvl = 1;
  if(typeof args.at(-1) === "number")
    return clamp(
      args.splice(args.length - 1)[0] as number,
      minLogLvl,
      maxLogLvl,
    );
  return LogLevel.Debug;
}

/**
 * Logs all passed values to the console, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if it shouldn't be.
 */
export function log(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.log(consPrefix, ...args);
}

/**
 * Logs all passed values to the console as info, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if it shouldn't be.
 */
export function info(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.info(consPrefix, ...args);
}

/** Logs all passed values to the console as a warning, no matter the log level. */
export function warn(...args: unknown[]): void {
  console.warn(consPrefix, ...args);
}

/** Logs all passed values to the console as an error, no matter the log level. */
export function error(...args: unknown[]): void {
  console.error(consPrefix, ...args);

  if(getFeature("showToastOnGenericError")) {
    const errName = args.find(a => a instanceof Error)?.name ?? t("error");
    debounce(() => showIconToast({
      message: t("generic_error_toast_encountered_error_type", errName),
      subtitle: t("generic_error_toast_click_for_details"),
      icon: "icon-error",
      iconFill: "var(--bytm-error-col)",
      onClick: () => getErrorDialog(errName, Array.isArray(args) ? args : []).open(),
    }))();
  }
}

/** Logs all passed values to the console with a debug-specific prefix */
export function dbg(...args: unknown[]): void {
  console.log(consPrefixDbg, ...args);
}

//#region error dialog

function getErrorDialog(errName: string, args: unknown[]) {
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
    body: `\
${args.length > 0 ? args.join(" ") : t("generic_error_dialog_message")}  
${t("generic_error_dialog_open_console_note", consPrefix, packageJson.bugs.url)}`,
  });
}

//#region error classes

export class CustomError extends Error {
  public readonly time: number;
  constructor(name: string, message: string, opts?: ErrorOptions) {
    super(message, opts);
    this.name = name;
    this.time = Date.now();
  }
}

export class LyricsError extends CustomError {
  constructor(message: string, opts?: ErrorOptions) {
    super("LyricsError", message, opts);
  }
}

export class PluginError extends CustomError {
  constructor(message: string, opts?: ErrorOptions) {
    super("PluginError", message, opts);
  }
}
