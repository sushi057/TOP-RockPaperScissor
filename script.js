let result = '';

function getComputerChoice(){
    let arrStr = ['Rock', 'Paper', 'Scissor']
    randElement = arrStr[Math.floor(Math.random() * arrStr.length)];
    return randElement;
}

function playGame(playerSelection, computerSelection) {
    playerSelection = prompt("Choose Rock, Paper, Scissor!");
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        result = '';
        return "Draw. Try Again!";
    }
    else if(playerSelection == "Rock") {
        if (computerSelection == "Paper"){
            result = 'lose';
            return "The computer chose Paper. You lost!"
        }
        else if(computerSelection == "Scissor"){
            result = 'win';
            return "The computer chose Scissor. You won!"
        }
    }
    else if(playerSelection == "Scissor"){
        if (computerSelection == "Rock"){
            result = 'lose'
            return "The computer chose Rock. You lost!";
        }
        else if (computerSelection == "Paper"){
            result = 'win';
            return "The computer chose Paper. You win!";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        playGame();
        if (result == 'win'){
            playerScore += 1;
        }
        else if(result == 'lose'){
            computerScore += 1;
        }
    }

    if (playerScore > computerScore) {
        return "Player wins!";
    }
    else if(playerScore == computerScore){
        return "Draw!";
    }
    else{
        return "Computer Wins!";
    }
}