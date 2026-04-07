[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / transplantElement

# Function: transplantElement()

> **transplantElement**\<`TElem`\>(`element`, `target`, `position?`): `TElem`

Defined in: [src/utils/dom.ts:387](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/dom.ts#L387)

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
