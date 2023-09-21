import { tr, Stringifiable } from "@sv443-network/userutils";

import tr_deDE from "../assets/translations/de-DE.json" assert { type: "json" };
import tr_enUS from "../assets/translations/en-US.json" assert { type: "json" };

/** Mapping of language and locale code to translation file content */
const langMapping = {
  "de-DE": tr_deDE,
  "en-US": tr_enUS,
};


export type TrLang = keyof typeof langMapping;
export type TrInfo = Omit<typeof tr_enUS, "translations">;

export const translations = Object.entries(langMapping).reduce<Record<TrLang, Record<string, string>>>((a, [lang, tr]) => {
  a[lang as TrLang] = tr.translations;
  return a;
}, {} as Record<TrLang, Record<string, string>>);

export const trInfo = Object.entries(langMapping).reduce<Record<TrLang, TrInfo>>((a, [lang, tr]) => {
  const trInfo: TrInfo & Partial<{ translations: Record<string, string> }> = { ...tr };
  delete trInfo.translations;
  a[lang as TrLang] = trInfo;
  return a;
}, {} as Record<TrLang, TrInfo>);


/** Initializes the translations */
export function initTranslations(language?: TrLang) {
  for(const [lang, trans] of Object.entries(translations))
    tr.addLanguage(lang, trans);

  tr.setLanguage(language ?? "en-US");
}

export function setLanguage(language: TrLang) {
  tr.setLanguage(language);
}

/** Returns the translated string for the given key, after optionally inserting values */
export function t(key: keyof (typeof tr_enUS["translations"]), ...values: Stringifiable[]) {
  return tr(key, ...values);
}
