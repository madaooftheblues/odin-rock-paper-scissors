//We fetch the computer's choice by generating a random number that corresponds to the index of choices array
function getComputerChoice() {
  //We initialize three choices in an array (Rock, Paper, Scissors)
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  //Input validation is ignored here

  //Case insensitivity for player's choice by converting the string to lowercase
  playerSelection = playerSelection.toLowerCase();
  //Capitalizing the first letter of player's choice string
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

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

  for (let i = 0; i < 5; i++) {
    let player = prompt("Input Choice (Rock, Paper, Scissors");
    let computer = getComputerChoice();

    let result = 0;
    if ((result = playRound(player, computer))) {
      count++;
      console.log(`You Win! ${player} beats ${computer}`);
    } else if (result == 0) {
      console.log(`You Lose! ${computer} beats ${player}`);
    } else {
      console.log(`Tied! ${player} ties ${computer}`);
    }
  }
  if (count > 2) console.log("You won the overall match!");
  else console.log("You lost the match!");
}

game();
