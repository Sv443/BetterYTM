[**@sv443/betterytm**](../../../README.md)

***

[@sv443/betterytm](../../../modules.md) / [src/utils](../README.md) / info

# Function: info()

> **info**(...`args`): `void`

Defined in: [src/utils/logging.ts:114](https://github.com/Sv443/BetterYTM/blob/92a2ec7e038170d4d6561a403514e746eb18bf10/src/utils/logging.ts#L114)

Logs all passed values to the console as info, as long as the log level is sufficient.

## Parameters

### args

...`unknown`[]

Last parameter is log level (0 = Debug, 1/undefined = Info) - any number within `LogLevel` range as the last parameter will be stripped out! Convert to string if it shouldn't be.

## Returns

`void`
