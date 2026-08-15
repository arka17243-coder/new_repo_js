//for in loop 
const myobj = {
    js :"javascript",
    cpp : "c++",
    rb : "ruby"
}
// for (const key in myobj) {
//     console.log(key);     
// }
for (const key in myobj) {
    console.log(`${key} -> ${myobj[key]}`);        
}

