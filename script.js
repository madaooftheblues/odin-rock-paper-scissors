//We initialize three choices in an array (Rock, Paper, Scissors)
let choices = ["Rock", "Paper", "Scissors"];
const label = document.querySelector(".label");
const prompt = document.querySelector(".prompt");
const playerDiv = document.querySelector(".player-points");
const computerDiv = document.querySelector(".computer-points");
const roundDiv = document.querySelector(".round");

let playerPoints = (computerPoints = 0);
let round = 1;

label.textContent = "Choose!";
playerDiv.textContent = `You: ${playerPoints}`;
computerDiv.textContent = `Computer: ${computerPoints}`;
roundDiv.textContent = `Round ${round}`;

//We fetch the computer's choice by generating a random number that corresponds to the index of choices array
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  prompt.textContent = `You: ${playerSelection}, Computer: ${computerSelection}`;
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

function game(player) {
  let computer = getComputerChoice();
  computer = getComputerChoice();
  let result = playRound(player, computer);
  if (result == 1) {
    label.textContent = `You Win! ${player} beats ${computer}`;
    playerPoints++;
  } else if (result == 0) {
    label.textContent = `You Lose! ${computer} beats ${player}`;
    computerPoints++;
  } else if (result == -1) {
    label.textContent = `Tied! ${player} ties ${computer}`;
    playerPoints++;
    computerPoints++;
  }

  round++;

  playerDiv.textContent = `You: ${playerPoints}`;
  computerDiv.textContent = `Computer: ${computerPoints}`;
  roundDiv.textContent = `Round ${round}`;

  if (round > 5) {
    if (playerPoints > computerPoints) label.textContent = "You Won The Match!";
    else if (playerPoints < computerPoints)
      label.textContent = "Computer Won The Match!";
    else label.textContent = "Match Tied!";

    const replay = document.createElement("button");
    replay.id = "replay";
    replay.classList.add("button");
    replay.textContent = "Replay?";
    replay.addEventListener("click", (e) => location.reload());
    replay.addEventListener("mouseover", add);
    replay.addEventListener("mouseout", remove);
    const btnContainer = document.querySelector(".btn-container");
    btnContainer.textContent = "";
    btnContainer.appendChild(replay);
    prompt.textContent = "";
    roundDiv.textContent = "Match Finished.";
  }
}

function remove(e) {
  e.target.classList.remove("transform");
}
function add(e) {
  e.target.classList.add("transform");
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("mouseover", add);
  button.addEventListener("mouseout", remove);
  button.addEventListener("click", (e) => {
    e.target.classList.add("click");
    game(e.target.id);
  });
  button.addEventListener("transitionend", (e) =>
    e.target.classList.remove("click")
  );
});
