const Stack = require("./Stack");

describe("Stack", () => {
  it("push() should increase the length of the array by one", () => {
    const stack = new Stack();

    stack.push(99);
    expect(stack.getStackLength()).toEqual(1);
  });

  it("pop() should decrease the length of the array by one", () => {
    const stack = new Stack();
    stack.push(88);
    stack.push(92);
    stack.push(75);
    stack.pop();
    expect(stack.getStackLength()).toEqual(2);
  });

  it("pop() should return nothing when there is no elements in the array", () => {
    const stack = new Stack();
    expect(stack.pop()).toEqual("Stack is empty");
  });

  it("peek() should return the last item pushed into the stack", () => {
    const stack = new Stack();
    stack.push(55);
    stack.push(67);
    stack.push(99);
    expect(stack.peek()).toEqual(99);
  });

  it("peek should return nothing when there is no elements in the array", () => {
    const stack = new Stack();
    expect(stack.peek()).toEqual("Stack is empty");
  });

  it("pop should return the correct item", () => {
    const stack = new Stack();
    stack.push(88);
    stack.push(77);
    expect(stack.pop()).toEqual(77);
  });

  it("peek should not decrease the length of the array", () => {
    const stack = new Stack();
    stack.push(55);
    let element = stack.peek();
    expect(stack.getStackLength()).toEqual(1);
  });
});
