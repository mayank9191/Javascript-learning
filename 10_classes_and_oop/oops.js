const user = {
  username: "mayank",
  loginCount: 3,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got User details from database")
    // console.log(`Username: ${this.username}`) // this keyword gives the current context
    // console.log(this)
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) returns {} but not on browser


// Here new keyword is a way to make an instance of Promise() object so  acts as constructor function this simply a method to create an object from class like in python,c++,java.

// const promiOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  }

  return this
}

// if we don't use new keywoed we overwrite the object variable declared earlier so we need to make a fresh copy through new keyword that create an empty object and constructor fnction called and value is assigned inside this. variable

const userOne = new User("mayank", 3, true)
const userTwo = new User("ChaiAurCode", 2, false)
console.log(userOne.constructor);
// console.log(userTwo);

// console.log(userOne instanceof User) // returns a boolean according to whether a instance of User or not 