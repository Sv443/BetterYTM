import { tr, Stringifiable, fetchAdvanced, FetchAdvancedOpts } from "@sv443-network/userutils";
import { error, getResourceUrl, info } from "./utils";
import langMapping from "../assets/locales.json" assert { type: "json" };
import type tr_enUS from "../assets/translations/en_US.json";
import { emitInterface, setGlobalProp } from "./interface";

export type TrLocale = keyof typeof langMapping;
export type TrInfo = (typeof langMapping)["en_US"];
type TFuncKey = keyof (typeof tr_enUS["translations"]) | (string & {});

const fetchOpts: FetchAdvancedOpts = {
  timeout: 10000,
};

const initializedLocales = new Set<TrLocale>();

/** Initializes the translations */
export async function initTranslations(locale: TrLocale) {
  if(initializedLocales.has(locale))
    return;

  try {
    const transUrl = await getResourceUrl(`tr-${locale}` as "_");
    const transFile = await (await fetchAdvanced(transUrl, fetchOpts)).json();

    // merge with base translations if specified
    const baseTransUrl = transFile.base ? await getResourceUrl(`tr-${transFile.base}` as "_") : undefined;
    const baseTransFile = baseTransUrl ? await (await fetchAdvanced(baseTransUrl, fetchOpts)).json() : undefined;

    tr.addLanguage(locale, { ...(baseTransFile?.translations ?? {}), ...transFile.translations });

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
