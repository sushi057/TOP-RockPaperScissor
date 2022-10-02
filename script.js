const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

function computerChoice(){
    hands = ['rock', 'paper', 'scissor'];
    computerHand = Math.floor(Math.random() * hands.length);
    return hands[computerHand];
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Choose Rock, Paper or Scissor!");
    computerSelection = computerChoice();

    var player = playerSelection.toUpperCase();
    var computer = computerSelection.toUpperCase();

    if(){
        if (computer == "PAPER"){
            return 0;
        }
        else if(computer == "SCISSOR"){
            return 1;
        }
    }

    if (player == "PAPER"){
        if(computer == "ROCK"){
            return 1;
        }
        else if(computer == "SCISSOR"){
            return 0;
        }
    }

    if (player == "SCISSOR"){
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

rock.addEventListener('click', )

game();

