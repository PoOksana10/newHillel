let nmb1 = prompt('Please put some number here... ');
let nmb2 = prompt('Please put some number here again... ');
let nmb3 = prompt('Please put some number here, one last time, I promise... ');

document.write(nmb1 + " " + nmb2 + " " + nmb3 + "<br>");

let num = parseInt(prompt('Please input 5 digit number '));
let lastDigit = num % 10;
let fourthDigit = ((num - lastDigit) / 10) % 10;
let thirdDigit = ((((num - lastDigit) / 10) - fourthDigit) / 10) % 10;
let secondDigit = ((((((num - lastDigit) / 10) - fourthDigit) / 10) - thirdDigit) / 10) % 10;
let firstDigit = parseInt(num / 10000)

document.write(firstDigit + ' ' + secondDigit + " " + thirdDigit + " " + fourthDigit + " " + lastDigit)
