'use strict';

module.exports = {
  extends: require.resolve('./node'),
  plugins: ['unused-imports'],
  rules: {
    'node/no-unsupported-features/es-builtins': ['error', { version: '20' }],
    'node/no-unsupported-features/es-syntax': ['error', { version: '20' }],
    'node/no-unsupported-features/node-builtins': ['error', { version: '20' }],
    'unused-imports/no-unused-imports': 'error'
  }
};
