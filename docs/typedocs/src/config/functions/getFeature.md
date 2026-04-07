[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/config](../README.md) / getFeature

# Function: getFeature()

> **getFeature**\<`TKey`\>(`key`, `defaultVal?`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]

Defined in: [src/config.ts:429](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/config.ts#L429)

Returns the value of the feature with the given key from the in-memory cache, as a copy

## Type Parameters

### TKey

`TKey` *extends* keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Parameters

### key

`"_"` | `TKey`

### defaultVal?

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]
