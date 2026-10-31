import { scriptInfo } from "@/constants.ts";

/** Counts how many sessions the user has launched per userscript version, to enable time-based features like the "new feature" adornment icon. */

type VersionSessions = Record<string, {
  count: number;
}>;

let verSessions: VersionSessions | undefined;

/** Counts the number of launched sessions per userscript version and returns the current count, to enable time-based features like the "new feature" adornment icon */
export async function initVersionSessionCounter(): Promise<number> {
  verSessions = JSON.parse(await GM.getValue("bytm-version-session-counter", "{}")) as VersionSessions | undefined;

  if(typeof verSessions !== "object" || verSessions === null)
    verSessions = {};

  if(typeof verSessions?.[scriptInfo.version] !== "object" || typeof verSessions?.[scriptInfo.version]?.count !== "number")
    verSessions![scriptInfo.version] = { count: 1 };
  else
    verSessions![scriptInfo.version]!.count++;

  await GM.setValue("bytm-version-session-counter", JSON.stringify(verSessions));

  return verSessions![scriptInfo.version]!.count;
}

/** Returns the number of sessions for the given version, or 0 if the version is not found in the session counter for whatever reason */
export function getVersionSessionCount(version = scriptInfo.version): number {
  if(!verSessions)
    throw new Error("Version session counter not initialized yet, call initVersionSessionCounter() first");

  if(typeof verSessions[version] !== "object" || typeof verSessions[version].count !== "number")
    return 0;

  return verSessions[version].count;
}
