const statusText = document.querySelector('h2')
const cells = document.querySelectorAll('#cell')
const restartBtn = document.querySelector('button')
let player = "X";
let running = true; // Why initial running is false?
let options = ["", "", "", "", "", "", "", "", ""];
const winnerInfo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click", play));
  restartBtn.addEventListener('click', restartGame);
  statusText.textContent = `${player}'s Turn!!!`;
  // running = true;
}

initializeGame();

function play(){
  const cellIndex = this.getAttribute("index");
  console.log(this);

  if(options[cellIndex] || !running){
    return;
  } // checks the clicked cell,cellIndex is the array's index
  // if the clicked cell is not empty or runing is not true, return.
  refresh(this, cellIndex);
  checkWinner();
}
function refresh(cell, cellIndex){
  options[cellIndex] = player;
  cell.textContent = player;
}
function checkWinner(){
  let conclude = false;
  console.log(winnerInfo.length);
  for(let i = 0; i < winnerInfo.length; i++){
    const cell0 = options[winnerInfo[i][0]];
    const cell1 = options[winnerInfo[i][1]];
    const cell2 = options[winnerInfo[i][2]];

    if(cell0 && (cell0 == cell1 && cell0 == cell2)){
      conclude = true;
      break;
    }

  }

  if(conclude){
    statusText.textContent = `${player} WIN!!`;
    running = false;
  }else if(!(options.includes(""))){
    statusText.textContent = `No Winner!`;
  }
  else{
    changePlayer();
  }

}
function changePlayer(){
  player = player === "X" ? "O" : "X";
  statusText.textContent = `${player}'s Turn!!!`;
}
function restartGame(){
  cells.forEach(cell => cell.textContent = "");
  options = ["", "", "", "", "", "", "", "", ""];
  player = "X";
  statusText.textContent = `${player}'s turn`;
  running = true;
}