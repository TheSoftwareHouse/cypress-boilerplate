import fs from 'fs-extra';
import * as path from 'path';

require('dotenv').config();

function getConfigurationByFile(file: string) {
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = (on: Cypress.PluginConfig, config: Cypress.PluginConfigOptions) => {
  const file = config.env.configFile || 'cypress.staging';

  return getConfigurationByFile(file);
};

// This code is executed before the configs are loaded.
module.exports = (on: Cypress.PluginConfig, config: Cypress.PluginConfigOptions) => {
  const finalConfig = config;

  Object.entries(process.env).forEach(([key, value]) => {
    const formattedStageKeyName = key.replace(`${process.env.STAGE}_`, '');
    finalConfig.env[formattedStageKeyName] = value;
  });

  return finalConfig;
};
