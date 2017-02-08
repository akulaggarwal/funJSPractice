/*
Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.
*/

const words = ["practice", "makes", "perfect", "coding", "makes"];

function WordClass(words) {
  let word1Index = words.length;
  let word2Index = words.length;
  let minDistance = words.length;

  return function(word1, word2) {

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word === word1) {
        word1Index = i;
        minDistance = Math.min(minDistance, Math.abs(word2Index - word1Index));
      }

      if (word === word2) {
        word2Index = i;
        minDistance = Math.min(minDistance, Math.abs(word2Index - word1Index));
      }

    }

    return minDistance;

  }

}

const wordsContext = WordClass(words);
console.log(wordsContext('coding', 'practice'));
console.log(wordsContext('coding', 'makes'));
