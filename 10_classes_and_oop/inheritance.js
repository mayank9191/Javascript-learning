class User {

  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }

}

class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email
    this.password = password
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`)
  }
}

const chai = new Teacher('chai', 'chai@teacher', '123')

chai.addCourse()
chai.logMe()

const masalaChai = new User('masalaChai')

masalaChai.logMe()
// masalaChai.addCourse() // not accessible as Teacher class inherits from user 

console.log(chai === masalaChai);
console.log(chai instanceof Teacher); // use to know whether a instance of that class


