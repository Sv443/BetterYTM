[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / FeatureInfo

# Type Alias: FeatureInfo

> **FeatureInfo** = `Prettify`\<`Record`\<keyof [`FeatureConfig`](../interfaces/FeatureConfig.md), [`FeatureInfoEntry`](FeatureInfoEntry.md)\>\>

Defined in: [src/types.ts:758](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/types.ts#L758)

The feature info object that contains all properties necessary to construct the config menu and the feature config object.  
All values are loosely typed so try to only use this via `const myObj = {} satisfies FeatureInfo;`  
For full type safety, use `typeof featInfo` (from `src/features/index.ts`) instead.
