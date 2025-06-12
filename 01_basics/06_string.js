//String
const name = "krish";
const repoCount = 50;

// console.log(name + repoCount + "value "); this is very bad way to write thing and cause low readability

//good way =>
    console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // string concatination , mordern way 

// there is one more way to define string:

const string = new String("hello krish, how are you?"); // using this we can use bhaut sare methods and properties(keys, length, etc.)

console.log(string);
//access methods of string.
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.charAt(2));
console.log(string.indexOf('o'));

// some methods => trim, replace, slice, subString, includes, split :- use them with the help of MDN documents.


