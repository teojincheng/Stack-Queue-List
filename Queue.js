class Queue {
  constructor(maxLength) {
    this.array = [];
    this.maxLength = maxLength;
  }

  enqueue(item) {
    if (this.array[this.maxLength - 1] !== undefined) {
      return "Queue is full";
    }
    this.array.unshift(item);
  }

  dequeue() {
    if (this.array.length === 0) {
      return "Queue is empty";
    }
    return this.array.shift();
  }
  peek() {
    if (this.array.length === 0) {
      return "Queue is empty";
    }

    return this.array[0];
  }

  getLength() {
    return this.array.length;
  }
}

module.exports = Queue;
