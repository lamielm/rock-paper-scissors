let humanChoice = "";

function getHumanChoice() {
  // Collect choice of the user
  humanChoice = prompt(`Let's play Rock, Paper, Scissors!
        Please choose Rock, Paper, or Scissors`);
  // All responses will be lower case
  return humanChoice.toLowerCase();
}

let computerChoice = "";
function getComputerChoice() {
  // generate a number 0 to 1, multiply it by 3, round down, and add 1
  let generatedChoice = Math.floor(Math.random() * 3) + 1;
  // convert the number into string choice
  if (generatedChoice === 1) {
    // 1 is rock
    computerChoice = "rock";
  } else if (generatedChoice === 2) {
    // 2 is Paper
    computerChoice = "paper";
  } else {
    // 3 is Scissors
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  console.log(`Human choice: ${humanChoice} \nComputer choice: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    return "Draw";
  } else if (humanChoice === "paper" && computerChoice == "rock") {
    console.log("Paper beats Rock.  You win!");
    return "Human Won";
  } else if (humanChoice === "scissors" && computerChoice == "paper") {
    console.log("Scissors beats Paper.  You win!");
    return "Human Won";
  } else if (humanChoice === "rock" && computerChoice == "scissors") {
    console.log("Scissors beats Paper.  You win!");
    return "Human Won";
  } else {
    // Note small visual issue is these are lowercase while the others are capitalized...
    console.log(`${humanChoice} losses to ${computerChoice}.  Better luck next time!`);
    return "Computer Won";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundNumber = 0;
  let roundResult = "";
  while (roundNumber < 5) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    roundResult = playRound(humanSelection, computerSelection);
    if (roundResult === "Human Won") {
      humanScore += 1;
      roundNumber += 1;
    } else if (roundResult === "Computer Won") {
      computerScore += 1;
      roundNumber += 1;
    } else {
      roundNumber += 1;
    }
    console.log(`After ${roundNumber} rounds, the score is Human: ${humanScore}  Computer: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("CONGRATULATIONS!  You beat the computer!");
  } else if (humanScore < computerScore) {
    console.log("YOU LOSE! Better luck next time.");
  } else {
    console.log("It's a draw...");
  }
}

playGame();
console.log("Thanks for playing!");
