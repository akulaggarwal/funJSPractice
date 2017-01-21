/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of
a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
permutation is a rearrangement of letters. The palindrome does not need to be limited to just
dictionary words.
*/

function palindromePermutation(input) {
  const allLowerCase = input.toLowerCase();
  const inputCount = {};
  let oddCounter = 0;
  let charCounter = 0;

  for (let i = 0; i < input.length; i++) {
    const char = allLowerCase[i];
    if (char === ' ') {
      continue;
    }
    if (inputCount[char]) {
      inputCount[char]++
    } else {
      inputCount[char] = 1;
    }
    charCounter++;
  }

  const isEven = charCounter.length % 2 === 0 ? true: false;

  for (let val in inputCount) {
    const valCount = inputCount[val];
    if (valCount % 2 !== 0) {
      oddCounter++;
    }

    if (isEven && oddCounter) {
      return false;
    } else if (!isEven && oddCounter > 1) {
      return false;
    }
  }

  return true;

}

const input = 'Tact Coa';
const input2 = 'cat';
const input3 = 'tat';

console.log(palindromePermutation(input));
console.log(palindromePermutation(input2));
console.log(palindromePermutation(input3));
