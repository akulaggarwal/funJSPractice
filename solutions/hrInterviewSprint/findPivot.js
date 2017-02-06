function pivotFinder(input) {
  let pivot = 0;

  function recurse(oldPivotIndex, newPivotIndex) {
    let oldPivot = input[oldPivotIndex];
    let newPivot = input[newPivotIndex];
    if (oldPivot < input[0]) {
        return oldPivotIndex;
    }
    if (newPivotIndex - oldPivotIndex === 1 && newPivot < oldPivot) {
      return newPivotIndex;
    }

    if (newPivotIndex === (input.length - 1) && newPivot > input[0]) {
      return 0;
    }

    if (oldPivotIndex === newPivotIndex) {
      if (oldPivot < input[0]) {
        return oldPivotIndex;
      } else {
        return 0;
      }
    }

    if (newPivot > input[0]) { //not in this part of array
      oldPivotIndex = Math.min(newPivotIndex + 1, input.length - 1) ;
      newPivotIndex = Math.min(newPivotIndex * 2 + 1, input.length - 1);
    } else {  //is in this part of array
      newPivotIndex = Math.min(Math.ceil(newPivotIndex / 2) + 1, input.length - 1);
      oldPivotIndex = Math.min(Math.ceil(newPivotIndex / 2), input.length - 1);
    }

    return recurse(oldPivotIndex, newPivotIndex);
  }
  return recurse(0,1)
}

const input = [5,6,7,1,2,3,4];
const input2 = [1,2,3,4];
const input3 = [5,1,2,3,4,5,6];
const input4 = [1,2,3,4,5,6,7];
const input5 = [5,6,7,8,1,2,3,4];
const input6 = [3,4,5,6,7,8,1,2];

console.log(pivotFinder(input)); //3
console.log(pivotFinder(input2)); //0
console.log(pivotFinder(input3)); //1
console.log(pivotFinder(input4)); //0
console.log(pivotFinder(input5)); //4
console.log(pivotFinder(input6)); //6
