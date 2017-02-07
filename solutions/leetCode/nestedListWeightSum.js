const input = [7,[3,5,[2],4,[[5]]],1]; //58


//crappy, but fast solution:
/*
let result = 0;


function weightSummer(input, level) {
  if (!Array.isArray(input)) {
    result += input * level;
    return;
  }

  for (let i = 0; i < input.length; i++) {
    const val = input[i];
    weightSummer(val, level + 1);
  }
}

weightSummer(input, 0);
console.log(result);
*/
//slightly better, uses wrapper, doesn't recurse when val != array:
/*
function weightSummer(input) {
  let result = 0;
  function traverseInput(input, level) {
    for (let i = 0; i < input.length; i++) {
      const val = input[i];
      if (!Array.isArray(val)) {
        result += val * level;
      } else {
        traverseInput(val, level + 1);
      }
    }
  }

  traverseInput(input, 1);
  return result;
}

console.log(weightSummer(input));
*/

//not better, but doesn't use a wrapper function or global variables
//potentially considered slightly worse due to extra arguments in main func:
function weightSummer(input, result = 0, level = 1) {
  let localResult = result;

  for (let i = 0; i < input.length; i++) {
    const val = input[i];

    if (!Array.isArray(val)) {
      localResult+= val * level;
    } else {
      const deepResult = weightSummer(val, localResult, level + 1);
      localResult = deepResult;
    }

  }
  return localResult;
}

console.log(weightSummer(input));
