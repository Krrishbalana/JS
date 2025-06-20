// Nested scope

function one(){
    const username = "krish";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    
    two();
}
one();


if(true){
    let username = "krish";
    if(true){
        let website = "youtube";
        console.log(username + " " + website);
    }
    // website => cant access here
}
// username => can't access here


const addTwo = function(num){
    return num+2;
}

