import Beemo, { BeemoConfig } from '@beemo/core';
import { PackageStructure } from '@boost/common';
import execa from 'execa';
import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';

export interface LumosEnvSetting {
  targets?:
    | string[]
    | string
    | {
        browsers?: string[] | string;
        esmodules?: boolean;
        node?: string | 'current' | true;
        safari?: string | 'tp';
        [key: string]: unknown;
      };
  spec?: boolean;
  loose?: boolean;
  modules?: 'amd' | 'auto' | 'cjs' | 'commonjs' | 'systemjs' | 'umd' | false;
  debug?: boolean;
  include?: Array<RegExp | string>;
  exclude?: Array<RegExp | string>;
  useBuiltIns?: 'entry' | 'usage' | false;
  forceAllTransforms?: boolean;
  configPath?: string;
  ignoreBrowserslistConfig?: boolean;
  shippedProposals?: boolean;
}

export interface LumosSettings {
  buildFolder: string;
  coverage: number;
  docsFolder: string;
  env: LumosEnvSetting;
  graphql: boolean;
  library: boolean;
  next: boolean;
  node: boolean;
  react: boolean;
  srcFolder: string;
  testsFolder: string;
  typesFolder: string;
  entryPoint?: string;
  publicPath?: string;
  root?: string;
  parallel?: boolean | number | string;
  testResultFileName?: string;
  emptyBabelConfig: boolean;
  allowJs: boolean;
  skipLibCheck: boolean;
  devServerContentBase?: string;
  moduleFederationConfig?: unknown;
  host?: string;
}

export interface LumosPackage extends PackageStructure {
  lumos: BeemoConfig<Partial<LumosSettings>>;
}

export { execa, glob };

export function fromRoot(filePath: string, existsCheck = false): string {
  const absPath = path.join(process.cwd(), filePath);

  if (existsCheck && !fs.existsSync(absPath)) {
    return '';
  }

  return absPath;
}

let pkgCache: LumosPackage | null = null;

export function getPackage(): LumosPackage {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typings are wrong, `process.beemo` can be undefined
  const instance = (process.beemo?.tool as unknown) as Beemo<LumosSettings> | undefined;

  if (instance?.package) {
    return instance.package as LumosPackage;
  }

  if (pkgCache) {
    return pkgCache;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, import/no-dynamic-require, @typescript-eslint/no-require-imports -- TODO: rewrite
  pkgCache = require(fromRoot('package.json'));

  return pkgCache!;
}

export function getSettings(): LumosSettings {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typings are wrong, `process.beemo` can be undefined
  const instance = (process.beemo?.tool as unknown) as Beemo<LumosSettings> | undefined;
  const settings: Partial<LumosSettings> = {};
  const pkg = getPackage();

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typings are wrong, `instance.config` can be undefined
  if (instance?.config?.settings) {
    Object.assign(settings, instance.config.settings);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typings are wrong, `pkg.lumos` can be undefined
  } else if (pkg.lumos?.settings) {
    Object.assign(settings, pkg.lumos.settings);
  }

  return {
    buildFolder: 'lib',
    coverage: 75,
    docsFolder: 'docs',
    env: {},
    graphql: false,
    library: false,
    next: false,
    node: false,
    react: false,
    srcFolder: 'src',
    testsFolder: 'tests',
    typesFolder: 'types',
    emptyBabelConfig: false,
    allowJs: false,
    skipLibCheck: false,
    ...settings,
  };
}
