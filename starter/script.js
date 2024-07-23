'use strict';

const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const again = document.querySelector('.again');
const message = document.querySelector('.message');
const number = document.querySelector('.number');

const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

const body = document.querySelector('body');

let secretNumber;
secretNumber = generateNumber();
let currentPoint = 20;
let hightPoint = 0;

function generateNumber() {
  return Math.floor(Math.random() * 20) + 2;
}
console.log(secretNumber);
function checkHandler() {
  const hint =
    guess.value > secretNumber
      ? 'To height'
      : guess.value == secretNumber
      ? 'Correct!'
      : 'To low ';
  message.textContent = hint;

  if (hint === 'Correct!') {
    body.style.background = 'green';
    number.textContent = secretNumber;
    message.style.color = 'brown';

    const point = currentPoint >= hightPoint ? currentPoint : hightPoint;
    hightPoint = point;
    highscore.textContent = point;
  } else {
    currentPoint--;
    score.textContent = currentPoint;
  }
}

function reset() {
  generateNumber();
  secretNumber = generateNumber();
  body.style.background = 'burlywood';
  number.textContent = '?';
  guess.value = '';
  currentPoint = 20;
  score.textContent = currentPoint;
  console.log(secretNumber);
}

check.addEventListener('click', checkHandler);
again.addEventListener('click', reset);
