//Constants and necessary variables
const validOptions = ["paper", "scissors", "rock"];
const validOptionsLength = validOptions.length;
let playerPoints;
let computerPoints;

//function to test valid input
function testValidInput(playerSelection){
    for (let i = 0; i < validOptionsLength; i++){
        if (playerSelection == validOptions[i]){
            console.log("You chose", playerSelection);
            break;
        } else if (i==(validOptionsLength-1)){
            console.log("Error, invalid option detected");
            break;
        }
    }
}

//function to get computer choice
function getComputerChoice(){
    let computerChoice = validOptions[Math.floor(Math.random()*validOptionsLength)];
    return computerChoice;
}

//function to assess results of one round
function assessRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats Scissors.");
        playerPoints++;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats Paper.");
        playerPoints++;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock.");
        playerPoints++;
    }else if (playerSelection == computerSelection){
        console.log("It's a tie");
    }else {
        console.log("You lose!",computerSelection,"beats",playerSelection,".");
        computerPoints++;
    }
}

//function to play a single round
function playRound() {
        let playerInput = prompt("Choose your weapon(Paper, Scissors, or Rock): ");
        let playerSelection = playerInput.toLowerCase();
        testValidInput(playerSelection);
        let computerSelection = getComputerChoice();
        console.log("The computer chose", computerSelection);
        assessRound(playerSelection, computerSelection);
}

//function to play a game of n rounds
function playMatch(gameInput){
    for (let i = 0; i < gameInput; i++){
        playRound();
    }
}

//function to assess results
function assessResults(playerPoints, computerPoints){
    if (playerPoints > computerPoints){
        console.log("You win the match!");
    }
    else if (computerPoints < playerPoints){
        console.log("You lost the match!");
    }
    else{
        console.log("The match has ended in a tie!");
    }
}

//MAIN
let gameInput = prompt("How many rounds would you like to play: ");
playMatch(gameInput);
assessResults(playerPoints,computerPoints);