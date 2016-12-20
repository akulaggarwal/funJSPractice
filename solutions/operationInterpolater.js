`Given a string of numbers, you can interpolate basic   operations (+, -, * and /) to create an equation that can be evaluated using simple math. Given a string of numbers and a value, write a method that prints all of the equations that can be generated using that string that evaluate to the given value. ex- f("323",3) will print out "3 * 2 - 3" `

const exp = [5, "+", 4];
const converted = (55);


console.log(converted);

const nums = '12345';
const target = 55;

function compute(oldVal, ) {

}

function recurse(numIndex, operators, computedVal) {
  const currentDigit = nums[numIndex];
  if (currentDigit === nums[nums.length - 1]) {
    compute(computedVal, currentDigit, op);
    return;
  }
  for (let op of operators) {
    recurse(numIndex + 1, operators, compute(computedVal, currentDigit, op))
  }

}

recurse(nums[0], operators, 0);
