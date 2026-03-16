[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [siteEvents](../README.md) / BroadcastSiteEventsMapped

# Type Alias: BroadcastSiteEventsMapped

> **BroadcastSiteEventsMapped** = `` { [K in BroadcastPacketType as `broadcast:${K}`]: (packet: BroadcastTransitPacket<K>) => void } ``

Defined in: [src/siteEvents.ts:10](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/siteEvents.ts#L10)

Mapped type that creates a typed site event entry for each `BroadcastPacketType`, e.g. `"broadcast:discoverSessionsReply"`
