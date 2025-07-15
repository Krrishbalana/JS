// async function getAllUsers() {
//     try {
//         const respose = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await respose.json()
//         console.log(data);
//     } catch (error){
//         console.log("error");
//     }
// }

// getAllUsers()


// second way is .then() .catch()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
    
})