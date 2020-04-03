const Queue = require("./Queue");

describe("Queue", () => {
  it("enqueue should increase the length of Queue by one", () => {
    const queue = new Queue(5);
    queue.enqueue(55);
    expect(queue.getLength()).toEqual(1);
  });

  it("enqueue the 6th time should return queue is full", () => {
    const queue = new Queue(5);
    queue.enqueue(45);
    queue.enqueue(15);
    queue.enqueue(12);
    queue.enqueue(13);
    queue.enqueue(20);
    expect(queue.enqueue(9)).toEqual("Queue is full");
  });

  it("dequeue should decrease the length of the Queue by one", () => {
    const queue = new Queue(5);
    queue.enqueue(9);
    queue.enqueue(15);
    queue.dequeue();
    expect(queue.getLength()).toEqual(1);
  });

  it("dequeue should return queue is empty when length of queue is zero", () => {
    const queue = new Queue(5);
    expect(queue.dequeue()).toEqual("Queue is empty");
  });

  it("peek should return the first element in the queue", () => {
    const queue = new Queue(5);
    queue.enqueue(7);
    queue.enqueue(9);
    expect(queue.peek()).toEqual(9);
  });
});
