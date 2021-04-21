const { getPackage } = require('@oriflame/lumos-common');
const chalk = require('chalk');
const execa = require('execa');

// Only run if the engines block is defined
if (getPackage().engines) {
  execa('check-node-version', ['--package'], { preferLocal: true }).catch((error) => {
    console.error();
    console.error(chalk.red(error.stderr.trim()));
    console.error();
    console.error(chalk.yellow(error.stdout.trim()));
    console.error();
  });
}
