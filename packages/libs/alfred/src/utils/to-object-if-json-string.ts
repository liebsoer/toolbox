/**
 * If str is json string => return object
 * If not, return str
 */
export default function toObjectIfJSONString(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}
