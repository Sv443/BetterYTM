[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/utils/broadcast](../README.md) / emitBroadcast

# Function: emitBroadcast()

> **emitBroadcast**\<`TPacketType`\>(`packet`, `to?`): `Promise`\<`void`\>

Defined in: [src/utils/broadcast.ts:211](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/broadcast.ts#L211)

Emits a packet through BYTM's broadcast system to all other sessions that might be open, or only to specific sessions if the `to` parameter is provided.  
The packet will be wrapped in a [`BroadcastTransitPacket`](../type-aliases/BroadcastTransitPacket.md) that includes metadata about the sender and intended recipients.

## Type Parameters

### TPacketType

`TPacketType` *extends* keyof [`BroadcastPacketDataMap`](../type-aliases/BroadcastPacketDataMap.md)

## Parameters

### packet

[`BroadcastPacket`](../type-aliases/BroadcastPacket.md)\<`TPacketType`\>

The actual packet to be sent, without the metadata. Use the [`BroadcastPacket`](../type-aliases/BroadcastPacket.md) type for this parameter.

### to?

`string`[]

Optional array of TxIDs to specify which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.

## Returns

`Promise`\<`void`\>
