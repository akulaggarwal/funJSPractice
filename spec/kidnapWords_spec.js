const kidnap = require('../solutions/kidnapWords');

describe('kidnapper', () => {
  const magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
  const ransom = [ 'give', 'one', 'grand', 'today' ];
  const m = magazine.length;
  const n = ransom.length;



  it ('should make sure main inputs are arrays', () => {
    expect(Array.isArray(magazine)).toBeTruthy();
    expect(Array.isArray(ransom)).toBeTruthy();
  })

  it('should return yes', ()=> {
    expect(kidnap(m, n, magazine, ransom)).toBe('Yes')
  })
})
