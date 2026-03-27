[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/utils/broadcast](../README.md) / BroadcastPacket

# Type Alias: BroadcastPacket\<TPacketType\>

> **BroadcastPacket**\<`TPacketType`\> = `object` & [`BroadcastPacketDataMap`](BroadcastPacketDataMap.md)\[`TPacketType`\] *extends* `void` ? `object` : `object`

Defined in: [src/utils/broadcast.ts:57](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L57)

Raw data object type of the broadcast packets.

## Type Declaration

### type

> **type**: `TPacketType`

Used to determine how to handle the packet when received.

## Type Parameters

### TPacketType

`TPacketType` *extends* [`BroadcastPacketType`](BroadcastPacketType.md) = [`BroadcastPacketType`](BroadcastPacketType.md)
