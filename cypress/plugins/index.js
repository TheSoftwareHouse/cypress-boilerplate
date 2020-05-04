const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(config) {
  const file = config.env.configFile || 'cypress.staging';
  const obj = require(`../config/${file}.js`);
  const pathToConfigFile = path.resolve('.', 'cypress/config/tmp', 'config.json');

  fs.writeJson(pathToConfigFile, obj, (err) => {
    if (err) return console.error(err);
    return true;
  });

  return fs.readJSON(pathToConfigFile);
}

module.exports = (on, config) => {
  return getConfigurationByFile(config);
};
