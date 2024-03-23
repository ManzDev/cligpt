#!/usr/bin/env node

import { argv, exit } from "node:process";
import { styleText } from "./color.mjs";
import { askGPT } from "./askGPT.mjs";

const request = argv.slice(2).join(" ");

export const getCommandCli = async (request) => {
  const cleanRequest = request.replace(/"/g, '\\"');
  const prompt = `Dame un comando de terminal de GNU/Linux que haga lo siguiente: \"${cleanRequest}\". Devuélveme sólo el comando, sin explicaciones añadidas.`;
  const { response } = await askGPT(prompt);
  return response;
};

if (request.length === 0) {
  console.log(`cligpt - by ${styleText("yellow", "Manz.dev")}`);
  console.log(`Uso: ${styleText("green", "cligpt")} <lo que quieres que haga el comando>\n`);
  console.log("Ejemplos:");
  console.log(`  » ${styleText("green", "cligpt")} convertir una imagen jpg en webp, reduciendo su tamaño a 640x480`);
  console.log(`  » ${styleText("green", "cligpt")} buscar ficheros con extensión .txt con tamaño de 14K a 25K\n`);
  console.log(`Recuerda que necesitas un fichero ${styleText("magenta", "~/.env")} con ${styleText("green", "OPENAI_KEY=____")} y tu clave de OpenAI.`);
  console.log(`Puedes crearla aquí: ${styleText("cyan", "https://platform.openai.com/api-keys")}`);
  exit(0);
}

const response = await getCommandCli(request);
console.log(`${styleText("green", " »")} ${response}`);
