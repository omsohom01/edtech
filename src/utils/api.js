// API utility functions for interacting with the backend and third-party services

// Base URL for the API
const BASE_URL = process.env.REACT_APP_API_URL || 'https://your-api-url.com';  // Replace with actual API URL

// Fetch quiz data
export const fetchQuizData = async (quizId) => {
  try {
    const response = await fetch(`${BASE_URL}/quiz/${quizId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch quiz data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching quiz data');
  }
};

// Submit quiz answers
export const submitQuizAnswers = async (quizId, answers) => {
  try {
    const response = await fetch(`${BASE_URL}/quiz/${quizId}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });
    if (!response.ok) {
      throw new Error('Failed to submit answers');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error submitting quiz answers');
  }
};

// Fetch analytics data
export const fetchAnalyticsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/analytics`);
    if (!response.ok) {
      throw new Error('Failed to fetch analytics data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching analytics data');
  }
};

// Fetch tutor resources
export const fetchTutorResources = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tutor/resources`);
    if (!response.ok) {
      throw new Error('Failed to fetch tutor resources');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching tutor resources');
  }
};

// Submit feedback (e.g., from the quiz or tutor)
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${BASE_URL}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });
    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error submitting feedback');
  }
};
