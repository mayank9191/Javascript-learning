// Singleton Object by constructor
// const tinderUser = new Object()

// Non singleton object
// object declaration
const tinderUser = {}

// object assigning
tinderUser.id = "123abc"
tinderUser.name = "Krishna"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
  email: "krishna@gmail.com",
  fullname: {
    usernamefullname: {
      firstname: "mayank",
      lastname: "kulahara"
    }
  }
}

// To access values in an object if nested
// console.log(regularUser["fullname"]["usernamefullname"]["firstname"]);

// console.log(regularUser.fullname.usernamefullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// Ways to merge objects

// const obj3 = { ...obj1, ...obj2 }

// here {} empty object used as target in which all objects merged finally
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


// we can make or get an objects as elements in an array
const users = [
  {
    id: 1,
    email: "mayankkalahara@gmail.com"
  },
  {
    id: 2,
    email: "mayankkalahara@gmail.com"
  },
  {
    id: 3,
    email: "mayankkalahara@gmail.com"
  }
]

// to access objects as elements in an array 
// console.log(users[0]['id']);

// console.log(tinderUser)


// we can get an array of objects components like key, value and (key-value)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// way to chech it contain key or property inside an object
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object Destructuring

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor)
console.log(instructor)


// API (Application Programming Interface) structure
// {
//   "name": "mayank",
//   "coursename": "js in hindi",
//   "price": "free"
// }

// [
//   {},
//   {},
//   {}
// ]