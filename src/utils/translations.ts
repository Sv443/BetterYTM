import { tr, Stringifiable, fetchAdvanced, FetchAdvancedOpts } from "@sv443-network/userutils";
import { error, getResourceUrl, info } from ".";
import { emitInterface, setGlobalProp } from "../interface";
import { getFeature } from "../config";
import langMapping from "../../assets/locales.json" with { type: "json" };
import type tr_enUS from "../../assets/translations/en_US.json";

export type TrLocale = keyof typeof langMapping;
export type TrKey = keyof (typeof tr_enUS["translations"]);
type TFuncKey = TrKey | (string & {});

const fetchOpts: FetchAdvancedOpts = {
  timeout: 6_000,
};

/** Contains all translation keys of all initialized and loaded translations */
const allTrKeys = new Map<TrLocale, Set<TrKey>>();
/** Contains the identifiers of all initialized and loaded translation locales */
const initializedLocales = new Set<TrLocale>();

/** Initializes the translations */
export async function initTranslations(locale: TrLocale) {
  if(initializedLocales.has(locale))
    return;

  initializedLocales.add(locale);

  try {
    const transUrl = await getResourceUrl(`trans-${locale}` as "_");
    const transFile = await (await fetchAdvanced(transUrl, fetchOpts)).json();

    let fallbackTrans: Partial<typeof tr_enUS["translations"]> = {};

    if(getFeature("localeFallback"))
      fallbackTrans = (await (await fetchAdvanced(await getResourceUrl("trans-en_US"), fetchOpts)).json()).translations;

    // merge with base translations if specified
    const baseTransUrl = transFile.base ? await getResourceUrl(`trans-${transFile.base}` as "_") : undefined;
    const baseTransFile = baseTransUrl ? await (await fetchAdvanced(baseTransUrl, fetchOpts)).json() : undefined;

    const translations: typeof tr_enUS["translations"] = {
      ...fallbackTrans,
      ...(baseTransFile?.translations ?? {}),
      ...transFile.translations,
    };

    tr.addLanguage(locale, translations);
    allTrKeys.set(locale, new Set(Object.keys(translations) as TrKey[]));

    info(`Loaded translations for locale '${locale}'`);
  }
  catch(err) {
    const errStr = `Couldn't load translations for locale '${locale}'`;
    error(errStr, err);
    throw new Error(errStr);
  }
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
  return allTrKeys.get(locale)?.has(key as TrKey) ?? false;
}

/** Returns the translated string for the given key, after optionally inserting values */
export function t(key: TFuncKey, ...values: Stringifiable[]) {
  return tr(key, ...values);
}

/**
 * Returns the translated string for the given key with an added pluralization identifier based on the passed `num`  
 * Tries to fall back to the non-pluralized syntax if no translation was found
 */
export function tp(key: TFuncKey, num: number | unknown[] | NodeList, ...values: Stringifiable[]) {
  if(typeof num !== "number")
    num = num.length;
  const plNum = num === 1 ? "1" : "n";

  const trans = t(`${key}-${plNum}`, ...values);

  if(trans === key)
    return t(key, ...values);

  return trans;
}
