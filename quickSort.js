let input = [5, 3, 17, 14, 2, 9, 11, 8];


function inPlaceNonRecursion(input) {
  const stack = [[0, input.length - 1]];
  for (let unsortedPair of stack) {
    console.log('unsortedPair [first, last]: ', unsortedPair);
    // console.log(input);
    const pivotInd = unsortedPair[0];
    const pivotVal = input[pivotInd];
    const lastInd = unsortedPair[1];
    let n = pivotInd + 1;

    //moves to left all vals lower than pivot
    for (let i = n; i <= lastInd; i++) {
      const currVal = input[i];
      if (currVal < pivotVal) {
        swap(i, n, currVal, input[n]);
        n++;
      }
    }

    const newPivotInd = n - 1;
    const newPivotVal = input[newPivotInd];
    const newLH = [pivotInd, newPivotInd - 1];
    const newRH = [newPivotInd + 1, lastInd];

    //moves pivot to bet left and right
    if (newPivotInd !== pivotInd) {
      swap(pivotInd, newPivotInd, pivotVal, newPivotVal);
    }

    //adds unsortedPair indeces to stack
    // console.log('newLH: ', newLH);
    if (newLH[1] - newLH[0] > 0) {
      stack.push(newLH);
    }
    if (newRH[1] - newRH[0] > 0) {
      stack.push(newRH);
    }
    // console.log(input, stack);
  }
  return input;
}

console.log(inPlaceNonRecursion(input));

function swap(currInd, n, currVal, nVal) {
  const tempVal = currVal;
  input[currInd] = nVal;
  input[n] = tempVal;
}
