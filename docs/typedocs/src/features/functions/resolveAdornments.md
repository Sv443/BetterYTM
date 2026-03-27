[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/features](../README.md) / resolveAdornments

# Function: resolveAdornments()

> **resolveAdornments**(`ftInfo`, `featKey`): `Promise`\<`string`[]\>

Defined in: [src/features/index.ts:99](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/features/index.ts#L99)

Resolves the adornments property from a [`featInfo`](../variables/featInfo.md) entry and returns an array of HTML strings.  
Also adds conditional adornments like the "new feature" adornment.

## Parameters

### ftInfo

[`FeatureInfo`](../../types/type-aliases/FeatureInfo.md)

### featKey

keyof [`FeatureConfig`](../../types/interfaces/FeatureConfig.md)

## Returns

`Promise`\<`string`[]\>
