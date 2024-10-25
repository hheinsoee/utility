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
export function getOrdinal(num: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
export const numberFormat = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export function convertToSlug(sentence: string): string {
  return sentence
    .toLowerCase()                  // Convert to lowercase
    .trim()                         // Trim whitespace from both sides
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars (except hyphens)
    .replace(/\--+/g, '-')          // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, '');       // Trim hyphens from the start and end
}