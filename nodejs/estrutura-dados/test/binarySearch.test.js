const binarySearch = require('../binarySearch').binarySearch;

describe('binarySearch function', () => {
  it('should return null if list is empty', () => {
    const result = binarySearch(1, []);
    expect(result).toBe(null);
  });

  it('should return -1 if number not in list', () => {
    const result = binarySearch(1, [2, 5, 8, 19]);
    expect(result).toBe(-1);
  });

  it('should return number position if number is in list', () => {
    let result = binarySearch(1, [1, 2, 5, 8, 19]);
    expect(result).toBe(0);
    result = binarySearch(2, [1, 2, 5, 8, 19]);
    expect(result).toBe(1);
    result = binarySearch(8, [1, 2, 5, 8, 19]);
    expect(result).toBe(3);
    result = binarySearch(19, [1, 2, 5, 8, 19]);
    expect(result).toBe(4);
    result = binarySearch(3, [1, 2, 3, 5, 8, 19]);
    expect(result).toBe(2);
  });
});
