/*pg 243/255
List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
at each depth (e.g., if you have a tree with depth D, you 'll have D linked lists).
*/

const BST = require('./minimalTree4.2');

const bst = BST.BSTMaker(BST.input);
console.log(bst);

function depths(bst) {
  let newDepthMarker = bst;
  const llStore = [];
  const bfsSequence = [bst];

  for (let i = 0; i < bfsSequence.length; i++) {
    const v = bfsSequence[i];
    if (v === newDepthMarker) {
      llStore.push([]);
      newDepthMarker = v.l || v.r;
    }

    llStore[llStore.length - 1].push(v.v);

    if (v.l) {
      bfsSequence.push(v.l);
    }

    if (v.r) {
      bfsSequence.push(v.r);
    }
  }

  return llStore;
}

const depthsLL = depths(bst);
console.log(depthsLL);
