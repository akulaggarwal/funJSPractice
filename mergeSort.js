//Merge Sort

const input = [1,5,7,3,7,8,3,8, 9, 9, 11, 4, 1, 99, 99, 1];
console.log('input: ', input);
console.log('input length: ', input.length);

function sorter(input) {
  //split array into multiple arrays
  const split = input.map( (el) => {
    return [el];
  })
  //run each time on split arrs
  function reducer(original) {
    const newSplit = [];
    //Note: look up rules for i++ ++i i+# etc.
    //n = each el in "original" arr
    for (n = 0; n < original.length; n = n + 2) {
      n1 = original[n]; //first of two arrays
      newSplit.push(n1);
      //last array in mySplit, since that's the one we're currently populating
      lastN = newSplit[newSplit.length - 1];
      n2 = original[n+1]; //second of 2 arrays
      console.log('n1: ', n1, ' newSplit: ', newSplit, 'lastN: ', lastN,  'n2: ', n2);
      // j = each el in second n arr
      for (j = 0; j < n2.length; j++) {
        let greaterThanAll = true;
        targetEl = n2[j];
        //i = each el in first n arr
        for (i = 0; i < n1.length; i++) {
          comparatorEl = n1[i];
          console.log('targetEl <= comparatorEl', targetEl, comparatorEl);
          if (targetEl <= comparatorEl) {
            lastN.splice(i, 0, targetEl);
            console.log('target less than comparator: ', lastN);
            greaterThanAll = false;
            break;
          }
        }
        if (greaterThanAll) {
          lastN.push(targetEl);
        }
      }
    }
    console.log('result: ', newSplit, 'length: ', newSplit[0].length);
    while (newSplit[0].length !== input.length) {
      reducer(newSplit);
    };
    console.log('final: ', newSplit[0]);
    return newSplit[0];
  }

  reducer(split);
}

sorter(input);
module.exports = sorter;
