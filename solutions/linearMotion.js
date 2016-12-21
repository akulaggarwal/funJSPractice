class Animation {
  animate(speed, init) {
    this.initLength = init.length;
    this.finalOutput = new Array(this.initLength);
    this.finalOutput.fill('.')
    //debugger;
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
    this.currentPositions = currentPositions;

    this.render();

    //debugger;
    while (this.output.join('') !== this.finalOutput.join('')) {
      const frozenPositions = JSON.parse(JSON.stringify(this.currentPositions));
      //debugger;
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
    //debugger;
    this.currentPositions[i].L--;
    if ( (i - speed) > -1 ) {
      //debugger;
      this.currentPositions[i - speed].L++;
    }
  }

  moveRight(i, speed) {
    //debugger;
    this.currentPositions[i].R--;
    if ( (i + speed) < this.initLength) {
      //debugger;
      this.currentPositions[i + speed].R++;
    }
  }

  render() {
    //debugger;
    const output = new Array(this.initLength);
    output.fill('.')
    this.currentPositions.forEach( (v,i) => {
      if (v.L || v.R) {
        output[i] = 'X';
      }
    })
    console.log(output.join(''));
    this.output = output;
  }

}

const cern = new Animation();
cern.animate(1, '..L.R..');
cern.animate(2, "..R....");
cern.animate(3, "RR..LRL");
cern.animate(2, "LRLR.LRLR");
cern.animate(10, "RLRLRLRLRL");
cern.animate(1, "...");
cern.animate(1, "LRRL.LR.LRR.R.LRRL.");

/* Exposition:
The total time to do this problem took 2 hrs 20 min, before the writing of this
analysis. It was done as much as possible using ES2015 syntax. A bug which wasted
a lot of time to chase down can easily be avoided one minor fix: Indicate early
in problem definition that there can be any number of places, not just 7, as in
the first 3. That forces coder to account for length early on, instead of hard
coding it. Probably 15-20 min savings right there.

The gist/easy parts of this problem can be done within about 1.5 hours, maybe 1 hr,
but the full bug-free solution takes much longer, there's a lot to account for.

The other problem seemed quite fair, and do-able. But doing both within 2 hours,
which includes time to read and understand them both, is too much. Almost no one
will be able to do them, intern or not, unless they have 5+ years of decent experience.
But if the goal isnt to finish them in their entirity, then perhaps they can offer
a window into the user's coding ability and mind. But I would highly recommend
offering more like 3-4 hours total for the both challenges, especially for interns.
*/
