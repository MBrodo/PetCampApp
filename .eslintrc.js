module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['babel', 'react', 'react-native', 'import', 'prettier'],

	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		quotes: ['error', 'single', { avoidEscape: true }],
		'no-empty-function': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json', '.native.js'],
			},
		},
	},
}
