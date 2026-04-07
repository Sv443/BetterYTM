[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/components/ripple](../README.md) / createRipple

# Function: createRipple()

Creates an element with a ripple effect on click.

## Param

If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.

## Call Signature

> **createRipple**\<`TElem`\>(`rippleElement`, `properties?`): `TElem`

Defined in: [src/components/ripple.ts:18](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/components/ripple.ts#L18)

Creates an element with a ripple effect on click.

### Type Parameters

#### TElem

`TElem` *extends* `HTMLElement`

### Parameters

#### rippleElement

`TElem`

If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.

#### properties?

`RippleProps`\<`TElem`\>

### Returns

`TElem`

The passed element or the newly created element with the ripple effect.

## Call Signature

> **createRipple**(`rippleElement?`, `properties?`): `HTMLDivElement`

Defined in: [src/components/ripple.ts:24](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/components/ripple.ts#L24)

Creates an element with a ripple effect on click.

### Parameters

#### rippleElement?

`undefined`

If passed, this element will be modified to have the ripple effect. Otherwise, a new element will be created.

#### properties?

`RippleProps`\<`HTMLDivElement`\>

### Returns

`HTMLDivElement`

The passed element or the newly created element with the ripple effect.
