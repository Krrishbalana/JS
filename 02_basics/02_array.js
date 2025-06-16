// Array part-2

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // puts array in the array
// console.log(marvel_heros);  => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // return => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// one mare way to add the elements of array other than concat
const allHeros = [...marvel_heros, ...dc_heros]; // this is know as spread operation.
console.log(allHeros);

//
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];

const real_another_array = anotherArr.flat(Infinity); 
/*
flat(depth?: 1 | undefined): (number | number[])[]
The maximum recursion depth
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//usefull
console.log(Array.isArray("hitesh")); // it will return false because "hitesh" is a string not array
console.log(Array.from("hitesh")); // convert this sting to array -> [ 'h', 'i', 't', 'e', 's', 'h' ]


let S1 = 100;
let S2 = 200;
let S3 = 300;
console.log(Array.of(S1, S2, S3)); // return --> [ 100, 200, 300 ]



