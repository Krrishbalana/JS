//create a promise
const promiseOne = new Promise((resolve, reject) => {
    //do an async tasks
    setTimeout(() => {
        console.log("async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})