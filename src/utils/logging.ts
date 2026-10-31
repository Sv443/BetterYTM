import { DatedError, debounce } from "@sv443-network/userutils";
import { setGlobalProp } from "@/core/globals.ts";
import { tryUse } from "@/core/hooks.ts";
import { LogLevel } from "@/types.ts";
import { Logger, loggerCategoryMapping, type LoggerOptions } from "@util/Logger.ts";

export type { LogLine } from "@util/Logger.ts";

//#region loggers

/**
 * Whether a generic error should also be surfaced as a toast.  
 * Pushed in by the config init instead of read from {@linkcode getFeature}, so this module doesn't
 * have to depend on the config store.
 */
let errorToastsEnabled = false;

/** Sets whether generic errors are surfaced as a toast - called by the config init */
export const setErrorToastsEnabled = (enabled: boolean) => void (errorToastsEnabled = enabled);

const showErrToast = debounce(
  (errName: string, args: unknown[]) => tryUse("reportError")?.(errName, args),
  400,
);

const loggerOpts: LoggerOptions = {
  onError(...args): void {
    if(!errorToastsEnabled)
      return;
    const err = args.find(a => a instanceof Error);
    // the message is localized by the provider in @/bindings.ts - this module has no translations
    showErrToast(err?.name ?? "Error", args);
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

