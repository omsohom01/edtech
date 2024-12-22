// Helper functions for common tasks

/**
 * Function to format a date to a readable string (e.g., "January 1, 2024")
 * @param {Date} date - The date object to be formatted.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
  if (!date) return '';
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Function to format time in a readable string (e.g., "12:30 PM")
 * @param {Date} date - The date object to be formatted.
 * @returns {string} - The formatted time string.
 */
export const formatTime = (date) => {
  if (!date) return '';

  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  return new Date(date).toLocaleTimeString('en-US', options);
};

/**
 * Validate if an email is in the correct format
 * @param {string} email - The email to be validated.
 * @returns {boolean} - Whether the email is valid or not.
 */
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

/**
 * Function to calculate the total score of a quiz based on correct answers
 * @param {Array} answers - Array of answers provided by the user
 * @param {Array} correctAnswers - Array of correct answers
 * @returns {number} - The total score based on correct answers.
 */
export const calculateQuizScore = (answers, correctAnswers) => {
  if (answers.length !== correctAnswers.length) return 0;

  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === correctAnswers[i]) {
      score++;
    }
  }
  return score;
};

/**
 * Function to shuffle an array (e.g., randomize quiz questions)
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} - The shuffled array.
 */
export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

/**
 * Function to calculate the percentage of correct answers
 * @param {number} correctCount - The number of correct answers.
 * @param {number} totalCount - The total number of questions.
 * @returns {number} - The percentage of correct answers.
 */
export const calculatePercentage = (correctCount, totalCount) => {
  if (totalCount === 0) return 0;
  return (correctCount / totalCount) * 100;
};

/**
 * Function to store data in localStorage
 * @param {string} key - The key for the data.
 * @param {any} value - The value to be stored.
 */
export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

/**
 * Function to retrieve data from localStorage
 * @param {string} key - The key of the data to be retrieved.
 * @returns {any} - The retrieved value, or null if not found.
 */
export const loadFromLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

/**
 * Function to remove data from localStorage
 * @param {string} key - The key of the data to be removed.
 */
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

/**
 * Function to get the current URL query parameters as an object
 * @returns {Object} - An object containing all URL query parameters.
 */
export const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const queryParams = {};
  for (let [key, value] of params) {
    queryParams[key] = value;
  }
  return queryParams;
};

/**
 * Function to validate if a string is a valid phone number
 * @param {string} phoneNumber - The phone number to be validated.
 * @returns {boolean} - Whether the phone number is valid or not.
 */
export const validatePhoneNumber = (phoneNumber) => {
  const regex = /^\+?(\d{1,3})?(\d{10})$/;
  return regex.test(phoneNumber);
};
