'use strict';

module.exports = {
  extends: require.resolve('./node20.js'),
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        /*
        NOTE: You will need to define your eslint config as .eslint.js and add snippet below to the config:
        'parserOptions': {
          'tsconfigRootDir': __dirname
        }
        */
        project: '.tsconfig'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'prefer-arrow-callback': [
          'error',
          {
            allowUnboundThis: true
          }
        ],
        curly: 'error',
        'node/no-unsupported-features/es-syntax': 'off',
        'no-array-constructor': 'off', // must be disabled so the typescript one can take over.
        'no-dupe-keys': 'error',
        'no-extra-semi': 'off', // must be disabled so the typescript one can take over.
        'no-shadow': 'off',
        'no-unused-vars': 'off', // must be disabled so the typescript one can take over.
        'no-use-before-define': 'off', // must be disabled so the typescript one can take over.
        'sort-keys': ['error', 'asc', { caseSensitive: false, minKeys: 5 }],
        'spaced-comment': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-semi': ['error'],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false }
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false }
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/promise-function-async': [
          'error',
          {
            allowedPromiseNames: ['Thenable'],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true
          }
        ],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error'
      }
    }
  ]
};
