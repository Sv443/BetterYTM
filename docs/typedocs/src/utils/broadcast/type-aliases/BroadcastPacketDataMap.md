[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/utils/broadcast](../README.md) / BroadcastPacketDataMap

# Type Alias: BroadcastPacketDataMap

> **BroadcastPacketDataMap** = `object`

Defined in: [src/utils/broadcast.ts:16](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L16)

Maps a [`BroadcastPacketType`](BroadcastPacketType.md) to the type of data it should contain.

## Properties

### custom

> **custom**: `object` & `Record`\<`string`, `any`\>

Defined in: [src/utils/broadcast.ts:47](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L47)

Reserved for custom, non-standard BYTM packets.

#### Type Declaration

##### name

> **name**: `string`

Identifies the custom packet, used to determine how to handle it when received.

***

### dataStoreUpdate

> **dataStoreUpdate**: `object`

Defined in: [src/utils/broadcast.ts:19](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L19)

Whenever any DataStore's data is changed, to trigger updates in other sessions.

#### id

> **id**: `string`

The ID of the DataStore that was updated.

***

### discoverSessions

> **discoverSessions**: `void`

Defined in: [src/utils/broadcast.ts:28](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L28)

Called to make other sessions reply with a `discoverSessionsReply`, in order to collect a list of all open sessions.

***

### discoverSessionsReply

> **discoverSessionsReply**: `object`

Defined in: [src/utils/broadcast.ts:30](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L30)

Reply to a "discoverSessions" packet.

#### domain

> **domain**: [`Domain`](../../../types/type-aliases/Domain.md)

Which domain the session is on ("yt" or "ytm").

#### initTime

> **initTime**: `number`

Timestamp of when the session was initialized.

#### sessionId

> **sessionId**: `string` \| `null`

Session ID of the sender (not the TxID).  
Note that this ID might not be unique across tabs, as sessionStorage can get duplicated when duplicating tabs.  
For actual unique identification, use the TxID in the `from` field of the transmitted packet instead.

#### title

> **title**: `string`

Document title of the sender's tab for easier identification.

***

### reloadTabs

> **reloadTabs**: `void`

Defined in: [src/utils/broadcast.ts:24](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L24)

Reloads all open tabs.
