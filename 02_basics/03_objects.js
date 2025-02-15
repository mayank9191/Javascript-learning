// singleton 

// Object.create

// object literals

const mySym = Symbol("key1") // way to create a symbol

// way to create an object
const JsUser = {
  name: "Mayank",
  "full name": "Mayank Kulahara",
  [mySym]: "mykey1", // if we have to include a symbol it is done like that otherwise it will be taken as normal key
  age: 20,
  location: "Delhi",
  email: "mayankkulahara@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);

// methods to access value of key in an object by . or []

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


// key value can be changed like this
JsUser.email = "mkulahara@gmail.com"

// we can also freeze the object not allow to change any key value
// Object.freeze(JsUser)

JsUser.email = "rohankumar94942@gmail.com"
// console.log(JsUser) 


// used to add a function in an object 
JsUser.greeting1 = function () {
  console.log("Hello Sir")
}

// this is used to point an object and access value of key
JsUser.greeting2 = function () {
  console.log(`Hello ${this.name} sir`)
}

// way to run a fuction stored in a key in an object
JsUser.greeting1()
JsUser.greeting2()




