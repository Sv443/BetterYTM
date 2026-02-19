[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [interface](../README.md) / saveAutoLikeDataInterface

# Function: saveAutoLikeDataInterface()

> **saveAutoLikeDataInterface**(`token`, `data`): `Promise`\<`void`\> \| `undefined`

Defined in: [src/interface.ts:653](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/interface.ts#L653)

Saves new auto-like data, synchronously to the in-memory cache and asynchronously to the persistent storage.  
This is an authenticated function so you must pass the session- and plugin-unique token, retreived at registration.

## Parameters

### token

`string` | `undefined`

### data

[`AutoLikeData`](../../types/type-aliases/AutoLikeData.md)

## Returns

`Promise`\<`void`\> \| `undefined`
