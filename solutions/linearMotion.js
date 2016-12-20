// start: 2:50

class Animation {
  animate(speed, init) {
    // let positisionsArr =;
    const currentPositions = [...init].map( (v, i) => {
      const obj = {L: 0, R: 0};
      if (v === 'R') {
        obj.R++
      }
      if (v === 'L') {
        obj.L++
      }
      return obj;
    })
    console.log(currentPositions);

    this.render(currentPositions);

    /*while (currentPosition !== '.......') {
      for (let i in currentPosition) {
        const spot = currentPosition[i]; //will be R, L, or .

        if (spot === 'L') {
          this.moveLeft(i, speed);
        }

        if (spot === 'R') {
          this.moveRight(i, speed);
        }


      }
    }*/
  }

  moveLeft() {

  }

  moveRight() {

  }

  render(currentPositions) {
    const output = new Array(7);
    output.fill('.')
    currentPositions.forEach( (v,i) => {
      if (v.L || v.R) {
        output[i] = 'X';
      }
    })
    console.log(output.join(''));
  }


}

// Animation.prototype.animate = function(speed, init) {
//   this.r = 'a';
//   console.log(speed, init);
//   // console.log(this.r);
// }

const cern = new Animation();
cern.animate(4, '...R...')

function mover() {

}
