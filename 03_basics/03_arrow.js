const user = {
  username: "mayank",
  price: 990,

  welcomeMessage: function () {
    // this -> means or reffers current context
    console.log(`Welcome ${this.username} sir to our website!`)
    console.log(this);
  }

}

// user.welcomeMessage()
// user.username = "krishna"
// user.welcomeMessage()


// it will print an empty object on node but on browser or window it returns a large object cointaining all methods, keys etc
// console.log(this);


// 'this' keyword doesn't work in functions only works in objects 
// function chai() {
//   let username = "mayank"
//   console.log(this.username); //it will not work and returns undefined
//   // console.log(this); but here it will return all keys which it was showing on window
// }

// chai()

// '=>' this is arrow function just like lambda function in python
// we cannot use 'this' keyword inside arrow function
const chai = () => {
  username = "mayank"
  console.log(this);
}

// chai()

// Basic arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// Implicit(means assumes it's own ) return method another way to used in arrow function
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // we can also use () but if we uses {} we need to write return keyword  

// if we want to return an object through implicit method we can bind it into paranthesis otherwise it will not work
const addTwo = () => ({ username: "mayank" })

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 4, 7, 8]

// myArray.forEach(() => ())

