[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / onInteraction

# Function: onInteraction()

> **onInteraction**\<`TElem`\>(`elem`, `listener`, `listenerOptions?`): `void`

Defined in: [src/utils/input.ts:13](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/input.ts#L13)

Adds generic, accessible interaction listeners to the passed element.  
All listeners have the default behavior prevented and stop propagation (for keyboard events this only applies as long as the captured key is included in `interactionKeys`).

## Type Parameters

### TElem

`TElem` *extends* `HTMLElement`

## Parameters

### elem

`TElem`

### listener

(`evt`) => `void`

### listenerOptions?

`ListenerOpts`

Provide a [`listenerOptions`](#oninteraction) object to configure the listeners

## Returns

`void`
