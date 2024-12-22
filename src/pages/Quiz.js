import React, { useState } from "react";
import { Box, Typography, Button, TextField, Paper } from "@mui/material";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Rome", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Newton", "Einstein", "Galileo", "Tesla"],
      answer: "Einstein",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
  ];

  const handleAnswerSubmit = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
    } else {
      setQuizComplete(true);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Quiz Time!
        </Typography>

        {!quizComplete ? (
          <>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              {questions[currentQuestion].question}
            </Typography>
            <Box>
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    margin: 1,
                    display: "block",
                    width: "100%",
                  }}
                  onClick={() => setUserAnswer(option)}
                  color={userAnswer === option ? "primary" : "inherit"}
                >
                  {option}
                </Button>
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleAnswerSubmit}
              disabled={!userAnswer}
            >
              Submit Answer
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Quiz Completed!
            </Typography>
            <Typography variant="h6">
              Your Score: {score} / {questions.length}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 2 }}
              onClick={() => {
                setCurrentQuestion(0);
                setUserAnswer("");
                setScore(0);
                setQuizComplete(false);
              }}
            >
              Restart Quiz
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default QuizPage;
