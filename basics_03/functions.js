function saymyname(){
    console.log("ARKA")
}
function addtwonum(num1,num2=45)
{
    
    return num1+num2
}
const res = addtwonum(3)
// console.log(res)
function loginusermessage(username)
{ if (username === undefined)
{ console.log("Enter valid username")
    return
}
    return `${username} just loggedin`
}

// console.log(loginusermessage())
function calculatecartprice(...num1)
{
return num1
}
// console.log(calculatecartprice(200,300,400))
const user ={
    username :" ARKA",
    price:199
}
function handleobj(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobj(user)
const mynewarr = [200,30934,24,24]
function returnsecondvalue(getarray)
{
    return getarray[1]
}
console.log(returnsecondvalue(mynewarr))