const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 'map' is also way to iterate but it used to do operations on each element an returns an new array 

// const newNums = myNumbers.map((num) => num + 10)

// same work of 'map' is done with 'foreach
// const a = []
// myNumbers.forEach((num) => {
//   a.push(num + 10)
// })

// console.log(newNums);
// console.log(a);


// chainning of various methods on array in javascript

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)

console.log(newNums);