import { DatedError } from "@sv443-network/userutils";
import { getDomain } from "@util/domain.ts";
import { loggers } from "@util/logging.ts";
import type { Domain } from "@/types.ts";
import type { GlobalAlert } from "@util/data.ts";
import defaultStaticData from "@asset/data.json" with { type: "json" };

/**
 * Resolves CSS selectors and URLs out of the static data.  
 *   
 * Split out of {@linkcode "@util/data.ts"} because almost every layer needs {@linkcode getSelector},
 * while `data.ts` itself pulls in dialogs, translations and the config. `data.ts` still owns
 * fetching the data and hands it over via {@linkcode setStaticData}.
 */

// #region types

/** Union of all selector identifiers defined in the static data JSON. */
export type SelectorGroup = keyof typeof defaultStaticData.selectors;

/** Union of all selector identifiers defined in the static data JSON. */
export type SelectorByGroup<TGroup extends SelectorGroup> = keyof (typeof defaultStaticData.selectors[TGroup]);

/** Union of all string identifiers defined in the static data JSON. */
export type StaticDataStringID = keyof typeof defaultStaticData.strings;

/**
 * Static data used by BYTM at runtime, including domain definitions, alerts, and DOM selector mappings.  
 * This is a JSON object fetched dynamically from the file `assets/data.json` that can be accessed with {@linkcode getDomain()}, {@linkcode getSelector()}, {@linkcode getString()} or {@linkcode getStaticDataRef()}
 */
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
  /** Mapping of static string identifiers to arbitrary strings. */
  strings: Record<StaticDataStringID, string>;
  /** Mapping of selector identifiers to per-domain selector strings. */
  selectors: Record<SelectorGroup, {
    /** DOM selector strings for all domains supported by BYTM, keyed by domain identifier (can be \"ytm\" or \"yt\"). */
    [domain in Domain]?: string;
  } | string>;
};

// #region staticData

let staticData: StaticData | undefined;

/** Stores the static data once it has been fetched - called by `@util/data.ts` */
export function setStaticData<TData extends StaticData>(data: TData): TData {
  staticData = data;
  return data;
}

/** Returns the currently stored static data, or undefined if it hasn't been fetched yet */
export const getStaticDataRef = () => staticData;

// #region getSelector

/**
 * Returns the selector with the given ID, resolved from the file at `assets/data.json` - see also {@linkcode StaticData}.  
 * @throws By default, the function `throws` an error if the given selector doesn't exist, is invalid, or doesn't have a value for the current domain.
 */
export function getSelector<
  TSelectorGroup extends SelectorGroup,
  TThrows extends boolean | undefined = true,
>(
  group: TSelectorGroup,
  id: SelectorByGroup<TSelectorGroup>,
  throws?: TThrows,
): TThrows extends true ? string : (string | undefined) {
  const dom = getDomain();
  if(throws !== false) {
    try {
      if(typeof staticData?.selectors !== "object")
        throw new DatedError("Static data hasn't been fetched yet.");
      // @ts-expect-error can't find a way to fix the type
      const sel = staticData.selectors?.[group]?.[id];
      if(!(["string", "object"].includes(typeof sel)))
        throw new DatedError(`Selector '${group}.${String(id)}' doesn't exist or is neither a string nor an object.`);
      if(typeof sel === "object" && dom !== null && !(dom in sel))
        throw new DatedError(`Selector '${group}.${String(id)}' doesn't contain a value for the current domain '${dom}'.`);

      return typeof sel === "string"
        ? sel
        : sel[dom] as TThrows extends true ? string : (string | undefined);
    }
    catch(e) {
      loggers.data.error(`Couldn't get selector '${group}.${String(id)}' due to an error:`, e);
      throw e;
    }
  }

  // @ts-expect-error ^
  const sel = staticData?.selectors?.[group]?.[id];

  return typeof sel === "string"
    ? sel
    : sel?.[dom] as TThrows extends true ? string : (string | undefined);
}

/** Same as {@linkcode getSelector()}, but sets the `throws` parameter to false by default. */
export function tryGetSelector<TSelectorGroup extends SelectorGroup>(group: TSelectorGroup, id: SelectorByGroup<TSelectorGroup>): string | undefined {
  return getSelector(group, id, false);
}

// #region getUrl

/**
 * Returns the string with the given ID.  
 * @throws By default, the function `throws` an error if the given string doesn't exist or is invalid.
 */
export function getString<
  TThrows extends boolean | undefined = true,
>(
  id: StaticDataStringID,
  throws?: TThrows,
): TThrows extends true ? string : (string | undefined) {
  if(throws !== false) {
    try {
      if(typeof staticData?.strings !== "object")
        throw new DatedError("Static data hasn't been fetched yet.");
      const str = staticData.strings?.[id];
      if(typeof str !== "string")
        throw new DatedError(`String '${id}' doesn't exist or is not of type string.`);
      return str;
    }
    catch(e) {
      loggers.data.error(`Couldn't get string '${id}' due to an error:`, e);
      throw e;
    }
  }

  return staticData?.strings?.[id] as TThrows extends true ? string : (string | undefined);
}

/** Same as {@linkcode getString()}, but sets the `throws` parameter to false by default. */
export function tryGetString(id: StaticDataStringID): string | undefined {
  return getString(id, false);
}
