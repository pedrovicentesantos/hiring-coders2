const binarySearch = (num, elements) => {
  if (elements.length === 0) return null;
  let end = elements.length - 1;
  let start = 0;
  while (end >= start) {
    const middle = parseInt((end + start) / 2);
    const middleElement = elements[middle];
    if (num === middleElement) return middle;
    if (num > middleElement) start = middle + 1;
    else end = middle - 1;
  }
  return -1;
};

binarySearch(8, [1, 2, 5, 8, 19]);

module.exports = {
  binarySearch
};
