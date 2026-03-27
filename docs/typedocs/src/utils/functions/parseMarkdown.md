[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / parseMarkdown

# Function: parseMarkdown()

> **parseMarkdown**(`mdString`, `sanitize?`): `Promise`\<`string`\>

Defined in: [src/utils/misc.ts:549](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/misc.ts#L549)

Parses a markdown string using marked and turns it into an HTML string with default settings.

## Parameters

### mdString

`string`

### sanitize?

`boolean` = `true`

Sanitizes against XSS by default using DOMPurify in [`()`](sanitizeHtml.md) - set to false to disable.

## Returns

`Promise`\<`string`\>
