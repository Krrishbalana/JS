// purely Arrow functions

// define arrow function and store it in a veriable
const printName = (Name) => {
    console.log(`name of user is ${Name}`);
    
}

printName("krish");


// define arrow function
addTwoNum = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwoNum(3,4));

// implicit return arrow function
const subTwoNum = (num1, num2) => (num1 - num2);

console.log(subTwoNum(5, 3));

