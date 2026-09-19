const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Test the backend
app.get("/", (req, res) => {
  res.send("TradeX AI Backend is running");
});

// AI chatbot API
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6-luna",

      instructions: `
You are TradeX AI Assistant.

TradeX is an educational stock-market learning project.

Answer general questions about:
- Stocks
- Stock market
- NIFTY
- SENSEX
- Trading
- Investing concepts
- Market orders
- Limit orders
- Stop loss
- Portfolio
- Profit and loss
- Candlestick charts
- Technical analysis
- TradeX website

Give simple and beginner-friendly explanations.

Do not provide personalized financial advice.
Do not tell users which stocks they should buy or sell.
Do not make personalized investment recommendations.

If a user asks for a buy or sell recommendation,
provide educational information instead.

Keep answers clear and reasonably concise.
      `,

      input: message,
    });

    res.json({
      reply: response.output_text,
    });

  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Unable to get AI response",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`TradeX AI Backend running on http://localhost:${PORT}`);
});