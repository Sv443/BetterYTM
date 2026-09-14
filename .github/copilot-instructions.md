---
applyTo: "**"
name: General Project Instructions
description: This file describes the general project structure, base directives like coding style and libraries used in the project.
---

# Project Outline

This is a Userscript called BetterYTM, which enhances the pages YouTube Music and YouTube with tons of quality of life features, such as auto-liking, better lyrics lookup, finer volume control and tons more layout and usability improvements.  
It is written in TypeScript, uses pnpm and ESLint, and is bundled with Vite 8 (Rolldown) via `vite.config.ts` with a custom plugin at `src/tools/vite-plugin-bytm.ts`.  
Components are written using the vanilla JS DOM API, no framework like React is used.

# Base Directives

- Write code that is a tad on the denser side, but still readable and self-explanatory. Avoid excessive verbosity.
- Use modern (<=ES2024) features where appropriate, but avoid features that aren't in the browser baseline yet.
- Don't add comments for the sake of comments. Code should be self-explanatory and comments reserved for explanations or important notes.
- Respect the existing code style and the linter rules at `eslint.config.mjs` and `tsconfig.json`.
- Don't give up on a problem and suggest adding a `// TODO: fix` comment.
- Realize dead ends and think about solutions or alternatives. Interject with questions if needed and speak up when there's an objectively better path.
- Ask for new or updated context if needed instead of making assumptions.
- In the output, instead of including unmodified members, only show the new or modified code and make use of comments like `/* existing code */`.
- Barrel exports (re-exports from an index file) should be avoided to prevent circular dependencies and maintain clearer import paths.
- Prefer options objects as function/method parameters when there are more than 2 parameters or when the logic is not easily inferrable from the function/method and parameter names alone.
- When members are mentioned in TSDoc comments and also imported at the top of the file, they should be mentioned using the `{@linkcode ...}` tag.

# Dependency Layering

`src/` has zero circular imports, enforced by `pnpm check-deps` (part of `pnpm lint`), which fails the build on any cycle or on an import from a higher layer to a lower one. The layers, roughly lowest to highest:

- **Leaves** (`src/types.ts`, `src/constants.ts`, `src/core/*.ts`, `src/utils/pure.ts`, `src/utils/domain.ts`, `src/utils/locale.ts`, `src/features/featDefaults.ts`, `src/plugins/store.ts`): zero internal value imports (type-only imports don't count - they're erased at build time).
- **Low utils** (`src/utils/logging.ts`, `src/config.ts`, `src/configSchema.ts`): only import leaves.
- **Mid utils** (`src/utils/dom.ts`, `src/utils/translations.ts`, `src/utils/misc.ts`, `src/siteEvents.ts`, `src/observers.ts`, `src/utils/broadcast.ts`): may import config/logging but not components, dialogs, features or the menu.
- **Components → Dialogs/Features → Menu → Bootstrap** (`src/interface.ts`, `src/configInit.ts`, `src/bindings.ts`, `src/index.ts`): each may only import from strictly lower layers; nothing imports the bootstrap layer.

The exact, machine-checked order is `src/tools/layers.json#layers` (one array per layer, lowest first) - regenerate it with `pnpm check-deps --write-baseline` after a legitimate restructure, don't hand-edit it to silence a real violation.

When a low-level module needs behavior owned by a higher one (rare - most apparent cases are just misfiled code that should move down a layer instead), use the late-binding registry in `src/core/hooks.ts`: register the implementation once in `src/bindings.ts`, then call it via `tryUse("key")?.()` or `use("key")()`. Every registered inversion should be a genuine one, not a workaround for not wanting to move code.

# Libraries Summary

- UserUtils: JS, DOM and GM utilities, notably:
  - `DataStore`: Persistent JSON database including data migration and other features.
    - `GMStorageEngine`: A wrapper around the GM and browser storage APIs.
  - `DataStoreSerializer`: A serializer for combining, exporting and importing multiple DataStore instances.
  - `NanoEmitter`: Wrapper around `nanoevents` to offer a class resembling Node's EventEmitter, with lots of extra features.
- compare-versions: Semver comparison library.
- DOMPurify: HTML sanitizer.
- Marked: MD to HTML string parser.
- nanoevents: Event emitter library.
