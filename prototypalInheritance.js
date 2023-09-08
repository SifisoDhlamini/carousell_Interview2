//prototypal Inheritance

'use strict';

let animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

//object binding
let name = {
  firstname: 'Scifi',
  lastname: 'TheDev',
  printFullName: function () {
    console.log(this.firstname + ' ' + this.lastname);
  },
};
name.printFullName();

//own implimentation of the bind method (polyfill)
let name1 = {
    firstname: 'John',
    lastname: 'Doe',
  },
  printFullName1 = function () {
    console.log(this.firstname + ' ' + this.lastname);
  },
  printMyName = printFullName1.bind(name1);

printMyName();

Function.prototype.myBind = function (...args) {
  //...args is a rest parameter that takes in any number of arguments
  let obj = this, //get the function
    params = args.slice(1); //get the first parameter
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printFullName1.myBind(name1);
printMyName2();

let name2 = {
  firstname: 'John',
  lastname: 'Doe',
};

//function borrowing
name.printFullName.call(name2);

//function borrowing with arguments
let name3 = {
    firstname: 'Jane',
    lastname: 'Doe',
  },
  printFullName = function (hometown, state) {
    console.log(
      this.firstname + ' ' + this.lastname + ' from ' + hometown + ', ' + state
    );
  };

printFullName.call(name3, 'Lagos', 'Nigeria');

//function borrowing with arguments using apply method
printFullName.apply(name3, ['Lagos', 'Nigeria']);

//function currying (using bind method)
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);
