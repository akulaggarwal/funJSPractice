const input = [1,5,7,3,9,3,7,3,4];
const sorted = input.sort();
console.log(sorted);

//in place, non-recursive solution

function binarySeach(inputArr, target) {
  let leftI = 0;
  let rightI = inputArr.length - 1;
  let left = inputArr[0];
  let right = inputArr[inputArr.length - 1];

  if (target > right || target < left) {
    return null;
  }

  let mdwayI = Math.floor((rightI - leftI) / 2);
  let mdway = "blah";

  while (target !== mdway) {
    mdwayI = leftI + Math.floor((rightI - leftI) / 2);
    mdway = inputArr[mdwayI];

    if (target < mdway) {
      rightI = mdwayI--;
    }
    if (target > mdway) {
      leftI = mdwayI++;
    }
  }
  console.log(mdwayI);
  return mdwayI;
}

binarySeach([1,2,3,3,4,5,7,8,9], 1);
