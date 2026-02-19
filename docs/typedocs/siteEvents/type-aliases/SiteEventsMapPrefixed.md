[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [siteEvents](../README.md) / SiteEventsMapPrefixed

# Type Alias: SiteEventsMapPrefixed

> **SiteEventsMapPrefixed** = `` { [K in keyof SiteEventsMap as `bytm:siteEvent:${K}`]: SiteEventsMap[K] } ``

Defined in: [src/siteEvents.ts:63](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L63)

Same as [SiteEventsMap](SiteEventsMap.md) but with the prefix `bytm:siteEvent:` added to each key.
