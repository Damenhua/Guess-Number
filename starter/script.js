const elements = {
  check: document.querySelector('.check'),
  guess: document.querySelector('.guess'),
  again: document.querySelector('.again'),
  message: document.querySelector('.message'),
  number: document.querySelector('.number'),
  score: document.querySelector('.score'),
  highscore: document.querySelector('.highscore'),
  body: document.querySelector('body'),
};

let secretNumber;
secretNumber = generateNumber();
let currentPoint = 20;
let highPoint = 0;

function generateNumber() {
  return Math.floor(Math.random() * 20) + 2;
}
console.log(secretNumber);

function checkHandler() {
  if (!elements.guess.value) {
    elements.message.textContent = `Please input number 
        <<==
        `;
    elements.message.style.whiteSpace = 'pre-line';
    return;
  }
  const hint =
    elements.guess.value > secretNumber
      ? 'Too high'
      : elements.guess.value == secretNumber
      ? 'Correct!'
      : 'Too low ';
  elements.message.textContent = hint;

  if (hint === 'Correct!') {
    elements.body.style.background = 'green';
    elements.number.textContent = secretNumber;
    elements.message.style.color = 'brown';

    highPoint = Math.max(currentPoint, highPoint);
    elements.highscore.textContent = highPoint;
  } else {
    currentPoint--;
    elements.score.textContent = currentPoint;
    if (currentPoint <= 0) {
      elements.message.textContent = 'Game over~';
      elements.check.disabled = true;
    }
  }
}

const Initial_State = {
  secretNumber: generateNumber(),
  currentPoint: 20,
  numberContent: '?',
  guessValue: '',
  messageContent: 'Start guessing...',
  messageColor: 'black',
  background: 'burlywood',
};

function reset() {
  secretNumber = generateNumber();
  currentPoint = Initial_State.currentPoint;

  const elemToReset = {
    number: { textContent: Initial_State.numberContent },
    guess: { value: Initial_State.guessValue },
    score: { textContent: Initial_State.currentPoint },
    message: {
      textContent: Initial_State.messageContent,
      style: { color: Initial_State.messageColor },
    },
    body: { style: { background: Initial_State.background } },
    check: { disabled: false },
  };

  for (const [elemName, properties] of Object.entries(elemToReset)) {
    for (const [prop, value] of Object.entries(properties)) {
      if (prop === 'style') {
        Object.assign(elements[elemName].style, value);
      } else {
        elements[elemName][prop] = value;
      }
    }
  }

  console.log(secretNumber);
}

elements.check.addEventListener('click', checkHandler);
elements.again.addEventListener('click', reset);
