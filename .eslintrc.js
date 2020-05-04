module.exports = {
	extends: [ 'airbnb/base', 'prettier', 'plugin:cypress/recommended' ],
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		'no-console': 0,
		'no-await-in-loop': 0,
		'no-plusplus': 0,
		'no-unused-vars': ['error', { args: 'none' }],
		'import/no-dynamic-require': 0,
		'global-require': 0
	},
	env: {
		node: true,
		mocha: true
	}
};
