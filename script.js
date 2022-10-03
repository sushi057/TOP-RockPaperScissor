const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
let pcChoice = document.querySelector('#computer-choice');
let pScore = document.querySelector('#pscore');
let cScore = document.querySelector('#cscore');
let winner = document.querySelector('#winner');


function computerChoice(){
    hands = ['rock', 'paper', 'scissor'];
    computerHand = Math.floor(Math.random() * hands.length);
    return hands[computerHand];
}

function computerDecision(){
    pcChoice.textContent = computerChoice();
    console.log(computerChoice());
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Choose Rock, Paper or Scissor!");
    computerSelection = computerChoice();
    

    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    if(rock.addEventListener('click', computerDecision())){
        console.log('lol muji');
        if (computer == "PAPER"){
            return 0;
        }
        else if(computer == "SCISSOR"){
            return 1;
        }
    }

    if (paper.addEventListener('click',)){
        if(computer == "ROCK"){
            return 1;
        }
        else if(computer == "SCISSOR"){
            return 0;
        }
    }

    if (scissor.addEventListener('click')){
        if(computer == "PAPER"){
            return 1;
        }
        else if(computer == "ROCK"){
            return 0;
        }
    }
}

function game(){
    var computerScore = 0;
    var playerScore = 0;

    // for (var i=0; i<5; i++){
    //     if(playRound() == 1){
    //         playerScore += 1;
    //     }
    //     else{
    //         computerScore += 1;
    //     }
    // }

    if (computerScore > playerScore){
        console.log('Computer Wins');
    }
    else if(computerScore == playerScore){
        console.log("ITS A TIE!");
    }
    else {
        console.log("Player Wins!");
    }
}


game();

