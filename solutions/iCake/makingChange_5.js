function makeChange(n) {
  //base cases:
  if (n < 0){
    return 0;
  }

  if (!n) {
    return 1;
  }

  if (memoMap[n]) {
    return memoMap[n];
  } else {
    memoMap[n] = makeChange(n - 1) + makeChange(n - 2) + makeChange(n - 3);
  }
  return memoMap[n];


}

const memoMap = {};
// const denominations = [1,2,3];
const n = 10;
console.log(makeChange(n));
