import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import Components
import Navbar from '../components/Navbar';
import Quiz from '../components/Quiz';
import Dashboard from '../components/Dashboard';

// Import Styles
import '../styles/global.css';
import '../styles/dashboard.css';

// Import Utils
import { getQuizData, getAnalyticsData } from '../utils/api';
import { formatScore } from '../utils/helpers';

const HomePage = () => {
  const [quizData, setQuizData] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    // Fetch quiz data and analytics data when the component mounts
    const fetchData = async () => {
      try {
        const quizResponse = await getQuizData(); // Fetch quiz data
        setQuizData(quizResponse.data);
        
        const analyticsResponse = await getAnalyticsData(); // Fetch analytics data
        setAnalytics(analyticsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Navbar /> {/* Render the navigation bar */}
      
      <div className="main-content">
        {/* Render Quiz and Dashboard components based on the state */}
        <Quiz data={quizData} />
        {analytics && <Dashboard data={analytics} />}
      </div>
    </div>
  );
};

export default HomePage;
