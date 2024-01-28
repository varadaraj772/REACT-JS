const a = [1, 2, 4, -5];

//This method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.
var find = (n) => {
  if (n == 3) {
    return true;
  }
  return false;
};
var val = a.some(find);
console.log(val);

//The array reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.
const sum = (sum, n) => {
  return sum + n;
};
var val = a.reduce(sum);
console.log(val);

//The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, the map() method is used to iterate over an array and call the function on every element of an array.
const sq = (n) => {
  return n * n;
};
var val = a.map(sq);
console.log(val);

//This method checks whether all the elements of the array satisfy the given condition or not that is provided by a function passed to it as the argument.
const ispos = (n) => {
  return n > 0;
};
var val = a.every(ispos);
console.log(val);

//This method creates a new array that contains more than arrays. Basically creates a simple array from an array that contains multiple arrays.
const b = [1, [11, 22, 33], 2, 3, 4, ["ab", "bc"]];
console.log(b);
var val = b.flat();
console.log(val);
for (i in val) {
  console.log(val[i]);
}

//his method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument function.
var val = a.filter(ispos);
console.log(val);

//This method is used to get the value of the first element in the array that satisfies the provided condition. It checks all the elements of the array and whichever the first element satisfies the condition is going to print.
const findneg = (n) => {
  return n < 0;
};
var val = a.find(findneg);
console.log(val);

//This method returns the index of the first element in a given array that satisfies the provided testing function. Otherwise, -1 is returned.
var val = a.findIndex(findneg);
console.log(val);

//This method is used to sort the array. An array can be of any type i.e. string, numbers, characters, etc.
const c = [5, 3, 2, 0, 1];
var val = c.sort();
console.log(val);

//This method is used to merge two or more arrays together. This function does not alter the original arrays passed as arguments.
var val = a.concat(b, c);
console.log(val);

//This method is used to know whether a particular element is present in the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false
console.log(a.includes(0));

//This method is used for in-place reversal of the array. The first element of the array becomes the last element and vice versa.
var val = a.reverse();
console.log(val);

//This method is used to fill the array with a given static value. The value can be used to fill the entire array or it can be used to fill a part of the array.
a.fill("a", 0, 3);
console.log(a);
