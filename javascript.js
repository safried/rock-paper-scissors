//Constants and necessary variables
const validOptions = ["rock", "paper", "scissors"];
const validOptionsLength = validOptions.length;
let playerPoints = 0;
let computerPoints = 0;
let rounds = 0
let totalRounds = 5;

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
        div.innerHTML="You win! Rock beats Scissors.";
        playerPoints+= 1;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        div.innerHTML="You win! Scissors beats Paper.";
        playerPoints+= 1;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        div.innerHTML="You win! Paper beats Rock.";
        playerPoints+= 1;
    }else if (playerSelection == computerSelection){
        div.innerHTML="It's a tie";
    }else {
        div.innerHTML="You lose! "+ computerSelection+" beats "+playerSelection+" .";
        computerPoints+= 1;
    }
    //div.console.log(playerPoints);//works
    //console.log(computerPoints);//works
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
/*
function playMatch (input){
    for (let i = 0; i < totalRounds; i++){
        playRound(input);
    }
    assessResults;
}
*/

function playRound(playerInput) {
    let playerSelection = playerInput;
    let computerSelection = getComputerChoice();
    console.log("The computer chose", computerSelection);
    assessRound(playerSelection, computerSelection);
    //console.log(playerPoints);//works
    //console.log(computerPoints);//works
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
//if (rounds == totalRounds){
//    assessResults;
//} 

function assessResults(playerPoints, computerPoints){
    if (playerPoints > computerPoints){
        div.innerHTML="You win the match!";
    }
    else if (computerPoints < playerPoints){
        div.innerHTML="You lost the match!";
    }
    else{
        div.innerHTML="The match has ended in a tie!";
    }
}

//UI
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.innerHTML = "Chose your weapon";
document.body.appendChild(div);

for (i = 0; i<validOptionsLength; i++){
    let button = document.createElement("button");
    button.innerHTML = validOptions[i];
    button.addEventListener("click", ()=>{
        playerInput = button.innerHTML;
        playRound(playerInput);
    });
    document.body.appendChild(button);
}


var playerPointsLog = document.createElement("div");
playerPointsLog.style.width = "100px";
//playerPointsLog.style.height = "100px";
playerPointsLog.innerHTML = "playerPoints =" + playerPoints;
document.body.appendChild(playerPointsLog);

var computerPointsLog = document.createElement("div");
computerPointsLog.style.width = "100px";
//computerPointsLog.style.height = "100px";
computerPointsLog.innerHTML = "computer points =" + computerPoints;
document.body.appendChild(computerPointsLog);

var roundLog = document.createElement("div");
roundLog.style.width = "100px";
//roundLog.style.height = "100px";
roundLog.innerHTML = "rounds =" + rounds;
document.body.appendChild(roundLog);

/*
let rounds1 = 0;
while (rounds1 != 5){
    if playRound();
    rounds ++;
}
*/


/*MAIN
let gameInput = prompt("How many rounds would you like to play: ");
playMatch(gameInput);
assessResults(playerPoints,computerPoints);
*/