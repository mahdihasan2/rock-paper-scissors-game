
let userChoice = "";
const choices = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
function handleUserChoice(choice) {
userChoice = choice;
let computerChoice = computerCalc();
if (userChoice === computerChoice) {
alert("It's a tie!");
} else if ((userChoice === "Rock" && computerChoice === "Paper") ||
(userChoice === "Paper" && computerChoice === "Scissors") ||
(userChoice === "Scissors" && computerChoice === "Rock")) {
computerScore++;
alert("You lose!");
} else {
userScore++;
alert("You win!");
}
updateScores();
}

function computerCalc() {
return choices[Math.floor(Math.random() * choices.length)];
}

function updateScores() {
document.getElementById("UserScore").textContent = userScore;
document.getElementById("ComputerScore").textContent = computerScore;
}

document.getElementById("Rock").addEventListener('click', function() {
handleUserChoice("Rock");
});
document.getElementById("Paper").addEventListener('click', function() {
handleUserChoice("Paper");
});
document.getElementById("Scissors").addEventListener('click', function() {
handleUserChoice("Scissors");
});

document.querySelector(".Reset").addEventListener('click', function() {
userScore = 0;
computerScore = 0;
updateScores();
});
