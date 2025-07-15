const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(error){
            console.log({username: "Hello", email: "Hello@gmail.com"});
        }else{
            console.log("error, Something went Wrong");
        }
    },1000)
})
// handle promise using async 
async function consumePromise(){
    const respose = await promiseOne
    console.log(respose);
}
consumePromise();