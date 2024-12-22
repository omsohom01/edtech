const axios = require("axios");

const SAMBANOVA_API_KEY = "6d6a656e-48f4-4c97-a47b-a22e75bb49f8";
const SAMBANOVA_BASE_URL = "https://api.sambanova.ai";

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { userAnswers, correctAnswers } = req.body;

    if (!userAnswers || !correctAnswers || userAnswers.length !== correctAnswers.length) {
      return res.status(400).json({
        error: "Invalid input. Ensure userAnswers and correctAnswers are provided and have the same length.",
      });
    }

    try {
      const response = await axios.post(
        `${SAMBANOVA_BASE_URL}/quiz/analyze`,
        { userAnswers, correctAnswers },
        { headers: { Authorization: `Bearer ${SAMBANOVA_API_KEY}` } }
      );

      return res.status(200).json(response.data);
    } catch (error) {
      console.error("Error analyzing quiz answers:", error.message);
      return res.status(500).json({ error: "Failed to analyze quiz answers." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
};
