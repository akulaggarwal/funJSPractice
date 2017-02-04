function Parent() {
  const obj = Object.create(Parent.prototype);
  obj.prop1 = "R";
  return obj;
}

function Child() {
  const obj = Parent();
  obj.prop2 = 'A';

  return obj;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const little = Child();


// function Parent() {
//   this.prop1 = 'R';
// }
//
// function Child() {
//   Parent.call(this);
// }
//
//  Child.prototype = Object.create(Parent.prototype);
//  Child.prototype.constructor = Child;
//
//
// const little = new Child();



console.log(Object.keys(little));
console.log(little.prop1)
