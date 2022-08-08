function computerChoice(){
    hands = ['Rock', 'Paper', 'Scissor'];
    computerHand = Math.floor(Math.random() * hands.length);
    console.log(computerHand);
}