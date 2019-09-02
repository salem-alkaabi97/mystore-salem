// var container = document.getElementById("container"); // Reading from html
// var name = "Ashish"; // Creating a new node
// container.innerHTML = name; // Writing to html

// document.getElementById("container").innerHTML = "Ashish"; // All 3 together

// var container = document.getElementById("container"); // Reading from html
// var nameNode = document.createTextNode("Magic"); // Creating a new node
// container.appendChild(nameNode); // Writing to html

// IIFE
// (function(value) {
//   console.log(10);
// })(10);
// var a = (function(value) {
//   return value;
// })(10);
// console.log(a);

// Nested Function
// var a = (function(value) {
//   return function() {
//     console.log(value);
//   };
// })(10);
// a();
// console.log(value);

// var a = function(value) {
//   return function() {
//     console.log(value);
//   };
// };
// a(10)();

// Mutability
// var obj1 = { name: "Ashish" };
// var obj2 = obj1;
// obj2.name = "Magic";
// console.log(obj1 === obj2);

// var obj1 = { name: "Ashish" };
// var obj2 = { name: "Magic" };
// console.log(obj1 === obj2);

// Context
// function outer() {
//   console.log(this.name);
//   var obj = {
//     name: "Ashish",
//     logName: () => {
//       console.log(this.name);
//     }
//   };
//   obj.logName();
// }
// outer.call({ name: "Magic" });
// outer();

// call, apply and bind
// function outer(value1, value2) {
//   console.log(value1 + value2);
//   console.log(this.name);
// }
// outer.call({ name: "Magic" }, 10, 20);
// outer.apply({ name: "Ashish" }, [10, 20]);
// var newOuter = outer.bind({ name: "Salem" });
// newOuter(10, 20);

// Scope and Hoisting
// var a = 20;
// function testScope() {
//   var a;
//   console.log(a); // undefined 20
//   a = 10;
//   console.log(a); // 10
//   a = 30;
//   console.log(a); //30
// }
// testScope();

// Array and Array Methods
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.map(number => number * 2)); // [2,4,6,8,10]
// console.log(arr.filter(number => number > 2)); //   [3,4,5]
// console.log(arr.every(number => number > 0)); //    true
// console.log(arr.some(number => number > 4)); //     true
// console.log(arr.find(number => number == 4)); //    4
// console.log(arr.reduce((acc, number) => acc + number, 0)); //   15

// let
// 1. Cannot redefine the same variable
// 2. Not Hoisted
// 3. It has a block scope

// function testLet() {
//   let a = 20;
//   if (a > 10) {
//     let b = 50;
//     console.log(a); // 20
//     console.log(b); // 50
//     a = 40;
//     b = 100;
//   }
//   console.log(a); // 40
//   console.log(b); // Not Defined
// }
// testLet();

// const
// 4. The value is a constant.

// function testConst() {
//   const a = 20;
//   if (a > 10) {
//     a = 30; // Error
//     console.log(a);
//     a = 40;
//   }
//   console.log(a);
// }
// testConst();

// spread operator
// var obj1 = { car: "Patrol", wheels: 4, color: "white" };
// var obj2 = { ...obj1, wheels: 5, color: "red" };
// console.log(obj2); // { car: "Patrol", wheels: 5, color: "red" }
// console.log(obj2 === obj1); //  false

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [...arr1];
// console.log(arr2); // [1, 2, 3, 4, 5]
// console.log(arr1 === arr2); // false

// rest operator
// function ignoreFirst(first, ...rest, second) {
//   console.log(rest);
//   console.log(second);
// }
// ignoreFirst(1, 2, 3, 4, 5, 6); // []

// Destruturing + rest operator
// var { color, wheels, car } = { car: "Patrol", wheels: 4, color: "white" };
// console.log(color);
// console.log(wheels);
// console.log(car);

// class Parent {
//   static seniorCitizenCount = 0;
//   static nonSeniorCitizenCount = 0;
//   constructor(lName, age) {
//     this.lName = lName;
//     this.age = age;
//     if (age > 65) {
//       Parent.seniorCitizenCount++;
//     } else {
//       Parent.nonSeniorCitizenCount++;
//     }
//   }
//   get isSeniorCitizen() {
//     return this.age > 65;
//   }
// }
// class Child extends Parent {
//   constructor(fName, lName, age) {
//     super(lName, age);
//     this.fName = fName;
//   }
//   get fullName() {
//     return `${this.fName} ${this.lName}`;
//   }
// }
// var mark = new Child("Mark", "Jones", 23);
// var steve = new Child("Steve", "Jones", 73);
