import { execute, executeFile } from 'node-osascript';
import Buffers from 'buffers';

/**
 * execute script
 * @param script
 * @param handler: function(err, result)
 */
export function execute(
  script: string,
  handler: (err: Error, result: unknown, raw: Buffers) => void
) {
  execute(script, handler);
}

/**
 * execute script file
 * @param path to script file
 * @param variable variable
 * @param handler: function(err, result, raw)
 */
// eslint-disable-next-line no-unused-vars
export function executeFile(
  path: string,
  variable: object,
  handler: (err: Error, result: unknown, raw: Buffers) => void
) {
  // eslint-disable-next-line prefer-rest-params
  executeFile(path, variable, handler);
}
