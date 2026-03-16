[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [config](../README.md) / getFeature

# Function: getFeature()

> **getFeature**\<`TKey`\>(`key`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]

Defined in: [src/config.ts:422](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/config.ts#L422)

Returns the value of the feature with the given key from the in-memory cache, as a copy

## Type Parameters

### TKey

`TKey` *extends* keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Parameters

### key

`"_"` | `TKey`

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]
