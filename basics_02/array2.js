const marvel_heros = ["thor","spiderman" , "ironman"]
const dc_heros = ["superman","flash"]
//marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// const allheros = marvel_heros.concat(dc_heros) // merging two array 
const allheros = [...dc_heros,...marvel_heros,23]
//console.log(allheros)
// const another_array =[1,2,34,[2,3,4],[3,4,[34]]]

// console.log(another_array.flat(Infinity)) 

// const arr_new = [3,4]
// console.log(Array.isArray(arr_new))

//from function

const newstr ="hello guys"
 console.log(Array.from(newstr))
//eates an array from an iterable object.

//to functions

let s1 = 34
let s2 =345
let s3 = 67
console.log(Array.of(s1,s2,s3))
// Returns a new array from a set of elements.