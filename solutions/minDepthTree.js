//Problem 4.2 in CTCI
function minTree(inputArr) {
  // const ordered = [6];
  // const tree = {val: 5, left: null, right: null};
  // let store = [[1,2,3,4,5], [7,8,9,10]];

  //edge cases:
  if (!inputArr.length) {
    return 'no input values provided';
  }

  if (inputArr.length === 1) {
    return inputArr;
  }

  const input = [...inputArr];

  input.forEach( (v,i) => {
    if (typeof v !== 'number') {
      input.splice(i, 1);
    }
  })

  const firstMidInd = Math.floor(inputArr.length / 2);
  const firstMidVal = inputArr[firstMidInd];
  let store = [input.slice(0, firstMidInd), input.slice(firstMidInd + 1)];
  const flat = [
    [{val: firstMidVal, left: null, right: null, parent: null}]
    // [{val: 2, left: null, right: null, parent: 5}, {val: 8, left: null, right: null, parent: 5}]
  ]
  //debugger;
  // let lastInd = 0;

  function insertNode(val, layer, parent) {
    const node = {val, left: null, right: null, parent};
    if (flat[layer]) {
      flat[layer].push(node);
      //debugger;
      return;
    }
    flat.push([node]);
    //debugger;
  }

  while (store.length) {
    const newStore = [];
    // let currentLayer = 0;
    store.forEach( (miniArr, i) => {
      const midIndex = Math.floor(miniArr.length / 2); //adjust for length of 1, or handle with conditional
      const midVal = miniArr[midIndex];

      let stored = false;
      // let currentNode = tree;
      //go through ordered to find out what's empty, using lastInd
      //debugger;
      while (!stored) {
        // if (!currentNode.left && currentNode.val > midVal) {
        for (let i = 0; i < flat.length; i++) {
          const currentLayer = flat[i];
          //debugger;
          if (stored) {
            //debugger;
            break;
          }
          for (let j = 0; j < currentLayer.length; j++) {
            const nodeVal = currentLayer[j].val;
            const leftChild = currentLayer[j].left;
            const rightChild = currentLayer[j].right;
            // const parent = currentLayer[j].parent;
            //debugger;
            if (!leftChild && midVal < nodeVal) {
              currentLayer[j].left = midVal;
              insertNode(midVal, i+1, nodeVal);
              stored = true;
              //debugger;
              break;
            }
            if (!rightChild && midVal > nodeVal) {
              currentLayer[j].right = midVal;
              insertNode(midVal, i+1, nodeVal);
              stored = true;
              //debugger;
              break;
            }
            //debugger;

          }
          //debugger;

        }
          // currentNode.left = makeNode(midVal);
          // stored = true;
          // continue;
        // }
        // if (!currentNode.right && currentNode.val < midVal) {
        //   currentNode.right = makeNode(midVal);
        //   stored = true;
        //   continue;
        // }
        // currentNode = currentNode.left || currentNode.right;

      }

      //break current miniArr into 2 smaller arrs (or w/e) at midIndex
      let leftArr; let rightArr;
      if (midIndex > 0 && midIndex < miniArr.length - 1) {
        //debugger;
        leftArr = miniArr.slice(0, midIndex);
        rightArr = miniArr.slice(midIndex + 1);
      } else if (midIndex === 0) {
        //debugger;
        // rightArr = miniArr.slice(1);
      } else if (midIndex === miniArr.length - 1) {
        //debugger;
        leftArr = miniArr.slice(0, midIndex);
      }
      //debugger;
      if (leftArr) {
        newStore.push(leftArr);
      }
      if (rightArr) {
        newStore.push(rightArr);
      }
      //remove current miniArr from store
      //debugger;
      // ordered.push(midVal);
      //debugger;
    }) //end of forEach
    store = newStore;
    console.log(store);
    //debugger;
  } //end of outer while
  //debugger;
  // return makeTree(flat);
  return flat;
}

/*function makeTree(flat) {
  function makeNode(val) {
    return {val, left: null, right: null};
  }

  function treeAdd(node, val, ind) {
    if (!ind) {
      return node;
    }
    if (node.left.val === val) {
      return treeAdd(node.left, reverseOrder[ind - 1], ind - 1);
    }
    if (node.right.val === val) {
      return treeAdd(node.right, reverseOrder[ind - 1], ind - 1);
    }
  }

  const nodes = [flat[0]];
  const tree = {val: flat[0].val, left: null, right: null};

  flat.forEach( (layer, i) => {
    layer.forEach ( (node, j) => {

      const reverseOrder = [node.val];
      for (let k = i; k >= 0; k--) {
        reverseOrder.push(node.parent);
      }

      // for (let k = reverseOrder.length - 2; k >= 0; k--) {
      //   const val = reverseOrder[k];
      const node = treeAdd(tree, reverseOrder[reverseOrder.length - 2], reverseOrder.length - 2);
      // }


    })
  })

  return ;
}*/

console.log(minTree([1,2,3,4,5,6,7,8,9,10]))
