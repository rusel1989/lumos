// @ts-check

const { getExtendsList, getIgnoreList } = require('@rajzik/config-eslint');
const { getSettings } = require('@rajzik/nimbus-common');

const { tool } = process.beemo;
const { next, node } = getSettings();

module.exports = {
  extends: getExtendsList({
    next,
    node,
    prettier: tool.isPluginEnabled('driver', 'prettier'),
    typescript: tool.isPluginEnabled('driver', 'typescript'),
  }),
  ignore: getIgnoreList(),
};
