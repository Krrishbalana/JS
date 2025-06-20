// Scope

// let, var, const

let a = 10;
const b = 20;
var c = 30; 
console.log(a);
console.log(b);
console.log(c);

if (true) {
    let d = 40;
    const e = 50;
    var f = 60;
}

// console.log(d);
// console.log(e);
console.log(f); // this is the problem so avoid using var.

/*
local Scope => {} , all the variable which are declare inside the {} like in loops, conditional statement, etc.
global scope => all the variables declared in global scope are accessable inside {}, but the variable are declared inside the {} can't be access outside the {}.
*/




