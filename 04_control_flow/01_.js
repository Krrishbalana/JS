//logic

// //if statement
if (true) {
    console.log("if works");
}

if(false) {
    console.log("this will not work");
    
}

const isLoggedIn = true
if(isLoggedIn){
    console.log("hello");
}

// comparison operators : <, <=, >, >=, ==, ===, !=, !==

const a = 5;
const b = 2;
const c = "5";
if (a > b) {
    console.log("b is smaller than a");
}
if (a == c) {
    console.log("a is equal to c");
}
if (a !==c ) { // this check value as well as the datatype.
    console.log("datatype of a is not equal to c");
}

// if-else statement
let temp = 51;
if (temp < 50) {
    console.log("temp is less than 50");
}else{
    console.log("temp is greater than 50");
}

