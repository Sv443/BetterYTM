[**betterytm**](../../README.md)

***

[betterytm](../../modules.md) / [types](../README.md) / KeysOfType

# Type Alias: KeysOfType\<T, U\>

> **KeysOfType**\<`T`, `U`\> = `{ [K in keyof T]: T[K] extends U ? K : never }`\[keyof `T`\]

Defined in: [src/types.ts:186](https://github.com/Sv443/BetterYTM/blob/bd7584e75e1976dcbc434d36313e275725fada0c/src/types.ts#L186)

Returns a union of all keys of [`T`](#t) whose values are of type [`U`](#u)

## Type Parameters

### T

`T`

### U

`U`
