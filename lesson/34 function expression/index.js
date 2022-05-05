// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with
//                       Write it, then foget about it

let count = 0;

document.getElementById("increase").onclick = function(){
  count+=1;
  document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decrease").onclick = function(){
  count-=1;
  document.getElementById("myLabel").innerHTML = count;
}
/*
function increaseCount(){
  count+=1;
  document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount(){
  count-=1;
  document.getElementById("myLabel").innerHTML = count;
}
*/