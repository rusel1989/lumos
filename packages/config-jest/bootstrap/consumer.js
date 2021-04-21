/* eslint-disable import/no-dynamic-require -- we need it here */

const { getSettings, fromRoot } = require('@oriflame/lumos-common');
const fs = require('fs');

// Import a custom setup file from the consumer
const { testFolder } = getSettings();
const jsSetup = fromRoot(`./${testFolder}/setup.js`);
const tsSetup = fromRoot(`./${testFolder}/setup.ts`);

if (fs.existsSync(tsSetup)) {
  require(tsSetup);
} else if (fs.existsSync(jsSetup)) {
  require(jsSetup);
}
