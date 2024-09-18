'use strict';
// DOM AND DOM MANIPULATION
// Document Object Model(DOM) is a structured rep. of html documents.
// DOM allows us to manipulate and style html elements.
// DOM is created by browser as html page is loaded.
// It is stored in tree form and each html.
// Each html element is an object.
// document is a special object in js used as entry point to DOM
// DOM is not a part of JS
// DOM is a part of Web APIs
// Web APIs is library that is used by browsers
// Web APIs are accessed using JS
// APIs is termed as Application Programming Interface.

/*console.log(document.querySelector('.message').textContent); // Selecting an element in javascript from html ('.class_name')
document.querySelector('.message').textContent = '🎉 Correct Number!'; // DOM manipulation of .message object

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

// Event Listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If there is no number entered
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    // Setting High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Manipulating CSS Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (secretNumber > guess && score > 1) {
    document.querySelector('.message').textContent = '📉 Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (secretNumber < guess && score > 1) {
    document.querySelector('.message').textContent = '📈 Too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
