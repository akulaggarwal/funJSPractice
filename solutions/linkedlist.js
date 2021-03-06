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
 * @param  {[type]} option [either 'remove', not passed in at all, or ['double', []]]
 * @return {[type]}        [object itself, or object and parent]
 */
generateLL.prototype.find = function(val, option) {
  function deeper(obj, option, oldObj) {
    if (obj.val === null) {
      if (option[0] === 'double') {
        return option[1];
      }
      return null;
    }
    if (val === obj.val) {
      if (option === 'remove') {
        return [obj, oldObj];
      }
      return obj;
    }
    debugger;
    if (option === 'only key' && Object.keys(obj.val)[0]) {
      return obj.val;
    }
    if (option[0] === 'double') {
      option[1].push(obj.val);
    }
    return deeper(obj.next, option, obj);
  }
  return deeper(this.head.next, option, this.head);
}

generateLL.prototype.remove = function(val) {
  /**
   * [object to be removed, 0th el = obj, 1st element = parent of obj]
   * @type {[array]}
   */
  const removeObj = this.find(val, 'remove');
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
