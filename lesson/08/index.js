// slice() extracts a section of a string
//         and returns it as a new sting,
//         without modifying the original string

let fullName = "David Ayato";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
 