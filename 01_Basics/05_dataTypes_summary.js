// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // type => Number
const scoreValue = 100.3 // type => Number

const isLoggedIN = false
const outsideTemp = null // type => Object
console.log(typeof undefined) // type => undefined
let userEmail

const id = Symbol("124")
const anotherId = Symbol("124")

console.log(id) // type => Symbol
console.log(anotherId) // type => Symbol
console.log(id === anotherId) // two symbol always not equal besides we passed same value in them

const bigNumber = 234234747426342626328n

console.log(typeof bigNumber) // type => Bigint

// Reference  (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // Array

// Object
let myObj = {
  name: "Mayank",
  age: 20,
}
console.log(typeof heros) // type of array is also object because JavaScript arrays are a special type of object.typeof only differentiates between primitive types and objects.
console.log(typeof myObj) // type => object

const myFunction = function () {
  console.log("Hello, World!")
}

myFunction()
console.log(typeof myFunction) // type => function object

// Generally there is a type difference between primitive and non primitive datatypes(type => Object) only

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive => (num,bool,str,symbol,null)), Heap (Non-Primitive => Array,object)

// value going into stack
let myYoutubename = "mayankkulahara"

let anothername = myYoutubename
anothername = "mkulahara"

console.log(myYoutubename)
console.log(anothername)

// value of userOne is going to heap and userOne variable stored in stack gets its reference
let userOne = {
  email: "user@google.com",
  upi: "9315907657@ptsbi",
}

// here we creating a variable in stack getting the same reference as in heap which userOne getting (shallow copy)
let userTwo = userOne

// if we change in a heap both value of variables changes to same as they are referering same heap location
userTwo.email = "mayankkulahara@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
