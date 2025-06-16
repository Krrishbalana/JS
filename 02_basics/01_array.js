// arrays.

// declaration

const myArr = [1, 2, 3, 4, 5]; // 1,2,3,4,5 => elements, they can be string, number, boolean, number + string, etc.
const heros = ["krish", "superman"];
const myArr2 = new Array(1, 2, 3, 4); 
// in javascript arrays are resizeable.
 

//console.log();

console.log(myArr[1]);

// Array Methods.

//1.
myArr.push(6);
console.log(myArr); // 1,2,3,4,5,6

//2.
myArr.pop();
console.log(myArr); // 1,2,3,4,5

//3.
myArr.unshift(6);
console.log(myArr); // 6,1,2,3,4,5

//4.
myArr.shift();
console.log(myArr); // 1,2,3,4,5

//5.
console.log(myArr.includes(9)); // false

//6.
console.log(myArr.indexOf(2)); // 1

//7.
const newArr = myArr.join(); //  Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr); // [1, 2, 3, 4, 5] --> typeof myArr is object
console.log(newArr); // 1,2,3,4,5 --> typeof newArr is string
console.log(typeof myArr); // object
console.log(typeof newArr); // string

//8. Slice, splice.

//----------------------SLICE--------------------------
const arr1 = myArr.slice(1,3); // index 3 is excluded in slice.
/*
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends 
to the end of the array.
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.
*/
console.log(arr1); // [2,3] , orignal array(myArr) will not change it will remain same.

//----------------------SPLICE---------------------------
const arr2 = myArr.splice(1,3); // index 3 is included in splice.
console.log(arr2); // [2, 3, 4] , orignal array(myArr) will remain with only those nummber which are not in arr2 --> [1, 5]
console.log(myArr); // [1, 5]













