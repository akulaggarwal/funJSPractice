const merger = require('../solutions/mergeSort');

describe("merger", function() {

  it("should sort to a increasing order array", function() {
    expect(JSON.stringify(merger([1,4,2,5]))).toBe(JSON.stringify([1,2,4,5]));
  });

});
