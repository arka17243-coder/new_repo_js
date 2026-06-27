//Date and time

/* several string representation of date */


let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//let mycreateddate = new Date(2023,0,23)
let mycreateddate = new Date("01-14-2023")
//console.log(mycreateddate.toLocaleString())
//console.log(mycreateddate.toDateString())
let mynewdate = new Date("2023-01-14")
//console.log(mynewdate.toLocaleString())

/* Timestamp  */

let myTimestamp = Date.now() //ms value number does not take parameter
//console.log(myTimestamp)
//console.log(mycreateddate.getTime()) convert to number in ms 
//console.log(Math.floor(Date.now()/1000));

/* get */

let newdate = new Date()
//console.log(newdate.getDay())
console.log(newdate.getFullYear())



