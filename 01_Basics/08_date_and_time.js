// Dates

// way to create date in javascript

let myDate = new Date()
// ways to convert into different forms
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate) // type => object


// Used to create a specific date (month starts from 0 (jan))

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now() // Give current time in milliseconds from 1 january,1970

// console.log(myTimeStamp);

// various ways to extract different info from date 

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)) // to convert milli second into second

// Get different components from full date
let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())

// we can customize in different format 
console.log(newDate.toLocaleString('default', {
  weekday: "long"
}))