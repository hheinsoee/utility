export function snakeToTitleCase(str: string) {
  return str
    .split("_")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function snakeToCamel(str: string) {
  return str.replace(/_([a-z])/g, function (match, group1) {
    return group1.toUpperCase();
  });
}
