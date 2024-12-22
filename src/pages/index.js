import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "../components/Quiz";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Analytics from "../components/Analytics";
import Tutor from "../components/Tutor";

const IndexPage = () => {
  return (
    <Router>
      {/* Navbar displayed across all routes */}
      <Navbar />
      <Routes>
        {/* Routes for each page */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/tutor" element={<Tutor />} />
      </Routes>
    </Router>
  );
};

export default IndexPage;
