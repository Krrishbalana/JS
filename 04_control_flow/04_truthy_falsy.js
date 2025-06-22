let userEmail = "krish@gmail.com";

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

/*
truthy values => "0", "false", " ", {}, [], function(){} all values other than falsy values are consider as true 
falsy values => false, 0 , -0, "", null, undefined, NaN
*/

let emptyArray = [];
if (emptyArray.length === 0) {
    console.log("array is empty");
}else{
    console.log("array is not empty");
}

let emptyObj = {};
if (Object.keys(emptyObj).length) { // Object.keys(objName) => returns an array of keys of object.
    console.log("object is empty");
}else{
    console.log("object is not empty");
}