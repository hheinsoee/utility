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

export function makeFresh({ old, fresh }) {
  const index = (old || []).findIndex((x) => x.id === fresh.id);
  // console.log({ old, fresh, index });
  if (index !== -1) {
    const newData = [...old];
    newData[index] = fresh;
    return newData;
  } else {
    return [fresh, ...old];
  }
}
