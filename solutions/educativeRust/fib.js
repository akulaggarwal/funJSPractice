const fibMap = {};

function fib(n) {
  if (!n || n === 1) {
    return n;
  }

  if (!fibMap[n]) {
    fibMap[n] = fib(n-2) + fib(n-1);
  }

  return fibMap[n];
}

console.log(fib(6));
