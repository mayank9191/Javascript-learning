const userEmail = "mayankkulahara@gmail.com"

if (userEmail) {
  console.log("Got User email")
} else {
  console.log("Don't have user email")
}

// falsy values:(values considered false)
// false, 0, -0, BigInt 0n, "", null , undefined, NaN

// truthy values:(values considered true)
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//   console.log("Array is empty")
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

// it is a way to check safety if values comes null or undefined the next first value is taken 

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20

// console.log(val1)

// Terniary Operator

// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")