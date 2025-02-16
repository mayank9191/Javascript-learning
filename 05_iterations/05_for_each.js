// Another and most used way to iterate over array value is foreach

const coding = ['js', 'rb', 'java', 'python', 'cpp']

// here function inside foreach is higher order function which actually a callback function a function without name

// A callback function is a function passed as an argument to another function and executed later.

// coding.forEach(function (item) {
//   console.log(item);
// })


// we can also write arrow function as callback function

// coding.forEach((item) => {
//   console.log(item);
// })

function printMe(item) {
  console.log(item);
}

// we can also pass a function in 'foreach' method 

// coding.forEach(printMe)

// to access array's items, indexes, full array 
coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
})


// if objects are elements of an array so we can iterate first to element and later find out the value of key in object by . or [] notations

const myCoding = [
  {
    languageName: 'javascript',
    languageFileName: 'js'
  },
  {
    languageName: 'python',
    languageFileName: 'py'
  },
  {
    languageName: 'java',
    languageFileName: 'java'
  },
]


myCoding.forEach((item) => {
  console.log(item.languageName);
})