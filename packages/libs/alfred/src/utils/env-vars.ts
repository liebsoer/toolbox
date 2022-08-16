import toObjectIfJSONString from './to-object-if-json-string';

/**
 * Set enviroment variable
 * if value is object => store as json string
 */
export function set(key: string, value: unknown) {
  if (key !== undefined && value !== undefined) {
    if (typeof value === 'string') {
      process.env[key] = value;
    } else {
      process.env.key = JSON.stringify(value);
    }
  }
}

/**
 * Get enviroment variable
 * if data is json => parse and return object
 */
export function get(key: string) {
  return toObjectIfJSONString(process.env[key]);
}
