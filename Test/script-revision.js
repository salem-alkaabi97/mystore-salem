// var container = document.getElementById("container");
// container.innerHTML = "Ashish";

// document.getElementById("container").innerHTML = "Ashish";

// var container = document.getElementById("container");
// var nameNode = document.createTextNode("Ashish");
// container.appendChild(nameNode);

// IIFE

// (function (){
//     console.log("IIFE Function")
// })();

// function log(){
//     console.log("Normal Function")
// }

// Nested Functions
// returns inner function
// var a = (function(value) {
//   return function() {
//     console.log(value);
//   };
// })(10);
// console.log(a);

// returns value
// var a = (function(value) {
//   return value();
// })(10);
// console.log(a);

//Mutability
// var obj = { name: "Ashish" };
// var obj2 = obj2;
// obj2.name = "Magic";
// console.log(obj1.name);
// console.log(obj1 === obj2);

// // two different memory locations = false
// var obj1 = { name: "Ashish" };
// var obj2 = { name: "magic" };
// console.log(obj1 === obj2);

// // context
// var obj = {
//   name: "Ashish",
//   logName: function() {
//     var name = "Magic";
//     console.log(this.name);
//   }
// };
// obj.logName();
