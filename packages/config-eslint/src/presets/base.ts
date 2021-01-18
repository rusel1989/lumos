import { Path } from '@beemo/core';
import { ESLintConfig } from '@beemo/driver-eslint';
import {
  ASSET_EXT_PATTERN,
  CSS_EXT_PATTERN,
  EXTS,
  EXTS_GROUP,
  GQL_EXT_PATTERN,
} from '@oriflame/lumos-common';

const config: ESLintConfig = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    requireConfigFile: false,
  },

  extends: ['airbnb', 'plugin:jsx-a11y/recommended'],

  plugins: ['import', 'react', 'react-hooks', 'eslint-comments'],

  globals: {
    __DEV__: 'readonly',
    // Metrics and analytics providers
    ga: 'readonly',
    newrelic: 'readonly',
    // Mostly for easier compatibility between browsers, workers, etc
    global: 'readonly',
    // Mostly references to `process.env.NODE_ENV`
    process: 'readonly',
    // references for globalThis
    globalThis: 'readonly',
    // Webpack variables
    __webpack_public_path__: 'writeable',
    __webpack_require__: 'readonly',
    __webpack_chunk_load__: 'readonly',
    __webpack_modules__: 'readonly',
    __webpack_hash__: 'readonly',
    __non_webpack_require__: 'readonly',
    __webpack_exports_info__: 'readonly',
    DEBUG: 'readonly',
  },

  env: {
    browser: true,
    node: true,
  },

  reportUnusedDisableDirectives: true,

  settings: {
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    'import/ignore': [
      'node_modules',
      '\\.json$',
      ASSET_EXT_PATTERN.source,
      CSS_EXT_PATTERN.source,
      GQL_EXT_PATTERN.source,
    ],
    'import/extensions': EXTS,
    'import/resolver': {
      node: {
        extensions: EXTS,
      },
      [Path.resolve('../resolvers/graphql.js', __dirname).path()]: {
        extensions: ['.gql', '.graphql'],
      },
    },
  },

  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    // import React is no longer needed from latest version
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // eslint-comments plugin
    'eslint-comments/disable-enable-pair': 'error', // require a eslint-enable comment for every eslint-disable comment
    'eslint-comments/no-aggregating-enable': 'error', // disallow a eslint-enable comment for multiple eslint-disable comments
    'eslint-comments/no-duplicate-disable': 'error', // disallow duplicate eslint-disable comments
    'eslint-comments/no-restricted-disable': 'off', // disallow eslint-disable comments about specific rules
    'eslint-comments/no-unlimited-disable': 'error', // disallow eslint-disable comments without rule names
    'eslint-comments/no-unused-disable': 'error', // disallow unused eslint-disable comments
    'eslint-comments/no-unused-enable': 'error', // disallow unused eslint-enable comments
    'eslint-comments/no-use': 'off', // disallow ESLint directive-comments
    'eslint-comments/require-description': 'error', // require include descriptions in ESLint directive-comments
  },

  overrides: [
    {
      files: [`*.test.${EXTS_GROUP}`],
      plugins: ['jest'],
      globals: {
        jsdom: 'readonly',
      },
      env: {
        jest: true,
        node: true,
      },
      rules: {
        'max-classes-per-file': 'off',
        'no-magic-numbers': 'off',
        'sort-keys': 'off',

        // JEST
        'jest/expect-expect': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-expect-resolves': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
      },
    },
  ],
};

export = config;
