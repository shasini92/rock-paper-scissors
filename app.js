// Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Getting a random choice which acts as a computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Win function which adds +1 to the user score and changes the border to green
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    userChoice.toUpperCase() +
    " beats " +
    computerChoice.toUpperCase() +
    ". You Win!";
  // We can also use the template literals using `` and using ${} for variables
  // `${userChoice} beats ${computerChoice}`
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    1000
  );
}

// Lose function which adds +1 to the user score and changes the border to red
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    userChoice.toUpperCase() +
    " loses to " +
    computerChoice.toUpperCase() +
    ". You Lost!";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    1000
  );
}

// Draw function doesn't change the scores but sets the border to gray
function draw(userChoice, computerChoice) {
  result_div.innerHTML =
    userChoice.toUpperCase() +
    " equals " +
    computerChoice.toUpperCase() +
    ". It's a Draw!";
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("gray-glow"),
    1000
  );
}

// In the "game" function we define the rules and based on the rules invoke the necessary function (win, lose, draw)
function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  //   Testing user and computer choices:
  //   console.log("User choice is " + userChoice);
  //   console.log("Computer choice is " + ComputerChoice);

  switch (userChoice + ComputerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, ComputerChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose(userChoice, ComputerChoice);
      break;
    default:
      draw(userChoice, ComputerChoice);
      break;
  }
}

// Main function is used for actually playing the game and is invoked any time someone clicks on the rock, paper, or scissors image.
function main() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
}

main();
