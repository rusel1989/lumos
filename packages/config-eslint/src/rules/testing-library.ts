import { ESLintConfig } from '@beemo/driver-eslint';
import { TJSX_EXTS_GROUP } from '@oriflame/lumos-common';

const config: ESLintConfig = {
  overrides: [
    {
      files: [`*.test.${TJSX_EXTS_GROUP}`],
      plugins: ['eslint-plugin-testing-library'],
      rules: {
        // eslint-plugin-testing-library
        'testing-library/await-async-query': 'error', // enforce async queries to have proper await
        'testing-library/await-async-utils': 'error', // enforce async utils to be awaited properly
        'testing-library/await-fire-event': 'off', // enforce async fire event methods to be awaited
        'testing-library/consistent-data-testid': 'off', // ensure data-testid values match a provided regex.
        'testing-library/no-await-sync-query': 'error', // disallow unnecessary await for sync queries
        'testing-library/no-debug': 'warn', // disallow the use of debug
        'testing-library/no-dom-import': ['error', 'react'], // disallow importing from DOM Testing Library
        'testing-library/no-manual-cleanup': 'off', // disallow the use of cleanup
        'testing-library/no-wait-for-empty-callback': 'off', // disallow empty callbacks for waitFor and waitForElementToBeRemoved
        'testing-library/prefer-explicit-assert': 'warn', // suggest using explicit assertions rather than just getBy* queries
        'testing-library/prefer-find-by': 'warn', // suggest using findBy* methods instead of the waitFor + getBy queries
        'testing-library/prefer-presence-queries': 'off', // enforce specific queries when checking element is present or not
        'testing-library/prefer-screen-queries': 'off', // suggest using screen while using queries
        'testing-library/prefer-wait-for': 'error', // use waitFor instead of deprecated wait methods
      },
    },
  ],
};

export = config;
