[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [interface](../README.md) / saveAutoLikeDataInterface

# Function: saveAutoLikeDataInterface()

> **saveAutoLikeDataInterface**(`token`, `data`): `Promise`\<`void`\> \| `undefined`

Defined in: [src/interface.ts:656](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/interface.ts#L656)

Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### data

[`AutoLikeData`](../../types/type-aliases/AutoLikeData.md)

## Returns

`Promise`\<`void`\> \| `undefined`
