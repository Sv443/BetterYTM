import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import("eslint").Linter.Config} */
const config = [
  {
    ignores: [
      "**/*.min.*",
      "**/*.user.js",
      "**/*.map",
      "dist/**/*",
      "src/dev/**/*",
      "**/test.ts",
      ".storybook/**/*",
      "**/*.stories.ts",
      "**/*.mjs",
      "**/*.js",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["vite.config.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        GM: "readonly",
        unsafeWindow: "writable",
      },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unreachable": "off",
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "eol-last": ["error", "always"],
      "no-async-promise-executor": "off",
      "no-cond-assign": "off",
      "no-empty": ["error", {
        allowEmptyCatch: true,
      }],
      "indent": ["error", 2, {
        ignoredNodes: ["VariableDeclaration[declarations.length=0]"],
      }],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": ["warn", {
        vars: "local",
        ignoreRestSiblings: true,
        args: "after-used",
        argsIgnorePattern: "^_",
      }],
      "no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": ["error", {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      }],
      "@typescript-eslint/unbound-method": ["error", {
        ignoreStatic: true,
      }],
      "comma-dangle": ["error", "only-multiline"],
      "no-misleading-character-class": "off",
    },
  }, {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "eol-last": ["error", "always"],
      "no-async-promise-executor": "off",
      "no-empty": ["error", {
        allowEmptyCatch: true,
      }],
      "indent": ["error", 2, {
        ignoredNodes: ["VariableDeclaration[declarations.length=0]"],
      }],
      "no-unused-vars": ["warn", {
        vars: "local",
        ignoreRestSiblings: true,
        args: "after-used",
        argsIgnorePattern: "^_",
      }],
      "comma-dangle": ["error", "only-multiline"],
    },
  },
];

export default defineConfig(
  config,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
