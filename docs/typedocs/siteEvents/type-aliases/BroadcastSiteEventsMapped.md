[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [siteEvents](../README.md) / BroadcastSiteEventsMapped

# Type Alias: BroadcastSiteEventsMapped

> **BroadcastSiteEventsMapped** = `` { [K in BroadcastPacketType as `broadcast:${K}`]: (packet: BroadcastTransitPacket<K>) => void } ``

Defined in: [src/siteEvents.ts:10](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/siteEvents.ts#L10)

Mapped type that creates a typed site event entry for each `BroadcastPacketType`, e.g. `"broadcast:discoverSessionsReply"`
