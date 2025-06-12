/* 
there are two types of dataTypes on the basis of how the data is stored in momery and how we will access them:
1. Premitive(call by value) => string, number, boolean, null, undefined, symbol, bigint

2. Non-Premitive(call by referance) => also know as referance type datatype => Array, Objects, Functions.

*/

// note => if you want to master JS master Objects of JS, and Events of JS,
 
const Id = Symbol('123');
const Id2 = Symbol('123');

console.log(Id === Id2); // return false 


//definations/initalize =>
    //array
        const marks = [12, 34, 54, 88, 99];

    //object
        let myObj = {
            name: "krish",
            age: 22,
            college: "Chandigarh University",

        }
    //functions
        const myFunction = function(){
            console.log("Hello world");
        }
