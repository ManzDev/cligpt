import { loadEnvFile } from "./loadEnvFile.mjs";
import { env, exit } from "node:process";
import { styleText } from "./color.mjs";
import { homedir } from "node:os";

const ENVFILE_PATH = homedir() + "/.env";
const OPENAI_KEY = loadEnvFile(ENVFILE_PATH);

if (OPENAI_KEY) {
  env.OPENAI_KEY = OPENAI_KEY;
}

if (!env.OPENAI_KEY) {
  console.error(`Necesitas un fichero ${styleText("magenta", "~/.env")} con tu key de OpenAI: ${styleText("cyan", "OPENAI_KEY=____")}. Puedes creartela aquí: https://platform.openai.com/api-keys`);
  exit(-1);
}

const GPT_MODEL = "gpt-3.5-turbo-0125";
const API_URL = "https://api.openai.com/v1/chat/completions";
const MAX_TOKENS = 250;

export const askGPT = async (prompt) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${env.OPENAI_KEY}`
  };

  const body = JSON.stringify({
    messages: [{ role: "user", content: prompt }],
    model: GPT_MODEL,
    max_tokens: MAX_TOKENS,
    n: 1,
    stop: null,
  });

  try {
    const request = await fetch(API_URL, { method: "POST", headers, body });
    const data = await request.json();

    if (request.status !== 200) {
      return {
        response: "",
        usage: 0
      };
    }

    return {
      response: data.choices[0].message.content,
      usage: data.usage.total_tokens
    };
  } catch (error) {
    console.error("ERROR OPENAI: " + error);

    return {
      response: "",
      usage: 0
    };
  }
};
