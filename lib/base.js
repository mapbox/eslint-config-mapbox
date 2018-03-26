'use strict';

module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-extend-native': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'prefer-arrow-callback': 'error',
    'strict': 'error',
    'no-console': 'off'
  }
};
