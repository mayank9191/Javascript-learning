
// we learned how to check properties description that is 'writable: _, enumerable: _' there are some properties of object that cant be changed as there description are set that is 'writable: false, enumerable: false' which means you cant change those properties and loop them acc to writable and enumerable respectively e.g here we take Math library(object) where PI is a property is is set writable: false, enumerable: false that you can't change them


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);


// If we want to set that description about are own created object pproperties we can do it by define 'Object.defineProperty()'

const chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true,

  orderchai: function () {
    console.log("chai nhi bani")

  }
}


// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
  writable: false, enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {

  if (typeof value !== 'function') {
    console.log(`${key}:${value}`)
  }

}