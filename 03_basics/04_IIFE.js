// Immediately Invoked Function Expressions (IIFE)

// if we want to call a function just after declaration this is format to do so '()()' in first parenthesis we can write the function logic and the other parenthesis call it
// ()() -> it is uses to remove global scope pollution inside a function

// named IIFE 
(function chai() {
  console.log(`DB CONNECT`)
})(); // here we have to to end first code by ';' otherwise it will show an error if we write two IIFE together

// arrow function under IIFE
((name) => {
  console.log(`DB CONNECT TWO ${name}`);
})('mayank')