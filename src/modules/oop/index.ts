export function removeDuplicates(arr: any[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
export function findDuplicates(arr: any[]) {
  return arr.filter(
    (currentValue, currentIndex) => arr.indexOf(currentValue) !== currentIndex
  );
}
export const search = (array: any[], key: string, words: string) => {
  return array
    .map((obj) => obj[key])
    .filter((value) => typeof value === "string")
    .some((value) => value.toLowerCase().includes(words.toLowerCase()));
};

export function makeFresh({ old, fresh }: { old: any[]; fresh: any | any[] }) {
  const freshData = Array.isArray(fresh) ? fresh : [fresh];

  const updatedData = [...old]; // Create a copy of the old array to avoid mutation

  freshData.forEach((f) => {
    const index = updatedData.findIndex((x) => x.id === f.id);
    if (index !== -1) {
      updatedData[index] = f; // Replace existing object with fresh object
    } else {
      updatedData.unshift(f); // Append fresh object to the beginning of the array
    }
  });
  return updatedData;
}

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