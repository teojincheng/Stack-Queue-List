var listAndNode = require("./NodeAndList");

let linkedList = new listAndNode.LinkedList();

const nodeA = new listAndNode.Node("apple");
const nodeB = new listAndNode.Node("banana");

linkedList.unshift(nodeA);
linkedList.pop();
console.log(linkedList);
