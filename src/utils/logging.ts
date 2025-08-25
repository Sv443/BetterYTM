import { clamp, DatedError, debounce } from "@sv443-network/coreutils";
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

/** In dev mode, all logs are stored in this array for exporting */
const logs = [] as [type: string, time: number, ...args: unknown[]][];

/** Returns a string representation of the {@linkcode logs}, formatted for downloading as a file */
export const getLogsTxt = () => {
  const getVal = (val: unknown, primaryScope = true): string => {
    if(typeof val === "undefined")
      return "<undefined>";
    if(val === null)
      return "<null>";
    if(Array.isArray(val))
      return `[Array <${val.map((v) => getVal(v, false)).join(", ")}>]`;
    if(typeof val === "function")
      return val.name ? `[function ${val.name}()]` : "[function()]";
    if(val instanceof DatedError)
      return `[${val.name} (@ ${val.date.toISOString()}): ${val.message}]`;
    if(val instanceof Error)
      return `[${val.name}: ${val.message}]`;
    if(val instanceof Date)
      return `[Date: ${val.toISOString()}]`;
    if(typeof val === "object") {
      try {
        if(val.constructor?.name === "Object")
          return JSON.stringify(val);
        return `[object ${val.constructor?.name ?? "Unknown"}]`;
      }
      catch {
        // @ts-expect-error
        return "toString" in val ? val.toString() : `[object ${val?.constructor?.name ?? "Unknown"}]`;
      }
    }
    return primaryScope ? `${val}` : `"${val}"`;
  };

  const longestLogType = Math.max(...logs.map(([type]) => type.length));
  const sortedLogs = [...logs].sort((a, b) => b[1] - a[1]);

  return sortedLogs.reduce((acc, [type, time, ...args]) => {
    if(args.length === 0)
      return acc;

    const dateTime = `${
      new Date(time).toLocaleString(undefined, {
        dateStyle: "short",
      })
    }, ${
      new Date(time).toLocaleString(undefined, {
        timeStyle: "medium",
      })
    }.${
      new Date(time).toLocaleString(undefined, {
        fractionalSecondDigits: 3,
      })
    }` as const;

    try {
      return `[${dateTime}] ${`[${type}]`.padEnd(longestLogType + 2, " ")} ${args.map(a => getVal(a)).join(" ")}\n${acc}`;
    }
    catch {
      return `[${dateTime}] ${`[${type}]`.padEnd(longestLogType + 2, " ")} ${args.map(a => (typeof a === "object" && a && "toString" in a) ? a.toString() : String(a)).join(" ")}\n${acc}`;
    }
  }, "");
};

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
  const lastArg = args.at(-1);
  if(typeof lastArg === "number" && lastArg >= 0 && lastArg <= (Object.keys(LogLevel).length / 2) - 1)
    return clamp(
      args.splice(args.length - 1)[0] as number,
      minLogLvl,
      maxLogLvl,
    );
  return LogLevel.Debug;
}

/**
 * Logs all passed values to the console, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.
 */
export function log(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.log(consPrefix, ...args);
  logs.push(["LOG", Date.now(), ...args]);
}

/**
 * Logs all passed values to the console as info, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.
 */
export function info(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.info(consPrefix, ...args);
  logs.push(["INFO", Date.now(), ...args]);
}

/** Logs all passed values to the console as a warning, no matter the log level. */
export function warn(...args: unknown[]): void {
  console.warn(consPrefix, ...args);
  logs.push(["WARN", Date.now(), ...args]);
}

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

/** Logs all passed values to the console as an error, no matter the log level. */
export function error(...args: unknown[]): void {
  console.error(consPrefix, ...args);
  logs.push(["ERROR", Date.now(), ...args]);

  try {
    getFeature("showToastOnGenericError") && showErrToast(args.find(a => a instanceof Error)?.name ?? t("error"), ...args);
  }
  catch(e) {
    console.error(consPrefix, "Error while showing error toast:", e);
    logs.push(["ERROR", Date.now(), "Error while showing error toast:", e]);
  }
}

/** Logs all passed values to the console as an error, no matter the log level. Doesn't show an error toast. */
export function errorNoToast(...args: unknown[]): void {
  console.error(consPrefix, ...args);
  logs.push(["ERROR", Date.now(), ...args]);
}

/** Logs all passed values to the console with a debug-specific prefix */
export function dbg(...args: unknown[]): void {
  console.log(consPrefixDbg, ...args);
  logs.push(["DBG", Date.now(), ...args]);
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
