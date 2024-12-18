import { homedir } from "node:os";
import { readFileSync } from "node:fs";

const ENVFILE_PATH = homedir() + "/.env";

export const loadEnvFile = (filepath) => {
  const data = readFileSync(filepath, { encoding: "utf8" });
  const lines = data.split("\n");
  const envVars = {};

  const entries = lines.filter(item => item).map(line => line.split("="));
  return Object.fromEntries(entries);
}

export const env = loadEnvFile(ENVFILE_PATH);
