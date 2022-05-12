// const display = document.querySelector(".class",{index:0})
const sta = document.getElementById("status");
const player1 = "X"; 
const player2 = "O";
let currentPlayer = player1;
let score;
sta.innerHTML = `${currentPlayer}'s TURN!`;

// goOn();

function play(){
  document.querySelector(".cell").innerHTML = currentPlayer;
}

