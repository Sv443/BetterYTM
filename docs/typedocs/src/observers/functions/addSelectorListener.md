[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/observers](../README.md) / addSelectorListener

# Function: addSelectorListener()

> **addSelectorListener**\<`TElem`, `TDomain`\>(`observerName`, `selector`, `options`): `void`

Defined in: [src/observers.ts:65](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/observers.ts#L65)

Interface function for adding listeners to the [`globservers`](../variables/globservers.md)  
If the observers haven't been initialized yet, the function will queue calls until the `bytm:observersReady` event is emitted

## Type Parameters

### TElem

`TElem` *extends* `0` \| `HTMLElement` = `HTMLElement`

The type of the element that the listener will be attached to. If set to `0`, the default type `HTMLElement` will be used.

### TDomain

`TDomain` *extends* [`Domain`](../../types/type-aliases/Domain.md) = `"ytm"`

This restricts which observers are available with the current domain

## Parameters

### observerName

[`ObserverNameByDomain`](../type-aliases/ObserverNameByDomain.md)\<`TDomain`\>

### selector

`string`

Relative to the observer's root element, so the selector can only start at of the root element's children at the earliest!

### options

`SelectorListenerOptions`\<`TElem` *extends* `0` ? `HTMLElement` : `TElem`\>

Options for the listener

## Returns

`void`
