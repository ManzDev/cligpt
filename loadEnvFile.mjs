import { readFileSync } from "node:fs";
import { env } from "node:process";

export const loadEnvFile = (filepath) => {
  const data = readFileSync(filepath, { encoding: "utf8" });
  const lines = data.split("\n");
  const envVars = {};

  const OPENAI_KEY = lines.map(line => {
    const [key, value] = line.split("=");
    return { key, value };
  })
    .filter(({ key, value }) => key)
    .find(({ key, value }) => key === "OPENAI_KEY");

  return OPENAI_KEY?.value || "";
}
