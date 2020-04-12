var listAndNode = require("./NodeAndList");

let linkedList = new listAndNode.LinkedList();

const nodeA = new listAndNode.Node("apple");
const nodeB = new listAndNode.Node("banana");
const nodeC = new listAndNode.Node("choclate");

linkedList.unshift(nodeA);
linkedList.unshift(nodeB);
linkedList.unshift(nodeC);
linkedList.pop();

/*
console.log("--------------");
console.log(linkedList);
console.log("------------------");
console.log(linkedList.getLast());
*/
