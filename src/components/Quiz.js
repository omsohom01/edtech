import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  LinearProgress,
} from "@mui/material";

const Quiz = () => {
  // Sample quiz data
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Jupiter",
    },
  ];

  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setIsQuizFinished(false);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ marginBottom: "1.5rem", fontWeight: "bold", color: "#333" }}>
        Quiz
      </Typography>

      {isQuizFinished ? (
        <Card sx={{ textAlign: "center", padding: "2rem", backgroundColor: "#e8f5e9" }}>
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Quiz Completed!
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "1.5rem" }}>
            Your Score: {score}/{quizData.length}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleRestartQuiz}>
            Restart Quiz
          </Button>
        </Card>
      ) : (
        <Box>
          <Card sx={{ marginBottom: "2rem", backgroundColor: "white" }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: "1rem", color: "#333" }}>
                Question {currentQuestionIndex + 1} of {quizData.length}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                {quizData[currentQuestionIndex].question}
              </Typography>
              <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                {quizData[currentQuestionIndex].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <LinearProgress
              variant="determinate"
              value={progressPercentage}
              sx={{ width: "80%", height: "10px", borderRadius: "5px" }}
            />
            <Typography variant="body2" sx={{ marginLeft: "1rem" }}>
              {Math.round(progressPercentage)}%
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "1.5rem", padding: "0.75rem 1.5rem", fontWeight: "bold" }}
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            {currentQuestionIndex === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
