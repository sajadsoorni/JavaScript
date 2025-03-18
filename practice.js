'use strict';
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// const sajad = {
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// sajad.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = sajad.calcAge;
// matilda.calcAge();

// const f = sajad.calcAge;
// f();
///////////////////////////////////////////////

// var firstName = 'Mahtab';

/*
const sajad = {
  firstName: 'Sajad',
  year: 1989,
  calcAge: function () {
    // console.log(this);
    console.log(2025 - this.year);

    // Solution 1

    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

// sajad.greet();
sajad.calcAge();

*/

/*

// Arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 77);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

*/

// Object References in Practice ( Shallow vs . Deep Copies )

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(OriginalPerson, newLastName) {
  OriginalPerson.lastName = newLastName;
  return OriginalPerson;
}

const marriedJesica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After', marriedJesica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow Copy

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before:', jessica);
// console.log('After', jessicaCopy);

// Deep Copy
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');
console.log('Original:', jessica);
console.log('Clone', jessicaClone);
