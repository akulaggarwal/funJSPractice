/*pg 245/257
Validate 8ST: Implement a function to check if a binary tree is a binary search tree.
*/

function validateByDFS(tree) {
  const inOrderStore = [];
  function DFS(node) {
    if (!node.l && !node.r) {
      //debugger;
      return node.v;
    }

    if (node.l) {
      const leftBranch = DFS(node.l);
      //debugger;
      if (leftBranch) {
        //debugger;
        inOrderStore.push(leftBranch);
      }
      //debugger;
    }
    //debugger;
    inOrderStore.push(node.v);
    //debugger;
    if (node.r) {
      //debugger;
      const rightBranch = DFS(node.r);
      if (rightBranch) {
        inOrderStore.push(rightBranch);
      }
    }
    return null;

  }

  DFS(tree);

  //can do following and check against original
  // inOrderStore.sort( (a,b) => {
  //   return a - b;
  // })

  for (let i = 1; i < inOrderStore.length; i++) {
    const val = inOrderStore[i];
    const lastVal = inOrderStore[i - 1];
    if (val < lastVal) {
      return false;
    }
  }

  return true;
}
/////////////////////////////////////////////////////////
function validateWithoutExternalStorage(node) {
  if (!node) {
    debugger;
    return null;
  }
  const val = node.v;
  let maxleft = null;
  let minRight = null;
  const leftBranchMax = validateWithoutExternalStorage(node.l);
  debugger;
  if (leftBranchMax === false) {
    return false;
  }

  if (!leftBranchMax) {
    maxLeft = val;
    debugger;
  } else {
    if (leftBranchMax[0] >= val) {
      maxLeft = false;
      return false;
    } else {
      maxLeft = val;
      debugger;
    }
  }

  const rightBranchMin = validateWithoutExternalStorage(node.r);
  debugger;
  if (rightBranchMin === false) {
    return false;
  }

  if (!rightBranchMin) {
    minRight = val;
    debugger;
  } else {
    if (rightBranchMin[1] <= val) {
      minRight = false;
      return false;
    } else {
      minRight = val;
      debugger;
    }
  }
  debugger;
  return [maxLeft, minRight];

}

function returnValidationResult(tree) {
  return validateWithoutExternalStorage(tree) ? true : false;
}

const BST = require('./minimalTree4.2');
const bst = BST.BSTMaker(BST.input);
console.log(validateByDFS(bst));
// bst.l.v = 2; //uncomment to test desired result: false
console.log(returnValidationResult(bst));
