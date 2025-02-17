# Projects related to DOM (Document Object Model)

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-frdl7i5u?file=3-DigitalClock%2Findex.html,3-DigitalClock%2Fchaiaurcode.js)

# Solution code

## Project 3 - to make Digital Clock

```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let time = new Date();
  clock.innerHTML = `${time.toLocaleTimeString()}`;
}, 1000);

```