let score = "33" // or "33abc" or null or true/false or undefined

// console.log(typeof score)

let valueInNumber = Number(score) // Number conversion
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// Conversion of variable in number by Number() this is like typecasting in Python but here it will convert those alse which can't be converted and show ther type number but ther value stored is NaN (not a number)
// "33" => 33
// "33abc" => NaN (not a number)
// true/false => 1/0
// null => 0
// undefined => NaN (not a number)

let isLoggedIn = "mayank"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "mayank" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(typeof stringNumber)
// console.log(stringNumber)

// ************************** Operations **************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2 + 2) // Addition
// console.log(2 - 2) // Subtraction
// console.log(2 * 2) // Multiplication
// console.log(2 / 2) // Division
// console.log(2 ** 3) // Power of
// console.log(2 % 3) // Modulo or remainder

let str1 = "hello"
let str2 = "mayank"
let str3 = str1 + " " + str2

// console.log(str3)
// console.log(1 + "2")
// console.log("1" + 2)
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(+true)
// console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter // ++a prefix increment and a++ postfix increment
console.log(gameCounter)
