[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/utils/broadcast](../README.md) / BroadcastTransitPacket

# Type Alias: BroadcastTransitPacket\<TPacketType\>

> **BroadcastTransitPacket**\<`TPacketType`\> = `object`

Defined in: [src/utils/broadcast.ts:67](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/broadcast.ts#L67)

Type of the packets sent via broadcast, including metadata about the sender and intended recipients.

## Type Parameters

### TPacketType

`TPacketType` *extends* [`BroadcastPacketType`](BroadcastPacketType.md) = [`BroadcastPacketType`](BroadcastPacketType.md)

## Properties

### from

> **from**: `string`

Defined in: [src/utils/broadcast.ts:69](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/broadcast.ts#L69)

TxID of the sender.

***

### nonce

> **nonce**: `number`

Defined in: [src/utils/broadcast.ts:75](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/broadcast.ts#L75)

Unique nonce to prevent parsing the same packet multiple times.

***

### packet

> **packet**: [`BroadcastPacket`](BroadcastPacket.md)\<`TPacketType`\>

Defined in: [src/utils/broadcast.ts:73](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/broadcast.ts#L73)

The actual packet to be sent.

***

### to?

> `optional` **to**: `string`[]

Defined in: [src/utils/broadcast.ts:71](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/broadcast.ts#L71)

List of TxIDs that indicates which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.
