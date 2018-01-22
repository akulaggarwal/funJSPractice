//My original soln (with division):
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

console.log(myFunction([5,2,0,0,5,7,21]));


//No division solution:
function otherProds(input) {
  const result = [];

  let prod = 1;
  for (let i = 0; i < input.length; i++) {
    result[i] = prod;
    prod *= input[i];
  }

  prod = 1;
  for (let i = input.length - 1; i >= 0; i--) {
    result[i] *= prod;
    prod *= input[i];
  }

  return result;
}

console.log(otherProds([1, 2, 3, 4]));
