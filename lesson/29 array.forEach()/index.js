// array.forEach() = executes a provided callback function
//                   once for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);

function capitalize(element, index, array){
    // console.log(element);
    // console.log(index);
    // console.log(array);
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(i){
    console.log(i);
}

students.forEach(print);
