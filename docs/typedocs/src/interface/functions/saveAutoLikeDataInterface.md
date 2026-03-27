[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/interface](../README.md) / saveAutoLikeDataInterface

# Function: saveAutoLikeDataInterface()

> **saveAutoLikeDataInterface**(`token`, `data`): `Promise`\<`void`\> \| `undefined`

Defined in: [src/interface.ts:656](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/interface.ts#L656)

Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### data

[`AutoLikeData`](../../types/type-aliases/AutoLikeData.md)

## Returns

`Promise`\<`void`\> \| `undefined`
