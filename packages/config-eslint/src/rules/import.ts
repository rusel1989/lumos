import { Path } from '@beemo/core';
import { ESLintConfig } from '@beemo/driver-eslint';
import { ASSET_EXT_PATTERN, CSS_EXT_PATTERN, EXTS, GQL_EXT_PATTERN } from '@oriflame/lumos-common';

const config: ESLintConfig = {
  plugins: ['eslint-plugin-import'],
  settings: {
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
    // override ESLint rules
    'sort-imports': 'off', // enforce sorted import declarations within modules

    // eslint-plugin-import rules
    'import/default': 'off', // ensure a default export is present, given a default import.
    'import/dynamic-import-chunkname': 'off', // enforce a leading comment with the webpackChunkName for dynamic imports
    'import/export': 'error', // report any invalid exports, i.e. re-export of the same name
    'import/exports-last': 'off', // ensure all exports appear after other statements
    'import/extensions': ['error', 'always', { js: 'never', jsx: 'never' }], // ensure consistent use of file extension within the import path
    'import/first': 'error', // ensure all imports appear before other statements
    'import/group-exports': 'off', // prefer named exports to be grouped together in a single export declaration
    'import/max-dependencies': 'off', // limit the maximum number of dependencies a module can have
    'import/named': 'off', // ensure named imports correspond to a named export in the remote file.
    'import/namespace': 'off', // ensure imported namespaces contain dereferenced properties as they are dereferenced.
    'import/newline-after-import': 'warn', // enforce a newline after import statements
    'import/no-absolute-path': 'error', // forbid import of modules using absolute paths
    'import/no-amd': 'off', // report AMD require and define calls
    'import/no-anonymous-default-export': 'off', // forbid anonymous values as default exports
    'import/no-commonjs': 'off', // report CommonJS require calls and module.exports or exports.*
    'import/no-cycle': 'off', // forbid a module from importing a module with a dependency path back to itself
    'import/no-default-export': 'off', // forbid default exports
    'import/no-deprecated': 'off', // report imported names marked with @deprecated documentation tag
    'import/no-duplicates': 'error', // report repeated import of the same module in multiple places
    'import/no-dynamic-require': 'off', // forbid require() calls with expressions
    'import/no-extraneous-dependencies': 'off', // forbid the use of extraneous packages
    'import/no-internal-modules': 'off', // prevent importing the submodules of other modules
    'import/no-mutable-exports': 'warn', // forbid the use of mutable exports with var or let.
    'import/no-named-as-default': 'error', // report use of exported name as identifier of default export
    'import/no-named-as-default-member': 'error', // report use of exported name as property of default export
    'import/no-named-default': 'off', // forbid named default exports
    'import/no-named-export': 'off', // forbid named exports
    'import/no-namespace': 'off', // forbid namespace (a.k.a. "wildcard" *) imports
    'import/no-nodejs-modules': 'off', // no Node.js builtin modules
    'import/no-relative-parent-imports': 'off', // forbid importing modules from parent directories
    'import/no-restricted-paths': 'off', // restrict which files can be imported in a given folder
    'import/no-self-import': 'error', // forbid a module from importing itself
    'import/no-unassigned-import': 'off', // forbid unassigned imports
    'import/no-unresolved': ['warn', { commonjs: true }], // ensure imports point to a file/module that can be resolved.
    'import/no-unused-modules': 'off', // report modules without exports, or exports without matching import in another module
    'import/no-useless-path-segments': ['warn', { noUselessIndex: true }], // prevent unnecessary path segments in import and require statements
    'import/no-webpack-loader-syntax': 'off', // forbid webpack loader syntax in imports
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ], // enforce a convention in module import order
    'import/prefer-default-export': 'off', // prefer a default export if module exports a single name
    'import/unambiguous': 'off', // report potentially ambiguous parse goal (script vs. module)
  },
};

export = config;
