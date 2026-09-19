import { consumeStringGen, randomId, type StringGen } from "@sv443-network/userutils";
import { compare as compareVer } from "compare-versions";
import { t } from "@util/translations.ts";
import { resourceAsString } from "@util/misc.ts";
import { getVersionSessionCount } from "@util/versionSessions.ts";
import { showPrompt } from "@dialog/prompt.ts";
import { siteEvents } from "@/siteEvents.ts";
import { mode, newFeatureAdornmentMaxSessionCount, scriptInfo } from "@/constants.ts";
import type { AdornFunc, FeatureInfo, FeatureKey, ResourceKey } from "@/types.ts";

/**
 * The decoration icons shown next to a feature's label in the config menu, and the logic that
 * resolves a {@linkcode "@feat/featInfo.ts".featInfo} entry's `adornments` property into HTML.
 *
 * Split out of `featInfo.ts` only for file size - both live at the same layer and may freely
 * import each other's exports (`featInfo.ts` imports {@linkcode adornments} from here).
 */

//#region adornments

/** Decoration elements that can be added next to the label */
export const adornments = {
  /** Indicates that the feature is important and should be used with caution. */
  alert: async (title: StringGen) => await getAdornHtml("bytm-warning-icon", title, "icon-error", "role=\"alert\"", title),
  /** Indicates that the feature is experimental and may be unstable. */
  experimental: async () => await getAdornHtml("bytm-experimental-icon", t("experimental_feature"), "icon-experimental", undefined, t("experimental_feature")),
  /** Indicates that the feature only works on YT Music. */
  ytmOnly: async () => await getAdornHtml("bytm-ytm-only-icon", t("feature_only_works_on_ytm"), "icon-ytm", undefined, t("feature_only_works_on_ytm")),
  /** Indicates that the feature relates to language, as a language-independent way to find the translation option. */
  globe: async () => await getAdornHtml("bytm-locale-icon", undefined, "icon-globe_small"),
  /** Indicates that changing this feature requires a page reload to take effect. */
  reload: async () => await getAdornHtml("bytm-reload-icon", t("feature_requires_reload"), "icon-reload", undefined, t("feature_requires_reload")),
  /** Indicates that the feature is only configurable in advanced mode. */
  advanced: async () => await getAdornHtml("bytm-advanced-mode-icon", t("advanced_feature"), "icon-advanced_mode", undefined, t("advanced_feature")),
  /** Don't use directly - gets added automatically for features with a `since` property matching the current version, and a session count below {@linkcode newFeatureAdornmentMaxSessionCount} to indicate the feature was recently added. */
  newFeature: async () => await getAdornHtml("bytm-new-feature-icon", t("feature_is_new"), "icon-new", undefined, t("feature_is_new")),
  /** Indicates a feature is privacy-sensitive as it may expose personally identifiable information about the user. */
  privacy: async () => await getAdornHtml("bytm-privacy-icon", t("feature_is_privacy_sensitive"), "icon-shield_info", undefined, t("feature_is_privacy_sensitive"))
} as const satisfies Record<string, AdornFunc>;

/** Order of adornment elements in the {@linkcode combineAdornments()} function - lowest value first. */
const adornOrder = new Map<AdornFunc, number>([
  [adornments.alert, 0],
  [adornments.experimental, 1],
  [adornments.ytmOnly, 2],
  [adornments.globe, 3],
  [adornments.reload, 4],
  [adornments.advanced, 5],
  [adornments.privacy, 6],
  [adornments.newFeature, 999],
]);

/** Creates an HTML string for the given adornment properties */
async function getAdornHtml(className: string, title: StringGen | undefined, resource: ResourceKey, extraAttributes?: StringGen, clickDialogText?: StringGen) {
  title = title ? await consumeStringGen(title) : undefined;
  extraAttributes = extraAttributes ? await consumeStringGen(extraAttributes) : undefined;
  const id = randomId(8, 36);
  if(clickDialogText) {
    siteEvents.once("cfgMenuMounted", () => {
      const elem = document.getElementById(`bytm-adornment-${id}`);
      if(!elem)
        return;
      elem.addEventListener("click", () => showPrompt({
        type: "alert",
        message: String(clickDialogText),
      }));
    });
  }
  return `<span id="bytm-adornment-${id}" class="${className} bytm-adorn-icon" ${title ? `title="${title}" aria-label="${title}"` : ""}${extraAttributes ? ` ${extraAttributes}` : ""}>${await resourceAsString(resource) ?? ""}</span>`;
};

/**
 * Resolves the adornments property from a {@linkcode featInfo} entry and returns an array of HTML strings.  
 * Also adds conditional adornments like the "new feature" adornment.
 */
export async function resolveAdornments(ftInfo: FeatureInfo, featKey: FeatureKey): Promise<string[]> {
  const feat = ftInfo[featKey];
  let adorns = feat.adornments;

  if(typeof adorns === "function")
    adorns = adorns();

  const isDev = mode === "development";
  const resolvedAdorns = adorns ? [...adorns] : [];

  const addAdorn = (adornFn: AdornFunc) => {
    if(!resolvedAdorns.find(a => a === adornFn))
      resolvedAdorns.push(adornFn);
  };

  // >> data-generated adornments:

  // reload required:
  if(!("reloadRequired" in feat) || feat.reloadRequired === true)
    addAdorn(adornments.reload);

  // YTM only:
  if(feat.supportedSites.length === 1 && feat.supportedSites[0] === "ytm")
    addAdorn(adornments.ytmOnly);

  // advanced mode:
  if(feat.advanced === true)
    addAdorn(adornments.advanced);

  // new feature:
  if(feat.since && compareVer(feat.since, scriptInfo.version, isDev ? ">" : ">=") && (getVersionSessionCount() < newFeatureAdornmentMaxSessionCount || isDev))
    addAdorn(adornments.newFeature);

  const sortedAdorns = resolvedAdorns.sort((a, b) => {
    const aIdx = adornOrder.has(a) ? adornOrder.get(a)! : 0;
    const bIdx = adornOrder.has(b) ? adornOrder.get(b)! : 0;
    return aIdx - bIdx;
  });

  const htmlStrings = await Promise.all(sortedAdorns.map(adorn => typeof adorn === "function" ? adorn() : adorn));
  return htmlStrings.filter(Boolean) as string[];
}
