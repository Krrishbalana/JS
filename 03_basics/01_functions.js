// functions part-1


//.  defination of function/ declare a function
function funName(){
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
}

/*
funName => reference of function
funName => execution of function
*/

funName();


//1.
function addTwoNum(number1, number2){   // when we create a function and what we will take as input for are function ther are know as perameter.
    console.log(number1 + number2);
    
}

addTwoNum(2,4);  // when we call function can pass some values they are know arguments.

//2.
function multiplyNum(num1, num2){
    return num1*num2;
}

const result = multiplyNum(3, 3);
console.log(result);

//3.
function logginUserMsg(username){
    return `${username} just logged in!`;
}

console.log(logginUserMsg("krish"));

//4.
function isLoggedIn(username = "user"){     // set a default value 
    return `${username} just logged in!`;
}

console.log(isLoggedIn()); // if we do not pass any value it will take default value
console.log(isLoggedIn("krish")); // krish will over-write the default value

