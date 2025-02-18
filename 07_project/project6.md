# Projects related to DOM (Document Object Model)

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-frdl7i5u?file=5-keyboard%2Findex.html,5-keyboard%2Fchaiaurcode.js,6-unlimitedColors%2Fchaiaurcode.js)

# Solution code

## Project 6 - to change background color to random hex every 1 second and have control by start and stop button

```javascript
// const colorArray = [
//   'crimson',
//   'teal',
//   'indigo',
//   'coral',
//   'emerald',
//   'sapphire',
//   'amber',
//   'magenta',
//   'turquoise',
//   'lavender',
//   'midnightblue',
//   'chartreuse',
//   'goldenrod',
//   'periwinkle',
//   'vermilion',
// ];

const randomHEX = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// const changeBG = function () {
//   document.body.style.backgroundColor =
//     colorArray[Math.floor(Math.random() * 4)];
// };

let changeBgcolor;
const changeBG = function () {
  document.body.style.backgroundColor = randomHEX();
};

document.querySelector('#start').addEventListener('click', () => {
  if (!changeBgcolor) {
    changeBgcolor = setInterval(changeBG, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', (e) => {
  clearInterval(changeBgcolor);
  changeBgcolor = null;
  // document.body.style.backgroundColor = '#212121';
});

```