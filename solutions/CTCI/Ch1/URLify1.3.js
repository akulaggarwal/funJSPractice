/* Pg. 194/206
URLify: Write a method to replace all spaces in a string with '%2e: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
*/

function URLify(input) {
  const inputArr = [];

  for (let i = 0; i < input.length; i++) {
    inputArr.push(input[i]);
  }

  inputArr.forEach( (v, i) => {
    if (v === ' ') {
      inputArr[i] = '%20';
    }
  })

  return inputArr.join('');
}

const input = "Mr John Smith JJ";

console.log(URLify(input));
