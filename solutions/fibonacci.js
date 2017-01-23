function simpleFib(n) {
  let val1 = 1;
  let val2 = 1;
  for (let i = 2; i < n; i++) {
    temp = val2;
    val2 = val1 + val2;
    val1 = temp;
  }

  return val2;
}

function backwardsFib(n) {
  if (n <= 2) {
    return 1;
  }

  return backwardsFib(n - 1) + backwardsFib(n - 2);
}

console.log(simpleFib(6))
console.log(backwardsFib(6));
// 1 1 2 3 5 8

const fibStore = {};

function recursiveMemoFib(n) {
  if (n <= 2) {
    return 1;
  }

  if (fibStore[n]) {
    return fibStore[n];
  }

  fib1 = recursiveMemoFib(n - 1);
  fib2 = recursiveMemoFib(n - 2);
  fibStore[n] = fib1 + fib2;
  return fibStore[n];
}

console.log(recursiveMemoFib(6));
