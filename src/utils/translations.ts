import { fetchAdvanced, type Stringifiable } from "@sv443-network/coreutils";
import { tr } from "@sv443-network/userutils";
import { error, getResourceUrl, info, log, warn } from "@util/index.ts";
import { emitInterface, setGlobalProp } from "@/interface.ts";
import { getFeature } from "@/config.ts";
import langMapping from "@asset/locales.json" with { type: "json" };
import tr_enUS from "@asset/translations/en-US.json" with { type: "json" };

void [langMapping, tr_enUS];

export type TrLocale = keyof typeof langMapping;
export type TrKey = keyof typeof tr_enUS;
type TFuncKey = TrKey | (string & {});

export type TrArg = Stringifiable | Record<string, Stringifiable>;

/** Contains the identifiers of all initialized and loaded translation locales */
const initializedLocales = new Set<TrLocale>();

/** The currently active locale */
let activeLocale: TrLocale = "en-US";
/** The current locale's text direction */
export let activeLocaleDir: "ltr" | "rtl" = "ltr";

tr.addTransform(tr.transforms.percent);
tr.addTransform(tr.transforms.templateLiteral);


// let devUsedTrKeysStoreLoaded = false;
// const devUsedTrKeysStore = new DataStore<{
//   keys: string[];
// }>({
//   id: "bytm-dev-used-tr-keys",
//   engine: new GMStorageEngine(),
//   defaultData: { keys: [] },
//   formatVersion: 0,
//   compressionFormat: null,
// });

/** Used to check which keys are unused. */
const devMarkTrKeyUsed = async (key: string) => {
  void ["noop for now", key];
  // try {
  //   if(mode !== "development")
  //     return;

  //   if(!devUsedTrKeysStoreLoaded) {
  //     await devUsedTrKeysStore.loadData();
  //     devUsedTrKeysStoreLoaded = true;
  //   }

  //   const data = devUsedTrKeysStore.getData();
  //   const keysSet = new Set(data.keys);
  //   keysSet.add(key);
  //   data.keys = Array.from(keysSet);
  //   return await devUsedTrKeysStore.setData(data);
  // }
  // catch(e) {
  //   error("Failed to mark translation key as used", e);
  // }
};


/** Initializes the translations for the given locale if they haven't been initialized yet. */
export async function initTranslations(locale: TrLocale) {
  if(initializedLocales.has(locale))
    return;

  initializedLocales.add(locale);

  try {
    const transFile = await fetchTranslationResource(locale);

    let fallbackTrans: Partial<typeof tr_enUS> = {};

    if(getFeature("localeFallback")) {
      tr.setFallbackLanguage("en-US" satisfies TrLocale);
      fallbackTrans = await fetchTranslationResource("en-US");
    }

    // merge with base translations if specified
    const baseTransFile = typeof transFile?.meta === "object" && "base" in transFile.meta && typeof transFile.meta.base === "string"
      ? await fetchTranslationResource(transFile.meta.base as TrLocale)
      : undefined;

    const translations: typeof tr_enUS = {
      ...(fallbackTrans ?? {}),
      ...(baseTransFile ?? {}),
      ...transFile,
    };

    const { meta: { authors: _authors, ...meta }, ...trans } = translations;

    tr.addTranslations(locale, { ...meta, ...trans });

    info(`Loaded translations for locale '${locale}'`);
  }
  catch(err) {
    const errStr = `Couldn't load translations for locale '${locale}'`;
    error(errStr, err);
    throw new Error(errStr, { cause: err });
  }
}

/** Fetches the JSON translations file of the passed locale. */
export async function fetchTranslationResource(locale: TrLocale) {
  const url = await getResourceUrl(`trans-${locale}` as "_");
  const res = await fetchAdvanced(url);
  const bodyTxt = await res.text();

  getFeature("logHttp") && log(`Fetched translation resource for locale '${locale}' with status ${res.status}:`, bodyTxt);

  if(res.status < 200 || res.status >= 300)
    throw new Error(`Failed to fetch translation resource for locale '${locale}'`);
  return JSON.parse(bodyTxt) as { base?: TrLocale } & typeof tr_enUS; // since en-US keys are merged in, this assertion is safe
}

/** Sets the new locale to use in translations. */
export function setLocale(locale: TrLocale) {
  activeLocale = locale;
  activeLocaleDir = langMapping[locale]?.textDir as "ltr" | "rtl" ?? "ltr";
  setGlobalProp("locale", locale);
  emitInterface("bytm:setLocale", { locale });
}

/** Returns the currently set locale. */
export function getLocale() {
  return activeLocale;
}

/** Returns whether the given translation key exists in the current locale. Loads the translations if they weren't yet. */
export async function hasKey(key: TFuncKey) {
  return await hasKeyFor(getLocale(), key);
}

/** Returns whether the given translation key exists in the given locale. Loads the translations if they weren't yet. */
export async function hasKeyFor(locale: TrLocale, key: TFuncKey) {
  devMarkTrKeyUsed(key);

  if(!initializedLocales.has(locale))
    await initTranslations(locale);

  return typeof tr.getTranslations(locale)?.[key] === "string";
}

/**
 * Returns the translated string for the given key, after optionally inserting positional arguments into 1-indexed `%n` placeholders.
 */
export function t(key: TFuncKey, ...args: TrArg[]) {
  return tl(getLocale(), key, ...args);
}

/**
 * Returns the translated string for the given {@linkcode key} with an added pluralization identifier based on the passed {@linkcode num}  
 * Also inserts the passed positional {@linkcode args} at the 1-indexed `%n` placeholders.  
 * Tries to fall back to the non-pluralized syntax if no translation was found.
 */
export function tp(key: TFuncKey, num: number | unknown[] | NodeList, ...args: TrArg[]) {
  return tlp(getLocale(), key, num, ...args);
}

/** Returns the translated string for the given key in the specified locale, after optionally inserting positional arguments into 1-indexed `%n` placeholders. */
export function tl(locale: TrLocale, key: TFuncKey, ...args: TrArg[]) {
  if(locale === "en-US")
    hasKeyFor(locale, key).then((hasKey) => !hasKey && warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);

  devMarkTrKeyUsed(key);

  return tr.for(locale, key, ...args);
}

/**
 * Returns the translated string for the given {@linkcode key} in the given {@linkcode locale} with an added pluralization identifier based on the passed {@linkcode num}  
 * Also inserts the passed positional {@linkcode args} at the 1-indexed `%n` placeholders.  
 * Tries to fall back to the non-pluralized syntax if no translation was found.
 */
export function tlp(locale: TrLocale, key: TFuncKey, num: number | unknown[] | NodeList, ...args: TrArg[]) {
  if(typeof num !== "number")
    num = num.length;

  const tlKey = `${key}-${num === 1 ? "1" : "n"}`;
  devMarkTrKeyUsed(tlKey);

  if(locale === "en-US")
    hasKeyFor(locale, tlKey).then((hasKey) => !hasKey && warn(`Translation key '${key}' not found for locale 'en-US' - expect random errors!`)).catch(() => void 0);

  const trans = tl(locale, tlKey, ...args);

  if(trans === key)
    return t(key, ...args);

  return trans;
};
