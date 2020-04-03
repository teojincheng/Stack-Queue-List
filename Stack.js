class Stack {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
  }
  pop() {
    if (this.array.length === 0) {
      return "Stack is empty";
    }
    return this.array.pop();
  }
  peek() {
    if (this.array.length === 0) {
      return "Stack is empty";
    }
    const element = this.array[this.array.length - 1];
    return element;
  }

  getStackLength() {
    return this.array.length;
  }
}

module.exports = Stack;
