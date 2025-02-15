// Array (It is same like a List in python where you can add any datatype element in a array and it is expandable)

const myArr = [0, 1, 2, 3, 4, 5]   // Array define with element
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // Another way to declare an array
// console.log(myArr[1]) //we can print element by indexing

// Array methods 

// 'push()' used to insert a new element at last and returns new length of an array
// myArr.push(6) 
// myArr.push(7) 

// 'pop()' used to remove the last item from an array and returns it if array is empty it returns undefined
// myArr.pop()

// Inserts new elements at the start of an array, and returns the new length of the array.
// myArr.unshift(9) 

// Removes the first element from an array and returns it. If the array is empty, undefined is returned
// myArr.shift()

// console.log(myArr)

// Returns boolean if includes in array it returns True otherwise False
// console.log(myArr.includes(9))

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(myArr.indexOf(3))

// Adds all the elements of an array into a string, separated by the specified separator string.
const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// Slice, splice
// Slice => Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.

// Splice => Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)

console.log(myn2)
console.log("C", myArr)



