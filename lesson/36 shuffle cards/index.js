
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "Q", "K"];

shuffle(cards);

// console.log(cards);
// cards.forEach(card => console.log(card));

function shuffle(array){
  let currentIndex =array.length;
  console.log(array);

  while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex-=1;

    let temp = array[currentIndex]; 
    array[currentIndex] = array[randomIndex]; // randomIndex cloud be the same with currentIndex, just swap every card with a randam card
    array[randomIndex] = temp;
  }
  return array;
}
