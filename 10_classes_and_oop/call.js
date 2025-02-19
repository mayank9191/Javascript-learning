
// call is a way to implicity run a method and pass the current context that is this to that method so after execution of that context value not disappear as before valuie is assigned to its this which is disappears if all the context is pop from call stack

function SetUsername(username) {
  // complex DB calls
  this.username = username
  console.log('called')
}

function createUser(username, email, password) {

  SetUsername.call(this, username)

  this.email = email
  this.password = password

}

const chai = new createUser('chai', 'chai@fb.com', '123')
console.log(chai)

