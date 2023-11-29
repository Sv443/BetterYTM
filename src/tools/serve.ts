import express, { NextFunction, Request, Response } from "express";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { outputDir } from "../../rollup.config.mjs";
import "dotenv/config";

const envPort = Number(process.env.DEV_SERVER_PORT);

/** HTTP port of the dev server */
const devServerPort = isNaN(envPort) || envPort === 0 ? 8710 : envPort;
/** Whether to log requests to the console */
const enableLogging = false;

const app = express();

enableLogging &&
  app.use((_req, _res, next) => {
    process.stdout.write("*");
    next();
  });

app.use((err: unknown, _req: Request, _res: Response, _next: NextFunction) => {
  if(typeof err === "string" || err instanceof Error)
    console.error("\x1b[31mError in dev server:\x1b[0m\n", err);
});

// app.use((_req, res, next) => {
//   res.setHeader("Cache-Control", "no-store");
//   next();
// });
// serves everything from `rollupConfig.output.path` (`dist/` by default)
app.use("/", express.static(
  resolve(fileURLToPath(import.meta.url), `../../../${outputDir}`)
));

app.use("/assets", express.static(
  resolve(fileURLToPath(import.meta.url), "../../../assets/")
));

app.listen(devServerPort, "0.0.0.0", () => {
  console.log(`Dev server is running on port ${devServerPort}`);
  if(enableLogging)
    process.stdout.write("\nRequests: ");
  else
    console.log("\x1b[2m(request logging is disabled)\x1b[0m");
  console.log();
});
