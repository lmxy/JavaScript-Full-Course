// error = object with a description of
//         something went wrong

//         Can't open a file
//         Lose connection
//         User types incorrect input
//         TypeError

// throw = executes a user-defined error
// console.lag();

try{
    let x = window.prompt("Enter a Number #:");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";

    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always exectutes");
}