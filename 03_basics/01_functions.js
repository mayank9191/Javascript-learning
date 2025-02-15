// if we want to do a task repetative we can use function
function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("Y");
  console.log("A");
  console.log("N");
  console.log("K");
}

// sayMyName()


// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

  // let result = number1 + number2
  // return result

  return number1 + number2
}

const result = addTwoNumbers(2, 5)

// console.log("Result: ", result)

// undefined or ""(empty string) is considered false

function loginUsereMessage(username = "sam") {

  if (!username) {
    console.log("Please enter a username")
    return
  }

  return `${username} just logged in`

}


// console.log(loginUsereMessage("mayank"));
// console.log(loginUsereMessage());

// ways to pass many arguments in a function by rest  operator
// here ...num1 is acts as (*agrs => []) in python so it will return an array containing all values passed as positional arguments
function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(200, 300, 400))

// ways to pass an object as an argument to a function 

const user = {
  username: "mayank",
  price: 199
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// can be passed directly
handleObject({
  username: "mayank",
  price: 199
})

const myNewArray = [200, 400, 100, 600]

// we can pass array also
function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
