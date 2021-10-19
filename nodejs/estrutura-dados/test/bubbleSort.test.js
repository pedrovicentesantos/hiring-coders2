const bubbleSort = require('../bubbleSort').bubbleSort;

describe('bubbleSort function', () => {
  it('should return ordered list', () => {
    let result = bubbleSort([1, 2, 3, 4, 5]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    result = bubbleSort([5, 4, 3, 2, 1]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    result = bubbleSort([5, 4, 3, 2, 1, 6, 2]);
    expect(result).toStrictEqual([1, 2, 2, 3, 4, 5, 6]);
  });
});
