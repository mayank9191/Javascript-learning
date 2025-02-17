# Projects related to DOM (Document Object Model)

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-frdl7i5u?file=2-BMICalculator%2Findex.html,2-BMICalculator%2Fchaiaurcode.js)

# Solution code

## Project 2 - to make bmi calculator

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    if (bmi <= 18.6) {
      results.innerHTML = `<span>${bmi}</span><br/><span>You are Under Weight</span>`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `<span>${bmi}</span><br/><span>You are Overweight</span>`;
    } else {
      results.innerHTML = `<span>${bmi}</span><br/><span>You are in Normal Range</span>`;
    }
  }
});

```