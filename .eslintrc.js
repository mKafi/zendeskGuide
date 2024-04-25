module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'commonjs': true
	},
	'extends': [
		'eslint:recommended'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'rules': {
		/* Enforce consistent indentation. */
		'indent': ['error', 'tab', {
			'SwitchCase': 1,
			'outerIIFEBody': 1,
			'VariableDeclarator': 'first',
			'MemberExpression': 1,
			'FunctionDeclaration': { 'body': 1, 'parameters': 2 },
			'FunctionExpression': { 'body': 1, 'parameters': 2 },
			'StaticBlock': { 'body': 1 },
			'CallExpression': { 'arguments': 1 },
			'ArrayExpression': 1,
			'ObjectExpression': 1,
			'ImportDeclaration': 1,
			'flatTernaryExpressions': false,
			'offsetTernaryExpressions': false
		}
		],

		/* Enforce consistent linebreak style. */
		'linebreak-style': ['error', 'unix'],

		/* Enforce the consistent use of either backticks, double, or single quotes. */
		'quotes': ['error', 'single'],

		/* Require or disallow semicolons instead of ASI. */
		'semi': ['error', 'never'],


		// ==========================================================
		// ====================== Custom Rules ======================
		// ==========================================================


		// 'undef' : true, // true: Require all non-global variables to be declared (prevents global leaks)
		'no-undef': 0,

		/* Disallow unnecessary escape characters. */
		'no-useless-escape': 0,

		/* Require the use of `===` and `!==` */
		'eqeqeq': ['error', 'always'],
	}
}
