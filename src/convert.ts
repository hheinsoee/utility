export function snakeToCamelObject(obj: any | any[]): any {
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
export function getOrdinal(num: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

export function getUnitCharID() {
  const baseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Custom character set for encoding
  const baseLength = baseChars.length;
  const timestamp = Date.now(); // Get current timestamp in milliseconds
  const randomComponent = Math.floor(Math.random() * baseLength); // Random component for additional uniqueness
  let num = timestamp + randomComponent; // Combine timestamp and random component
  let result = "";

  // Convert the number into a 6-character string
  while (num > 0) {
    const remainder = num % baseLength;
    result = baseChars.charAt(remainder) + result;
    num = Math.floor(num / baseLength);
  }

  // Pad the result with leading characters if necessary
  while (result.length < 6) {
    result = baseChars.charAt(0) + result; // Use the first character of baseChars for padding
  }

  // Ensure the result is exactly 6 characters long
  return result.slice(-6);
}
