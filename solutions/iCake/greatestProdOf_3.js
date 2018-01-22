//Given an array of integers, find the highest product you can get from three of the integers.

function greatestProdOf3(input) {
  if (input.length < 3) {
    return 'not enough input'
  }

  if (input.length === 3) {
    return input[0] + input[1] + input[2];
  }

  const lowPair = [];
  const highPair = [];

  for (let i = 0; i < input.length -1; i++) {
    const first = input[i];
    const second = input[i+1];
    const multiple = first * second;

    if (!lowPair[0]) {
      lowPair[0] = i;
      lowPair[1] = multiple;
      highPair[0] = i;
      highPair[1] = multiple;
      continue;
    }

    if (lowPair[1] > multiple) {
      lowPair[0] = i;
      lowPair[1] = multiple;
    }

    if (highPair[1] < multiple) {
      highPair[0] = i;
      lowPair[1] = multiple;
    }
  }

  let highestMultiple = 34;

  for (let i = 0; i < input.length; i++) {
    if (i !== lowPair[0] && i !== lowPair[0] + 1) {
      replaceHighest(input[i], lowPair[1]);
    }

    if (i !== highPair[0] && i !== highPair[0] + 1) {
      replaceHighest(input[i], highPair[1]);
    }
  }

  function replaceHighest(newVal, pair) {
    if (highestMultiple < newVal * pair) {
      highestMultiple = newVal * pair;
    }
  }

  return highestMultiple;

}

console.log(greatestProdOf3([-3,4,5,2,-2,0,6,-42]));


//Comment: Could have done in one pass by also keeping highest1 and lowest1.

// Given solution:
  function highestProductOf3(arrayOfInts) {

    if (arrayOfInts.length < 3) {
      throw new Error('Less than 3 items!');
    }

    // we're going to start at the 3rd item (at index 2)
    // so pre-populate highests and lowests based on the first 2 items.
    // we could also start these as null and check below if they're set
    // but this is arguably cleaner
    var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    var lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

    var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    var lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

    // except this one--we pre-populate it for the first *3* items.
    // this means in our first pass it'll check against itself, which is fine.
    var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

    // walk through items, starting at index 2
    for (var i = 2; i < arrayOfInts.length; i++) {
      var current = arrayOfInts[i];

      // do we have a new highest product of 3?
      // it's either the current highest,
      // or the current times the highest product of two
      // or the current times the lowest product of two
      highestProductOf3 = Math.max(
        highestProductOf3,
        current * highestProductOf2,
        current * lowestProductOf2
      );

      // do we have a new highest product of two?
      highestProductOf2 = Math.max(
        highestProductOf2,
        current * highest,
        current * lowest
      );

      // do we have a new lowest product of two?
      lowestProductOf2 = Math.min(
        lowestProductOf2,
        current * highest,
        current * lowest
      );

      // do we have a new highest?
      highest = Math.max(highest, current);

      // do we have a new lowest?
      lowest = Math.min(lowest, current);
    }

    return highestProductOf3;
  }
