//flatten an array
//Recursive:

let input = [1, 'a', [], [[[{'k': [4]}, 2], 6]]];
input = [1, 'a', [], [3, 2]];

function flatten(val) {
  const output = [];
  // if (Array.isArray(val) && !val.length) {
  //   return null;
  // }
  if (!Array.isArray(val)) {
    return val;
  }
  if (Array.isArray(val)) {
    for (let i = 0; i < val.length; i++) {
      const innerV = flatten(val[i]);
      if (Array.isArray(innerV)) {
        output.push(...innerV);
      } else {
        output.push(innerV)
      }
    }
  }
  return output;
}

console.log(flatten(input));
