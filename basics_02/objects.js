 // singleton 
 
//  object literals
const JsUser = {
    name : "Arka",
    age : 21,
    "location": "Kolkata",
    email: "raka@mail.com",
    lastassesday : ["Monday","wednesday"]
}

//two ways to access object elements

// console.log(JsUser.email)
// console.log(JsUser["age"])

// for symbol 
const mysym  = Symbol("key1")
const newobject = {
[mysym] : 21
}
// console.log(newobject[mysym])

JsUser.name = "Eswar"
//Object.freeze(JsUser)
JsUser.location = "kurusaki" 
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Javascript")
}
console.log(JsUser.greeting())