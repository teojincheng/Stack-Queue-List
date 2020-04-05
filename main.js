var listAndNode = require("./NodeAndList");

let linkedList = new listAndNode.LinkedList();

const nodeA = new listAndNode.Node("apple");
const nodeB = new listAndNode.Node("banana");

//linkedList.unshift(nodeA);
//linkedList.unshift(nodeB);

//console.log(linkedList.shift());
//console.log(linkedList);

linkedList.unshift(nodeA);

linkedList.unshift(nodeB);
//linkedList.getLast();
//console.log(linkedList.getLast());
console.log(linkedList);
