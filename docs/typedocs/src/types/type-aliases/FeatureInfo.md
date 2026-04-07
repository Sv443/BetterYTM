[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/types](../README.md) / FeatureInfo

# Type Alias: FeatureInfo

> **FeatureInfo** = `Record`\<keyof [`FeatureConfig`](../interfaces/FeatureConfig.md), [`FeatureInfoEntry`](FeatureInfoEntry.md)\>

Defined in: [src/types.ts:778](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/types.ts#L778)

The feature info object that contains all properties necessary to construct the config menu and the feature config object.  
All values are loosely typed so try to only use this via `const myObj = {} satisfies FeatureInfo;`  
For full type safety, use `typeof featInfo` (from `src/features/index.ts`) instead.
