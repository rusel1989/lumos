import { Path } from '@beemo/core';
import { IGNORE_PATHS } from '@oriflame/lumos-common';

export interface ESLintOptions {
  next?: boolean;
  node?: boolean;
  prettier?: boolean;
  typescript?: boolean;
}

function fromHere(filePath: string): string {
  return `./${new Path(process.cwd())
    .relativeTo(new Path(__dirname, '../lib', filePath).resolve())
    .toString()}`;
}

export function getExtendsList({
  prettier = false,
  typescript = false,
  node = false,
}: ESLintOptions): string[] {
  const paths = [
    fromHere('./rules/eslint'),
    fromHere('./rules/compat'),
    fromHere('./rules/eslint-comments'),
    fromHere('./rules/import'),
    fromHere('./rules/react'),
    fromHere('./rules/a11y'),
    fromHere('./rules/unicorn'),
    fromHere('./rules/jest'),
    fromHere('./rules/testing-library'),
  ];

  if (node) {
    paths.push(fromHere('./rules/node'));
  }

  if (typescript) {
    paths.push(fromHere('./rules/typescript'));
  }

  if (prettier) {
    paths.push(fromHere('./rules/prettier'), 'eslint-config-prettier/unicorn');

    if (typescript) {
      paths.push('eslint-config-prettier/@typescript-eslint');
    }
  }

  return paths;
}

export function getIgnoreList(): string[] {
  return [
    ...IGNORE_PATHS,
    'jest.config.js',
    'babel.config.js',
    'webpack.config.js',
    'build*/',
    '\\.eslintrc.js',
  ];
}
