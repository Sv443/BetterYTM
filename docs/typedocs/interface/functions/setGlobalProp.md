[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [interface](../README.md) / setGlobalProp

# Function: setGlobalProp()

> **setGlobalProp**\<`TKey`, `TValue`\>(`key`, `value`): `void`

Defined in: [src/interface.ts:245](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L245)

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
