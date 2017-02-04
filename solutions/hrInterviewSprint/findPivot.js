function pivotFinder(input) {
  let pivot = 0;

  function recurse(oldPivotIndex, newPivotIndex) {
    let oldPivot = input[oddPivotIndex];
    let newPivot = input[newPivotIndex];
    if (newPivotIndex - oldPivotIndex === 1 && newPivot < oldPivot) {
      return input[newPivotIndex];
    }

    if (newPivot > input[0]) {
      oldPivotIndex = newPivotIndex + ;
      newPivotIndex = newPivotIndex * 2 + 1;
    } else {
      newPivotInd = Math.ceil(newPivotIndex / 2) + 1;
      oldPivotIndex = Math.ceil(newPivotIndex/ 2);
    }

    return recurse(oldPivotIndex, newPivotIndex);
  }
  recurse(0,1)
}
