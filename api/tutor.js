const axios = require("axios");

const SAMBANOVA_API_KEY = "6d6a656e-48f4-4c97-a47b-a22e75bb49f8";
const SAMBANOVA_BASE_URL = "https://api.sambanova.ai";

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { question, userAnswer, correctAnswer } = req.body;

    if (!question || !userAnswer || !correctAnswer) {
      return res
        .status(400)
        .json({ error: "Question, userAnswer, and correctAnswer are required." });
    }

    try {
      const response = await axios.post(
        `${SAMBANOVA_BASE_URL}/quiz/explain`,
        { question, userAnswer, correctAnswer },
        { headers: { Authorization: `Bearer ${SAMBANOVA_API_KEY}` } }
      );

      return res.status(200).json({ explanation: response.data.explanation });
    } catch (error) {
      console.error("Error generating explanation:", error.message);
      return res.status(500).json({ error: "Failed to generate explanation." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
};
