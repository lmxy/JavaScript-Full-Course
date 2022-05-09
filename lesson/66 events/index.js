// onload
// onclic


// const element = document.getElementById("myButton");
// element.onclick = doSomething;
const element = document.getElementById("myDiv");

// const element = document.body;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
  // alert("You did something!");
  element.style.backgroundColor = "red";
}
function doSomethingElse(){
  element.style.backgroundColor = "lightgreen";
}