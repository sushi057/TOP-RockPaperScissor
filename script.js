// const rock = document.querySelector('.rock');
// const paper = document.querySelector('.paper');
// const scissor = document.querySelector('.scissor');
// let pcChoice = document.querySelector('#computer-choice');
// let pScore = document.querySelector('#pscore');
// let cScore = document.querySelector('#cscore');
// let winner = document.querySelector('#winner');


// function computerChoice(){
//     hands = ['rock', 'paper', 'scissor'];
//     computerHand = Math.floor(Math.random() * hands.length);
//     return hands[computerHand];
// }

// function computerDecision(){
//     const computersChoice = computerChoice();
//     pcChoice.textContent = computersChoice;
//     console.log(computersChoice);  //to check the choice
//     return computersChoice;
// }

// function playRound(){
//     let computer = computerDecision().toUpperCase();

//     if(rock.addEventListener('click', computerDecision)){
//         if (computer == "PAPER"){
//             return 0;
//         }
//         else if(computer == "SCISSOR"){
//             return 1;
//         }
//     }

//     if (paper.addEventListener('click', computerDecision)){
//         if(computer == "ROCK"){
//             return 1;
//         }
//         else if(computer == "SCISSOR"){
//             return 0;
//         }
//     }

//     if (scissor.addEventListener('click', computerDecision)){
//         if(computer == "PAPER"){
//             return 1;
//         }
//         else if(computer == "ROCK"){
//             return 0;
//         }
//     }
// }

// function game(){
//     let computerScore = 0;
//     let playerScore = 0;

//     for (let i=0; i<5; i++){
//         if(playRound() == 1){
//             playerScore += 1;
//             pScore.textContent = playerScore;
//         }
//         else if(playRound() == 0){
//             computerScore += 1;
//             cScore.textContent = computerScore;
//         }
//     }

//     //final decision algorithm
//     if(computerScore == playerScore){
//         winner.textContent = 'Nobody';
//     }
//     else if(computerScore > playerScore){
//         winner.textContent = 'Computer'
//     }
//     else{
//         winner.textContent = 'Player';
//     }
// }

// game();

