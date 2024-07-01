'use strict';

module.exports = {
  extends: require.resolve('./base'),
  env: {
    node: true
  },
  plugins: ['n'],
  rules: {
    'n/no-unsupported-features/es-builtins': ['error'],
    'n/no-unsupported-features/es-syntax': ['error'],
    'n/no-unsupported-features/node-builtins': ['error'],
    'n/no-missing-require': 'error'
  }
};
