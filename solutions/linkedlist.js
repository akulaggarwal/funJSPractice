function generateLL(val0) {
  const val = {val: val0, next: null};
  this.tail = {next: val};
  this.head = {next: val};
  val.next = tail;
}
