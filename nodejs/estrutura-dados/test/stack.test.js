const Stack = require('../stack').Stack;

describe('Stack class', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('should start with an empty array of elements', () => {
    expect(stack.elements).toStrictEqual([]);
    expect(stack.top).toBe(-1);
  });

  it('should add a element and add one to top with push method', () => {
    stack.push(1);
    expect(stack.top).toBe(0);
    expect(stack.elements).toStrictEqual([1]);
  });

  it('should work with multiples push methods', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.top).toBe(1);
    expect(stack.elements).toStrictEqual([1, 2]);
  });

  it('should not pop item if stack is empty', () => {
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.elements).toStrictEqual([]);
  });

  it('should pop last item of stack', () => {
    stack.push(1);
    stack.push(2);
    const item = stack.pop();
    expect(item).toBe(2);
    expect(stack.elements).toStrictEqual([1]);
    expect(stack.top).toBe(0);
  });

  it('should return true if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('should return false if stack is not empty', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });
});
