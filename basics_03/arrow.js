const user ={
    username:"arka",
    price: 999,
    welcomemessage: function() {
        console.log(`${this.username} `)
    }
}
// user.welcomemessage()
// user.username  ="ram"
// user.welcomemessage()

//arrow functions
// () => {}

    //explicit return 
const addtwo = (num1,num2)=>{
    return num1+num2
}

//another way implicit return 
const addthree =(n1,n2,n3) => n1+n2+n3

