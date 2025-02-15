// var c = 300

let a = 300 // this is declared in global scope

// here {} represents a scope which means variables declared are only Accessible inside this space only not but th problem with var is it also Accessible outside scope which can lead to bug by using that same name variable before scope but const and let keyword helps us to do the right way of declaration

// we can also access global scope variable inside local scope but vice versa is not true

if (true) {
  let a = 10 // this is declared in local scope
  const b = 20
  // var c = 30
  // console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


// nested function 
function one() {
  const username = "mayank"

  function two() {
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);

  two()

}

// one()

// nested conditional statement
if (true) {
  const username = "mayank"
  if (username === "mayank") {
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username)

// +++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++

// Hoisting concept => we can call function before declaration in this first type of declaration but not in second type
console.log(addOne(5));
function addOne(num) {
  return num + 1
}

// another way of declaration like an expression
console.log(addTwo(5));
const addTwo = function (num) {
  return num + 2
}
