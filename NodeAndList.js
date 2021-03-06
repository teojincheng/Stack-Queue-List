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
    if (this.head !== null) {
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
      let currentHead = this.head;
      this.head = this.head.next;
      return currentHead;
    }
  }

  getLast() {
    if (this.head.data === undefined) {
      return null;
    }

    const originalHead = this.head;
    let currNode = this.head;
    while (this.head.next.data !== undefined) {
      this.head = this.head.next;
      currNode = this.head;
    }
    this.head = originalHead;
    return currNode;
  }

  pop() {
    if (this.head.data === undefined) {
      return null;
    }

    if (this.head.next.data === undefined) {
      const tempHead = this.head;
      this.head = new Node();
      return tempHead;
    }

    const originalHead = this.head;
    let currNode = this.head;
    let prevNode = this.head;
    //this loop is to get to the last item in the linked list.
    while (this.head.next.data !== undefined) {
      prevNode = this.head;
      this.head = this.head.next;
      currNode = this.head;
    }
    //this.head = new Node();
    prevNode.next = new Node();
    this.head = originalHead;
    return currNode;
  }
}

module.exports = {
  Node,
  LinkedList,
};
