const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.9483

// console.log(otherNumber.toPrecision(3))

// output -> 10,00,000
const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.min(3, 4, 6, 22, 1))
// console.log(Math.max(3, 4, 6, 22, 1))

// 0 <= Math.random() < 1
console.log(Math.random())
console.log((Math.random() * 10) + 1) // always min 1
console.log(Math.floor(Math.random() * 10) + 1) // fllor value

// Tries to get specific min max
const min = 10
const max = 20

// Formula for specific min max in random number
console.log(Math.floor(Math.random() * (max - min + 1)) + min)