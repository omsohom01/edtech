import React from "react";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ marginBottom: 4, fontWeight: "bold" }}
      >
        Welcome to the Interactive Dashboard
      </Typography>

      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Choose an Action
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: 60 }}
              onClick={() => navigate("/quiz")}
            >
              Take a Quiz
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ height: 60 }}
              onClick={() => navigate("/analytics")}
            >
              View Analytics
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ height: 60 }}
              onClick={() => navigate("/tutor")}
            >
              Access Tutor
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
