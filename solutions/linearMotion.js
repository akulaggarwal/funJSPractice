// start: 2:50

class Animation {
  animate(speed, init) {
    this.r = 'a';
    console.log(speed, init);
    // console.log(this.r);
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
