[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / sanitizeHtml

# Function: sanitizeHtml()

> **sanitizeHtml**(`html`, `returnTrustedType?`): `string`

Defined in: [src/utils/dom.ts:343](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/dom.ts#L343)

Sanitizes the provided HTML string with DOMPurify, including enhanced support for Trusted Types and a[target="_blank"] links.  
By default, automatically returns a TrustedHTML object if the browser supports it.

## Parameters

### html

`Stringifiable`

### returnTrustedType?

`boolean` = `trustedTypesSupported`

## Returns

`string`
