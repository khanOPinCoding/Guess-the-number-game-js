'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displaybody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number !');
  }
  if (guess === randomNumber) {
    displayMessage('🎉 Correct Number !');
    document.querySelector('.number').textContent = randomNumber;

    displaybody('#60b347');

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too High !' : '📉 Too low !');
      score--;
      displayScore(score);
    } else {
      displayMessage('😂 You lost the game !');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore = score;
  displayMessage = 'Start guessing...';
  displaybody = '#222';
  displayNumber.style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayNumber.textContent = '?';
});
