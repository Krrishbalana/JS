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


//--------------------------------------------------------------------MEMORY------------------------------------------------------------------------------
// Stack (premitive type), Heap (non-Premitive type)

//Stack
let myName = "krish balana";

let anotherName = myName;
anotherName = "pooopoo";

console.log(anotherName);
console.log(myName);  // it remains un changed, which means the copy of myName is passed to the another name 


//Heap
let userOne = {
    email: "krrishbalana@gmail.com",
    id: "122333"
}

let userTwo = userOne;
userTwo.email = "krishbalana09@gmail.com";

console.log(userOne.email); // output => "krishbalana09@gmail.com" because in this case copy pass nahi hoti sidha reference milta h memory mai.
console.log(userTwo.email);

/*
=> Jitne bhi premitive datatype h vo jayenge stack k ande or stck mai hume copy milti h orignal value nahi,
agr hum copy mai kuch changes kre to orignal unchanged reheti hai.
=> Jitne bhi non-premitive datatype h vo jayenge heap mai or heap mai hume reference milta h,
age humne value chnge ki to orignal bhi change hogi.
*/