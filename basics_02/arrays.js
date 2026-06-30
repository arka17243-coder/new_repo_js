//array 

const myarr = [0,1,2,3,4];
const arr1 = new Array(1,2,5,6)
//console.log(arr1)

/* Array Methods */

// arr1.push(87)
// // arr1.pop()

// arr1.unshift(9)
// arr1.shift()
// arr1.shift()
// console.log(arr1.includes(3)) 
//console.log(arr1.indexOf(3))
const arr2 = arr1.join("-")
// console.log(arr1)
// console.log(arr2)

//  Difference between splice and slice functions

const newarr = new Array(1,3,4,5,6,7)
console.log("A: ", newarr);

// slice action
console.log(newarr.slice(0,3));
console.log("B: ",newarr);
// does not change the main array ,
// return a copy of a section of the array  containing the elements starting from start index and ending in the last index but excluding the last index
// if starting not mentioned start from  0 
//  if ending not mentioned then ended at the last index 
// (4,last index) (4,) (4)

//splice function 
console.log(newarr.splice(1))
console.log("C: ",newarr)

// The main array does not have the deleted elements 
// return a copy of a section of the array  containing the elements starting from start index and ending in the last index but including the last index
// if ending not mentioned end index would be the last index 
// (4,last index) (4,) (4)


