import { clamp, DatedError } from "@sv443-network/coreutils";
import type { LooseUnion } from "@sv443-network/coreutils";
import { scriptInfo } from "@/constants.ts";
import { LogLevel } from "@/types.ts";

/** Predefined log categories for better organization and filtering. Also allows any other string value. Prefer using PascalCase. */
export type LogCategory = LooseUnion<
  | "Uncategorized"
  | "AutoLike"
  | "Behavior"
  | "Broadcast"
  | "Command"
  | "ConfigMenu"
  | "Data"
  | "Dialog"
  | "Feature"
  | "Hotkey"
  | "Init"
  | "Input"
  | "Integration"
  | "Layout"
  | "Lyrics"
  | "Misc"
  | "Performance"
  | "Plugin"
  | "Observer"
  | "SiteEvent"
  | "Translation"
  | "Volume"
  | "XHR"
>;

/** Severity levels for logs. */
export type LogSeverity = "debug" | "info" | "warn" | "error";

/** Tuple representing a single log line, as stored in {@linkcode Logger.logs}. */
export type LogLine = [category: string, type: string, time: number, ...args: unknown[]];

/** Options for the {@linkcode Logger} class. */
export type LoggerOptions = {
  /** Called when an error is logged via {@linkcode Logger.error}. */
  onError?: (...args: unknown[]) => void;
};

/** Mapping of predefined {@linkcode LogCategory} entries. */
export const loggerCategoryMapping = {
  uncategorized: "Uncategorized",
  autoLike: "AutoLike",
  behavior: "Behavior",
  broadcast: "Broadcast",
  command: "Command",
  configMenu: "ConfigMenu",
  data: "Data",
  dialog: "Dialog",
  feature: "Feature",
  hotkey: "Hotkey",
  init: "Init",
  input: "Input",
  integration: "Integration",
  layout: "Layout",
  lyrics: "Lyrics",
  misc: "Misc",
  performance: "Performance",
  plugin: "Plugin",
  observer: "Observer",
  siteEvent: "SiteEvent",
  translation: "Translation",
  volume: "Volume",
  xhr: "XHR",
} as const satisfies Record<string, LogCategory>;

/**
 * Class used for all kinds of ephemeral logging. Log data does *not* persist across sessions.  
 * Each log has a category, severity, timestamp, and arguments, so that they can be filtered, serialized and displayed neatly.  
 *   
 * All instances share a single static log store accessible via {@linkcode Logger.logs}.  
 * Custom logging infrastructure should push new log lines using the static method {@linkcode Logger.pushLog()}, so that a BYTM log download will include the custom logs as well.
 */
export class Logger {
  public readonly category: LogCategory;

  /** Current log level applied across all Logger instances. */
  public static curLogLevel: LogLevel = LogLevel.Info;

  /** Shared log history across all Logger instances. */
  public static readonly logs: LogLine[] = [];

  /** Total log lines ever pushed (including truncated ones). */
  public static logLines = 0;

  /** Max number of log lines kept in the {@linkcode Logger.logs} memory. */
  public static readonly maxLogLines = 2_500;

  /** Common prefix for each console line. Allows easy filtering of log lines. */
  public readonly conPrefix: string;

  /** Common prefix for each console line of type DEBUG (using the method {@linkcode Logger.dbg()}). Allows easy filtering of debug info. */
  public readonly conPrefixDbg: string;

  /** Callback that gets called when the {@linkcode Logger.error()} method is called. This is used for showing a toast notification for each error. */
  private readonly onError: ((...args: unknown[]) => void) | null;

  /**
   * Class used for all kinds of logging.  
   * Each log has a category, severity, timestamp, and arguments, so that they can be filtered and displayed neatly.  
   * All instances share a single static log store accessible via {@linkcode Logger.logs}.
   */
  constructor(category: LogCategory, options?: LoggerOptions) {
    this.category = category;
    this.conPrefix = `[${scriptInfo.name}/${category}]`;
    this.conPrefixDbg = `[${scriptInfo.name}/${category}/#DEBUG#]`;
    this.onError = options?.onError ?? null;
  }

  //#region static helpers

  /**
   * Pushes a new line to the globally shared log memory (the {@linkcode Logger.logs} array).  
   * Also increases the log line counter {@linkcode Logger.logLines} and truncates logs if they are above {@linkcode Logger.maxLogLines}.  
   * When adding custom logging systems, this method should be used to make BetterYTM aware of the custom logs.
   */
  public static pushLog(category: string, type: string, time?: number, ...args: unknown[]) {
    Logger.logs.push([category, type, time ?? Date.now(), ...args]);
    Logger.logLines++;
    if(Logger.logs.length > Logger.maxLogLines)
      Logger.logs.shift();
  }

  /** Converts a value to a string for log serialization. */
  public static serializeLogVal(val: unknown, primaryScope = true): string {
    if(typeof val === "undefined")
      return primaryScope ? "[undefined]" : "(undefined)";
    if(val === null)
      return primaryScope ? "[null]" : "(null)";
    if(Array.isArray(val))
      return `[Array (${val.length}) <${val.map((v) => Logger.serializeLogVal(v, false)).join(", ")}>]`;
    if(val instanceof Element) {
      const sibIdx = !val.parentElement ? "(root)" : [...val.parentElement!.childNodes].findIndex((el) => el === val);
      return `[Element <${val.tagName.toLowerCase()}${val.id ? ` id="${val.id}"` : ""}${val.className ? ` class="${val.className}"` : ""} sibling-idx="${sibIdx}">]`;
    }
    if(typeof val === "function")
      return val.name ? `[Function <${val.name}()>]` : "[anonymous function()]";
    if(val instanceof DatedError)
      return `[${val.name} (@ ${val.date.toISOString()}): ${val.message}]`;
    if(val instanceof Error)
      return `[${val.name}: ${val.message}]`;
    if(val instanceof Date)
      return `[Date (@ ${val.toISOString()})]`;
    if(val instanceof Response)
      return `[Response ${val.status} (${val.url})]`;
    if(val instanceof Map)
      return `[Map (${val.size}) <${Array.from(val.entries()).map(([k, v]) => `${Logger.serializeLogVal(k, false)} => ${Logger.serializeLogVal(v, false)}`).join(", ")}>]`;
    if(val instanceof Set)
      return `[Set (${val.size}) <${Array.from(val.values()).map(v => Logger.serializeLogVal(v, false)).join(", ")}>]`;
    if(val instanceof Blob)
      return `[Blob (${val.type}, ${val.size} bytes)]`;
    if(val instanceof File)
      return `[File (${val.name}, ${val.type}, ${val.size} bytes)]`;
    if(typeof val === "object") {
      const unknownObj = `[Object <${val.constructor?.name ?? "(unknown)"}>]`;
      try {
        // objects that are impure or purified (no prototype chain) and can usually be serialized
        if(val.constructor?.name === "Object" || val.constructor === undefined)
          return JSON.stringify(val);
        return unknownObj;
      }
      catch {
        return "toString" in val ? val.toString() : unknownObj;
      }
    }
    return primaryScope ? `${val}` : `"${val}"`;
  }

  /** Extracts the log level from the last item of spread args, splicing it out if found. Returns `LogLevel.Debug` if no explicit level is given. */
  public static getLogLevel(args: unknown[]): LogLevel {
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

  /** Returns a string representation of all logs, formatted for downloading as a file. */
  public static serializeLogs(): string {
    const longestLogType = Math.max(...Logger.logs.map(([, type]) => type.length));
    const hintLines = Logger.logs.length >= Logger.maxLogLines
      ? `// Note: there were more than ${Logger.maxLogLines} lines, so the ${Logger.logLines - Logger.maxLogLines} oldest lines were truncated.\n\n`
      : "";

    const logEntries = [...Logger.logs].reverse();
    return hintLines + logEntries.reduce((acc, [category, type, time, ...args]) => {
      if(args.length === 0)
        return acc;

      const timestamp = new Date(time).toISOString().replace("T", " ; ").replace("Z", "");
      const typeTag = `[${type}]`.padEnd(longestLogType + 2, " ");

      const longestCategory = Math.max(...Object.values(loggerCategoryMapping).map((v) => v.length));
      const categoryTag = `[${category}]`.padEnd(longestCategory + 2, " ");

      try {
        return `[${timestamp}] ${typeTag} ${categoryTag} ${args.map(a => Logger.serializeLogVal(a)).join(" ")}\n${acc}`;
      }
      catch {
        return `[${timestamp}] ${typeTag} ${categoryTag} ${args.map(a => (typeof a === "object" && a && "toString" in a) ? a.toString() : String(a)).join(" ")}\n${acc}`;
      }
    }, "");
  }

  //#region instance methods

  /**
   * Logs all passed values to the console, as long as the log level is sufficient.  
   * @param args Last parameter is log level (0 = Debug, any other value = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert it to a string if it shouldn't be.
   */
  public log(...args: unknown[]): void {
    Logger.pushLog(this.category, "LOG", Date.now(), ...args);
    if(Logger.curLogLevel <= Logger.getLogLevel(args))
      console.log(this.conPrefix, ...args);
  }

  /**
   * Logs all passed values to the console as info, as long as the log level is sufficient.  
   * @param args Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert it to a string if it shouldn't be.
   */
  public info(...args: unknown[]): void {
    Logger.pushLog(this.category, "INFO", Date.now(), ...args);
    if(Logger.curLogLevel <= Logger.getLogLevel(args))
      console.info(this.conPrefix, ...args);
  }

  /** Logs all passed values to the console as a warning, no matter the log level. */
  public warn(...args: unknown[]): void {
    Logger.pushLog(this.category, "WARN", Date.now(), ...args);
    console.warn(this.conPrefix, ...args);
  }

  /** Logs all passed values to the console as an error, no matter the log level. */
  public error(...args: unknown[]): void {
    Logger.pushLog(this.category, "ERROR", Date.now(), ...args);
    console.error(this.conPrefix, ...args);
    try {
      this.onError?.(...args);
    }
    catch(e) {
      Logger.pushLog(this.category, "ERROR", Date.now(), "Error while showing error toast:", e);
      console.error(this.conPrefix, "Error while showing error toast:", e);
    }
  }

  /** Logs all passed values to the console as an error, no matter the log level. Doesn't show an error toast. */
  public errorNoToast(...args: unknown[]): void {
    Logger.pushLog(this.category, "ERROR", Date.now(), ...args);
    console.error(this.conPrefix, ...args);
  }

  /** Logs all passed values to the console with a debug-specific prefix. */
  public dbg(...args: unknown[]): void {
    Logger.pushLog(this.category, "DBG", Date.now(), ...args);
    console.log(this.conPrefixDbg, ...args);
  }
}
