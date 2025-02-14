// console.log(2 > 5)
// console.log(2 < 5)
// console.log(2 >= 5)
// console.log(2 == 5)
// console.log(2 != 5)

// console.log("2" > 1) // String "2" is converted by javascript and compared
// console.log("02" > 1)

// The reason is that an equality check == and comparison > < >= <= work differently. Comparisons convert null to a number, treating it as 0.That's why result is (null>=0) is true and (null>0) is false
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// Any comparison or equailty check operation with undefined is always false
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// === -> This one is strict check which also checks the datatypes without without converting them during operations

console.log("2" === 2)
