/**
 * Late-binding registry for the few places where a low-level module needs behavior that is owned by
 * a high-level one.
 *
 * Most "inverted" dependencies in this codebase are really just misfiled code - the fix for those is
 * to move the code down a layer, not to add indirection. Only reach for this registry when the
 * dependency is genuinely inverted, i.e. when a util truly needs a dialog, the menu or a feature.
 *
 * Every implementation is registered in one place, {@linkcode "@/bindings.ts"}, so the full set of
 * inverted dependencies can be read off a single file.
 *
 * ⚠️ This module must never import another internal module at value level. The types below use
 * type-only dynamic imports, which TypeScript erases entirely, so they create no runtime edge.
 */
export type LateBindings = {
  /** Surfaces a generic error as a toast that opens the error dialog. Owned by `@dialog/errorDialog.ts` */
  reportError: (errName: string, args: unknown[]) => void;
  /** Owned by `@dialog/prompt.ts` */
  showPrompt: typeof import("@dialog/prompt.ts").showPrompt;
  /** Owned by `@menu/menu.ts` */
  closeCfgMenu: typeof import("@menu/menu.ts").closeCfgMenu;
};

const impls = new Map<keyof LateBindings, unknown>();

/** Registers an implementation for the given key. Called once per key, from {@linkcode "@/bindings.ts"}. */
export function provide<TKey extends keyof LateBindings>(key: TKey, impl: LateBindings[TKey]): void {
  if(impls.has(key))
    throw new Error(`Late binding '${key}' was already provided`);
  impls.set(key, impl);
}

/** Best-effort access - returns undefined while the implementation isn't registered yet, so use it with `?.()` */
export function tryUse<TKey extends keyof LateBindings>(key: TKey): LateBindings[TKey] | undefined {
  return impls.get(key) as LateBindings[TKey] | undefined;
}

/** Throwing access - only safe once the init phase that registers {@linkcode key} has run */
export function use<TKey extends keyof LateBindings>(key: TKey): LateBindings[TKey] {
  const impl = impls.get(key);
  if(!impl)
    throw new Error(`Late binding '${key}' is not available yet`);
  return impl as LateBindings[TKey];
}
