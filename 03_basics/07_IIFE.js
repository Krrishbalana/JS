// Immediately Invoked Function Expressions (IIFE) => (funciton)()

(function chai(){
    console.log(`DB CONNECTED`);
})(); // global scope k pollution se problem na ho isliye hum IIFE ko use krte hai => pehele fucntion of () mai wrap kr do or last mai () for immediate execution k liye



// using IIFE with arrow fucntion:

( () => {
    console.log("krish Balana");
} ) ();

// passing perameter; 
( (Name) => {
    console.log(`${Name}`);
    
} ) ("arul");






