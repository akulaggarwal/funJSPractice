function kidnap(m, n, magazine, ransom) {
  const magSet = {};
  for (let val of magazine) {
    if (magSet[val]) {
      magSet[val]++
    }
    else {
      magSet[val] = 1;
    }
  }
  // debugger;
  for (let val of ransom) {
      if (!magSet[val]) {
        return 'No';
      }
      magSet[val]--;
      debugger;
  }
  return 'Yes';
}

const m = 6;
const n = 4;
const magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
const ransom = [ 'give', 'one', 'grand', 'today' ];

console.log(kidnap(m, n, magazine, ransom));

module.exports = kidnap;
