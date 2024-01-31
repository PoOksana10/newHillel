let nmb1 = prompt('Please put something here... ');
let nmb2 = prompt('Please put something here again... ');
let nmb3 = prompt('Please put something here, one last time, I promise... ');

document.write(nmb1 + " " + nmb2 + " " + nmb3 + "<br>");


let num = 12345;
let digits = num.toString().split('');
let realDigits = digits.map(Number)
document.write(realDigits)
