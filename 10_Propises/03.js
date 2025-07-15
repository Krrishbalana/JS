const PromiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "hello", email: "hello@gmail.com"})
    },1000)
})
PromiseOne.then(function(user){
    console.log(user);
    
})