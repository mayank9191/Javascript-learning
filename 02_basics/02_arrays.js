const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const concat_heros = marvel_heros.concat(dc_heros)
// console.log(concat_heros)

// Spread Operator used to spread an array 
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat method used to spread an array upto set depth here its infinity which adjust accordingly

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// it check whether given is array or not and return true or false accordingly
// console.log(Array.isArray("mayank")) 

// it will make an array from the given datatype if it is convertable into array if not it will return [] empty array 
console.log(Array.from("mayank"))

// we have to specify the whether keys or value to be converted into array otherwise it will return [] empty array
// console.log(Array.from({ name: "mayank" }))


let score1 = 100
let score2 = 200
let score3 = 300

// 'of' is used to make new array with elements or variables given
console.log(Array.of(score1, score2, score3))




