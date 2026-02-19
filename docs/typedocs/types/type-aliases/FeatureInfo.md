[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / FeatureInfo

# Type Alias: FeatureInfo

> **FeatureInfo** = `Prettify`\<`Record`\<keyof [`FeatureConfig`](../interfaces/FeatureConfig.md), [`FeatureInfoEntry`](FeatureInfoEntry.md)\>\>

Defined in: [src/types.ts:678](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L678)

The feature info object that contains all properties necessary to construct the config menu and the feature config object.  
All values are loosely typed so try to only use this via `const myObj = {} satisfies FeatureInfo;`  
For full type safety, use `typeof featInfo` (from `src/features/index.ts`) instead.
