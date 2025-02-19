
// there is a concept of getter and setter which allow to set values and get it from stored memorey can be used with class, function, and object it advantage is we can send a modified value without store it into any variable and set it by a function

// here in class we need to access value of memorey by a different name like _XXX otherwise there will be error of call stack full as both constructor saved variable and getter variable return have a race to get that value

class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  get email() {
    return `${this._email.toUpperCase()}`
  }

  set email(value) {
    this._email = value
  }

  get password() {
    return `${this._password}hitesh`
  }
  set password(value) {
    this._password = value
  }
}

const mayank = new User('mayank@ai', 'abc')
console.log(mayank.password);
console.log(mayank.email);
