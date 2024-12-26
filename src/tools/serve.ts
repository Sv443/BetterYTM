import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Server } from "node:http";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import k from "kleur";
import "dotenv/config";
import { outputDir } from "../../rollup.config.mjs";

const { argv, env, exit, stdout } = process;

const envPort = Number(env.DEV_SERVER_PORT);

/** HTTP port of the dev server */
const devServerPort = isNaN(envPort) || envPort === 0 ? 8710 : envPort;
/** Whether to log requests to the console */
const enableLogging = false;

const autoExitRaw = argv.find(arg => arg.startsWith("--auto-exit-time="))?.split("=")[1];
/** Time in milliseconds after which the process should automatically exit */
const autoExitTime: number | undefined = !isNaN(Number(autoExitRaw)) ? Number(autoExitRaw) * 1000 : undefined;

const app = express();

app.use(cors());

let server: Server;

enableLogging && app.use((_req, _res, next) => {
  stdout.write("*");
  next();
});

app.use((err: unknown, _req: Request, _res: Response, _next: NextFunction) => {
  if(typeof err === "string" || err instanceof Error)
    console.error(k.red("Error in dev server:\n"), err);
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
    if(enableLogging)
      stdout.write("\nRequests: ");
    else
      console.log(k.gray("(request logging is disabled)"));
    console.log();

    if(autoExitTime) {
      console.log(`Exiting in ${autoExitTime / 1000}s...`);
      setTimeout(() => closeAndExit(0), autoExitTime);
    }
  });
}
catch(err) {
  console.error(k.red("Error starting dev server:"), err);
  closeAndExit(1);
}
