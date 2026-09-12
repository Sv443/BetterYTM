import { openInNewTab } from "@sv443-network/userutils";
import type { StringGen } from "@sv443-network/coreutils";

/**
 * Dependency-free helpers.  
 *   
 * Everything in here is pure (or touches only globals like `location` and `navigator`) and must
 * never import from another internal module, so it sits at the very bottom of the dependency graph
 * and can be used from anywhere without risking an import cycle.
 */

const initMs = Date.now();

/** Returns the milliseconds since script init. */
export function millis() {
  return Date.now() - initMs;
}

/** Returns a string with the given array's items separated by a default separator (`", "` by default), with an optional different separator for the last item */
export function arrayWithSeparators<TArray>(array: TArray[], separator = ", ", lastSeparator?: string) {
  const arr = [...array];
  if(!lastSeparator)
    lastSeparator = separator;

  if(arr.length === 0)
    return "";
  else if(arr.length <= 2)
    return arr.join(lastSeparator);
  else
    return `${arr.slice(0, -1).join(separator)}${lastSeparator}${arr.at(-1)!}`;
}

/** Returns the watch ID of the current video or null if not on a video page */
export function getWatchId() {
  const { searchParams, pathname } = new URL(location.href);
  return pathname.includes("/watch") ? searchParams.get("v") : null;
}

/** Quality identifier for a thumbnail - from highest to lowest res: `maxresdefault` > `sddefault` > `hqdefault` > `mqdefault` > `default` */
export type ThumbQuality = `${"maxres" | "sd" | "hq" | "mq"}default` | "default";

/** Numeric still frame thumbnail index */
export type ThumbIndex = 0 | 1 | 2 | 3;

/** Returns the thumbnail URL for a video with the given video ID and quality (defaults to "hqdefault") */
export function getThumbnailUrl(videoID: string, quality?: ThumbQuality): string
/** Returns the thumbnail URL for a video with the given video ID and index (0 is low quality thumbnail, 1-3 are low quality frames from the video) */
export function getThumbnailUrl(videoID: string, index?: ThumbIndex): string
/** Returns the thumbnail URL for a video with either a given quality identifier or index */
export function getThumbnailUrl(videoID: string, qualityOrIndex: ThumbQuality | ThumbIndex = "maxresdefault") {
  return `https://img.youtube.com/vi/${videoID}/${qualityOrIndex}.jpg`;
}

/** Opens the given URL in a new tab, using GM.openInTab if available */
export function openInTab(href: string, background = false) {
  try {
    openInNewTab(href, background);
  }
  catch {
    window.open(href, "_blank", "noopener noreferrer");
  }
}

/** Very crude OS detection */
export function getOS() {
  if(navigator.userAgent.match(/mac(\s?os|intel)/i))
    return "mac";
  return "other";
}

/** Checks if the passed value is a {@linkcode StringGen} */
export function isStringGen(val: unknown): val is StringGen {
  return typeof val === "string"
    || typeof val === "function"
    || (typeof val === "object" && val !== null && "toString" in val && !val.toString().startsWith("[object"))
    || val instanceof Promise;
}

/** Makes the {@linkcode value} over- & underflow so it is always between {@linkcode min} and {@linkcode max}, if it's outside the range */
export function overflowVal(value: number, min: number, max: number): number;
/** Makes the {@linkcode value} over- & underflow so it is always between `0` and {@linkcode max}, if it's outside the range */
export function overflowVal(value: number, max: number): number;
/** Makes the {@linkcode value} over- & underflow so it is always in a certain range */
export function overflowVal(value: number, minOrMax: number, max?: number): number {
  const min = typeof max === "number" ? minOrMax : 0;
  max = typeof max === "number" ? max : minOrMax;

  if(min > max)
    throw new RangeError("Parameter \"min\" can't be bigger than \"max\"");

  if(isNaN(value) || isNaN(min) || isNaN(max) || !isFinite(value) || !isFinite(min) || !isFinite(max))
    return NaN;

  if(value >= min && value <= max)
    return value;

  const range = max - min + 1;
  const wrappedValue = ((value - min) % range + range) % range + min;
  return wrappedValue;
}

/** Transforms an object's own properties into getters that return the original values. */
export function getterifyObj<TObj extends object>(obj: TObj): TObj {
  const newObj = {} as ReturnType<typeof getterifyObj<TObj>>;

  for(const key in obj) {
    Object.defineProperty(newObj, key, {
      get: () => obj[key],
      enumerable: true,
      configurable: true,
    });
  }

  return newObj;
}

/** Slices digits off the beginning of the given number {@linkcode n} */
export function sliceNum(n: number, count: number) {
  return n % (10 ** (String(n).length - count));
}

// curly/angle/low-9 quotes, primes, turned commas and fullwidth/modifier variants used as apostrophes:
const singleQuotesRegex = /[‘’‚‛‹›′ʼʹ＇❛❜`´]/gmu;
// curly/angle/low-9 double quotes, double primes, fullwidth and CJK corner-bracket-style quotation marks:
const doubleQuotesRegex = /[“”„‟«»″＂❝❞〝〞〟]/gmu;
// fullwidth, ideographic, Arabic and small-form commas:
const commaRegex = /[，、،﹐﹑､]/gmu;
// fullwidth, ideographic, Arabic, small-form periods and the "one dot leader":
const periodRegex = /[．。۔﹒｡․]/gmu;
// non-breaking, en/em quad, en/em/three/four/six-per-em, figure, punctuation, thin, hair, narrow no-break, medium
// mathematical and ideographic space separators, normalized to a regular space:
const unicodeSpaceRegex = /[\u00a0\u2000-\u200a\u202f\u205f\u3000]/gmu;
// soft hyphen, Mongolian vowel separator, Arabic letter mark, zero-width space/non-joiner/joiner, LTR/RTL marks, word joiner,
// invisible math operators, variation selectors, interlinear annotation chars and the BOM/zero-width no-break space:
const invisCharRegex = /[\u00ad\u180e\u061c\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufe00-\ufe0f\ufff9-\ufffb\ufeff]+/gmu;

/**
 * Replaces all sorts of wacky Unicode variants with the regular ASCII variant if possible.  
 * Supports the following character types:
 * - `'`: curly/angle/low-9 quotes, primes, turned commas and fullwidth/modifier variants used as apostrophes.
 * - `"`: curly/angle/low-9 double quotes, double primes, fullwidth and CJK corner-bracket-style quotation marks.
 * - `,`: fullwidth, ideographic, Arabic and small-form commas.
 * - `.`: fullwidth, ideographic, Arabic, small-form periods and the "one dot leader".
 * - ` `: non-breaking, en/em quad, en/em/three/four/six-per-em, figure, punctuation, thin, hair, narrow no-break, medium mathematical and ideographic space separators.
 * - `(removed)`: soft hyphen, Mongolian vowel separator, Arabic letter mark, zero-width space/non-joiner/joiner, LTR/RTL marks, word joiner, invisible math operators, variation selectors, interlinear annotation chars and the BOM/zero-width no-break space.
 */
export function sanitizeUnicode(str: string) {
  return str
    // replace unicode symbols:
    .replace(singleQuotesRegex, "'")
    .replace(doubleQuotesRegex, "\"")
    .replace(commaRegex, ",")
    .replace(periodRegex, ".")
    .replace(unicodeSpaceRegex, " ")
    .replace(invisCharRegex, "")
    .trim();
}
