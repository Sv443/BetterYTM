[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / getPreferredLocale

# Function: getPreferredLocale()

> **getPreferredLocale**(): `"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`

Defined in: [src/utils/misc.ts:515](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/misc.ts#L515)

Resolves the preferred locale code, given the browser's language settings, as long as it is supported by the userscript directly or via the `altLocales` prop in `locales.json`  
Prioritizes any supported value of `navigator.language`, then `navigator.languages`, then goes over them again, trimming off the part after the hyphen, then falls back to `"en-US"`

## Returns

`"de-DE"` \| `"en-US"` \| `"en-GB"` \| `"es-ES"` \| `"fr-FR"` \| `"hi-IN"` \| `"ja-JP"` \| `"pt-BR"` \| `"zh-CN"`
