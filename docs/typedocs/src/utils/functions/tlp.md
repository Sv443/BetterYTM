[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / tlp

# Function: tlp()

> **tlp**(`locale`, `key`, `num`, ...`args`): `string`

Defined in: [src/utils/translations.ts:178](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/translations.ts#L178)

Returns the translated string for the given [`key`](#tlp) in the given [`locale`](#tlp) with an added pluralization identifier based on the passed [`num`](#tlp)  
Also inserts the passed positional [`args`](#tlp) at the 1-indexed `%n` placeholders.  
Tries to fall back to the non-pluralized syntax if no translation was found.

## Parameters

### locale

`"de-DE"` | `"en-US"` | `"en-GB"` | `"es-ES"` | `"fr-FR"` | `"hi-IN"` | `"ja-JP"` | `"pt-BR"` | `"zh-CN"`

### key

`TFuncKey`

### num

`number` | `unknown`[] | `NodeList`

### args

...[`TrArg`](../type-aliases/TrArg.md)[]

## Returns

`string`
