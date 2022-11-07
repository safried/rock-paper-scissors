//Constants and necessary variables
const validOptions = ["rock", "paper", "scissors"];
const validOptionsLength = validOptions.length;
let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;
let totalRounds = 0;


function gameStartData(){
    playerPoints = 0;
    computerPoints = 0;
    rounds = 0
    totalRounds = 5;
}

//function to get computer choice
function getComputerChoice(){
    let computerChoice = validOptions[Math.floor(Math.random()*validOptionsLength)];
    return computerChoice;
}

//function to assess results of one round
function assessRoundResults(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors"){
        div.innerHTML="You win! Rock beats Scissors.";
        playerPoints++;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        div.innerHTML="You win! Scissors beats Paper.";
        playerPoints++;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        div.innerHTML="You win! Paper beats Rock.";
        playerPoints++;
    }else if (playerSelection == computerSelection){
        div.innerHTML="It's a tie";
    }else {
        div.innerHTML="You lose! "+ computerSelection+" beats "+playerSelection+" .";
        computerPoints++;
    }
}

function playRound(playerInput) {
    let playerSelection = playerInput;
    let computerSelection = getComputerChoice();
    console.log("The computer chose", computerSelection);
    assessRoundResults(playerSelection, computerSelection);
    rounds ++;
    if (rounds === totalRounds){
        assessMatchResults();
    }
}


function assessMatchResults(playerPoints, computerPoints){
    if (playerPoints > computerPoints){
        div.innerHTML="You won the match! Click 'New Game' to play again.";
    }
    else if (computerPoints < playerPoints){
        div.innerHTML="You lost the match! Click 'New Game' to play again.";
    }
    else{
        div.innerHTML="The match has ended in a tie! Click 'New Game' to play again.";
    }
}

//UI
var div = document.createElement("div");
div.style.width = "200px";
div.style.height = "100px";
div.innerHTML = "Chose your weapon";
document.body.appendChild(div);

let gameStartButton = document.createElement("button");
gameStartButton.innerHTML = "New Game";
gameStartButton.addEventListener("click", ()=>{
    gameStartData();
});
document.body.appendChild(gameStartButton);



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
playerPointsLog.style.width = "200px";
playerPointsLog.textContent = "player points =" + playerPoints;
document.body.appendChild(playerPointsLog);

var computerPointsLog = document.createElement("div");
computerPointsLog.style.width = "200px";
computerPointsLog.textContent = "computer points =" + computerPoints;
document.body.appendChild(computerPointsLog);

var roundLog = document.createElement("div");
roundLog.style.width = "200px";
roundLog.textContent = "rounds =" + `${rounds}`;
document.body.appendChild(roundLog);


/*MAIN
let gameInput = prompt("How many rounds would you like to play: ");
playMatch(gameInput);
assessResults(playerPoints,computerPoints);
*/

