## src/
This directory contains the entire runtime code for the userscript.  

<br>

### Subdirectories
- [components](./components/) - Contains all of the UI components that are used throughout the userscript and plugins
- [core](./core/) - Contains foundational, dependency-free building blocks (the interface event bus, the global-prop setter, the late-binding hook registry, the DataStore registry) that everything else, including `config.ts` and `interface.ts`, is built on top of
- [dev](./dev/) - Contains random development files and notes that aren't included in the final build of the userscript
- [dialogs](./dialogs/) - Contains all BytmDialog instances that manage almost all of BetterYTM's dialogs
- [features](./features/) - Contains the code for all the separate features themselves
- [menu](./menu/) - Contains the (somewhat legacy) config menu code
- [plugins](./plugins/) - Contains the plugin registry (registered plugins, permissions, intent bit sets) that `interface.ts` builds its registration flow on top of
- [stories](./stories/) - Contains [Storybook](https://storybook.js.org/) stories for developing UI components
- [tools](./tools/) - Contains helper tools for building and developing the userscript
- [utils](./utils/) - Contains helper utilities that are used in the userscript's code itself

<br>

### Dependency layering
`src/` has no circular imports and no barrel (`index.ts`) files - every module imports the specific file it needs. This is enforced by `pnpm check-deps` (run as part of `pnpm lint`), which fails on any import cycle or on an import from a lower-level module to a higher-level one; the exact, machine-checked layer order lives in [`tools/layers.json`](./tools/layers.json). When a low-level module genuinely needs something from a higher one, it goes through the late-binding registry in [`core/hooks.ts`](./core/hooks.ts) instead of importing it directly.
