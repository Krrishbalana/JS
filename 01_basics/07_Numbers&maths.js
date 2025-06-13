//numbers and maths

//--------------------------------------------------------------NUMBERS-------------------------------------------------------------------------------
console.log("*****************************NUMBERS*************************************");
const score = 400; // JS by default detech that, this is a number data type;
console.log(score);

//there is one more way to define number variable.
const score2 = new Number(500);
console.log(score2);  // when you run this in console window of browser it give so many methods that you can you with this score2 variable.

//e.g.
console.log(score2.toString().length); // convert number to string and then calculate length => 3
console.log(score2.toFixed(2)); // => 100.00

const hundreds = 10000000000000;
console.log(hundreds.toLocaleString()); // 10,000,000,000,000 => output according to US standards
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,00,00,000 => according to Indian standards



//----------------------------------------------------------------MATHS------------------------------------------------------------------------------------
console.log("*****************************MATHS***************************************");

// Math => Math is a inbuild Library of the JS when you try to log the Math you will see => ki Math khudme ek Object and or usme bhaut sare funtions ya methods hai.

console.log(Math);
/*
Lets discuss about some intresting funtions of Math =>
    1. Math.abs()
    2. Math.round()
    3. Math.ceil()
    4. Math.floor()
    5. Math.sqrt
    6. Math.pow

    => the most usefull funtion of Math is Math.random()=> this funtion create a value always btw 0 & 1
*/

console.log(Math.abs(-4)); // modulus
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5


// Imp
console.log(Math.random()*10); // random value will generated between 0 and 10.


/*
-Important note:
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);   ==> value generated btw 10 to 20
*/



