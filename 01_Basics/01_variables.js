const accountID = 1425326
let accountEmail = "mayankkulahara@gmail.com"
var accountPassword = "12423"
accountCity = "Jaipur" // This is also a way to declare a variable in javascript which is not correct way to do
let accountState

// accountID = 2 // not allowed because it is const

accountEmail = "mkulahara@gmail.com"
accountPassword = "56474743834"
accountCity = "Delhi"

console.log(accountID)

/*
Prefer not to use var keyword because due to issue in block scope and functional scope
*/

console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
])
