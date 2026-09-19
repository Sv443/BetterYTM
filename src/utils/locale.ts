import type { TrLocale } from "@util/translations.ts";
import langMapping from "@asset/locales.json" with { type: "json" };

/**
 * Resolves the user's preferred locale from the browser settings.  
 * Only imports a *type* from {@linkcode "@util/translations.ts"}, so it stays free of internal
 * value imports and can be read at module-init time from anywhere.
 */

/**
 * Resolves the preferred locale code, given the browser's language settings, as long as it is supported by the userscript directly or via the `altLocales` prop in `locales.json`  
 * Prioritizes any supported value of `navigator.language`, then `navigator.languages`, then goes over them again, trimming off the part after the hyphen, then falls back to `"en-US"`
 */
export function getPreferredLocale(): TrLocale {
  /** Trimmed & case insensitive string equality check. */
  const sanEq = (str1: string, str2: string) => str1.trim().toLowerCase() === str2.trim().toLowerCase();

  const allNavLangs = [...new Set([navigator.language, ...navigator.languages])]
    .map((v) => v.replace(/_/g, "-"));

  for(const navLang of allNavLangs) {
    const resolvedLoc = Object.entries(langMapping)
      .find(([key, { altLocales }]) =>
        sanEq(key, navLang) || altLocales.find(altLoc => sanEq(altLoc, navLang))
      )?.[0];
    if(resolvedLoc)
      return resolvedLoc.trim() as TrLocale;

    const navLangTrimmed = navLang.split("-")[0];
    const resolvedFallbackLang = Object.entries(langMapping)
      .find(([key, { altLocales }]) =>
        sanEq(key.split("-")[0], navLangTrimmed) || altLocales.find(al => sanEq(al.split("-")[0], navLangTrimmed))
      )?.[0];

    if(resolvedFallbackLang)
      return resolvedFallbackLang.trim() as TrLocale;
  }

  return "en-US";
}
