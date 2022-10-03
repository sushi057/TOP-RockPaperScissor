const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
let pcChoice = document.querySelector('#computer-choice');
let pScore = document.querySelector('#pscore');
let cScore = document.querySelector('#cscore');
let winner = document.querySelector('#winner');

let playerHand = '';
let computerScore = 0;
let playerScore = 0;

function computerChoice(){
    hands = ['rock', 'paper', 'scissor'];
    index = Math.floor(Math.random() * hands.length);
    return hands[index];
}

//function to play follow up to the event listener
function playRound(){
    let computerHand = computerChoice();
    computerHand = computerHand.toUpperCase();
    pcChoice.textContent = computerHand;
    console.log(computerHand);

    if (playerHand == "ROCK"){
        if (computerHand == "SCISSOR"){
            playerScore += 1;
            return 1;
        }
        else if(computerHand == "PAPER"){
            computerScore += 1;
            return 0;
        }
    }

    if (playerHand == "PAPER"){
        if (computerHand == "ROCK"){
            playerScore += 1;
            return 1;
        }
        else if(computerHand == "SCISSOR"){
            comptuerScore += 1;
            return 0;
        }
    }

    if (playerHand == "SCISSOR"){
        if (computerHand == "PAPER"){
            playerScore += 1;
            return 1;
        }
        else if(computerHand == "ROCK"){
            computerScore += 1;
            return 0;
        }
    }
}

function game(){
    let finalist = '';
    playRound();
    cScore.textContent = playerScore;
    pScore.textContent = computerScore;

    if(playerScore > computerScore){
        finalist = 'Player';
    }
    else if(computerScore > playerScore){
        finalist = 'Computer';
    }
    else{
        finalist = 'Nobody';
    }

    winner.textContent = finalist;
}

function finalWinner(){
    let finalist = '';
    if(playerScore > computerScore){
        finalist = 'Player';
    }
    else if(computerScore > playerScore){
        finalist = 'Computer';
    }
    else {
        finalist = 'Nobody'
    }

    winner.textContent = finalist;
}

rock.addEventListener('click', () => {
    game();
    playerHand = 'ROCK';
    console.log(playerHand);
    finalWinner();
});

paper.addEventListener('click', () => {
    game();
    playerHand = 'PAPER';
    console.log(playerHand);
});

scissor.addEventListener('click', () => {
    game();
    playerHand = 'SCISSOR';
    console.log(playerHand);
});
