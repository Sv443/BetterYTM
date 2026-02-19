[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [siteEvents](../README.md) / forceEmitSiteEvent

# Function: forceEmitSiteEvent()

> **forceEmitSiteEvent**\<`TKey`\>(`key`, ...`args`): `void`

Defined in: [src/siteEvents.ts:261](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L261)

Forcefully emits a site event with the given key and arguments, even if `bytm:allReady` has not been emitted yet.  
Temporary workaround for `bytm:allReady` event queueing issues in [`()`](emitSiteEvent.md).

## Type Parameters

### TKey

`TKey` *extends* keyof [`SiteEventsMap`](../type-aliases/SiteEventsMap.md)

## Parameters

### key

`TKey`

### args

...`Parameters`\<[`SiteEventsMap`](../type-aliases/SiteEventsMap.md)\[`TKey`\]\>

## Returns

`void`
