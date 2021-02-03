import { ESLintConfig } from '@beemo/driver-eslint';
import { EXTS_GROUP, fromRoot } from '@oriflame/lumos-common';

// In TS, all arguments are required for type information,
// so we need to override the base JS setting.
const noUnused = { vars: 'all', args: 'none', ignoreRestSiblings: true };

// Project references and some projects currently cause OOM errors,
// so let's use a specialized TS config that globs everything.
const project = fromRoot('tsconfig.eslint.json', true) || fromRoot('tsconfig.json');

const config: ESLintConfig = {
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  parserOptions: {
    project,
  },

  overrides: [
    {
      files: ['*.{ts,tsx}'],

      parser: '@typescript-eslint/parser',

      plugins: ['@typescript-eslint'],

      rules: {
        camelcase: 'off',
        'func-call-spacing': 'off',
        'no-restricted-globals': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',

        // import (Conflicts with TS patterns)
        'import/extensions': [
          'error',
          'never',
          {
            json: 'always',
          },
        ],
        'import/prefer-default-export': 'off', // Typescript will handle named export better than default
        'import/named': 'off',
        'import/no-cycle': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              `test/**/*.${EXTS_GROUP}`,
              `tests/**/*.${EXTS_GROUP}`,
              `**/*.test.${EXTS_GROUP}`,
              `**/jest.config.${EXTS_GROUP}`,
              `**/webpack.config.${EXTS_GROUP}`,
              `**/webpack.config.*.${EXTS_GROUP}`,
            ],
            optionalDependencies: false,
          },
        ],
        'import/no-named-as-default': 'off',

        // react (We don't use prop types)
        'react/default-props-match-prop-types': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',

        // react
        'unicorn/no-fn-reference-in-iterator': 'off',

        // typescript

        '@typescript-eslint/adjacent-overload-signatures': 'error', // require that member overloads be consecutive
        '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }], // requires using either T[] or Array<T> for arrays
        '@typescript-eslint/await-thenable': 'error', // disallows awaiting a value that is not a Thenable
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Function:
                "Don't use Function as a type. Use explicit types like `(...args: any[]) => void`",
              String: { message: 'Use string instead', fixWith: 'string' },
            },
          },
        ], // bans specific types from being used
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
        ], // enforces consistent usage of type assertions
        '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'no-type-imports' }], // enforces consistent usage of type imports
        '@typescript-eslint/explicit-function-return-type': 'off', // require explicit return types on functions and class methods. Allow inference
        '@typescript-eslint/func-call-spacing': ['error', 'never'], // require or disallow spacing between function identifiers and their invocations
        '@typescript-eslint/member-delimiter-style': 'error', // require a specific member delimiter style for interfaces and type literals
        '@typescript-eslint/member-ordering': 'off', // require a consistent member declaration order
        '@typescript-eslint/method-signature-style': ['warn', 'method'], // enforces using a particular method signature syntax.
        '@typescript-eslint/no-array-constructor': 'error', // disallow generic Array constructors
        '@typescript-eslint/no-empty-function': 'off', // disallow empty functions. Default props are usually empty
        '@typescript-eslint/no-empty-interface': 'error', // disallow the declaration of empty interfaces
        '@typescript-eslint/no-explicit-any': [
          'error',
          { fixToUnknown: false, ignoreRestArgs: true },
        ], // disallow usage of the any type
        '@typescript-eslint/no-extra-parens': 'error', // disallow unnecessary parentheses
        '@typescript-eslint/no-for-in-array': 'error', // disallow iterating over an array with a for-in loop
        '@typescript-eslint/no-inferrable-types': 'warn', // disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
        '@typescript-eslint/no-misused-new': 'error', // enforce valid definition of new and constructor
        '@typescript-eslint/no-misused-promises': 'error', // avoid using promises in places not designed to handle them
        '@typescript-eslint/no-parameter-properties': 'error', // disallow the use of parameter properties in class constructors
        '@typescript-eslint/no-require-imports': 'error', // disallows invocation of require()
        '@typescript-eslint/no-shadow': 'error', // disallow variable declarations from shadowing variables declared in the outer scope
        '@typescript-eslint/no-throw-literal': 'error', // disallow throwing literals as exceptions
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // flags unnecessary equality comparisons against boolean literals
        '@typescript-eslint/no-unnecessary-type-assertion': 'error', // warns if a type assertion does not change the type of an expression
        '@typescript-eslint/no-unsafe-assignment': 'error', // disallows assigning any to variables and properties
        '@typescript-eslint/no-unsafe-call': 'error', // disallows calling an any type value
        '@typescript-eslint/no-unsafe-member-access': 'error', // disallows member access on any typed variables
        '@typescript-eslint/no-unsafe-return': 'error', // disallows returning any from a function
        '@typescript-eslint/no-unused-vars': ['error', noUnused], // disallow unused variables
        '@typescript-eslint/no-use-before-define': 'error', // disallow the use of variables before they are defined
        '@typescript-eslint/prefer-as-const': 'error', // prefer usage of as const over literal type
        '@typescript-eslint/prefer-for-of': 'error', // prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        '@typescript-eslint/prefer-includes': 'warn', // enforce includes method over indexOf method
        '@typescript-eslint/prefer-namespace-keyword': 'error', // require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
        '@typescript-eslint/prefer-nullish-coalescing': 'off', // enforce the usage of the nullish coalescing operator instead of logical chaining. Lots of false positives
        '@typescript-eslint/prefer-optional-chain': 'error', // Prefer using concise optional chain expressions instead of chained logical ands
        '@typescript-eslint/prefer-regexp-exec': 'warn', // prefer RegExp#exec() over String#match() if no global flag is provided
        '@typescript-eslint/prefer-ts-expect-error': 'warn', // recommends using // @ts-expect-error over // @ts-ignore
        '@typescript-eslint/promise-function-async': 'off', // requires any function or method that returns a Promise to be marked async. Conflicts with other async rules
        '@typescript-eslint/require-await': 'error', // disallow async functions which have no await expression
        '@typescript-eslint/switch-exhaustiveness-check': 'error', // exhaustiveness checking in switch with union type
        '@typescript-eslint/triple-slash-reference': 'error', // sets preference level for triple slash directives versus ES6-style import declarations
        '@typescript-eslint/type-annotation-spacing': 'error', // require consistent spacing around type annotations
        '@typescript-eslint/unified-signatures': 'error', // warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
      },
    },
  ],
};

export = config;
