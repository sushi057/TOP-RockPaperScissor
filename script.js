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

    if(player == "ROCK"){
        if (computer == "PAPER"){
            return("You Lose! Paper beats Rock.");
        }
        else if(computer == "SCISSOR"){
            return("You Win!. Scissor beats Rock.");
        }
    }

    if (player == "PAPER"){
        if(computer == "ROCK"){
            return("You win!. Paper beats Rock.");
        }
        else if(computer == "SCISSOR"){
            return("You lose! Scissor beats Paper.");
        }
    }

    if (player == "SCISSOR"){
        if(computer == "PAPER"){
            return("You win!. Scissor beats Paper.");
        }
        else if(computer == "ROCK"){
            return("You lose! Rock beats Scissor.");
        }
    }
}