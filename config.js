// Load the dotenv package
require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

if (process.env.isKalvian === 'true'){
  console.log('Kalvian mode is enabled');
}

// Export the config object for use in other parts of the application
module.exports = config;

// Log the variables to verify (Optional for testing)
console.log(config);