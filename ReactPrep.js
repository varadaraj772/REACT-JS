//variables
var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c);

//Functions & arrow functions
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 5));
const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(10, 10));

//Objects
const obj1 = { Name: "varadaraj", Rollno: 21821, Class: "3rd BCA" };
console.log(obj1);

//Object Destructring
let { Name: s1_name, Rollno: s1_rollno } = obj1;
console.log("Student 1 name is " + s1_name);
console.log("Student 1 Rollnumber is " + s1_rollno);

//Array Destructuring
let vehicles = ["Raptor R", "Defender", "R15"];
let [Truck, SUV, Bike] = vehicles;
console.log("Truck is " + Truck);
console.log("SUV is " + SUV);
console.log("Bike is " + Bike);

//Spread operator
let arr1 = [5, 6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, ...arr1];
console.log(arr1);
console.log(arr2);

//Rest operator
function myFun(a, b, ...manyMoreArgs) {
  console.log("a :" + a);
  console.log("b:" + b);
  console.log("Other arguments :", manyMoreArgs);
}
myFun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Promise
let Promise1 = new Promise(function (myResolve, myReject) {
  let x = 6;
  if (x == 5) {
    myResolve();
  } else {
    //if gives any error
    myReject();
  }
});

Promise1.then(
  function (value) {
    console.log("Your Code is working fine");
  },
  function (error) {
    console.log("Your Code is giving error");
  }
);
