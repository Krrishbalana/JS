// nested if-else condition

let balance = 1000;
if(balance < 500){
    console.log("less than 500")
}else if (balance > 500) {
    console.log("greater than 500");
    if(balance > 900){
        console.log("greater than 900");
    }
}

let marks = 75;
if (marks > 90) {
    console.log("A grade");
}
else if (marks >= 80 && marks < 90) {
    console.log("B grade");
}
else if(marks >= 70 && marks < 80){
    console.log("C grade");
}
else{
    console.log("D grade");
    
}

