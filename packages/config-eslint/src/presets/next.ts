import { ESLintConfig } from '@beemo/driver-eslint';
import { EXTS_GROUP } from '@oriflame/lumos-common';

const config: ESLintConfig = {
  plugins: ['promise', 'unicorn'],
  rules: {
    // not enabled in Airbnb
    'default-param-last': 'error',
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'never'],
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-dupe-else-if': 'error',
    'no-implicit-coercion': 'error',
    'no-import-assign': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-setter-return': 'error',
    'no-useless-call': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-regex-literals': 'error',
    'require-atomic-updates': 'error',
    'no-nested-ternary': 'off', // replaced with unicorn rule

    // replaced with new proposals
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    // import React is no longer needed from latest version
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // import plugin
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-unused-modules': 'off', // super broken at the moment
    'import/imports-first': 'error',

    // promise plugin
    'promise/no-callback-in-promise': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': ['error', { allowReject: true }],
    'promise/param-names': 'error',
    'promise/valid-params': 'error',

    // react plugin
    'react/destructuring-assignment': 'off', // broken with class properties
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
    'react/jsx-handler-names': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-no-script-url': 'error',
    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    'react/no-did-mount-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/sort-comp': [
      'warn',
      {
        order: ['statics', 'properties', 'lifecycle', 'everything-else', 'handlers', 'renderers'],
        groups: {
          statics: [
            'propTypes',
            'defaultProps',
            'contextType',
            'contextTypes',
            'childContextTypes',
          ],
          properties: [
            '/^(?!on).+$/',
            '/^(?!handle).+$/',
            '/^(?!render).+$/',
            '/^.+Ref$/',
            'state',
          ],
          lifecycle: [
            'constructor',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          handlers: ['/^on.+$/', '/^handle.+$/'],
          renderers: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/sort-prop-types': [
      'warn',
      {
        ignoreCase: true,
        callbacksLast: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    'react/jsx-no-bind': ['warn', { ignoreDOMComponents: true }],

    // unicorn plugin
    'unicorn/better-regex': 'warn', // improve regexes by making them shorter, consistent, and safer
    'unicorn/catch-error-name': 'warn', // enforce a specific parameter name in catch clauses
    'unicorn/consistent-destructuring': 'warn', // use destructured variables over properties.
    'unicorn/consistent-function-scoping': 'warn', // move function definitions to the highest possible scope
    'unicorn/custom-error-definition': 'error', // enforce correct Error subclassing
    'unicorn/empty-brace-spaces': 'off', // enforce no spaces between braces
    'unicorn/error-message': 'error', // enforce passing a message value when throwing a built-in error
    'unicorn/escape-case': 'warn', // require escape sequences to use uppercase values
    'unicorn/expiring-todo-comments': [
      'warn',
      {
        terms: ['todo:', 'fixme:', 'debug:'],
      },
    ], // add expiration conditions to to do comments
    'unicorn/explicit-length-check': 'warn', // enforce explicitly comparing the length property of a value
    'unicorn/filename-case': 'off', // enforce a case style for filenames
    'unicorn/import-index': 'warn', // enforce importing index files with .
    'unicorn/import-style': 'warn', // enforce specific import styles per module
    'unicorn/new-for-builtins': 'warn', // enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt
    'unicorn/no-abusive-eslint-disable': 'warn', // enforce specifying rules to disable in eslint-disable comments
    'unicorn/no-array-callback-reference': 'off', // prevent passing a function reference directly to iterator methods
    'unicorn/no-array-reduce': 'off', // disallow Array#reduce() and Array#reduceRight()
    'unicorn/no-console-spaces': 'off', // do not use leading/trailing space between console.log parameters
    'unicorn/no-for-loop': 'warn', // Do not use a for loop that can be replaced with a for-of loop
    'unicorn/no-hex-escape': 'warn', // enforce the use of Unicode escapes instead of hexadecimal escapes
    'unicorn/no-instanceof-array': 'error', // require Array.isArray() instead of instanceof Array
    'unicorn/no-keyword-prefix': 'off', // disallow identifiers starting with new or class
    'unicorn/no-lonely-if': 'warn', // disallow if statements as the only statement in if blocks without else
    'unicorn/no-nested-ternary': 'warn', // disallow nested ternary expressions
    'unicorn/no-new-array': 'warn', // disallow new Array()
    'unicorn/no-new-buffer': 'error', // enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer()
    'unicorn/no-null': 'off', // disallow the use of the null literal
    'unicorn/no-object-as-default-parameter': 'error', // disallow the use of objects as default parameters
    'unicorn/no-process-exit': 'off', // disallow process.exit()
    'unicorn/no-unreadable-array-destructuring': 'warn', // disallow unreadable array destructuring
    'unicorn/no-unsafe-regex': 'off', // disallow unsafe regular expressions
    'unicorn/no-unused-properties': 'off', // disallow unused object properties
    'unicorn/no-useless-undefined': 'warn', // disallow useless undefined
    'unicorn/no-zero-fractions': 'warn', // disallow number literals with zero fractions or dangling dots
    'unicorn/number-literal-case': 'warn', // enforce lowercase identifier and uppercase value for number literals
    'unicorn/numeric-separators-style': 'off', // enforce the style of numeric separators by correctly grouping digits
    'unicorn/prefer-add-event-listener': 'warn', // prefer .addEventListener() and .removeEventListener() over on-functions
    'unicorn/prefer-array-find': 'warn', // prefer .find(…) over the first element from .filter(…)
    'unicorn/prefer-array-flat-map': 'warn', // prefer .flatMap(…) over .map(…).flat()
    'unicorn/prefer-array-index-of': 'warn', // prefer Array#indexOf() over Array#findIndex() when looking for the index of an item
    'unicorn/prefer-array-some': 'warn', // prefer .some(…) over .find(…)
    'unicorn/prefer-date-now': 'warn', // prefer Date.now() to get the number of milliseconds since the Unix Epoch
    'unicorn/prefer-default-parameters': 'off', // prefer default parameters over reassignment
    'unicorn/prefer-dom-node-append': 'warn', // prefer Node#append() over Node#appendChild()
    'unicorn/prefer-dom-node-dataset': 'warn', // prefer using .dataset on DOM elements over .setAttribute(…)
    'unicorn/prefer-dom-node-remove': 'warn', // prefer childNode.remove() over parentNode.removeChild(childNode)
    'unicorn/prefer-dom-node-text-content': 'warn', // prefer .textContent over .innerText
    'unicorn/prefer-includes': 'off', // prefer .includes() over .indexOf() when checking for existence or non-existence
    'unicorn/prefer-keyboard-event-key': 'warn', // prefer KeyboardEvent#key over KeyboardEvent#keyCode.
    'unicorn/prefer-math-trunc': 'warn', // enforce the use of Math.trunc instead of bitwise operators
    'unicorn/prefer-modern-dom-apis': 'warn', // prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement()
    'unicorn/prefer-negative-index': 'warn', // prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice()
    'unicorn/prefer-number-properties': 'warn', // prefer Number static properties over global ones
    'prefer-optional-catch-binding': 'warn', // prefer omitting the catch binding parameter
    'unicorn/prefer-query-selector': 'warn', // prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName()
    'unicorn/prefer-reflect-apply': 'off', // prefer Reflect.apply() over Function#apply()
    'unicorn/prefer-regexp-test': 'warn', // prefer RegExp#test() over String#match() and RegExp#exec()
    'unicorn/prefer-set-has': 'warn', // prefer Set#has() over Array#includes() when checking for existence or non-existence
    'unicorn/prefer-spread': 'warn', // prefer the spread operator over Array.from()
    'unicorn/prefer-string-replace-all': 'warn', // prefer String#replaceAll() over regex searches with the global flag
    'unicorn/prefer-string-slice': 'warn', // prefer String#slice() over String#substr() and String#substring()
    'unicorn/prefer-string-starts-ends-with': 'warn', // prefer String#startsWith() & String#endsWith() over more complex alternatives
    'unicorn/prefer-string-trim-start-end': 'warn', // prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
    'unicorn/prefer-ternary': 'off', // prefer ternary expressions over simple if-else statements
    'unicorn/prefer-type-error': 'warn', // enforce throwing TypeError in type checking conditions
    'unicorn/prevent-abbreviations': 'off', // Prevent abbreviations.
    'unicorn/string-content': 'off', // enforce better string content
    'unicorn/throw-new-error': 'error', // require new when throwing an error
  },

  overrides: [
    {
      files: [`*.test.${EXTS_GROUP}`],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-no-literals': 'off',
      },
    },
  ],
};

export = config;
