[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [config](../README.md) / getFeature

# Function: getFeature()

> **getFeature**\<`TKey`\>(`key`): [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]

Defined in: [src/config.ts:400](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/config.ts#L400)

Returns the value of the feature with the given key from the in-memory cache, as a copy

## Type Parameters

### TKey

`TKey` *extends* keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Parameters

### key

`"_"` | `TKey`

## Returns

[`FeatureConfig`](../../types/interfaces/FeatureConfig.md)\[`TKey`\]
