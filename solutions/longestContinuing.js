//find the number of longest increasing or decreasing digits in input

function longest(input) {
  let shortest = 1;
  let longest = 1;
  let tempShortest = 1;
  let tempLongest = 1;

  input.forEach( (curr, i) => {
    let last = input[i - 1] || curr;

    if (curr > last) {
      tempLongest++;
      tempShortest = 0;
      longest = Math.max(longest, tempLongest);
    }

    if (curr < last) {
      tempShortest++;
      tempLongest = 0;
      shortest = Math.max(shortest, tempShortest);
    }
  })

  return Math.max(shortest, longest);
}

console.log(longest([1,2,3,4,5,4,3,5,6,7,6,5,4,3,2,1]));
