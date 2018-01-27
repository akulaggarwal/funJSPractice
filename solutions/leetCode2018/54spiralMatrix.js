function veryBadSolution(input) {
  const valIndeces = [0,0];
  const operations = [
    goRight,
    goDown,
    goLeft,
    goUp
  ];
  let opsIndex = 0;
  const maxOutputCtr = input[0].length * input.length;
  let outputCtr = 0;
  let minI = 0;
  let minJ = 0;
  let maxI = input[0].length;
  let maxJ = input.length;

  function goRight([i, j]) {
    const newI = i;
    const newJ = j + 1;
    valIndeces[0] = newI;
    valIndeces[1] = newJ;
  }

  function goDown([i, j]) {
    const newI = i + 1;
    const newJ = j;
    valIndeces[0] = newI;
    valIndeces[1] = newJ;
  }

  function goLeft([i, j]) {
    const newI = i;
    const newJ = j - 1;
    valIndeces[0] = newI;
    valIndeces[1] = newJ;
  }

  function goUp([i, j]) {
    const newI = i - 1;
    const newJ = j;
    valIndeces[0] = newI;
    valIndeces[1] = newJ;
  }


  while (outputCtr < maxOutputCtr) {
    let minLower;
    let maxUpper;

    if (opsIndex === 4) {
      opsIndex = 0;
      valIndeces[0]++;
      valIndeces[1]++;
      minI++;
      minJ++;
      maxI--;
      maxJ--;
    }

    if (opsIndex % 2) {
      minLower = minJ;
      maxUpper = maxJ;
    } else {
      minLower = minI;
      maxUpper = maxI;
    }

    for (let x = minLower; x < maxUpper; x++) {
      if (maxUpper - 1 === minLower && x === maxUpper - 1) { //edge case handling
        debugger;
        outputCtr++;
        console.log(input[valIndeces[0]][valIndeces[1]]);
        break;
      }
      if (x >= maxUpper - 1) {
        break;
      }
      console.log(input[valIndeces[0]][valIndeces[1]]);
      operations[opsIndex](valIndeces);
      outputCtr++;
    }
    // console.log(input[valIndeces[0]][valIndeces[1]]);
    opsIndex++;

  }


}

const input1 = [
  [ 1, 2, 3 ,'a'],
  [ 4, 5, 6, 'b'],
  [ 7, 8, 9, 'c'],
  ['x','y','z',0]
];


const input2 = [
  [ 1, 2, 3],
  [ 4, 5, 6],
  [ 7, 8, 9]
];

const input3 = [
  [ 1, 2, 3],
  [ 4, 5, 6]
];

const input4 = [
  [ 1, 2],
  [ 4, 5],
  [ 7, 8]
];

veryBadSolution(input1);
console.log('-------------');
veryBadSolution(input2);
console.log('-------------');
veryBadSolution(input3);
console.log('-------------');
veryBadSolution(input4);
