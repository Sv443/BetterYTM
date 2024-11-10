import { exec } from "node:child_process";
import k from "kleur";

(() => {
  const command = process.argv.slice(2).join(" ");
  const child = exec(command, (error, _stdout, _stderr) => {
    if(error)
      console.error(k.red("[run-invisible error]:"), error);
    // #DEBUG
    // console.log(k.cyan("[run-invisible debug]:"), "out:", _stdout ?? "undefined", "err:", _stderr ?? "undefined");
  });
  child.on("exit", (code, signal) => {
    if(code !== null)
      setImmediate(() => process.exit(code));
    if(signal !== null)
      setImmediate(() => process.kill(process.pid, signal));
  });
})();
