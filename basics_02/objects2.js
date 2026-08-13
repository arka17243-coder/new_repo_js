const newuser =new Object();
const tuser ={};
tuser.id = "123@ghb3434"
tuser.username = "Ghb"
reguser = {
    email: "some@gmail.com",
  fullname:{
userfullname:{
    firstname: "ratan",
    lastname:"tata"    
} ,
stafffullname:{
    firstname:"ramesh",
    lastname:"sippi"
}
  }
}
// console.log(reguser.fullname.userfullname.firstname)
// console.log(reguser.fullname.stafffullname.lastname)
const obj1= {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//ways to merge one or more than one objects


// const obj3= Object.assign(obj1,obj2,{})
// console.log(obj3)

// const obj4 = {...obj1, ...obj2}
// console.log(obj4)

// const arr_of_obj = [{1:"a"},{newdata:"d"},{6:"e"}]
// console.log(arr_of_obj[1].newdata,arr_of_obj[0]["1"])

newuser.username = "rama"
newuser.userid = "#2324rama@6435y8"
newuser.password = "rama@232532"
newuser.loggedin = false
//console.log(Object.keys(newuser)) // output keys of class
//console.log(Object.values(newuser)) // output values of respective keys 
//console.log(Object.entries(newuser))



console.log(newuser.hasOwnProperty('loggedin'))
