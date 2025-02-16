// to itetrate over object we uses special type of loop name 'for in' which iterates over keys 

const myObject = {
  js: 'javascript',
  cpp: 'C++',
  py: 'python',
  rb: 'ruby',
  swift: 'swift by apple'

}

for (const key in myObject) {

  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// if we iterates on array we get arrays keys besides values

const programming = ['js', 'py', 'rb', 'java', 'cpp']

for (const i in programming) {
  console.log(i, ':-', programming[i]);
}

// we cannot iterate over map with 'for in'loop as map is not iterable

// const map = new Map()
// map.set(1, 2)
// map.set(3, 4)
// map.set(5, 6)

// for (const [key, value] in map) {
//   console.log(key, value);
// }
