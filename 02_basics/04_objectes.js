// objects part-2

// declare objects with constructor

const tinderUser = new Object(); // this is a singleton object.
//const tinderUser = {} => this is not a singleton object.

console.log(tinderUser); // gives will give a empaty object.

tinderUser.id = "123abc";
tinderUser.name = "krish";
tinderUser.isLogedIn = "true";

console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        firstName: "krish",
        lastName: "balana",
    }
}

//accessing elements
console.log(regularUser.fullname.firstName);

//merge
const obj1 = {
    1: "a",
    2: "b",
    3: "c",
}

const obj2 = {
    4: "d",
    5: "e",
}
const obj4 = {
    6: "f",
    7: "g",
}

/*
const obj3 = {
    obj1,
    obj2,
}
 console.log(obj3); // problem is that it add object in object 
*/

// here is way to add elements of objects to other object.
const obj3 = Object.assign({}, obj1, obj2, obj4);  // {} - this will act as target(an empty object, and obj1, obj2,obj4 will act as source.)
console.log(obj3);


// one more way is spread operator to merge the objects => const conj3 = {...obj1, ...obj2, ...obj4}

//one more intresting method on object
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // give an array with keys of object stored in it
console.log(Object.values(tinderUser)); // give an array with values same as values of tindeUser
console.log(Object.entries(tinderUser)); // return [ [ 'id', '123abc' ], [ 'name', 'krish' ], [ 'isLogedIn', 'true' ] ]



