// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
// };

// person.firstName = "Joshua";
// person.address = "Manado";

// console.log(person);

//Hello, nama saya John Doe. Umur saya 33 tahun.
// let kalimat =
//   "Hello, nama saya " +
//   person.firstName +
//   " " +
//   person.lastName +
//   ". Umur saya " +
//   person.age +
//   " tahun.";

// let kalimat6 = `Hello, nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`;

// console.log(kalimat);
// console.log(kalimat6);

//Arrow Function

//Function declaration
// function sayHello() {}
// //Function Ekspression
// const sayHello2 = function () {};

// const sayHello3 = (param1, param2 = "Adam") => `Hello ${param1} ${param2}`;

// console.log(sayHello3("Jay", "Doe"));

// const display = (param1, param2, ...rest) => {
//   console.log(param1, param2, rest);
// };

// display(1, 2, 3, 4, 5, 6, 7);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [8, 9];

// const newArr = [...arr1];
const combineArr = arr1.concat(arr2.concat(arr3));
const combineArr6 = [...arr1, ...arr2, ...arr3];

console.log(combineArr6);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
};

person = {
  ...person,
  address: "Manado",
  job: "Teacher",
};

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combineObj = { ...obj1, ...obj2 };

// person.address = "Manado";
// person.job = "Teacher";

console.log(combineObj)