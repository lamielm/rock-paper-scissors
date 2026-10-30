// 1. display options for user to select (Rock=1, Paper=2, Scissors=3)
// 2. receive input from user of their choice
// 3. computer will randomly generate a choice
let computerChoice = "";
function getComputerChoice() {
  // generate a number 0 to 1, multiply it by 3, round down, and add 1
  let generatedChoice = Math.floor(Math.random() * 3) + 1;
  // convert the number into string choice
  if (generatedChoice === 1) {
    // 1 is Rock
    computerChoice = "Rock";
  } else if (generatedChoice === 2) {
    // 2 is Paper
    computerChoice = "Paper";
  } else {
    // 3 is Scissors
    computerChoice = "Scissors";
  }
  return computerChoice;
}
console.log(getComputerChoice());
// 4. compare user choice vs computer choice
// 5. if they are the same, display draw and repeat from step 2
// 6. results: rock vs paper- Paper wins
//    paper vs scissors- Scissors wins
//    scissors vs rock- Rock wins
//    Display results
// 7. if user won, display congratulations
// 8. if computer won, display better luck next time
// 9. display "Would you like to play again?" (Yes=1, No=2)
// 10. receive input from user of their choice
// 11. if user chooses 2, exit the program
// 12. if user chooses 1, restart from step 1
