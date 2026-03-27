[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/utils/broadcast](../README.md) / broadcastEng

# Variable: broadcastEng

> `const` **broadcastEng**: `GMStorageEngine`\<`object`\>

Defined in: [src/utils/broadcast.ts:104](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/broadcast.ts#L104)

DataStoreEngine instance used to push broadcast packets to other sessions using the `GM.addValueChangeListener` API.  
Refer to the [`BroadcastPacket`](../type-aliases/BroadcastPacket.md) type for the packets sent through this channel.  
Doesn't need to be read from, as the packets are captured via `GM.addValueChangeListener`.
