

function getComputerChoice(){
  
    const max = 3;
    const min = 1;

    let computerChoice = Math.floor(Math.random()*(max)) + min;
    switch (computerChoice){
        case 1:
            return 'rock';
           
        case 2:
            return 'paper';
          
        case 3:
            return 'scissor';
         
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Eneter your choice(rock , paper , scissor): ");
    
    return humanChoice.toLowerCase();

}
  
function playGame () {
    let humanScore = 0;
    let computerScore = 0;
  
    function playRound( humanChoice , computerChoice){
        humanChoice = humanChoice.toLowerCase();
       
           if (humanChoice === computerChoice) {
            return `Tie! Both chose ${humanChoice}.`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}.`;
        }
    }

  // Round 1
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log("Round 1:", playRound(humanSelection, computerSelection));

    // Round 2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Round 2:", playRound(humanSelection, computerSelection));

    // Round 3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Round 3:", playRound(humanSelection, computerSelection));

    // Round 4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Round 4:", playRound(humanSelection, computerSelection));

    // Round 5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log("Round 5:", playRound(humanSelection, computerSelection));
    // Display final scores
    console.log(`Final score: You ${humanScore} - Computer ${computerScore}`);


    let result = humanScore > computerScore? "YOU WON!": humanScore < computerScore ? "YOU Loss!":"Draw"
    console.log(result)

}
playGame();













