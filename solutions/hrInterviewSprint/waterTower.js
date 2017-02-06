const input = [5,2,3,8,1,3];
console.log(collectWater(input)); //7

function collectWater(input) {
  const lookUp = input.map( (v, i) => {
    return {v, l: null, r: null};
  })

  lookUp[0].l = 0;
  lookUp[lookUp.length - 1].r = 0;
  let maxLeft = input[0];
  let maxRight = input[input.length - 1];
  let waterCounter = 0;

  for (let i = 1; i < lookUp.length - 1; i++) {
    const tower = lookUp[i];
    tower.l = Math.max(lookUp[i - 1].l, maxLeft);
    maxLeft = Math.max(maxLeft, tower.v);
  }

  for (let i = lookUp.length - 2; i > 0; i--) {
    const tower = lookUp[i];
    tower.r = Math.max(lookUp[i + 1].v, maxRight);
    maxRight = Math.max(maxRight, tower.v);

    const minLeftRight = Math.min(tower.l, tower.r);
    if (minLeftRight > tower.v) {
      const waterHeight = minLeftRight - tower.v;
      waterCounter += waterHeight;
    }
  }

  return waterCounter;
}
