'use strict';
//EL - elements 

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore ,activePlayer, playing ;



// starting conditions 
const init = function(){

    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEL.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

};


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // also change the current value back to 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //change the background color to the active player 
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};
init();

//rolling the dice functionallity 

btnRoll.addEventListener('click' , function(){
    if(playing){
    //1. generating a random dice roll 
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice)

    //2. display the dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;


    //3 check for rollerd 1 : if true switch to next player 
    if(dice !== 1 ){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
         
    } else{
        switchPlayer();
    }
 }
});

btnHold.addEventListener('click', function(){
    if(playing){
    //add current score to active player's score
    scores[activePlayer]+= currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if player's score is >=100 , if yes finish the game
    if(scores[activePlayer] >= 100){
        playing = false;
        diceEL.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
        //if not switch to the next player 
    switchPlayer();


    }
 }
});

//setting new game functionallity 

btnNew.addEventListener('click', init);
