// const coding = ['js', 'rb', 'java', 'python', 'cpp']

// if we want to return any value from 'foreach' if will return undefined

// const values = coding.forEach((item) => {
//   // console.log(item);
//   return item
// })

// console.log(values);


// 'filter' is used to iterate over an array by callback function the main difference between 'foreach' and 'filter' is 'filter' returns an new array after condition but not true with case of 'foreach' not returns anything or returns 'undefined' 

// 'filter' returns an new array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)

// const myArray = []
// myNums.forEach((item) => {
//   if (item > 4) {
//     myArray.push(item)
//   }

// })

// console.log(myArray);

// console.log(newNums);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
]

// const userBooks = books.filter((bk) => {
//   return bk.genre === 'History'
// })

// here we are applying various conditions like book publish after 1995 and genre is history so 'filter' method by help of callback returns an array containing required data

const userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')
console.log(userBooks);

