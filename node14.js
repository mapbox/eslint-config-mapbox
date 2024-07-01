'use strict';

module.exports = {
  extends: require.resolve('./node'),
  rules: {
    'n/no-unsupported-features/es-builtins': ['error', { version: '14' }],
    'n/no-unsupported-features/es-syntax': ['error', { version: '14' }],
    'n/no-unsupported-features/node-builtins': ['error', { version: '14' }]
  }
};
