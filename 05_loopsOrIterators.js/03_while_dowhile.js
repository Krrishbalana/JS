// while and do while loop

//While
let index = 0
while (index < 10) {
    console.log(index);
    index++;
}

let myArr = [2, 4, 5, 6, 7, 8, 90];
let i = 0;
while(i < myArr.length){
    console.log(myArr[i]);
    i++;    
}

// do while

let score = 1;
do {
    console.log(`value of score is ${score}`);
    score++;
} while (score <= 10);