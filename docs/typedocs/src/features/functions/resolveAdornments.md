[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / resolveAdornments

# Function: resolveAdornments()

> **resolveAdornments**(`ftInfo`, `featKey`): `Promise`\<`string`[]\>

Defined in: [src/features/index.ts:99](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/features/index.ts#L99)

Resolves the adornments property from a [`featInfo`](../variables/featInfo.md) entry and returns an array of HTML strings.  
Also adds conditional adornments like the "new feature" adornment.

## Parameters

### ftInfo

[`FeatureInfo`](../../types/type-aliases/FeatureInfo.md)

### featKey

keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Returns

`Promise`\<`string`[]\>
