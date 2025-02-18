// Promise => It is a object that represents the eventual completion (or faliure) of an asynchronus operation and its resulting value

// It have followings states:
//1) Pending
//2) Fullfilled
//3) Rejected

// way to create a promise is by creating new instance
// 'Promise()' class takes a callback which takes two parameters resolve and reject 
// Resolve => refers to do thing when task completed successfully
// Reject => refers to throw an error if task not occurs successfully 
// Used for := Do an async task ,DB calls, cryptography, network where there can be time to occur a task

// we used 'setTimeout()' its also a way for asynchronus programming it takes a callback function and time for to wait it is hard coded
// to access promise outputs through 'resolve()' and 'reject()' we need .'then()' and '.catch()' to get value after resolve() and to get error respectively we can chain various various '.then()' => it also takes callback function and functiion itself takes value given through resolve() in promise if to pass to another 'then()' return it and in next '.then()' get it through a parameter and '.catch()' and catch takes error from 'reject()' inside a promise  

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log('Async task is complete')
    resolve()
  }, 1000)
})

promiseOne.then(function () {
  console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve()
  }, 1000)

}).then(function () {
  console.log("Async 2 resolved");

})

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", emai: "mayankkulahara@gmail.com" })

  }, 1000)
})

promiseThree.then(function (user) {
  console.log(user)

})

const promiseFour = new Promise(function (resolve, reject) {

  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "Mayank", password: "123" })
    }
    else {
      reject('ERROR: Something went wrong')
    }

    resolve()

  }, 1000)
})


promiseFour
  .then((user) => {
    console.log(user);
    return user.username
  }).then((username) => {
    console.log(username);
  }).catch(function (error) {
    console.log(error);
  }).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    if (!error) {
      resolve({ username: "Mayank", password: "1234" })
    } else {
      reject("ERROR: JS went wrong")
    }
  })
}, 1000)

// Now there is a concept of async and await which also works as then and catch but there is no inbuilt error handling or graceful error handling like 'catch()' we use 'try{}catch(){}' instead 

// we can make a function async and later call it like normal function
// 'await' keyword is used to wait for completion of a task or function if it completed it is passed furthur on as assigned


async function consumePromiseFive() {

  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error)
  }

}

consumePromiseFive()

// Here we learned another method 'fetch()' which is somehow requests in python which takes input as a url and other things offcorse and return a promise


async function getAllUser() {

  try {
    const response = await fetch('https://api.github.com/users/mayank9191')

    const data = await response.json()
    console.log(data);

  } catch (error) {
    console.log("ERROR:", error);
  }
}

// getAllUser()

// Here we done the same thing but through '.then()' and '.catch()'
fetch("https://api.github.com/users/mayank9191").then((response) => {
  return response.json()
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error);
})


