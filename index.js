// 1. display options for user to select (Rock=1, Paper=2, Scissors=3)
// 2. receive input from user of their choice
let humanChoice = "";

function getHumanChoice() {
  // Collect choice of the user
  humanChoice = prompt(`Let's play Rock, Paper, Scissors!
        Please choose Rock, Paper, or Scissors`);
  // All responses will be lower case
  return humanChoice.toLowerCase();
}

// 3. computer will randomly generate a choice
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

// 4. compare user choice vs computer choice
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`Human choice: ${humanChoice} \nComputer choice: ${computerChoice}`);
  // 5. if they are the same, display draw and repeat from step 2
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    // 6. results: rock vs paper- Paper wins
    //    paper vs scissors- Scissors wins
    //    scissors vs rock- Rock wins
  } else if (humanChoice === "paper" && computerChoice == "rock") {
    console.log("Paper beats Rock.  You win!");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice == "paper") {
    console.log("Scissors beats Paper.  You win!");
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice == "scissors") {
    console.log("Scissors beats Paper.  You win!");
    humanScore += 1;
  } else {
    // Note small visual issue is these are lowercase while the others are capitalized...
    console.log(`${humanChoice} losses to ${computerChoice}.  Better luck next time!`);
    computerScore += 1;
  }
}

//    Display results
// 7. if user won, display congratulations (DONE)
// 8. if computer won, display better luck next time (DONE)
// 9. display "Would you like to play again?" (Yes=1, No=2)
// 10. receive input from user of their choice
// 11. if user chooses 2, exit the program
// 12. if user chooses 1, restart from step 1

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);
