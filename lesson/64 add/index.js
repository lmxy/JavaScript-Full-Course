// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)
/*
const nameTag = document.createElement("h1");
// nameTag.innerHTML = "Bro";
nameTag.textContent = window.prompt("Enter your name");
document.body.append(nameTag);
*/

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mago";
// myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);