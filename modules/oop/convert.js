export function snakeToCamel(obj) {
  if (obj instanceof Array) {
    return obj.map((v) => snakeToCamel(v));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result, key) => {
      const newKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
      result[newKey] = snakeToCamel(obj[key]);
      return result;
    }, {});
  }
  return obj;
}
