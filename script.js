//We initialize three choices in an array (Rock, Paper, Scissors)
let choices = ["Rock", "Paper", "Scissors"];

//We fetch the computer's choice by generating a random number that corresponds to the index of choices array
function getComputerChoice() {
  return Math.floor(Math.random() * choices.length);
}

console.log(getComputerChoice());
