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

