const convertDecimalToBinary =
  require('../convertDecimalToBinary').convertDecimalToBinary;

describe('convertDecimalToBinary function', () => {
  it('should return 0 if 0 is passed', () => {
    const result = convertDecimalToBinary(0);
    expect(result).toBe('0');
  });

  it('should return 1 if 1 is passed', () => {
    const result = convertDecimalToBinary(1);
    expect(result).toBe('1');
  });

  it('should return 10 if 2 is passed', () => {
    const result = convertDecimalToBinary(2);
    expect(result).toBe('10');
  });

  it('should return 11 if 3 is passed', () => {
    const result = convertDecimalToBinary(3);
    expect(result).toBe('11');
  });

  it('should return 100 if 4 is passed', () => {
    const result = convertDecimalToBinary(4);
    expect(result).toBe('100');
  });

  it('should return 1010 if 10 is passed', () => {
    const result = convertDecimalToBinary(10);
    expect(result).toBe('1010');
  });
});
