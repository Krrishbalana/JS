// This keyword and arrow function
// this stands for current context.
let user = {
    username: "krish",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMsg();
user.username = "arul"
user.welcomeMsg(); 



function chai() {
    let username = "krish";
    console.log(this);
}

chai();

// arrow functions

//1. normal way to define the function
const chai2 = function () {
    let username = "hitesh";
    console.log(this.username); // shows undefined because it doesn't work like this in functions as they work in objects.
}

//2. 2nd wany to define the function called arrow functions
const chai3 = () => {
    console.log("krish balana");
}

chai3();