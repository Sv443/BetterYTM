[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / tp

# Function: tp()

> **tp**(`key`, `num`, ...`args`): `string`

Defined in: [src/utils/translations.ts:155](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/translations.ts#L155)

Returns the translated string for the given [`key`](#tp) with an added pluralization identifier based on the passed [`num`](#tp)  
Also inserts the passed positional [`args`](#tp) at the 1-indexed `%n` placeholders.  
Tries to fall back to the non-pluralized syntax if no translation was found.

## Parameters

### key

`TFuncKey`

### num

`number` | `unknown`[] | `NodeList`

### args

...[`TrArg`](../type-aliases/TrArg.md)[]

## Returns

`string`
