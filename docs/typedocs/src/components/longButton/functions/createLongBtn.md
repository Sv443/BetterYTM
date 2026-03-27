[**@sv443/betterytm**](../../../../README.md)

***

[@sv443/betterytm](../../../../modules.md) / [src/components/longButton](../README.md) / createLongBtn

# Function: createLongBtn()

> **createLongBtn**(`__namedParameters`): `Promise`\<`HTMLElement`\>

Defined in: [src/components/longButton.ts:51](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/components/longButton.ts#L51)

Creates a generic, circular, long button element with an icon and text.  
Has classes for the enabled and disabled states for easier styling.  
If `href` is provided, the button will be an anchor element.  
If `onClick` or `onToggle` is provided, the button will be a div element.  
Provide either `resourceName` or `src` to specify the icon inside the button.

## Parameters

### \_\_namedParameters

`LongBtnOptions`

## Returns

`Promise`\<`HTMLElement`\>
