[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [siteEvents](../README.md) / emitSiteEvent

# Function: emitSiteEvent()

> **emitSiteEvent**\<`TKey`\>(`key`, ...`args`): `void`

Defined in: [src/siteEvents.ts:230](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/siteEvents.ts#L230)

Emits a site event with the given key and arguments - if `bytm:allReady` has not been emitted yet, all events will be queued until it is

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
