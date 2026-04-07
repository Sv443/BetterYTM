[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / setGlobalProp

# Function: setGlobalProp()

> **setGlobalProp**\<`TKey`, `TValue`\>(`key`, `value`): `void`

Defined in: [src/interface.ts:250](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/interface.ts#L250)

Sets a global property on the unsafeWindow.BYTM object - ⚠️ use with caution as these props can be accessed by any script on the page!

## Type Parameters

### TKey

`TKey` *extends* `string` \| `number`

### TValue

`TValue` = [`BytmObject`](../../types/type-aliases/BytmObject.md)\[`TKey`\]

## Parameters

### key

`string` & `object` | `TKey`

### value

`TValue`

## Returns

`void`
