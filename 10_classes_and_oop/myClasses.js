// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
//   }

//   encryptPassword() {
//     return `${this.password}abc`
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`
//   }


// }


// const chai = new User('mayank', 'mayankkulahara@gmail.com', '123212')

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//  behind the scene 

function User(username, email, password) {
  this.username = username
  this.email = email
  this.password = password

  // this.encryptPassword = function () {
  //   return `${this.password}abc`
  // }

  // this.changeUsername = function () {
  //   return `${this.username.toUpperCase()}`
  // }
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}

const lu = new User('mayank', 'mayankkulahara@gmail.com', '123432')

console.log(lu);
console.log(lu.encryptPassword());
console.log(lu.changeUsername());