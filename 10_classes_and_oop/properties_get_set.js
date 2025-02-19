
// Like we done with class we can do same with a function here to define a getter and setter we need to define property of set variable to access getter and setter  and concept is same like class just difference is create a getter and setter through 'Object.defineProperty(this,'',{get:function(){},set:function(){}})' its like to add  something extra methods to a object as function is also a object

function User(email, password) {
  this._email = email
  this._password = password

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase()
    },
    set: function (value) {
      this._email = value
    }
  })
  Object.defineProperty(this, 'password', {
    get: function () {
      return this._password.toUpperCase()
    },
    set: function (value) {
      this._password = value
    }
  })
}


const chai = new User('mayannkkulahara@gmail.com', 'abdhv')

console.log(chai.email)
console.log(chai.password)