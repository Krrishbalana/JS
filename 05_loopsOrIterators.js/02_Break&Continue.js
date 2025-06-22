// break and continue keyword with loops

for (let index = 0; index <= 10; index++) {
    if(index == 5) {
        console.log("5 detected");
        break;
    }
    console.log(`value of index is ${index}`);
}

for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log("5 detected");
        continue;
    }
    console.log(`value of index is ${index}`);
}