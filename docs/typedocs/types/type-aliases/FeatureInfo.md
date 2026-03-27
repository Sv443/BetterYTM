[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [types](../README.md) / FeatureInfo

# Type Alias: FeatureInfo

> **FeatureInfo** = `Record`\<keyof [`FeatureConfig`](../interfaces/FeatureConfig.md), [`FeatureInfoEntry`](FeatureInfoEntry.md)\>

Defined in: [src/types.ts:759](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/types.ts#L759)

The feature info object that contains all properties necessary to construct the config menu and the feature config object.  
All values are loosely typed so try to only use this via `const myObj = {} satisfies FeatureInfo;`  
For full type safety, use `typeof featInfo` (from `src/features/index.ts`) instead.
