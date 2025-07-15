//create promise, call it imidiately not stored in variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asunc Task");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async resolved");
})
