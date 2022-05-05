// array = think of it as a variable
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];

// fruits[10] = "coconut";

fruits.push("lemon"); // add an elemnt
fruits.pop();         // removes last element
fruits.unshift("mengo");// add element to beginning
fruits.shift()          // removes element from beginnig

let length = fruits.length;

let index = fruits.indexOf("banana");


console.log(index);
console.log(fruits);