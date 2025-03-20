import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error('No API key provided')
  process.exit(0)
}

const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

export const askGemini = async (request) => {
  const cleanRequest = request.replace(/"/g, '\\"')
  const prompt = `Dame un comando de terminal de powershell que haga lo siguiente: \"${cleanRequest}\". Devuélveme sólo el comando, sin explicaciones añadidas.`

  const result = await model.generateContent(prompt)

  const response = result.response.text()

  return {
    response
  }
}
