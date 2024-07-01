'use strict';

module.exports = {
  extends: require.resolve('./node'),
  plugins: ['unused-imports'],
  rules: {
    'n/no-unsupported-features/es-builtins': ['error', { version: '20' }],
    'n/no-unsupported-features/es-syntax': ['error', { version: '20' }],
    'n/no-unsupported-features/node-builtins': ['error', { version: '20' }],
    'unused-imports/no-unused-imports': 'error'
  }
};
