function generateLL(val0) {
  const val = {val: val0};
  this.tail = {next: val, val: null};
  this.head = {val: null, next: val};
  val.next = this.tail;
}

generateLL.prototype.addVal = function(val) {
  const newVal = {val, next: this.tail};
  this.tail.next.next = newVal;
  this.tail.next = newVal;
}

/**
 * [mostly useful for remove func]
 * @param  {[varchar]} val [actual value to find]
 * @param  {[type]} remove [either true, or not passed in]
 * @return {[type]}        [object itself, or object and parent]
 */
generateLL.prototype.find = function(val, remove) {
  function deeper(obj, remove, oldObj) {
    if (obj.val === null) {
      return null;
    }
    if (val === obj.val) {
      if (remove) {
        return [obj, oldObj];
      }
      return obj;
    }
    return deeper(obj.next, remove, obj);
  }
  return deeper(this.head.next, remove, this.head);
}

generateLL.prototype.remove = function(val) {
  /**
   * [object to be removed, 0th el = obj, 1st element = parent of obj]
   * @type {[array]}
   */
  const removeObj = this.find(val, true);
  if (!removeObj) {
    return "no such val";
  }
  const parent = removeObj[1];
  const current = removeObj[0];
  parent.next = current.next;
  current.next = null;
}

module.exports = {generateLL};

// const newList = new generateLL(4);
// newList.addVal(6);
// newList.addVal(7);
// newList.addVal(8);
// const val7 = newList.find(4);
// newList.remove(4);
