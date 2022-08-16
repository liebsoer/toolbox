const { register } = require('ts-node');
const { resolve } = require('path');

register({
  compilerOptions: { module: 'commonjs' },
});

module.exports = function cucumberConfig(rootDir) {
  return {
    default: [
      `${resolve(rootDir, 'test/features/**/*.feature')}`,
      `--require ${resolve(rootDir, 'test/step_definitions/**/*.ts')}`,
      `--format-options '${JSON.stringify({
        snippetInterface: 'synchronous',
      })}'`,
    ].join(' '),
  };
};
