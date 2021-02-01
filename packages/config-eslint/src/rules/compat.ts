import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig = {
  plugins: ['eslint-plugin-compat'],
  rules: {
    // eslint-plugin-compat rules
    'compat/compat': 'error',
  },
};

export = config;
