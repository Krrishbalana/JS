// functions part-2

//shoping cart- in which no of arguments are not define.

function calulateCartPrice(...num){ // rest operator
    return num;
}

console.log(calulateCartPrice(200, 300, 400, 20, 500));


// functions with objects

//object
const user = {
    username: "krish",
    price: 200,
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObject(user);

handleObject({
    username: "sma",
    price: 300
})

//functions with array

const arr1 = [2, 4, 5, 1, 7];

function arrayAt(arr, index){
    console.log(arr[index]);
}

arrayAt(arr1, 2);