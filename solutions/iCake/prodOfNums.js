//My original soln:
function myFunction(arg) {
  const firstZeroIndex = arg.indexOf(0);
  const hasZero = firstZeroIndex === -1 ? false : true;
  const afterZero = hasZero ? arg.slice(firstZeroIndex + 1) : [];
  const hasMultipleZeros = afterZero.indexOf(0) === -1 ? false: true;

  if (hasMultipleZeros) {
    const result = new Array(arg.length);
    return result.fill(0)
  }

  const totalProduct = arg.reduce((accumulator, val) => {
    if (!val) {
    return accumulator;
  }

  return val * accumulator;
});

  return arg.map((v) => {
    if (hasZero) {
      if (v) {
        return 0;
      } else {
        return totalProduct;
      }
    }

    return totalProduct / v;
})
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([5,2,0,0,5,7,21]));

