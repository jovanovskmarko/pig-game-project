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
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1: 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    if(playing) {
        // Roll the dice
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display image
        diceEl.classList.remove('hidden');
        diceEl.src = `../images/dice-${dice}.png`;

        // Check if 1 is rolled
        if(dice != 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
        switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function(){
    if(playing) {
        // Add current score to the active player's score
        scores[activePlayer] += currentScore;
        
        // Display score 
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Win condition
        if(scores[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing = false;
        }

        else {
            // Switch player
            switchPlayer();
        }

        
    }
})