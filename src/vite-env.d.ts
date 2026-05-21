/** Build mode injected by Vite's `define` option */
declare const __BYTM_MODE__: "production" | "development";
/** Branch injected by Vite's `define` option */
declare const __BYTM_BRANCH__: "main" | "develop";
/** Host injected by Vite's `define` option */
declare const __BYTM_HOST__: "github" | "greasyfork" | "openuserjs";
/** Asset source injected by Vite's `define` option */
declare const __BYTM_ASSET_SOURCE__: "github" | "jsdelivr" | "local";
/** Dev server port injected by Vite's `define` option */
declare const __BYTM_DEV_SERVER_PORT__: number;
/** Last Git commit SHA injected by Vite's `define` option */
declare const __BYTM_BUILD_NUMBER__: string;
/** Build UNIX timestamp injected by Vite's `define` option */
declare const __BYTM_BUILD_TIMESTAMP__: number;
/** Random build UID injected by Vite's `define` option */
declare const __BYTM_BUILD_UID__: string;
