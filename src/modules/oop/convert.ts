export function snakeToCamelObject(obj: any): any {
  if (obj instanceof Array) {
    return obj.map((v: any) => snakeToCamelObject(v));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result: any, key: string) => {
      const newKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
      result[newKey] = snakeToCamelObject(obj[key]);
      return result;
    }, {});
  }
  return obj;
}