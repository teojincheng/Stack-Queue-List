const { Node, LinkedList } = require("./NodeAndList");
describe("LinkedList", () => {
  describe("Node", () => {
    it("should throw an error when next is not a node", () => {
      expect(() => new Node("apple", "banana")).toThrow("not a node");
    });

    it("can create a node without next", () => {
      const node = new Node("apple");
      expect(node instanceof Node).toBeTruthy();
    });

    it("can create a node if next is a node", () => {
      const nodeA = new Node("apple");
      const nodeB = new Node("banana", nodeA);
      expect(nodeB.data).toEqual("banana");
      expect(nodeB.next).toBe(nodeA);
    });
  });
});

describe("LinkedList", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it("unshift should insert item to first item", () => {
    expect(list.getFirst()).toEqual(null);
    expect(() => list.unshift("apple")).toThrow("not a node");
    const nodeA = new Node("apple");
    list.unshift(nodeA);
    expect(list.getFirst()).toBe(nodeA);
    const nodeB = new Node("banana");
    list.unshift(nodeB);
    const firstNode = list.getFirst();
    expect(firstNode).toBe(nodeB);
    expect(firstNode.next).toBe(nodeA);
  });

  it("shift should return head", () => {
    expect(list.shift()).toEqual(null);
    list.unshift(new Node("apple"));
    list.unshift(new Node("banana"));
    expect(list.shift().data).toEqual("banana");
    expect(list.shift().data).toEqual("apple");
    expect(list.shift()).toEqual(null);
  });

  it("getLast should get the last item", () => {
    expect(list.getLast()).toBe(null);
    const nodeA = new Node("apple");
    expect(list.unshift(nodeA));
    expect(list.getLast()).toBe(nodeA);
    expect(list.getLast()).toBe(nodeA);
    expect(list.unshift(new Node("banana")));
    expect(list.getLast()).toBe(nodeA);
    list.shift();
    expect(list.getLast()).toBe(nodeA);
  });

  it("pop should remove and return last item", () => {
    let node, nodeA, nodeB;
    expect(list.pop()).toBe(null);
    node = new Node("apple");
    list.unshift(node);
    expect(list.pop()).toEqual(node);
    expect(list.pop()).toEqual(null);

    /*
    
    node = new Node("apple");
    nodeA = new Node("a");
    nodeB = new Node("b");
    list.unshift(node);
    list.unshift(nodeA);
    list.unshift(nodeB);
    expect(list.pop()).toEqual(node);
    expect(list.pop()).toEqual(nodeA);
    expect(list.pop()).toEqual(nodeB);
    expect(list.pop()).toEqual(null);
    */
  });
});
