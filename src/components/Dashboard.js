import React from "react";
import { Box, Grid, Card, CardContent, Typography, CircularProgress, Button } from "@mui/material";

const Dashboard = () => {
  const stats = {
    totalQuizzes: 24,
    completedQuizzes: 18,
    averageScore: 85, // In percentage
  };

  const quickActions = [
    { label: "Start New Quiz", color: "primary" },
    { label: "Review Past Quizzes", color: "secondary" },
    { label: "View Analytics", color: "success" },
  ];

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ marginBottom: "1.5rem", fontWeight: "bold", color: "#333" }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Statistics Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#1976d2", color: "white", textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6">Total Quizzes</Typography>
              <Typography variant="h3" sx={{ margin: "1rem 0" }}>
                {stats.totalQuizzes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#2e7d32", color: "white", textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6">Completed Quizzes</Typography>
              <Typography variant="h3" sx={{ margin: "1rem 0" }}>
                {stats.completedQuizzes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "#ff9800", color: "white", textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6">Average Score</Typography>
              <Typography variant="h3" sx={{ margin: "1rem 0" }}>
                {stats.averageScore}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Progress Section */}
      <Box sx={{ marginTop: "2rem" }}>
        <Typography variant="h5" sx={{ marginBottom: "1rem", color: "#333" }}>
          Your Progress
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={(stats.completedQuizzes / stats.totalQuizzes) * 100}
            size={100}
            sx={{ color: "#1976d2" }}
          />
          <Typography variant="h6">
            {Math.round((stats.completedQuizzes / stats.totalQuizzes) * 100)}% of quizzes completed!
          </Typography>
        </Box>
      </Box>

      {/* Quick Actions Section */}
      <Box sx={{ marginTop: "2rem" }}>
        <Typography variant="h5" sx={{ marginBottom: "1rem", color: "#333" }}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          {quickActions.map((action, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Button
                fullWidth
                variant="contained"
                color={action.color}
                sx={{
                  padding: "1rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "8px",
                }}
              >
                {action.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
