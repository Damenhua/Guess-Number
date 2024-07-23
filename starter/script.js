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
let highPoint = 0;

function generateNumber() {
  return Math.floor(Math.random() * 20) + 2;
}
console.log(secretNumber);
function checkHandler() {
  if (!guess.value) {
    message.textContent = `Please input number 
        <<==
        `;
    message.style.whiteSpace = 'pre-line';
    return;
  }
  const hint =
    guess.value > secretNumber
      ? 'Too high'
      : guess.value == secretNumber
      ? 'Correct!'
      : 'Too low ';
  message.textContent = hint;

  if (hint === 'Correct!') {
    body.style.background = 'green';
    number.textContent = secretNumber;
    message.style.color = 'brown';

    highPoint = Math.max(currentPoint, highPoint);
    highscore.textContent = highPoint;
  } else {
    currentPoint--;
    score.textContent = currentPoint;
    if (currentPoint <= 0) {
      message.textContent = 'Game over~';
      check.disabled = true;
    }
  }
}

function reset() {
  secretNumber = generateNumber();
  body.style.background = 'burlywood';
  number.textContent = '?';
  guess.value = '';
  currentPoint = 20;
  score.textContent = currentPoint;
  message.textContent = 'Start guessing...';
  message.style.color = 'black';
  check.disabled = false;

  console.log(secretNumber);
}

check.addEventListener('click', checkHandler);
again.addEventListener('click', reset);
