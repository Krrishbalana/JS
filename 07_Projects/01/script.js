const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e.target.id);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
    })
})
