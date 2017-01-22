/* pg 203/216
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

function rotate(input) {
  const rotated90 = [];
  for (let i = 0; i < input.length; i++) {
    rotated90.push(new Array(input.length));
  }

  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input.length; column++) {
      const newRow = column;
      const newColumn = input.length - 1 - row;
      const val = input[row][column];
      rotated90[newRow][newColumn] = val;
    }
  }

  console.log(input);
  return rotated90;
}

function rotateInPlace(input) {
  const len = input.length;
  const circleIterator = Math.floor(input.length / 2);

  for (let j = 0; j < circleIterator; j++) { //number of rows to shift

    for (let i = j; i < len - j - 1; i++) { //number of vals in row to shift
      let lastCoords = [j, i + j];
      let lostVal = input[j][i + j];
      // debugger;
      for (let k = 0; k < 4; k++) { //0
        const newRow = lastCoords[1]; //0
        const newCol = len - 1 - lastCoords[0]; //4
        const oldVal = input[newRow][newCol]; //a
        input[newRow][newCol] = lostVal; //1
        lostVal = oldVal; //a
        lastCoords = [newRow, newCol]; //[0,4]
      }

    }

  }
  return input;

  //for j from 0 to Math.floor(input.length / 2) - 1
    //starting (row, col) = (j, j)
    //for i from 0 to input.length - j - 1
      //starting (row, col) = (j, j + i)
      //for k from 0 to 3
        //use current (row, col) and length to find new coords, store new coords
        //store val about to be lost
        //replace old val

}

const input = [
  [1,  2,  3,  4,  'a'],
  [5,  6,  7,  8,  'b'],
  [8,  10, 11, 12, 'c'],
  [13, 14, 15, 16, 'd'],
  ['e','f','g','h','i']
];

console.log(rotate(input));
console.log(rotateInPlace(input));
