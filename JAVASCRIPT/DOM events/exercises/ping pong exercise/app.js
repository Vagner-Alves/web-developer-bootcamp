const player1 = document.querySelector('#player1'); // selecting the buttons
const player2 = document.querySelector('#player2');
const resetButton = document.querySelector('#reset')
const score1 = document.querySelector('#score1'); // select the h1 spans to update!
const score2 = document.querySelector('#score2');
const playTo = document.querySelector('#playto');

let playerScore = 0; // variables to hold the score
let player2Score = 0;
let winScore = 5; // maximum points that every player can reach to win the game
let isGameOver = false;

player1.addEventListener('click',()=>{
    if(!isGameOver){
        playerScore +=1;  // adding one every click
        if(playerScore === winScore){
            isGameOver = true;
            score1.classList.add('has-text-success');
            score2.classList.add('has-text-danger');
            player1.disabled = true;
            player2.disabled = true;
    }
    score1.textContent = playerScore; // updating the span to show the score
    } 
})
player2.addEventListener('click',()=>{
    if(!isGameOver){
        player2Score +=1;  // adding one every click
        if(player2Score === winScore){
            isGameOver = true;
            score2.classList.add('has-text-success');
            score1.classList.add('has-text-danger')
            player1.disabled = true;
            player2.disabled = true;
           
    }
    score2.textContent = player2Score; // updating the span to show the score
    } 
})

playTo.addEventListener('change',function(){
    winScore = parseInt(this.value);
    reset(); // we can't see the results using arrow functions
})

resetButton.addEventListener('click', reset )

function reset(){
    isGameOver = false;
    playerScore = 0;
    player2Score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove('has-text-success','has-text-danger');
    score2.classList.remove('has-text-success','has-text-danger');
    player1.disabled = false;
    player2.disabled = false;
}
// standard CODE