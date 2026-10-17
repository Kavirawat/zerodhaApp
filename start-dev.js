const { spawn } = require("child_process");
const path = require("path");

console.log("==================================================");
console.log("🚀 Starting Zerodha Clone Full-Stack Application...");
console.log("   - Backend:   http://localhost:3002");
console.log("   - Frontend:  http://localhost:3000");
console.log("   - Dashboard: http://localhost:3001");
console.log("==================================================\n");

const isWin = process.platform === "win32";
const npmCmd = isWin ? "npm.cmd" : "npm";

function runService(name, cwd, env = {}) {
  const proc = spawn(npmCmd, ["run", "dev"], {
    cwd: path.resolve(__dirname, cwd),
    stdio: "pipe",
    shell: true,
    env: { ...process.env, BROWSER: "none", ...env },
  });

  proc.stdout.on("data", (data) => {
    const lines = data.toString().split("\n");
    for (const line of lines) {
      if (line.trim()) {
        console.log(`[${name}] ${line.trimEnd()}`);
      }
    }
  });

  proc.stderr.on("data", (data) => {
    const lines = data.toString().split("\n");
    for (const line of lines) {
      if (line.trim()) {
        console.error(`[${name}] ${line.trimEnd()}`);
      }
    }
  });

  proc.on("close", (code) => {
    console.log(`[${name}] Process exited with code ${code}`);
  });

  return proc;
}

const backend = runService("BACKEND", "backend");
const dashboard = runService("DASHBOARD", "dashboard", { PORT: "3001" });
const frontend = runService("FRONTEND", "frontend", { PORT: "3000" });

process.on("SIGINT", () => {
  console.log("\nShutting down all services...");
  backend.kill();
  dashboard.kill();
  frontend.kill();
  process.exit();
});

process.on("SIGTERM", () => {
  backend.kill();
  dashboard.kill();
  frontend.kill();
  process.exit();
});
