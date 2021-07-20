module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier',
    'plugin:cypress/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'global-require': 0,
    'import/prefer-default-export': 0,
    'no-await-in-loop': 0,
    'no-console': [`warn`, { allow: [`warn`] }],
    'arrow-body-style': [2, `as-needed`],
    'no-plusplus': 0,
    'no-unused-vars': ['error', { args: 'none' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
    mocha: true,
  },
};
