export const askLlama = async (prompt, config = { ip: "127.0.0.1" }) => {
  const URL = `http://${config.ip}:11434/api/generate`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "llama3.2",
      stream: false,
      prompt
    })
  };

  let data;
  try {
    const response = await fetch(URL, options);
    data = await response.json();
  } catch (error) {
    console.log('Error:', error);
  }
  return {
    response: data.response,
    usage: 0
  }
}
