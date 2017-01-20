function Parent() {
  obj.prop1 = "R";
  return obj;
}

function Child() {
  obj = Object.create(Parent);
  obj.prop2 = 'A';

  return obj;
}

const little = Child();


// function Parent() {
//   this.prop1 = 'R';
// }
//
// function Child() {
//   Parent.call(this);
// }

// const little = new Child();



console.log(Object.keys(little));
