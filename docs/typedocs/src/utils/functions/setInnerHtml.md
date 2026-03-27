[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / setInnerHtml

# Function: setInnerHtml()

> **setInnerHtml**(`element`, `html?`): `void`

Defined in: [src/utils/dom.ts:348](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/dom.ts#L348)

Sets innerHTML directly on Firefox and Safari, while on Chromium a [Trusted Types policy](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) is used to set the HTML.  
If no HTML string is given, the element's innerHTML will be set to an empty string.

## Parameters

### element

`HTMLElement`

### html?

`Stringifiable`

## Returns

`void`
