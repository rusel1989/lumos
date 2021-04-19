export const NUMBER_REGEX = /^(0-9)*/;

export const INVALID_CHARS = /([/@\-\W])/g;

export const POSTCSS_SETTING = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            stage: 3,
          },
        ],
      ],
    },
  },
};
