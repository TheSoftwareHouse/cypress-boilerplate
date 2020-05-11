require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL_PROD,
  video: false,
  watchForFileChanges: false,
  failOnStatusCode: false,
};
