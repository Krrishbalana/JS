const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");
    if(height === " " || height <= 0 || isNaN(height)){
        result.innerHTML = "GIVE A VALID INPUT";
    }else{
        result.innerHTML = weight/ (height*height);
    }
    
})