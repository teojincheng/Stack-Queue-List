class Node {
  constructor(item, next = null) {
    this.data = item;
    this.next = next;

    if (this.next instanceof Node === false && this.next !== null) {
      throw "not a node";
    }
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }
  getFirst() {
    if (this.head.data === undefined) {
      return null;
    } else {
      return this.head;
    }
  }
  unshift(item) {
    if (item instanceof Node === false) {
      throw "not a node";
    }
    if (this.head !== undefined) {
      let tempHead = this.head;
      item.next = tempHead;
      this.head = item;
    }

    this.head = item;
  }
  shift() {
    if (this.head.data === undefined) {
      return null;
    }
    if (this.head.next !== undefined) {
    }
    return this.head;
  }
}

module.exports = {
  Node,
  LinkedList
};
