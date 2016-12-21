// start: 2:50
//pause 4:10
//start 12:34
//pretty much finished 12:55
//fix last bug: 1:28
//total time: 

class Animation {
  animate(speed, init) {
    this.initLength = init.length;
    this.finalOutput = new Array(this.initLength);
    this.finalOutput.fill('.')
    debugger;
    //console.log('---ANIMATE METHOD---');
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
    //console.log();
    this.currentPositions = currentPositions;

    this.render();

    debugger;
    while (this.output.join('') !== this.finalOutput.join('')) {
      // console.log(this.output.join(''));
      //console.log('---WHILE LOOP---');
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
    this.currentPositions[i].L--;
    if ( (i - speed) > -1 ) {
      debugger;
      this.currentPositions[i - speed].L++;
    }
  }

  moveRight(i, speed) {
    debugger;
    this.currentPositions[i].R--;
    if ( (i + speed) < this.initLength) {
      debugger;
      this.currentPositions[i + speed].R++;
    }
  }

  render() {
    debugger;
    //console.log('---CURRENTPOSITIONS METHOD---');
    const output = new Array(this.initLength);
    output.fill('.')
    this.currentPositions.forEach( (v,i) => {
      if (v.L || v.R) {
        output[i] = 'X';
      }
    })
    console.log(output.join(''));
    this.output = output;
    // console.log(this.output.join('') !== '.......');
  }

}

const cern = new Animation();
// cern.animate(1, '..L.R..');
// cern.animate(2, "..R....");
// cern.animate(3, "RR..LRL");
// cern.animate(2, "LRLR.LRLR");
// cern.animate(10, "RLRLRLRLRL");
// cern.animate(1, "...");
cern.animate(1, "LRRL.LR.LRR.R.LRRL.");
