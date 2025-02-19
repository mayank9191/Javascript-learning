class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username: ${this.username}`)
  }

  static createId() { // Static keyword is used to not allow object to access this method and it also apply for inherit class 
    return `123`
  }
}

const mayank = new User('mayank')
// console.log(mayank.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const iphone = new Teacher('krishna', 'agrawalkrishna@gmail.com')

iphone.logMe()
// console.log(iphone.createId());