import { exec } from "node:child_process";

(() => {
  const command = process.argv.slice(2).join(" ");
  const child = exec(command, (error, _stdout, _stderr) => {
    if(error)
      console.error("\x1b[31m[run-silent error]\x1b[0m", error);
    // #DEBUG
    // console.log("[run-silent debug] out:", _stdout ?? "undefined", "err:", _stderr ?? "undefined");
  });
  child.on("exit", (code, signal) => {
    if(code !== null)
      setImmediate(() => process.exit(code));
    if(signal !== null)
      setImmediate(() => process.kill(process.pid, signal));
  });
})();
