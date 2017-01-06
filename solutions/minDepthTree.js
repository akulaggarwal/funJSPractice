//Problem 4.2 in CTCI
function minTree(inputArr) {
  const ordered = [5];
  // const tree = {val: 5, left: null, right: null};
  let store = [[1,2,3,4], [6,7,8,9,10]];
  const flat = [
    [{val: 5, left: null, right: null, parent: null}]
    // [{val: 2, left: null, right: null, parent: 5}, {val: 8, left: null, right: null, parent: 5}]
  ]
  // let lastInd = 0;

  function makeNode(val) {
    return {val, left: null, right: null};
  }

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
            const parent = currentLayer[j].parent;
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
        debugger;
        // rightArr = miniArr.slice(1);
      } else if (midIndex === miniArr.length - 1) {
        debugger;
        leftArr = miniArr.slice(0, midIndex);
      }
      debugger;
      if (leftArr) {
        newStore.push(leftArr);
      }
      if (rightArr) {
        newStore.push(rightArr);
      }
      //remove current miniArr from store
      debugger;
      ordered.push(midVal);
      //debugger;
    }) //end of forEach
    store = newStore;
    console.log(store);
    debugger;
  } //end of outer while
  //debugger;
  return flat;
}

console.log(minTree([1,2,3,4,5,6,7,8,9,10]))
