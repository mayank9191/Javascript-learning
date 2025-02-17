# Projects related to DOM (Document Object Model)

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-frdl7i5u?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## Project 1 - to set a color of background on basis of button

```javascript
const buttonSelect = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttonSelect.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    const setColor = button.getAttribute('id');
    body.style.backgroundColor = setColor;
  });
});

```