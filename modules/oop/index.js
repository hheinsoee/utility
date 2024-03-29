export function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
export function findDuplicates(arr) {
  return arr.filter(
    (currentValue, currentIndex) => arr.indexOf(currentValue) !== currentIndex
  );
}
export const search = (array, key, words) => {
  return array[key].toString().toLowerCase().includes(words.toLowerCase());
};
