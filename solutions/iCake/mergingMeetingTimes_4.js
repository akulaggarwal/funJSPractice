function merge(input) {
  //sort
  input.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  //merge
  //push first slot
  const merged = [input[0]];
  //for ea. in input after first
  for (let i = 1; i < input.length; i++) {
    const lastMerged = merged[merged.length - 1];
    const newSorted = input[i];
    //push according to conditionals
    if (lastMerged.endTime >= newSorted.startTime) {
      lastMerged.endTime = Math.max(newSorted.endTime, lastMerged.endTime);
    } else {
      merged.push(newSorted);
    }

  }

  return merged;
}

const input = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];
console.log(merge(input));

//Comment: Provided solution is pretty much the same.
