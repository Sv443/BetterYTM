[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/siteEvents](../README.md) / SiteEventsMapPrefixed

# Type Alias: SiteEventsMapPrefixed

> **SiteEventsMapPrefixed** = `` { [K in keyof SiteEventsMap as `bytm:siteEvent:${K}`]: SiteEventsMap[K] } ``

Defined in: [src/siteEvents.ts:81](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/siteEvents.ts#L81)

Same as [SiteEventsMap](SiteEventsMap.md) but with the prefix `bytm:siteEvent:` added to each key.
