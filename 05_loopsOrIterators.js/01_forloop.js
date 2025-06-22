//for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//nested for loop
for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`i = ${i} and j = ${j}`);
    }
}

// printing tables with the help of loop
for(let i = 1; i <= 10; i++){
    console.log(`11 * ${i} = ${11*i}`);   
}

// loops with array
let array = [2, 3, 6, 8, 1, 99, 10, 12]
console.log(`length of array is ${array.length}`);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);   
}