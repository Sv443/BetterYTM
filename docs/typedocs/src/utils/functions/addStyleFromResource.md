[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / addStyleFromResource

# Function: addStyleFromResource()

> **addStyleFromResource**(`key`, `transform?`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/utils/dom.ts:250](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/dom.ts#L250)

Adds a global style element with the contents fetched from the specified resource starting with `css-`  
The CSS can be transformed using the provided function before being added to the DOM.

## Parameters

### key

[`StyleResourceKey`](../../types/type-aliases/StyleResourceKey.md)

### transform?

(`css`) => `Stringifiable`

## Returns

`Promise`\<`boolean` \| `undefined`\>
