module.exports = {
	'parser': 'babel-eslint',
	'extends': 'standard',
	'plugins': [
		'standard',
		'promise'
	],
	'rules': {
		'no-tabs': 'off',
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'no-console': 'warn',
		'import/newline-after-import': 'error',
		'import/order': 'error'
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	}
}
