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


//Comment: Could have done in one pass by also keeping highest1 and lowest1, and multiplying pairs by just those.
