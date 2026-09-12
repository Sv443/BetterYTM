import { assetSource, buildNumber, devServerPort, repo } from "@/constants.ts";
import { loggers } from "@util/logging.ts";
import type { ResourceKey } from "@/types.ts";
import resourcesJson from "@asset/resources.json" with { type: "json" };

/**
 * Resolves the URL of a bundled resource.  
 * Split out of {@linkcode "@util/misc.ts"} because nearly every layer needs it, while `misc.ts`
 * itself sits much higher up in the dependency graph.
 */

/**
 * Returns the URL of a resource by its name, as defined in `assets/resources.json`, from the CDN the script was built for.  
 * Tries to fall back to a base64-encoded data: URI in GM resources if the CDN resource was not found.  
 * @param name The name / key of the resource as defined in `assets/resources.json` - you can use `as "_"` to make TypeScript shut up if the name can not be typed as `ResourceKey`
 * @param uncached Set to true to always fetch from the CDN URL instead of the GM resource cache
 */
export async function getResourceUrl(name: ResourceKey | "_") {
  const resObjOrStr = resourcesJson.resources?.[name as keyof typeof resourcesJson.resources];

  if(typeof resObjOrStr === "object" || typeof resObjOrStr === "string") {
    const pathName = typeof resObjOrStr === "object" && "path" in resObjOrStr ? resObjOrStr?.path : resObjOrStr;
    const ghRef = typeof resObjOrStr === "object" && "ref" in resObjOrStr ? resObjOrStr?.ref : buildNumber;

    if(pathName) {
      return pathName.startsWith("http")
        ? pathName
        : (() => {
          let path = pathName;
          if(path.startsWith("/"))
            path = path.slice(1);
          else
            path = `assets/${path}`;
          switch(assetSource) {
          case "jsdelivr":
            return `https://cdn.jsdelivr.net/gh/${repo}@${ghRef}/${path}`;
          case "github":
            return `https://raw.githubusercontent.com/${repo}/${ghRef}/${path}`;
          case "local":
            return `http://localhost:${devServerPort}/${path}`;
          }
        })();
    }
  }

  loggers.misc.warn(`Couldn't get blob URL nor external URL for the resource '${name}', attempting to use base64-encoded data: URI fallback`);
  // @ts-expect-error VM and TM have the second parameter to return the b64 URI, GM doesn't
  return await GM.getResourceUrl(name, false);
}
