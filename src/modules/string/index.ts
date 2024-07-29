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

export function capitalize(text: string) {
  var texts: string[] = [];
  text.split(" ").map((w) => {
    texts.push(w.charAt(0).toUpperCase() + w.slice(1));
  });
  return texts.join(" ");
}
