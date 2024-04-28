export function snakeToCamelObject(obj) {
  if (obj instanceof Array) {
    return obj.map((v) => snakeToCamelObject(v));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result, key) => {
      const newKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
      result[newKey] = snakeToCamelObject(obj[key]);
      return result;
    }, {});
  }
  return obj;
}

// console.log(
//   snakeToCamelObject({
//     hello_word: "hello word",
//     user_age: 22,
//     children: [
//       {
//         full_name: "Kyaw Kyaw",
//         age: 22,
//       },
//     ],
//   })
// );
