// server.js
const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const PORT = 3001;

// Replace 'your-openai-api-key' with your actual OpenAI API key
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

// Endpoint to get a motivational quote
app.get('/api/motivational-quote', async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // You can use any other model if needed
      prompt: "Give me a motivational quote.",
      max_tokens: 50,
    });

    const quote = response.data.choices[0].text.trim();
    res.json({ quote });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
