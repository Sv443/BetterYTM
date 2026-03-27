[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / transplantElement

# Function: transplantElement()

> **transplantElement**\<`TElem`\>(`element`, `target`, `position?`): `TElem`

Defined in: [src/utils/dom.ts:379](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/dom.ts#L379)

Moves the given [`element`](#transplantelement) to the [`target`](#transplantelement) element with the specified [`position`](#transplantelement) (after the target element, as a sibling by default).  
Doesn't mess with any attached event listeners or other properties of the element.

## Type Parameters

### TElem

`TElem` *extends* `Element` = `HTMLElement`

## Parameters

### element

`TElem`

### target

`Element`

### position?

`InsertPosition` = `"afterend"`

## Returns

`TElem`

Returns the moved element
