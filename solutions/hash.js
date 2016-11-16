const LL = require('./linkedlist');

console.log(LL);

function HashTable(val) {
  const firstLinkedList = new LL.generateLL(val);
  this.table = [firstLinkedList];
  this.counter = 1;
  this.doubleSize();
}

HashTable.prototype.generateHash = function(key, length) {
  return key % length;
}

HashTable.prototype.add = function(obj) {
  //generateHash(key)
  const hash = this.generateHash(Object.keys(obj)[0], this.table.length);
  //check table[hash] !has linked list in it
  if (!this.table[hash]) {
    //createLinkedList(hash)
    const linkedList = new LL.generateLL(obj);
    this.table[hash] = linkedList;
  } else { //add to linkedList
    this.table[hash].addVal(obj);
  }
  this.counter++;

  debugger;

  //check if table is filled %80 or more of the way
  if (this.counter >= .8 * this.table.length) {
    //doubleSize()
    this.doubleSize();
  }
}

HashTable.prototype.doubleSize = function() {
  //store each value in table in temporary data structure
  const newTable = new Array(this.table.length * 2);
  debugger;
  const tempStorage = [];
  //replace old table with new one, with double size
  this.table.forEach( linkedList => {
    const vals = linkedList.find('anything', ['double', []]);
    vals.forEach( val => {
      tempStorage.push(val);
    })
  })

  //run through add()
  this.table = newTable;
  this.counter = 0;
  tempStorage.forEach( val => {
    this.add(val);
  })

}

function lookup(key) {
  //set hash = generateHash(key)
  //set currentLL = table[hash];
  //run through LL until found
  //return val
  //handle edge case: not in table
}

function remove(key) {

  //check if table is filled less than %40 of the way
    //halveSize()
}

function halveSize(){

}

const newHashTable = new HashTable({2: 'orange'});
newHashTable.add({3: 'apple'});
newHashTable.add({3: 'blueberry'})
