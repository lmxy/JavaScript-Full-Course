// rest parameters = represents an indefinite number
//...                of parameters
//                   (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, 3, d));

function sum(x, y, ...numbers){
    let total = x + y;
    for(let number of numbers){
        console.log(number);
        total += number;
    }
    return total;
}