//Rock-Paper-Scissor


const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3) ];

  let result = "";
  if(playerChoice === computerChoice) {
    result = "Its a tie!";
  }
  else {
    switch(playerChoice) {
      case "rock":
        result = (computerChoice === "scissor") ? "You Win!" : "You Lose!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
        break;
      case "scissor":
        result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
        break;
    }
  
      if (result === "You Win!") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      } else if (result === "You Lose!") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;  
  resultDisplay.textContent = result;


  resultDisplay.classList.remove("greenText", "redText");
  resultDisplay.classList.add(result === "You Win!" ? "greenText" : "redText");
}

