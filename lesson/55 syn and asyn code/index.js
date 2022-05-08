// synchronous code = In an ordered seruence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex. Access a database.
//                         Fetch a file
//                         Tasks that take time
//                     (start now, finish sometime later)

console.log("START");
// console.log("This step is synchronous");
setTimeout(() => console.log("This a asynchronous"), 5000);
console.log("END");