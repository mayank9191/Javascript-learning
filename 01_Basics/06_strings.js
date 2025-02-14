const name = "mayank"
const repocount = 14

// console.log(name + repocount + " Value")

// string interpolation same like f string in python
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

// Another way to declare a String
const gameName = new String("Clash-of-Clan")

console.log(gameName[0])
console.log(gameName.__proto__) // lists all string methods

console.log(gameName.length) // to get length
console.log(gameName.toUpperCase()) // to get uppercase
console.log(gameName.charAt(2)) // to get letter on index=2
console.log(gameName.indexOf("h")) //find index of letter 'h

const newString = gameName.substring(0, 4) // give substring
console.log(newString)

const anotherString = gameName.slice(1, 4) // it slice a string
console.log(anotherString)

const newStringOne = "  mayank   "
console.log(newStringOne)
console.log(newStringOne.trim()) // removes whitespaces from string

const url = "https://mayank.com/mayank%20kulahara"
console.log(url.replace("%20", "-")) // replace a substring with any desired string

console.log(url.includes("mayank")) // checks whether contain this substring like "a in name" in python

console.log(gameName.split("-")) // it divides a string into an array from specified character like here "-"
