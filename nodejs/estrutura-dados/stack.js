class Stack {
  top = -1;
  stack = [];

  push(num) {
    this.top++;
    this.stack[this.top] = num;
  }

  pop() {
    if (this.top === -1) {
      return null;
    } else {
      this.top--;
      return this.stack.pop();
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  print() {
    for (let element of this.stack) {
      console.log(`${element}\n`);
    }
  }

  get top() {
    return this.top;
  }

  get size() {
    return this.stack.length;
  }

  get elements() {
    return this.stack;
  }
}

module.exports = {
  Stack
};
