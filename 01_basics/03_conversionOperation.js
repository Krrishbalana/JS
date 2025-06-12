let score = "33"; // string datatype
console.log("intial dataType:");

console.log(typeof(score));

// conversion from string to number

let valueInNumber = Number(score);     // here whe we write datatype(jisme convert krna h e.g: number) uska first letter "capital" aayega
console.log("after conversion dataType is:");

console.log(typeof(valueInNumber));

/*
Lets suppose if the string value stored in score is "33abc", and then we perform conversion on score, 
the typeof will show that it is number but when we try to print the value is shows NaN, 
dont relaye on this in JS.


"33" => 33
"33abc" => NaN
true => 1
falue => 0
null => 0
undefined = > NaN
*/

// for boolean
let isLoggedIn = 0;

let booleanIsLoggedIN = Boolean(isLoggedIn);
console.log(booleanIsLoggedIN);

/*
1 => true
0 => false
"" => false
"krish" => true
*/




//------------------------------------------------------- Operations ---------------------------------------------------------------

let value = 3;
let negValue = -value;

console.log(negValue); // -3

/*
Arithmatic Operations: +, -, *, **, /, %
Comparison operators: >, <, >=, <=, !=, ==
*/

let str1 = "hello";
let str2 = "Krish";
console.log(str1 + str2);   // Output=> helloKrish //subtraction of strings is not possible

/*
console.log("1" + 2); // output => 12(string)
console.log("1" + 2 + 2); // output => 122(string)
console.log(1 + 2 + "2"); // output => 32(string)

console.log(true); // true 
console.log(+true); // 1 => Bad Practices
*/


