function generateLL(val0) {
  const val = {val: val0};
  this.tail = val;
  this.head = val;
  val.next = this.tail;
}

const initialLL = new generateLL('5');
