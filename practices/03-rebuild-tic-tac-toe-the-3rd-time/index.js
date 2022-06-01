const cells = document.querySelectorAll('#cells')
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")
const winnerConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializaeGame();

function initializaeGame(){
  console.log(running)
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
};

function cellClicked(){
  const cellIndex = this.getAttribute("index");
  if(options[cellIndex] != "" || !running){
    return;
  }

  updataCell(this, cellIndex);
  checkWinner();  
}

function updataCell(cell, cellIndex){
  cell.textContent = currentPlayer;
  options[cellIndex] = currentPlayer;
}

function checkWinner(){
  let roundWon = false;
  for(let i = 0; i < winnerConditions.length; i++){
    condition = winnerConditions[i];
    const op1 = options[condition[0]];
    const op2 = options[condition[1]];
    const op3 = options[condition[2]];

    if(op1 == "" || op2 == "" || op2 == ""){
      continue; /* what is this continue mean? turn to next i for loop */
    }
    if(op1 == op2 && op1 == op3){
      roundWon = true;
      break
    }
  }

  if(roundWon){
    statusText.textContent = `${currentPlayer} wins!`;
    running = false;
  }
  else if(!options.includes("")){
    statusText.textContent = "Draw!";
  }
  else{
    changePlayer();
  }
}
function changePlayer(){
  currentPlayer = (currentPlayer == "X") ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}
function restartGame(){
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
}
