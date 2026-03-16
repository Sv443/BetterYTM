[**@sv443/betterytm**](../../README.md)

***

[@sv443/betterytm](../../modules.md) / [siteEvents](../README.md) / SiteEventsMapPrefixed

# Type Alias: SiteEventsMapPrefixed

> **SiteEventsMapPrefixed** = `` { [K in keyof SiteEventsMap as `bytm:siteEvent:${K}`]: SiteEventsMap[K] } ``

Defined in: [src/siteEvents.ts:81](https://github.com/Sv443/BetterYTM/blob/1534dd6d6967de070029fac61fc5a447edae890a/src/siteEvents.ts#L81)

Same as [SiteEventsMap](SiteEventsMap.md) but with the prefix `bytm:siteEvent:` added to each key.
