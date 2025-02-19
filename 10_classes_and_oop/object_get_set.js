
// Here we doing the same thing but with an object 

const user = {
  _email: "mayank@fb.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase()
  },

  set email(value) {
    this._email = value
  }
}

const tea = Object.create(user)

console.log(tea.email)