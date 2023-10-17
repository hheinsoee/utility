function removeDuplicates(arr) {
    return arr.filter((item, index) =>
        arr.indexOf(item) === index);
}
function findDuplicates(arr) {
    return arr.filter((currentValue, currentIndex) =>
        arr.indexOf(currentValue) !== currentIndex);
}