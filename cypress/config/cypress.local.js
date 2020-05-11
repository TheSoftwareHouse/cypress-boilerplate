require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL_LOCAL,
  video: false,
  watchForFileChanges: false,
  failOnStatusCode: false,
};