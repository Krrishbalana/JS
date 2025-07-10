// generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// const body = document.querySelector("body");
// body.style.backgroundColor = "color";
let startchanging;
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const startChangingColor = function(){
    startchanging = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
}, 200)    
}
const stopChangingColor = function(){
    clearInterval(startchanging);
}


start.addEventListener("click", startChangingColor)
stop.addEventListener("click", stopChangingColor)