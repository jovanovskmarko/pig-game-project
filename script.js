'use strict';

// Selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

// State variables
 
let currentScore = 0;

btnRoll.addEventListener('click', function(){
    // Roll the dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display image
    diceEl.classList.remove('hidden');
    diceEl.src = `../images/dice-${dice}.png`;

    // Check if 1 is rolled
    if(dice != 1) {
        currentScore += dice;
        current0.textContent = currentScore;
    }
})