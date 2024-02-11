import { clamp } from "@sv443-network/userutils";
import { scriptInfo } from "../constants";
import { setGlobalProp } from "../interface";
import { LogLevel } from "../types";

let curLogLevel = LogLevel.Info;

/** Common prefix to be able to tell logged messages apart and filter them in devtools */
const consPrefix = `[${scriptInfo.name}]`;
const consPrefixDbg = `[${scriptInfo.name}/#DEBUG]`;

/** Sets the current log level. 0 = Debug, 1 = Info */
export function setLogLevel(level: LogLevel) {
  if(curLogLevel !== level)
    console.log(consPrefix, "Setting log level to", level === 0 ? "Debug" : "Info");
  curLogLevel = level;
  setGlobalProp("logLevel", level);
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
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
 */
export function log(...args: unknown[]): void {
  if(curLogLevel <= getLogLevel(args))
    console.log(consPrefix, ...args);
}

/**
 * Logs all passed values to the console as info, as long as the log level is sufficient.  
 * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number as the last parameter will be stripped out! Convert to string if they shouldn't be.
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
}

/** Logs all passed values to the console with a debug-specific prefix */
export function dbg(...args: unknown[]): void {
  console.log(consPrefixDbg, ...args);
}
