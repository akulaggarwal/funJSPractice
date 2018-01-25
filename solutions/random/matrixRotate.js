const originalMatrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

function rotate(input) {
  const result = [];

  for (let i = 0; i < input.length; i ++) {
    const row = input[i];
    for (let j = 0; j < row.length; j++) {
      const val = row[j];
      const newI = j;
      const newJ = row.length - i - 1;
      if (!result[newI]) {
        result.push([]);
      }
      result[newI][newJ] = val;
    }
  }
  return result;
}

console.log(rotate(originalMatrix));
