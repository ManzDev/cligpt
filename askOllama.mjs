import ollama from 'ollama'



export const askOllama = async (prompt) => {
  const response = await ollama.chat({
    model: 'llama3',
    messages: [{ role: 'user', content: prompt }],
  })
  return {
    response: response.message.content
  }
}


