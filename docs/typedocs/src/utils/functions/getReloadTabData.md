[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getReloadTabData

# Function: getReloadTabData()

> **getReloadTabData**(`sessionId?`, `deleteAfterRead?`): `Promise`\<\{ `sessionId`: `string` \| `null`; `time`: `number` \| `null`; `timestamp`: `number`; `volume`: `number` \| `null`; \} \| `null`\>

Defined in: [src/utils/misc.ts:253](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/misc.ts#L253)

Returns the "reload tab" data for the current session, or null if there is no data for the current session or sessionStorage is unavailable.

## Parameters

### sessionId?

`string` | `null`

### deleteAfterRead?

`boolean` = `true`

## Returns

`Promise`\<\{ `sessionId`: `string` \| `null`; `time`: `number` \| `null`; `timestamp`: `number`; `volume`: `number` \| `null`; \} \| `null`\>
