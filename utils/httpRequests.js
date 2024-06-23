const axios = require('axios');
const MAIN_SERVICE_URL = process.env.MAIN_SERVICE_URL;

const makeRequest = async (method, endpoint, apiKey, data = null) => {
  try {
    const config = {
      method,
      url: `${MAIN_SERVICE_URL}${endpoint}`,
      headers: {
        'x-api-key': apiKey,
      },
      data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data || 'Failed to make request';
    } else if (error.message) {
      throw error.message;
    } else {
      throw 'Failed to make request';
    }
  }
};

module.exports = makeRequest;
