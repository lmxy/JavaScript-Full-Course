// The Date object is used to work with dates & times

let date = new Date();

// let date = new Date(2023, 0, 1, 15, 3, 4, 15);
// let date = new Date("January 1, 2023 05:06:07");

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();

/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(30)
date.setHours(5);
*/


// date = date.toLocaleString();
// console.log(date);
document.getElementById("myLabel").innerHTML = formatTime(date);
// document.getElementById("myLabel").innerHTML = dayOfMonth;

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    
    return `${month}/${day}/${year}`
}
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}

