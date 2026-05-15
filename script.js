let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let result = document.getElementById("result");
let userScorePara = document.getElementById("user-score");
let compScorePara = document.getElementById("comp-score");

// Computer random choice
function getCompChoice() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

// Draw game
function drawGame() {
  result.innerText = "Game Draw 🤝";
}

// Show winner
function showWinner(userWin, userChoice, compChoice) {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    result.innerText = `You Win 🎉 (${userChoice} beats ${compChoice})`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    result.innerText = `You Lose 😢 (${compChoice} beats ${userChoice})`;
  }
}

// Main game logic
function playGame(userChoice) {
  let compChoice = getCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
}

// Click events
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    let userChoice = choice.querySelector("img").id;
    playGame(userChoice);
  });
});