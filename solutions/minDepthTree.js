//Problem 4.2 in CTCI
function minTree(inputArr) {
  const ordered = [5];
  const tree = {val: 5, left: null, right: null};
  const store = [[1,2,3,4], [6,7,8,9,10]];
  let lastInd = 0;

  function makeNode(val) {
    return {val, left: null, right: null};
  }

  while (store.length !== inputArr.length) {
    const newStore = [];
    store.forEach( (miniArr, i) => {
      const midIndex = Math.floor(miniArr.length / 2); //adjust for length of 1, or handle with conditional
      const midVal = miniArr[midIndex];

      let stored = false;
      let currentNode = tree;
      //go through ordered to find out what's empty, using lastInd
      while (!stored) {
        if (!currentNode.left && currentNode.val > midVal) {
          currentNode.left = makeNode(midVal);
          stored = true;
          continue;
        }
        if (!currentNode.right && currentNode.val < midVal) {
          currentNode.right = makeNode(midVal);
          stored = true;
          continue;
        }
        currentNode = currentNode.left || currentNode.right;

      }

      //break current miniArr into 2 smaller arrs (or w/e) at midIndex
      let leftArr; let rightArr;
      if (midIndex > 0 && midIndex < miniArr.length - 1) {
        leftArr = miniArr.slice(0, midIndex);
        rightArr = miniArr.slice(midIndex + 1);
      } else if (midIndex === 0) {
        rightArr = miniArr.slice(1);
      } else if (midIndex === midIndex.length - 1) {
          leftArr = miniArr.slice(0, midIndex);
      }

      if (leftArr) {
        newStore.push(leftArr);
      }
      if (rightArr) {
        newStore.push(rightArr);
      }
      //remove current miniArr from store
      ordered.push(midVal);
    })
    store = newStore;
  }

}

minTree([1,2,3,4,5,6,7,8,9,10])
