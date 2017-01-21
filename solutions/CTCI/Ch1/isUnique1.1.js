/*Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
*/

function isUniqueSpace(input) {
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const checkAgainst = input[j];
      if (char === checkAgainst) {
        return false;
      }
    }
  }
  return true;
}

function isUniqueTime(input) {
  const inputLookup = new Set();
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (inputLookup.has(char)) {
      return false;
    }
    inputLookup.add(char);
  }

  return true;
}

const inputTrue = 'asdfjk;qweruip';
const inputFalse = 'asklfjiwoerusdf';

console.log(isUniqueSpace(inputTrue));
console.log(isUniqueSpace(inputFalse));

console.log(isUniqueTime(inputTrue));
console.log(isUniqueTime(inputFalse));
