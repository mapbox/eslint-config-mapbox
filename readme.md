# eslint-config-mapbox

[Shared eslint config](https://eslint.org/docs/developer-guide/shareable-configs) for Mapbox engineering teams.

## How to use this in a project

1. Install the following dev-dependencies:

    ```
    npm install --save-dev \
      @mapbox/eslint-config-mapbox \
      eslint \
      eslint-plugin-node
    ```

2. Extend the `@mapbox/eslint-config-mapbox` config in your `.eslintrc` (or `eslintConfig` key in your `package.json`):

    ```json
    "eslintConfig": {
      "extends": "@mapbox/eslint-config-mapbox"
    }
    ```

    Specify the version of Node.js your project uses by either setting `.engines.node` in your `package.json`, or by extending an LTS-version-specific (4, 6, or 8) eslint configuration. For example:

    ```json
    "eslintConfig": {
      "extends": "@mapbox/eslint-config-mapbox/node6"
    }
    ```

3. Run `eslint` on your project as part of your `test` and `lint` scripts:

    ```json
    {
      "scripts": {
        "test": "tape test/*.test.js && eslint *.js test/*.js",
        "lint": "eslint *.js test/*.js"
      }
    }
    ```
