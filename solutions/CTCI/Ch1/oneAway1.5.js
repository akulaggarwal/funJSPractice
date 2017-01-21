/*pg 198/210
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -) true
pales, pale -) true
pale, bale -) true
pale, bae -) false
*/

function oneAway(s1, s2) {
  let equalLength = false;
  // let longer = false;
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  } else if (s1.length === s2.length) {
    equalLength = true;
  } else {
    // longer = s1.length > s2.length ? s1 : s2;
  }

  const longer = s1.length > s2.length ? s1.split('') : s2.split('');
  const shorter = s1.length > s2.length ? s2.split('') : s1.split('');

  let diffCounter = 0;

  for (let i = 0; i < longer.length; i++) {
    const charLonger = longer[i];
    const charShorter = shorter[i] ? shorter[i] : null;
    if (charLonger !== charShorter) {
      diffCounter++;
      if (equalLength) {
        shorter.splice(i, 1, charLonger);
      } else new Promise(function(resolve, reject) {
        shorter.splice(i, 0, charLonger);
      });
    }
  }

  console.log(shorter, longer);

  return diffCounter > 1 ? false : true;
}

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pale', 'bae'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
