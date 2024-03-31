const p1 = {
    score:0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#score1')
} // is ok
const p2 = {
    score:0,
    button:document.querySelector('#player2'),
    display: document.querySelector('#score2')
}
const reset = document.querySelector('#reset');
const winning = document.querySelector('#playto');
let win = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === win){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled  =true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function(){
    updateScores(p1,p2)
})
p2.button.addEventListener('click', function(){
    updateScores(p2,p1)
})


winning.addEventListener('change', function (){
    winning = parseInt(this.value);
    resetButton();
})

reset.addEventListener('click',resetButton)

function resetButton(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
// Refactored CODE