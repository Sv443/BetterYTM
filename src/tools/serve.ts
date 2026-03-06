import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { styleText } from "node:util";
import type { Server } from "node:http";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { outputDir } from "../../rollup.config.mjs";

const { argv, env, stdout } = process;
const exit = (...args: Parameters<typeof process.exit>) => process.exit(...args);

const envPort = Number(env.DEV_SERVER_PORT);

/** HTTP port of the dev server */
const devServerPort = isNaN(envPort) || envPort === 0 ? 8710 : envPort;
/** Whether to log requests to the console */
const enableLogging = env.DEV_SERVER_LOGGING?.toLowerCase() === "true" || argv.includes("--logging");

const autoExitRaw = Number(argv.find(arg => arg.match(/^--auto-exit-time[\s=]/))?.split(/[\s=]/)[1]);
/** Time in milliseconds after which the process should automatically exit */
const autoExitTime: number | undefined = !isNaN(autoExitRaw) ? autoExitRaw * 1000 : undefined;

const app = express();

app.use(cors());

let server: Server;

enableLogging && app.use((req, _res, next) => {
  let char: string | undefined;

  // set char based on method and URL path
  if(["HEAD", "OPTIONS"].includes(req.method))
    char = styleText("gray", "H");
  else if(req.method === "GET") {
    if(req.path.startsWith("/assets/"))
      char = styleText("blue", "A");
    else if(req.path.endsWith(".user.js"))
      char = styleText("greenBright", "U");
    else if(req.path.endsWith(".md"))
      char = styleText("cyan", "M");
    else if(req.path.endsWith(".css"))
      char = styleText("magenta", "C");
    else
      char = styleText("green", "G");
  }
  else
    char = styleText("yellow", `<${req.method}>`);

  char && stdout.write(char);
  next();
});

app.use((err: unknown, _req: Request, _res: Response, _next: NextFunction) => {
  if(typeof err === "string" || err instanceof Error)
    console.error(styleText("red", "Error in dev server:\n"), err);
});

app.use("/", express.static(
  resolve(fileURLToPath(import.meta.url), `../../../${outputDir}`)
));

app.use("/", express.static(
  resolve(fileURLToPath(import.meta.url), "../../../")
));

app.use("/assets", express.static(
  resolve(fileURLToPath(import.meta.url), "../../../assets/")
));

function closeAndExit(code: number) {
  !server && setImmediate(() => exit(code));
  server?.close(() =>
    setImmediate(() =>
      exit(code)
    )
  );
}

try {
  server = app.listen(devServerPort, "0.0.0.0", () => {
    console.log(`Dev server is running on port ${devServerPort}`);
    if(enableLogging) {
      console.log([
        `\n${styleText("yellow", "Request logging enabled:")}`,
        ` ${styleText("gray", "H")}  HEAD/OPTIONS`,
        ` ${styleText("greenBright", "U")}  GET *.user.js`,
        ` ${styleText("magenta", "C")}  GET *.css`,
        ` ${styleText("cyan", "M")}  GET *.md`,
        ` ${styleText("blue", "A")}  GET /assets/`,
        ` ${styleText("green", "G")}  GET other`,
        `${styleText("yellow", "<*>")} other methods`,
      ].join(`\n${styleText("yellow", "|")} `));
    }
    else
      console.log(styleText("gray", "(request logging is disabled)"));
    console.log();

    if(autoExitTime) {
      console.log(`Exiting in ${autoExitTime / 1000}s...`);
      setTimeout(() => closeAndExit(0), autoExitTime);
    }
  });
}
catch(err) {
  console.error(styleText("red", "Error starting dev server:"), err);
  closeAndExit(1);
}
