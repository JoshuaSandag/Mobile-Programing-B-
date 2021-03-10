// let scores = [90, 95, 100];
// let arrJohn = ["John", "Doe", 33, true, scores];

// console.log(arrJohn[4][1]);

// let objJohn = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
//   scores: [85, 90, 100],
// };

// console.log(objJohn.firstName); //dot notation
// console.log(objJohn["scores"][1]); //bracket notation

//Array Object
// let users = [
//   {
//     fullName: "John Doe",
//     age: 33,
//     address: {
//       street: "Jl. Arnold Mononutu",
//       city: "Minahasa Utara",
//       province: "Sulawesi Utara",
//       postCode: "95371",
//     },
//   },
//   {
//     fullName: "Stenly Adam",
//     age: 33,
//     address: {
//       street: "Jl. Arnold Mononutu",
//       city: "Minahasa Utara",
//       province: "Sulawesi Utara",
//       postCode: "95371",
//     },
//   },
//   {
//     fullName: "Jane Doe",
//     age: 25,
//     address: {
//       street: "Jl. Arnold Mononutu",
//       city: "Manado",
//       province: "Sulawesi Utara",
//       postCode: "95371",
//     },
//   },
// ];

let users = [
  {
    fullName: "John Doe",
    age: 33,
  },
  {
    fullName: "Stenly Adam",
    age: 25,
  },
  {
    fullName: "Jane Smith",
    age: 35,
  },
];

let numbers = [1, 2, 3, 4, 5];

// // for (let i = 0; i <= numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// numbers.forEach(function (number) {
//   console.log(number * 2);
// });

// let output = numbers.map(function (number) {
//   return (number *= 2);
// });

// console.log("Array numbers ", numbers);
// console.log("Array output ", output);

// users.map(function (item) {
//   console.log(item.fullName);
// });

// let filterUser = users.filter(function (item) {
//   return item.address.city === "Minahasa Utara";
// });

// let findUser = users.find(function (item) {
//   return item.address.city === "Minahasa Utara";
// });

// console.log("filter ", filterUser);
// console.log("find ", findUser);