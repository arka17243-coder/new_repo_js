// for of loop  arrays strings
const arr = [1,2,3,4,5,6,7,8]
// for (const val of arr) {
//    console.log(val); 
// }

// maps unique and in order
const map = new Map()
map.set('IN',"India")
map.set('GER',"Germany")
map.set('NED',"Netherland")
map.set('FRA',"France")
// for (const [key,value] of map)
// {
//     console.log(key,"->",value);
// }

const myobj ={
    'game1' : "FOOTBALL",
    'game2' : "POLO"    
}
// console.log(map);

for(const key of myobj)
{
    console.log(key);
}