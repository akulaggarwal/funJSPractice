/*pg 236/248
Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
*/

function MyQueue() {
  this.stack1 = [];
  this.stack2 = [];
  // this.lastOp = 'push';
}

MyQueue.prototype.pushOp = function(val) {
  if (!this.stack2.length) {
    this.stack1.push(val);
  } else {
    const elemCount = this.stack2.length;
    for (let i = 0; i < elemCount; i++) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(val);
  }

   console.log(this.stack1, this.stack2);
}

MyQueue.prototype.popOp = function() {
  // debugger;
  if (!this.stack1.length && !this.stack2.length) {
    return 'error';
  } else if (!this.stack1.length) {
    debugger;
    return this.stack2.pop();
  } else {
    const elementCount = this.stack1.length;
    for (let i = 0; i < elementCount; i++) {
      this.stack2.push(this.stack1.pop());
    }
    // debugger;
    return (this.stack2.pop());
  }

}

const myQueue = new MyQueue();
myQueue.pushOp(1);
myQueue.pushOp(2);
myQueue.pushOp(3);
myQueue.pushOp(4);
console.log(myQueue.popOp());  //1
console.log(myQueue.popOp());  //2
myQueue.pushOp(5);             //3,4,5
console.log(myQueue.popOp());  //3
