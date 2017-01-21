/*Pg. 193/205
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
*/

function checkPermutations(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const s1Lookup = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!s1Lookup[i]) {
      s1Lookup[char] = 1;
    }
    else {
      s1Lookup[char]++;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const s2Char = s2[i];

    if (s1Lookup[s2Char]) {
      s1Lookup[s2Char]--;
    } else {
      debugger;
      return false;
    }
  }

  return true;
}

function checkPermutationsSort(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  s1Sorted = s1.split('').sort().join('');
  s2Sorted = s2.split('').sort().join('');

  if (s1Sorted !== s2Sorted) {
    return false;
  }

  return true;
}

const str1 = 'tom';
const str2 = 'mott';

const str3 = 'boat';
const str4 = 'toab';

const str5 = 'yum';
const str6 = 'mur';

const str7 = 'you';
const str8 = 'yoo';

console.log(checkPermutations(str1, str2)); //false
console.log(checkPermutations(str3, str4)); //true
console.log(checkPermutations(str5, str6)); //false
console.log(checkPermutations(str7, str8)); //false

console.log(checkPermutationsSort(str1, str2)); //false
console.log(checkPermutationsSort(str3, str4)); //true
console.log(checkPermutationsSort(str5, str6)); //false
console.log(checkPermutationsSort(str7, str8)); //false
