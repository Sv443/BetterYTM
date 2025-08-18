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

# Project Structure

```
src/
├── assets/ # Dynamic assets
│   ├── fonts/  # Global fonts
│   ├── icons/  # SVG icons
│   ├── images/ # Raster images
│   │   ├── external/ # External images
│   │   ├── logo/     # Project logo
│   │   └── ./        # Other raster images
│   ├── style/         # CSS files optionally added in at runtime
│   ├── translations/  # JSON files for translations
│   ├── locales.json   # All languages and their metadata
│   ├── plugins.json   # All officially recommended plugins
│   ├── require.json   # Libraries loaded in via @require or static injection
│   └── resources.json # All assets that can be loaded in at runtime
├── components/ # Reusable UI components
│   ├── BytmDialog.ts # Generic styled dialog class.
│   └── ./            # Other components
├── dialogs/  # BytmDialog instances
├── features/ # Feature code
│   ├── index.ts # Feature definition and metadata
│   └── ./       # Other feature-specific code
├── menu/  # Config menu code
├── tools/ # Non-runtime tools
│   ├── post-build.ts # Custom build transformation script
│   ├── serve.ts      # HTTP dev server
│   ├── tr-format.ts  # Translation formatter
│   └── ./            # Other tools
├── utils/              # Random utilities
│   ├── dom.ts          # DOM utils
│   ├── input.ts        # Input handling and interaction
│   ├── misc.ts         # Misc utils
│   ├── translations.ts # Translations
│   └── ./              # Other utils
├── config.ts     # User configuration
├── constants.ts  # Constants injected at build time
├── index.ts      # Script entrypoint
├── interface.ts  # Plugin interface
├── observers.ts  # Collection of MutationObserver instances
├── serializer.ts # Serializer for DataStore instances
├── siteEvents.ts # Event system for site events
└── types.ts      # Type definitions
```
