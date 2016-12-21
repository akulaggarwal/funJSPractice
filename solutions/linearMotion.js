// start: 2:50
//pause 4:10
//start 12:34


class Animation {
  animate(speed, init) {
    debugger;
    console.log('---ANIMATE METHOD---');
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
    console.log();
    this.currentPositions = currentPositions;

    this.render();

    debugger;
    while (this.output.join('') !== '.......') {
      console.log(this.output);
      console.log('---WHILE LOOP---');
      const frozenPositions = JSON.parse(JSON.stringify(this.currentPositions));
      debugger;
      frozenPositions.forEach( (spot, i, frozen) => {
        if (spot.L) {
          this.moveLeft(i, speed);
        }

        if (spot.R) {
          this.moveRight(i, speed);
        }


      }) //end of forEach
      this.render();
    } //end of while loop
  }

  moveLeft(i, speed) {
    debugger;
    this.currentPositions[i].L = 0;
    if ( (i - speed) > -1 ) {
      debugger;
      this.currentPositions[i - speed].L++;
    }
  }

  moveRight(i, speed) {
    debugger;
    this.currentPositions[i].R = 0;
    if ( (i + speed) < 7) {
      debugger;
      this.currentPositions[i + speed].R++;
    }
  }

  render() {
    debugger;
    console.log('---CURRENTPOSITIONS METHOD---');
    const output = new Array(7);
    output.fill('.')
    this.currentPositions.forEach( (v,i) => {
      if (v.L || v.R) {
        output[i] = 'X';
      }
    })
    console.log(output.join(''));
    this.output = output;
    console.log(this.output.join('') !== '.......');
  }

}

// Animation.prototype.animate = function(speed, init) {
//   this.r = 'a';
//   console.log(speed, init);
//   // console.log(this.r);
// }

const cern = new Animation();
cern.animate(1, '..L.R..')
