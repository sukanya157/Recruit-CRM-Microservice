const makeRequest = require('../utils/httpRequests');

// Function to fetch candidates
const getCandidates = async (apiKey) => {
  try {
    return await makeRequest('GET', '/api/public/candidate', apiKey);
  } catch (error) {
    throw error;
  }
};

// Function to fetch profile
const getProfile = async (apiKey) => {
  try {
    return await makeRequest('GET', '/api/public/profile', apiKey);
  } catch (error) {
    throw error;
  }
};

module.exports = { getCandidates, getProfile };
