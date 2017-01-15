function complexAdder(str, num) {
  console.log(str.length);
  const str2 = String(num);

  let carryOver = 0;
  let output = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const strDig = Number(str[i]);
    let str2Dig = 0;
    if (str2[i]) {
      str2Dig = str2[i];
    }

    const sum = strDig + str2Dig + carryOver;
    const sumStr = String(sum);
    let onesDig;

    if (sum > 9) {
      carryOver = 1;
      onesDig = sumStr[1];
    } else {
      carryOver = 0;
      onesDig = sumStr;
    }


    output = `${onesDig}${output}`
  }

  if (carryOver) {
    output = `1${output}`;
  }

  console.log(output.length);
  return output;

}

console.log(complexAdder('458495888888495485', 2348934));
