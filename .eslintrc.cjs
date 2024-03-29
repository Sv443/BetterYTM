module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    "*.min.*",
    "*.user.js",
    "*.map",
    "dist/**",
    "test.ts",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    GM: "readonly",
    unsafeWindow: "writable",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "no-unreachable": "off",
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "eol-last": [ "error", "always" ],
    "no-async-promise-executor": "off",
    "no-cond-assign": "off",
    "indent": ["error", 2, { "ignoredNodes": ["VariableDeclaration[declarations.length=0]"] }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true, "argsIgnorePattern": "^_" }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": ["error", {
      types: {
        "{}": false,
      },
      extendDefaults: true,
    }],
    "@typescript-eslint/no-explicit-any": "off",
    "comma-dangle": ["error", "only-multiline"],
    "no-misleading-character-class": "off",
  },
  overrides: [
    {
      files: ["**.js", "**.mjs", "**.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "eol-last": [ "error", "always" ],
        "no-async-promise-executor": "off",
        "indent": ["error", 2, { "ignoredNodes": ["VariableDeclaration[declarations.length=0]"] }],
        "comma-dangle": ["error", "only-multiline"],
      },
    },
  ],
};
