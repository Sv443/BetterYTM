import { tr, Stringifiable, fetchAdvanced } from "@sv443-network/userutils";
import { error, getResourceUrl, info } from "./index.js";
import { emitInterface, setGlobalProp } from "../interface.js";
import { getFeature } from "../config.js";
import langMapping from "../../assets/locales.json" with { type: "json" };
import tr_enUS from "../../assets/translations/en-US.json" with { type: "json" };

void [langMapping, tr_enUS];

export type TrLocale = keyof typeof langMapping;
export type TrKey = keyof (typeof tr_enUS["translations"]);
type TFuncKey = TrKey | (string & {});

/** Contains the identifiers of all initialized and loaded translation locales */
const initializedLocales = new Set<TrLocale>();

/** Initializes the translations */
export async function initTranslations(locale: TrLocale) {
  if(initializedLocales.has(locale))
    return;

  initializedLocales.add(locale);

  try {
    const transFile = await fetchLocaleJson(locale);

    let fallbackTrans: Partial<typeof tr_enUS> = {};

    if(getFeature("localeFallback"))
      fallbackTrans = await fetchLocaleJson("en-US");

    // merge with base translations if specified
    const baseTransFile = transFile.base ? await fetchLocaleJson(transFile.base) : undefined;

    const translations: typeof tr_enUS["translations"] = {
      ...(fallbackTrans?.translations ?? {}),
      ...(baseTransFile?.translations ?? {}),
      ...transFile.translations,
    };

    tr.addLanguage(locale, translations);

    info(`Loaded translations for locale '${locale}'`);
  }
  catch(err) {
    const errStr = `Couldn't load translations for locale '${locale}'`;
    error(errStr, err);
    throw new Error(errStr);
  }
}

/** Fetches the translation JSON file of the passed locale */
async function fetchLocaleJson(locale: TrLocale) {
  const url = await getResourceUrl(`trans-${locale}` as "_");
  const res = await fetchAdvanced(url);

  if(res.status < 200 || res.status >= 300)
    throw new Error(`Failed to fetch translation file for locale '${locale}'`);
  return await res.json() as { base?: TrLocale } & typeof tr_enUS;
}

/** Sets the current language for translations */
export function setLocale(locale: TrLocale) {
  tr.setLanguage(locale);
  setGlobalProp("locale", locale);
  emitInterface("bytm:setLocale", { locale });
}

/** Returns the currently set language */
export function getLocale() {
  return tr.getLanguage() as TrLocale;
}

/** Returns whether the given translation key exists in the current locale */
export function hasKey(key: TFuncKey) {
  return hasKeyFor(getLocale(), key);
}

/** Returns whether the given translation key exists in the given locale */
export function hasKeyFor(locale: TrLocale, key: TFuncKey) {
  return typeof tr.getTranslations(locale)?.[key] === "string";
}

/** Returns the translated string for the given key, after optionally inserting values */
export function t(key: TFuncKey, ...values: Stringifiable[]) {
  return tr(key, ...values);
}

/**
 * Returns the translated string for the given {@linkcode key} with an added pluralization identifier based on the passed {@linkcode num}  
 * Also inserts the passed {@linkcode values} into the translation at the markers `%1`, `%2`, etc.  
 * Tries to fall back to the non-pluralized syntax if no translation was found
 */
export function tp(key: TFuncKey, num: number | unknown[] | NodeList, ...values: Stringifiable[]) {
  return tlp(getLocale(), key, num, ...values);
}

/** Returns the translated string for the given key in the specified locale, after optionally inserting values */
export function tl(locale: TrLocale, key: TFuncKey, ...values: Stringifiable[]) {
  return tr.forLang(locale, key, ...values);
}

/**
 * Returns the translated string for the given {@linkcode key} in the given {@linkcode locale} with an added pluralization identifier based on the passed {@linkcode num}  
 * Also inserts the passed {@linkcode values} into the translation at the markers `%1`, `%2`, etc.  
 * Tries to fall back to the non-pluralized syntax if no translation was found
 */
export function tlp(locale: TrLocale, key: TFuncKey, num: number | unknown[] | NodeList, ...values: Stringifiable[]) {
  if(typeof num !== "number")
    num = num.length;
  const plNum = num === 1 ? "1" : "n";

  const trans = tl(locale, `${key}-${plNum}`, ...values);

  if(trans === key)
    return t(key, ...values);

  return trans;
};
