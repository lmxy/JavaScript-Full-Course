// const display = document.querySelector(".class",{index:0})
const cells = document.querySelectorAll(".cell");
const player1 = "X"; 
const player2 = "O";
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let currentPlayer = player1;
let score;
sta.innerHTML = `${currentPlayer}'s TURN!`;


function play(){
  document.querySelector(".cell").innerHTML = currentPlayer;
}

