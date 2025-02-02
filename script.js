'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEL = document.
querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

//rolling the dice functionallity 

btnRoll.addEventListener('click' , function(){
    //1. generating a random dice roll 
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice)

    //2. display the dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;


    //3 checke for rollerd 1 : if true switch to next player 
    if(dice !== 1 ){
        currentScore += dice;
        current0El.textContent = currentScore 
    } else{
        


    }

})



