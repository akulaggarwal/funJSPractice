/*pg 244/256
Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
node never differ by more than one.
*/

function getHeight(tree) {
  if (!tree) {
    return 0;
  }

  let leftCount = getHeight(tree.l);
  if (leftCount === false) {
    return false;
  }
  leftCount++;
  let rightCount = getHeight(tree.r);
  if (rightCount === false) {
    return false;
  }
  rightCount++;

  if (Math.abs(leftCount - rightCount) > 1) {
    debugger;
    return false;
  } else {
    return Math.max(leftCount, rightCount);
  }

}

function isBalanced(tree) {
  return getHeight(tree) !== false;
}

const BST = require('./minimalTree4.2');
const bst = BST.BSTMaker(BST.input);
// bst.r.r.l.r = {v: 20, l: {v: 21, l: null, r: null}, r: null};  //commend or uncomment this line for balanced/unbalaned input
console.log(isBalanced(bst), bst);
