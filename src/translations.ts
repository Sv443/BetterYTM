import { tr, Stringifiable } from "@sv443-network/userutils";
import { error, getResourceUrl, info } from "./utils";
import langMapping from "../assets/locales.json" assert { type: "json" };
import type tr_enUS from "../assets/translations/en_US.json";

export type TrLocale = keyof typeof langMapping;
export type TrInfo = (typeof langMapping)["en_US"];
type TFuncKey = keyof (typeof tr_enUS["translations"]) | "_";

const initializedLocales = new Set<TrLocale>();

/** Initializes the translations */
export async function initTranslations(locale: TrLocale) {
  if(initializedLocales.has(locale))
    return;

  try {
    const transUrl = await getResourceUrl(`tr-${locale}` as "_");
    const transFile = await (await fetch(transUrl)).json();
    tr.addLanguage(locale, transFile.translations);

    info(`Loaded translations for locale '${locale}'`);
  }
  catch(err) {
    const errStr = `Couldn't load translations for locale '${locale}'`;
    error(errStr, err);
    throw new Error(errStr);
  }
}

/** Sets the current language for translations */
export function setLocale(language: TrLocale) {
  tr.setLanguage(language);
}

/** Returns the currently set language */
export function getLocale() {
  return tr.getLanguage() as TrLocale;
}

/** Returns the translated string for the given key, after optionally inserting values */
export function t(key: TFuncKey, ...values: Stringifiable[]) {
  return tr(key, ...values);
}

/** Returns the passed translation key with an added pluralization identifier based on the passed `num` */
export function pl(key: string, num: number | unknown[] | NodeList) {
  if(typeof num !== "number")
    num = num.length;
  const plNum = num === 1 ? "1" : "n";

  return `${key}-${plNum}` as "_";
}
