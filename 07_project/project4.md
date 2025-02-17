# Projects related to DOM (Document Object Model)

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-frdl7i5u?file=4-GuessTheNumber%2Fchaiaurcode.js,4-GuessTheNumber%2Findex.html)

# Solution code

## Project 4 - to make number guessing game

```javascript
const randomNumber = Math.floor(Math.random() * 101);
// console.log(randomNumber);

const form = document.querySelector('form');

const arr = [];

let guessRemain = 10;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.querySelector('.guesses').innerHTML = `${arr.join(',') || ''}`;

  const guessValue = parseInt(document.querySelector('#guessField').value);

  arr.push(guessValue);

  if (guessValue > randomNumber) {
    document.querySelector('.lowOrHi').innerHTML = `You are High ↗️`;
    document.querySelector('.lowOrHi').style.color = 'red';
  } else if (guessValue < randomNumber) {
    document.querySelector('.lowOrHi').innerHTML = `You are Low ↘️`;
    document.querySelector('.lowOrHi').style.color = 'red';
  } else if (guessValue === randomNumber) {
    document.querySelector('.lowOrHi').innerHTML = `🎉 You Guessed it right`;
    document.querySelector('.lowOrHi').style.color = 'green';
    location.reload();
  }
  if (document.querySelector('.lastResult').textContent == 0) {
    document.querySelector('.lowOrHi').innerHTML =
      'You are out of Guesses 😭 if want to play again refresh page 🔄️';
  } else {
    guessRemain -= 1;
    document.querySelector('.lastResult').innerHTML = `${guessRemain}`;
  }
});

```