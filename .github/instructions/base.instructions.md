---
applyTo: "**"
---

# Base Instructions

This is a GreaseMonkey Userscript called BetterYTM, which enhances the pages YouTube Music and YouTube with tons of quality of life features, such as auto-liking, better lyrics lookup, finer volume control and tons more layout and usability improvements.  
It is written in TypeScript, uses pnpm and ESLint, and is bundled with Rollup and a custom transformation script in `src/tools/post-build.ts`.  
Components are written using the vanilla JS DOM API, no framework like React is used.

# Base Directives

- Write code that is a little bit on the denser side, but still readable and self-explanatory. Avoid excessive verbosity.
- Use modern (<=ES2024) features where appropriate, but avoid features that aren't in the browser baseline yet.
- Don't add comments for the sake of comments. Code should be self-explanatory and comments reserved for explanations or important notes.
- Don't give up on a problem and suggest adding a `// TODO: fix` comment. Realize dead ends and think about solutions or alternatives.
- Respect the existing code style and the linter rules at `eslint.config.mjs` and `tsconfig.json`.

# Libraries Summary

- UserUtils: DOM and GM utilities, notably:
  - `DataStore`: A wrapper around the GM storage API including data migration and other features.
  - `DataStoreSerializer`: A serializer for combining, exporting and importing multiple DataStore instances.
- CoreUtils: Misc JS utilities.
  - `NanoEmitter`: Wrapper around `nanoevents` to offer a class resembling Node's EventEmitter.
- compare-versions: Semver comparison library.
- DOMPurify: HTML sanitizer.
- Marked: MD to HTML parser.
- nanoevents: Event emitter library.
