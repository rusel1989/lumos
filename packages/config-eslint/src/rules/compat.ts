import { ESLintConfig } from '@beemo/driver-eslint';

// TODO: Specify polyfills so it can be actually used.
const config: ESLintConfig = {
  plugins: ['eslint-plugin-compat'],
  rules: {
    // eslint-plugin-compat rules
    'compat/compat': 'error',
  },
};

export = config;
