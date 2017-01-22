/* pg 2014/216
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.
*/

function zeroMatrix(input) {
  let rowZeroContainer = new Set();
  let columnZeroContainer = new Set();
  let allZeros = false;

  for (let i = 0; i < input.length; i++) {

    for (let j = 0; j < input[i].length; j++) {
      const val = input[i][j];

      if (val === 0) {
        rowZeroContainer.add(i);
        columnZeroContainer.add(j);
      }

      if (rowZeroContainer.size === input.length || columnZeroContainer.size === input[i].length) {
        allZeros = true;
        break;
      }
    }

    if (rowZeroContainer.size === input.length || columnZeroContainer.size === input[i].length) {
      allZeros = true;
      break;
    }

  }

  if (allZeros) {
    for (let i = 0; i < input.length; i++) {
      input[i].fill(0);
    }
    return input;
  }

  for (let i of rowZeroContainer) {
    for (let j = 0; j < input[i].length; j++) {
      input[i][j] = 0;
    }
  }

  for (let j of columnZeroContainer) {
    for (let i = 0; i < input.length; i++) {
      input[i][j] = 0;
    }
  }
  
  return input;

}

const input = [
  [1,2,3],
  [4,3,0],
  [7,0,9],
  [8,11,0],
  [9,0,0]
];

const input2 = [
  [0,0,0],
  [1,2,3],
  [4,5,6]
]

console.log(zeroMatrix(input))
