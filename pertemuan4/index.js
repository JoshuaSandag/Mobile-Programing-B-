//Array

//let numbers = [1, 2, 3, 4, 5];
//let john = ('john', 'Doe', 33, true);

//let numbers = new Array(1, 2, 3 ,4 ,5);
//let john = new Array ('John', 'Doe', 33, true);

//john[3] = false;
//console.log(numbers[numbers.length - 1]);
//console.log(john[john.length - 1]);

//
//object
const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    isMarried: true,
    sayHello: function () {
        console.log("hello");
    }
    
};

//console.log(john);

//const john = new Object();
//john.firstName = 'John';
//john.lastName = "Doe";
//john.age = 33;
//john.isMarried = true;

console.log(john.lastName);
console.log(john["isMarried"]);

john.address = "Manado";
john["nationality"] = "Indonesia";
console.log(john);

john.sayHello();

//let scores = [90, 95, 100];
//let arrJohn = ["John", "Doe", 33, true, scores];

//console.log(arrJohn[4][1]);

//let objJohn = {
  //  firstName : "John",
    //lastName : "Doe",
   // age : 33,
    //scores : [85, 90, 100],

//};

//console.log(objJohn.firstName);
//console.log(objJohn["scores"][1]);

//let users = [
  //  {
    //    fullName : "John Doe",
      //  age: 33,
        //address : "Manado",
    //},
    //{
      //  fullName:"Joshua Sandag", 
        //age : 20,
        //address : {
          //  street : "Jl. pomorow 8",
            //city : "Palu",
            //province : "Sulut",
            //postCode : "19902",
        //}
   // },
    //{
      //  fullName:"Gregory will",
        //age :22,
      //  address : Jakarta
   // },

//];