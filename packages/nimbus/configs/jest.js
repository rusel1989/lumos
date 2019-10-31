// @ts-check

const { getConfig } = require('@rajzik/config-jest');
const { getSettings } = require('@rajzik/nimbus-common');

const { coverage, graphql, react, srcFolder, testFolder } = getSettings();

module.exports = getConfig({
  srcFolder,
  testFolder,
  graphql,
  react,
  threshold: coverage,
  workspaces: process.beemo.tool.getWorkspacePaths({ relative: true }),
});
