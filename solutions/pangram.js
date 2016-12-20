const input0 = "A slow yellow fox crawls under the proactive dog";
const input1 = "A quick brown fox jumps over the lazy dog";
const input2 = "Lions, and tigers, and bears, oh my!";
const input3 = "";

function pangram(str) {
  //convert all to lower case
  const lower = str.toLowerCase(); //O(n)

  //convert to ASCII
  const askii = [];
  for (let char of lower) { //O(n)
    const charCode = char.charCodeAt(0);
    askii.push(charCode);
  }

  //go through each in askii, ignore all non a-z chars (^97-122)
  const uniques = {};
  for (let num of askii) { //O(n)
    if (97 <= num && num <= 122) {
      uniques[num] = num;
    }
  }

  //convert back to actual letter
  const arr = [];
  for (let i = 97; i < 123; i++) { //O(1)
    if (!uniques[i]) { //O(1)
      arr.push(String.fromCharCode(i))
    }
  }

  return arr.join(''); //O(1)
}

console.log(pangram(input0));
console.log(pangram(input1));
console.log(pangram(input2));
console.log(pangram(input3));

/* Explanation of appraoch:
This solution takes linear time, or O(n) time to get result. There are comments
at relevent places whcih indicate time complexity for individual steps. The space
complexity is linear, or O(n), as each value is stored at some point in an arr.
By necessity, there must be an operation done to each value in the input string
at least once. Chars were converted to ASCII so I didn't have to type up all the
individual chars in the alphabet, allthough an approach with regex comes to mind
as well. The occurence of each value at least once is recorded in a JS object as
the key, so there can be no duplicate keys, so any operations after this point
will be O(1) (constant) time, resulting in a minor time saving. After solving,
I realized a Set data structure, newly introduced in ES6, could have been used
as well, as it would only store unique values. The time complexity would have still
been O(n), as each value in input str still needs to be accessed, but the space
complexity would have been O(1), as only unique values would have ever been stored,
and only a max of 26 possible (a-z).
*/
