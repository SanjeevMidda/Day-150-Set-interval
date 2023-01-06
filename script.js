let letter = document.querySelector('h1');

function blue(){
    letter.style.color="blue";
}

function orange(){
    letter.style.color="orange";
}

blue();
setInterval(blue,100);

orange();
setInterval(orange,150);

