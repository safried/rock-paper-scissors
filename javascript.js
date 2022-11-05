//Constants and necessary variables
const validOptions = ["rock", "paper", "scissors"];
const validOptionsLength = validOptions.length;
let playerPoints;
let computerPoints;

//function to test valid input
/*function testValidInput(playerSelection){
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
*/

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
/*function playRound() {
    let playerInput = prompt("Choose your weapon(Paper, Scissors, or Rock): ");
    let playerSelection = playerInput.toLowerCase();
    testValidInput(playerSelection);
    let computerSelection = getComputerChoice();
    console.log("The computer chose", computerSelection);
    assessRound(playerSelection, computerSelection);
}
*/
function playRound(playerInput) {
    let playerSelection = playerInput;
    let computerSelection = getComputerChoice();
    console.log("The computer chose", computerSelection);
    assessRound(playerSelection, computerSelection);
}

//function to play a match of n rounds
/*
function playMatch(gameInput){
    for (let i = 0; i < gameInput; i++){
        playRound();
    }
}
*/

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


/*function playerSelectionTest (e){
    let playerInput = e;
    playerSelection = playerInput.button.innerHTML;
    console.log(playerSelection);
}
*/



//UI
for (i = 0; i<validOptionsLength; i++){
    let button = document.createElement("button");
    button.innerHTML = validOptions[i];
    button.addEventListener("click", ()=>{
        playerInput = button.innerHTML;
        playRound(playerInput);
    });
    document.body.appendChild(button);
}


/*
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
    //(button.innerHTML));
})
*/
/*
let rounds = 5;
while (rounds != 5){
    if "click", playRound();
    rounds ++;
}
*/





/*
let rockButton = document.createElement("button");
rockButton.innerHTML = "rock";
document.body.appendChild(rockButton);

let paperButton = document.createElement("button");
paperButton.innerHTML = "paper";
document.body.appendChild(paperButton);

let scissorsButton = document.createElement("button");
scissorsButton.innerHTML = "scissors";
document.body.appendChild(scissorsButton);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
})
*/
//TEST







//MAIN
/*
let gameInput = prompt("How many rounds would you like to play: ");
playMatch(gameInput);
assessResults(playerPoints,computerPoints);
*/