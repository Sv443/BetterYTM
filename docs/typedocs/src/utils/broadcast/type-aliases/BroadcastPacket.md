[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/utils/broadcast](../README.md) / BroadcastPacket

# Type Alias: BroadcastPacket\<TPacketType\>

> **BroadcastPacket**\<`TPacketType`\> = `object` & [`BroadcastPacketDataMap`](BroadcastPacketDataMap.md)\[`TPacketType`\] *extends* `void` ? `object` : `object`

Defined in: [src/utils/broadcast.ts:54](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/broadcast.ts#L54)

Raw data object type of the broadcast packets.

## Type Declaration

### type

> **type**: `TPacketType`

Used to determine how to handle the packet when received.

## Type Parameters

### TPacketType

`TPacketType` *extends* [`BroadcastPacketType`](BroadcastPacketType.md) = [`BroadcastPacketType`](BroadcastPacketType.md)
