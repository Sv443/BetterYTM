[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/siteEvents](../README.md) / BroadcastSiteEventsMapped

# Type Alias: BroadcastSiteEventsMapped

> **BroadcastSiteEventsMapped** = `` { [K in BroadcastPacketType as `broadcast:${K}`]: (packet: BroadcastTransitPacket<K>) => void } ``

Defined in: [src/siteEvents.ts:10](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/siteEvents.ts#L10)

Mapped type that creates a typed site event entry for each [`BroadcastPacketType`](../../utils/broadcast/type-aliases/BroadcastPacketType.md), e.g. `"broadcast:discoverSessionsReply"`
