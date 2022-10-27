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
            console.log("Error, invalid option detected")
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
        //player input
        let playerInput = prompt("Choose your weapon (Paper, Scissors, or Rock): ");
        let playerSelection = playerInput.toLowerCase();

        //for testing in VS Code
        //let playerSelection = "paper";

        //test valid input
        testValidInput(playerSelection);
        //computer selection
        let computerSelection = getComputerChoice();
        console.log("The computer chose", computerSelection);
        //assess results of round
        assessRound(playerSelection, computerSelection);
}


//function to play a game of n rounds
function playMatch(gameInput) {
    for (let i = 0; i < gameInput; i++) {
        playRound();
    }
}



//MAIN
let gameInput = prompt("How many rounds would you like to play: ");
playMatch(gameInput);






// Pseudocode <3

/*
For each game (5 rounds per game)
    For each round
        Prompt player for their choice 
            - this should be case insensitive so users can input rock, ROCK, RocK or any other variation
            - if not one of the three options, display error
        Run function for computer choice
            -randomly select between the three options
        Evaluate round results
            - input = player-choice & computer-choice
            - output = player-win, player-tie, player-lose
            - Print message to screen showing result
                - ex: "You Lose! Paper beats Rock"
            - save results somewhere
    Evaluate game results
        - input = round-results
        - output = game-win, game-tie, game-lose
            - if 2 win && 2 lose == tie
            - else if 2 wins && 2 ties == win?
            - else if 2 lose && 2 ties == lose?
            - else if 3+ (aka over 50%) win == win
            - else if 3+ (aka over 50%) lose == lose
            - else if 3+ (aka over 50%) tie == tie 
            - else - something went wrong
        - print message to screen showing overall game-result
*/