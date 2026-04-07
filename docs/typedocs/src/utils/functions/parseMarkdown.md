[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / parseMarkdown

# Function: parseMarkdown()

> **parseMarkdown**(`mdString`, `sanitize?`): `Promise`\<`string`\>

Defined in: [src/utils/misc.ts:611](https://github.com/Sv443/BetterYTM/blob/3cbe26faf20a275f47c79e6afeb522f79d4b924d/src/utils/misc.ts#L611)

Parses a markdown string using marked and turns it into an HTML string with default settings.

## Parameters

### mdString

`string`

### sanitize?

`boolean` = `true`

Sanitizes against XSS by default using DOMPurify in [`()`](sanitizeHtml.md) - set to false to disable.

## Returns

`Promise`\<`string`\>
