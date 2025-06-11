const accountId = 12345;
let accountEmail = "krrishbalana@gmail.com";
var accountPass = "11223344";
accountCity = "Chandigarh";  // this works but this is not a good option to store any variable.
let name; // when you try to log the name it will show undefined untill we put any value to the name.

// accountId = 123 // this is not allowed

console.log(accountEmail);

/*
prefer not to use var
because of issue of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity]);
