// let myName = "mayank"

// console.log(myName.length);
// console.log(myName.trueLength);

// Here we we want to add our methods into array or string or objects
// so there is a way to set a prototype to these non primitive data structure one way is to do specific data structure like to array to string but if want to add method that can be accessible to all data structure we can add it to Object that is a parrent like thing from which other data structure inherits 

let myHeros = ['thor', 'spiderman']


let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function () {

    console.log(`Spidy power is ${this.spiderman}`)

  }
}


Object.prototype.mayank = function () {
  console.log("mayank");
}

Array.prototype.sayMayank = function () {
  console.log("hey mayank")
}
// heroPower.getSpiderPower()
// heroPower.mayank()

// myHeros.sayMayank()

// heroPower.sayMayank()

// inheritance

const User = {
  name: "mayank",
  email: 'mayankkulahara@gmail.com'
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isavailable: false
}

const TASupport = {
  mskrAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Morden Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

// start problem

let myName = "mayank"

String.prototype.trueLength = function () {
  return `The True Length is ${this.trim().length}`
}
console.log(myName.length);
console.log(myName.trueLength());

