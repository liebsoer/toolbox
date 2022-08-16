export default function removeEmptyProperties(data: object) {
  const nonEmptyData = {};

  for (const key in data) {
    let value = data[key];
    if (typeof value === 'object') {
      value = removeEmptyProperties(value as object);
      if (Object.keys(value).length) {
        nonEmptyData[key] = value;
      }
    }
    if (value !== undefined && value !== null) {
      nonEmptyData[key] = value;
    }
  }

  return nonEmptyData;
}
