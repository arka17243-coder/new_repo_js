const useremail = "arka@gmail.com"
if (useremail){
    console.log("Got user email")
}
//falsy values --> false  , 0 ,-0 ,BigInt 0n, "" , null , NaN , undefined , 

// truth vlaues 
// "0" , 'false' , " ", [] , {} , function(){}
if(Array.length
    === 0
)
{
    //array is empty
}
const emptyobj ={} 
if(Object.keys(emptyobj).length === 0)
{
  // checking object is empty  
}
// nullish colescing operator (??)
let val1;
val1 = 5??10
val1 = null??10
console.log(val1)
//ternary operator if(conditon) ? if true : if false
