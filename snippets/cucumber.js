const { register } = require('ts-node');
const { resolve } = require('path');

register({
  compilerOptions: { module: 'commonjs' },
});

module.exports = {
  default: [
    `${resolve(__dirname, 'test/features/**/*.feature')}`,
    //`--require-module ts-node/register --compilerOptions '{"module":"commonjs"}'`,
    `--require ${resolve(__dirname, 'test/step_definitions/**/*.ts')}`,
    `--format-options '${JSON.stringify({ snippetInterface: 'synchronous' })}'`,
  ].join(' '),
};
