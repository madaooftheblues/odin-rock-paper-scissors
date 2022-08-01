//We initialize three choices in an array (Rock, Paper, Scissors)
let choices = ["Rock", "Paper", "Scissors"];

//We fetch the computer's choice by generating a random number that corresponds to the index of choices array
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  //Case insensitivity for player's choice by converting the string to lowercase
  playerSelection = playerSelection.toLowerCase();
  //Capitalizing the first letter of player's choice string
  playerSelection = capitalize(playerSelection);

  if (!choices.includes(playerSelection)) return -2;

  console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
  if (computerSelection == playerSelection) return -1;
  else if (computerSelection == "Rock") {
    if (playerSelection == "Scissors") return 0;
    else return 1;
  } else if (computerSelection == "Paper") {
    if (playerSelection == "Rock") return 0;
    else return 1;
  } else {
    if (playerSelection == "Paper") return 0;
    else return 1;
  }
}

function game() {
  let count = 0;
  let i = 0;

  while (i < 5) {
    console.log(`Round ${i} of 5`);
    let player = prompt("Input Choice (Rock, Paper, Scissors)");
    let computer = getComputerChoice();
    let result = playRound(player, computer);
    if (result == 1) {
      count++;
      i++;
      console.log(`You Win! ${capitalize(player)} beats ${computer}`);
    } else if (result == 0) {
      i++;
      console.log(`You Lose! ${computer} beats ${capitalize(player)}`);
    } else if (result == -1) {
      i++;
      console.log(`Tied! ${capitalize(player)} ties ${computer}`);
    } else if (result == -2) {
      console.log("Invalid Input!");
    }
  }
  if (count > 2) console.log("You Won The Match!");
  else console.log("You Lost The Match!");
}

game();
