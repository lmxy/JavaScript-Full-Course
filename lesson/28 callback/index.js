// callback = a function passed as an argument
//            to another function.

//  Ensure that a function is not going
//  to run before a task is completed.
//  Helps us develop asynchronous code.
//  (When one function has to wait for another function)
//  that helps us avoid errors and potentail problems
//  Ex. Wait for a file to load

sum(6, 3, displayDOM);
sum(5, 3, displayConsole);

function sum(x, y, func){
    let result = x + y;
    func(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}