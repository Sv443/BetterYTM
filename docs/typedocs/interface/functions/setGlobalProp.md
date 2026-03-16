[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / setGlobalProp

# Function: setGlobalProp()

> **setGlobalProp**\<`TKey`, `TValue`\>(`key`, `value`): `void`

Defined in: [src/interface.ts:250](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/interface.ts#L250)

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
