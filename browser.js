'use strict';

module.exports = {
  extends: [
    require.resolve('./react'),
    require.resolve('./import'),
    require.resolve('./promise')
  ],
  env: {
    browser: true,
    node: true
  }
};
