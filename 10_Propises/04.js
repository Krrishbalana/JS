const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "krish", pass:"112233"})
        }
        else{
            reject("ERROR something went wrong")
        }
    },1000)
})

promiseOne.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => { // chaining
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolve or rejected");
    
})


