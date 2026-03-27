[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [config](../README.md) / getFeature

# Function: getFeature()

> **getFeature**\<`TKey`\>(`key`, `defaultVal?`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]

Defined in: [src/config.ts:428](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/config.ts#L428)

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
