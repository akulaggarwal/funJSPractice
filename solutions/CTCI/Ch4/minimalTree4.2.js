/*pg 242/254
Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
algorithm to create a binary search tree with minimal height.
*/

//Recursive

function BSTMaker(input) {
  if (input.length <= 1) {
    return {v: input[0], l: null, r: null};
  }

  const middleIndex = Math.floor(input.length / 2); //2  //1
  const middleVal = input[middleIndex]; //3  //2
  const leftArr = input.slice(0, middleIndex); //1 -2  //[1]
  let rightArr = [];
  if (input.length > 2) {
    rightArr = input.slice(middleIndex + 1) //4 - 5  //[]
  }

  const leftRun = BSTMaker(leftArr);
  let rightRun = null;
  if (rightArr.length) {
    rightRun = BSTMaker(rightArr);
  }

  return {v: middleVal, l: leftRun, r: rightRun};

}

const input = [1,2,3,4,5,6,7,8,9,10,11];

console.log(BSTMaker(input));

module.exports = {BSTMaker, input};
