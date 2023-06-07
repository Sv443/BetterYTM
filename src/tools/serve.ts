import express, { NextFunction, Request, Response } from "express";
import { resolve } from "path";
import { fileURLToPath } from "url";
import webpackCfg from "../../webpack.config.js";

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

// serves everything from `webpack_config.output.path` (`dist/` by default)
app.use(express.static(
  resolve(fileURLToPath(import.meta.url), "../../", webpackCfg.output.path),
  {
    etag: false,
    maxAge: 0,
  }
));

app.listen(devServerPort, "0.0.0.0", () => {
  console.log(`The dev server is running.\nUserscript is served at \x1b[34m\x1b[4mhttp://localhost:${devServerPort}/${webpackCfg.output.filename}\x1b[0m`);
  if(enableLogging)
    process.stdout.write("\nRequests: ");
  else
    console.log("\x1b[2m(request logging is disabled)\x1b[0m");
});
