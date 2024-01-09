module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:security/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		camelcase: 'error',
		quotes: ['error', 'single', 'avoid-escape'],
		eqeqeq: 'error',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'@typescript-eslint/no-unused-vars': [
			'off',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_'
			}
		],
		'security/detect-unsafe-regex': 'off',
		'security/detect-object-injection': 'off',
		'no-return-await': 'error',
		'no-control-regex': 'off',
		'object-curly-spacing': [1, 'always'],
		'no-multiple-empty-lines': [1, { max: 1 }],
		'no-console': 1,
		'no-trailing-spaces': 'error',
		'max-len': [1, { code: 120, tabWidth: 2, ignoreStrings: true, ignoreComments: true }],
		'no-duplicate-imports': 'error',
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: 'export', next: '*' },
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'any', prev: 'import', next: 'import' },
			{ blankLine: 'always', prev: 'function', next: '*' }
		],
		'react/react-in-jsx-scope': ['off'],
		'react/jsx-uses-react': ['off'],
		'react/jsx-props-no-spreading': ['warn'],
		'react/no-unescaped-entities': ['off'],
		'prettier/prettier': ['error']
	}
};
