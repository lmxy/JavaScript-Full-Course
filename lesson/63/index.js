let element = document.querySelector("#dessert");
// let parent = element.parentElement;
let children = Array.from(element.children);
console.log(children);
children.forEach(child => child.style.backgroundColor = "pink");

// let parent = element.parentElement;
// sibling.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// .Array.from(.children)