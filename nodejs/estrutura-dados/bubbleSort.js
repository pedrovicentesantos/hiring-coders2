const bubbleSort = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      if (elements[i] > elements[j]) {
        [elements[i], elements[j]] = [elements[j], elements[i]];
      }
    }
  }
  return elements;
};

module.exports = {
  bubbleSort
};
