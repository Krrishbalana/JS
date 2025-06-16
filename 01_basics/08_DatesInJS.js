// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString(), " - in to toDateString()");
console.log(myDate.toISOString(), " - toISOString()");
console.log(myDate.toJSON(), " - in to toJSON()");
console.log(myDate.toLocaleDateString(), " - in to toLocaleDateString()");
console.log(myDate.toLocaleString(), " - in to toLocalString");
console.log(myDate.toLocaleTimeString(), " - in to toLocaleTimeString");


// customized date:

let customizedDate = new Date(2023, 0, 23);
/*
point to note:- (2023, 0, 23) - here:
2023 is year.
0 is jan(months started from 0 goes to 11)
23 is date.
*/
console.log(customizedDate.toDateString()); // gives => Mon Jan 23 2023



//---------------Time Stamp-----------------------

let timeStamp = Date.now();
console.log(timeStamp);
// to compare it with any other date we shoudl convert also that date into a value.
console.log(customizedDate.getTime());


