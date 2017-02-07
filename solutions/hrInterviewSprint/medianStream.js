/*
Given a stream of unordered integers, find the median of the stream any time we want it.
We will be asked to find the median multiple times, so the peekMedian function should have optimal time complexity.
*/

function median(input) {
  const offset = input.length % 2 ? [Math.floor(input.length / 2)] : [input.length/2 - 1, input.length/2];
  const storage = [];

  function fastMedianFinder(arr, offset) {
    //base Case
    if (arr.length === 1) {
      storage.push(arr[0]);
      return;
    }

    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];

    for (let i = 1; i < arr.length; i++) {
      const val = arr[i];
      if (val < pivot) {
        leftArr.push(val);
      } else {
        rightArr.push(val);
      }
    }

    //is in left arr
    if (offset[0] < leftArr.length) {
      fastMedianFinder(leftArr, offset[0]);
    }
    if (offset[1] && offset[1] < leftArr.length) {
      fastMedianFinder(leftArr, offset[1]);
    }

    //pivot
    if (leftArr.length === offset[0]) {
      fastMedianFinder([pivot], [0]);
    }
    if (offset[1] && leftArr.length === offset[1]) {
      fastMedianFinder([pivot], [0]);
    }

    //is in right arr
    if (rightArr.length && offset[0] > leftArr.length) {
      const newOffset = offset[0] - leftArr.length - 1;
      fastMedianFinder(rightArr, [newOffset]);
    }
    if (offset[1] && rightArr.length && offset[1] > leftArr.length) {
      const newOffset = offset[1] - leftArr.length - 1;
      fastMedianFinder(rightArr, [newOffset]);
    }

    return;
  }

  fastMedianFinder(input, offset);

  //deal with odd/even input length
  if (input.length % 2){
    return storage[0];
  } else {
    return (storage[0] + storage[1]) / 2;
  }

}

const input = [5,7,3,1,8,9,11,12];
console.log(median(input));
