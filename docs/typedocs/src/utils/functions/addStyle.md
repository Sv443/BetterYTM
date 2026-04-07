[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / addStyle

# Function: addStyle()

> **addStyle**(`css`, `ref?`, `transform?`): `Promise`\<`HTMLStyleElement`\>

Defined in: [src/utils/dom.ts:238](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/dom.ts#L238)

Adds a style element to the DOM at runtime.

## Parameters

### css

`StringGen`

The CSS stylesheet to add

### ref?

`string`

A reference string to identify the style element - defaults to a random 5-character string - has to be compatible with the HTML id attribute

### transform?

(`css`) => `string` \| `Promise`\<`string`\>

A function to transform the CSS before adding it to the DOM

## Returns

`Promise`\<`HTMLStyleElement`\>
