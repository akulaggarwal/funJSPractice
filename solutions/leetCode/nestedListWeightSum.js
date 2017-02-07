const input = [7,[3,5,[2],4,[[5]]],1]; //58


//crappy, but fast solution

let result = 0;


function weightSummer(input, level) {
  if (!Array.isArray(input)) {
    result += input * level;
    return;
  }

  for (let i = 0; i < input.length; i++) {
    const val = input[i];
    weightSummer(val, level + 1);
  }
}

weightSummer(input, 0);
console.log(result);
