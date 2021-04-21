// eslint-disable-next-line node/global-require, @typescript-eslint/no-require-imports -- we need to read package.json in runtime
const { version } = require('../package.json') as Record<string, unknown>;

export const VERSION = version as string;

// https://github.com/lerna/lerna/tree/master/commands/version#readme
export const LERNA_VERSION_ARGS = [
  'version',
  '--yes',
  // Only run on master
  '--allow-branch',
  'master',
  // Use the Beemo conventional commit preset
  '--conventional-commits',
  '--changelog-preset',
  '@oriflame/conventional-changelog',
  // Create a GitHub release
  '--create-release',
  'github',
  // Push changes to git
  '--push',
  // Alter commit message to skip CI
  '--message',
  'ci: release [ci skip].',
];

export const BANNER = `██╗     ██╗   ██╗███╗   ███╗ ██████╗ ███████╗
██║     ██║   ██║████╗ ████║██╔═══██╗██╔════╝
██║     ██║   ██║██╔████╔██║██║   ██║███████╗
██║     ██║   ██║██║╚██╔╝██║██║   ██║╚════██║ version: ${VERSION}
███████╗╚██████╔╝██║ ╚═╝ ██║╚██████╔╝███████║
╚══════╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ ╚══════╝
`;
