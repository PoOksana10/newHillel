document.getElementById("text_1").addEventListener("mouseover", mouseOver);
document.getElementById("text_1").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("demo").innerHTML = 'div';
}


function mouseOut() {
    document.getElementById("demo").innerHTML = '';
}