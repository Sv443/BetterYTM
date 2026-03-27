[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/utils/broadcast](../README.md) / BroadcastTransitPacket

# Type Alias: BroadcastTransitPacket\<TPacketType\>

> **BroadcastTransitPacket**\<`TPacketType`\> = `object`

Defined in: [src/utils/broadcast.ts:70](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L70)

Type of the packets sent via broadcast, including metadata about the sender and intended recipients.

## Type Parameters

### TPacketType

`TPacketType` *extends* [`BroadcastPacketType`](BroadcastPacketType.md) = [`BroadcastPacketType`](BroadcastPacketType.md)

## Properties

### from

> **from**: `string`

Defined in: [src/utils/broadcast.ts:72](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L72)

TxID of the sender.

***

### nonce

> **nonce**: `number`

Defined in: [src/utils/broadcast.ts:78](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L78)

Unique nonce to prevent parsing the same packet multiple times.

***

### packet

> **packet**: [`BroadcastPacket`](BroadcastPacket.md)\<`TPacketType`\>

Defined in: [src/utils/broadcast.ts:76](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L76)

The actual packet to be sent.

***

### to?

> `optional` **to**: `string`[]

Defined in: [src/utils/broadcast.ts:74](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L74)

List of TxIDs that indicates which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.
