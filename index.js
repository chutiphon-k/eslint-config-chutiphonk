module.exports = {
	parser: 'babel-eslint',
	extends: 'standard',
	plugins: [
		'standard',
		'promise'
	],
	rules: {
		'no-tabs': 'off',
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'no-console': 'warn'
	},
	parserOptions: {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	}
}
