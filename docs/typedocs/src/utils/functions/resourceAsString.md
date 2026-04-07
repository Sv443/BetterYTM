[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / resourceAsString

# Function: resourceAsString()

> **resourceAsString**(`resourceKey`): `Promise`\<`string` \| `null`\>

Defined in: [src/utils/misc.ts:539](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/misc.ts#L539)

Returns the content behind the passed resource identifier as a string, for example to be assigned to an element's innerHTML property.  
Caches the resulting string if the resource key starts with any item in `cachedResourcePrefixes`

## Parameters

### resourceKey

`"_"` | [`ResourceKey`](../../types/type-aliases/ResourceKey.md)

## Returns

`Promise`\<`string` \| `null`\>
