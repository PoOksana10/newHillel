let num = parseInt(prompt("Please input a number"))
let lastDigit = num % 10;
let secondDigit = ((num - lastDigit) / 10) % 10;
let firstDigit = parseInt(num / 100)
let sum = firstDigit + secondDigit + lastDigit
let mult = firstDigit * secondDigit * lastDigit

if (Number.isInteger(sum / 2)) {
    document.write("The sum of the digits of given number can be divided by 2!<br>")
} else {
    document.write("The sum of the digits of given number can not be divided by 2!<br>")
}

if (sum % 5 === 0) {
    document.write("The sum of the digits of given number can be divided by 5!<br>")
} else {
    document.write("The sum of the digits of given number can not be divided by 5!<br>")
}

if (mult > 100) {
    document.write("The multiplication result of the digits of given number is greater than 100!<br>")
} else {
    document.write("The multiplication result of the digits of given number is less than 100!<br>")
}

if (firstDigit === secondDigit && firstDigit === lastDigit) {
    document.write("All digits are the same!<br>")
} else if (firstDigit === secondDigit) {
    document.write("First and second digits are the same!!<br>")
} else if (firstDigit === lastDigit) {
    document.write("First and last digits are the same!!<br>")
} else if (secondDigit === lastDigit) {
    document.write("Second and last digits are the same!!<br>")
} else {
    document.write('All digits are different!<br>')
}






