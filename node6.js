'use strict';

module.exports = {
  extends: require.resolve('./lib/base-node'),
  rules: {
    'node/no-unsupported-features': ['error', { version: 6 }]
  }
};
