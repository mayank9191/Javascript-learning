// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// way 'for of' is used to iterate over an array element or on string literals

for (const num of arr) {
  // console.log(num);

}

const greetings = "Hello World!"

for (const i of greetings) {
  // console.log(`Each char is ${i}`);
}

// Maps => it consists of unique key-value pair and key can be anythinf number,string,boolean duplicate key-value ignored and maintain insertion order

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

const myObject = {
  'game1': 'NFS',
  'game2': 'Spiderman'
}

// 'for of' not works on object because here error is object is not iterable

// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// }

