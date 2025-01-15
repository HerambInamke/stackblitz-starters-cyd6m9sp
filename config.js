// Load the dotenv package
require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true', // Ensure environment variable is boolean
};

if (config.isKalvian) {
  console.log('Kalvian mode is enabled');
} else {
  console.log('Kalvian mode is not enabled');
}

// Export the config object for use in other parts of the application
module.exports = config;

// Log the variables to verify (Optional for testing)
console.log(config);
