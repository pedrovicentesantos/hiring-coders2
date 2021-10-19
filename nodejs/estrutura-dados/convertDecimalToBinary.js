const Stack = require('./stack').Stack;

const convertDecimalToBinary = (num) => {
  if (num === 0) {
    return '0';
  }
  let result = '';
  const stack = new Stack();

  while (num !== 0) {
    let remainder = num % 2;
    num = parseInt(num / 2);
    stack.push(remainder);
  }

  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  return result;
};

module.exports = {
  convertDecimalToBinary
};
