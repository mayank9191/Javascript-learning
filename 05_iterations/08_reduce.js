
// 'reduce' is a method used to reduce or shrink to a value e.g. to add all value inside an array it take input as callback function and return an datatype retuned, here there is accumulator, current value we have to set first accumulator and then function keep adding current value into accimulator one by one  

const myNums = [1, 2, 3]


// const myTotal = myNums.reduce((acc, currval) => {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal);


// 'reduce' also works with array containning objects
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 7999
  },
  {
    itemName: "java course",
    price: 1999
  },
  {
    itemName: "Web Dev course",
    price: 12999
  },
]

const totalPrice = shoppingCart.reduce((acc, currvalue) => acc + currvalue.price, 0)

console.log(`Total price of the courses: ₹${totalPrice}`)