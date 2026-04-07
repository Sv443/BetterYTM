// echoes the prop with the given name from package.json

import pkgJson from "../../package.json" with { type: "json" };

const propName = process.argv[2];

if(typeof propName === "string" && propName in pkgJson)
  console.log(pkgJson[propName]);
else
  process.exit(1);

export {};
