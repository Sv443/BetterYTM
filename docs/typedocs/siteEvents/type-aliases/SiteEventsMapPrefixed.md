[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [siteEvents](../README.md) / SiteEventsMapPrefixed

# Type Alias: SiteEventsMapPrefixed

> **SiteEventsMapPrefixed** = `` { [K in keyof SiteEventsMap as `bytm:siteEvent:${K}`]: SiteEventsMap[K] } ``

Defined in: [src/siteEvents.ts:81](https://github.com/Sv443/BetterYTM/blob/6955ce00e166b535e9519c862d94f5c834e79ebb/src/siteEvents.ts#L81)

Same as [SiteEventsMap](SiteEventsMap.md) but with the prefix `bytm:siteEvent:` added to each key.
