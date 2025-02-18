# Projects related to DOM (Document Object Model)

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-frdl7i5u?file=5-keyboard%2Findex.html,5-keyboard%2Fchaiaurcode.js)

# Solution code

## Project 5 - to print a table showing keypressed

```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class=>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ''|| 'Space'}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});
```