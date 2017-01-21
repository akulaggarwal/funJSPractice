/*pg 201/213
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

function compressor(input) {
  let tempRepeatCounter = 1;
  let lastChar = input[0];
  const repeatTracker = [input[0]];

  for (let i = 1; i < input.length; i++) {
    const char = input[i];

    if (char === lastChar) {
      tempRepeatCounter++;
    } else {
      repeatTracker.push(tempRepeatCounter);
      repeatTracker.push(char);
      tempRepeatCounter = 1;
      lastChar = char;
    }
  }

  repeatTracker.push(tempRepeatCounter);

  const compressed = repeatTracker.join('');
  // return compressed;
  return compressed.length < input.length ? compressed : input;
}

const input = 'aabcccccaaa';
const input2 = 'aabbxxyzlr';

console.log(compressor(input));
console.log(compressor(input2));
