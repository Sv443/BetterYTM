import { tr, Stringifiable } from "@sv443-network/userutils";
import { log } from "./utils";

import tr_deDE from "../assets/translations/de-DE.json" assert { type: "json" };
import tr_enUS from "../assets/translations/en-US.json" assert { type: "json" };

/** Mapping of language and locale code to translation file content */
const langMapping = {
  "de-DE": tr_deDE,
  "en-US": tr_enUS,
};


export type TrLang = keyof typeof langMapping;
export type TrInfo = Omit<typeof tr_enUS, "translations">;

export const translations = Object.entries(langMapping).reduce((a, [lang, tr]) => {
  // apply defaults from en-US in case of missing translations
  a[lang as TrLang] = { ...tr_enUS.translations, ...tr.translations };
  return a;
}, {} as Record<TrLang, Record<string, string>>);

export const trInfo = Object.entries(langMapping).reduce((a, [lang, tr]) => {
  const trInfo: TrInfo & Partial<{ translations: Record<string, string> }> = { ...tr };
  delete trInfo.translations;
  a[lang as TrLang] = trInfo;
  return a;
}, {} as Record<TrLang, TrInfo>);


/** Initializes the translations */
export function initTranslations(language: TrLang) {
  // for when hot reloading is implemented:
  // for(const [lang, trans] of Object.entries(translations))
  //   tr.addLanguage(lang, trans);

  tr.addLanguage(language, translations[language]);
  tr.setLanguage(language);

  log("Initialized translations for language", language);
}

/** Sets the current language for translations */
export function setLanguage(language: TrLang) {
  tr.setLanguage(language);
}

type TFuncKey = keyof (typeof tr_enUS["translations"]) | "_";

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
