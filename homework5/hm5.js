let num = parseInt(prompt("Please input two-digit number"));
let secondDigit = num % 10
let firstDigit = ((num - secondDigit) / 10) % 10

if (firstDigit < secondDigit) {
    document.write('The second digit is greater than first digit!')
} else if (firstDigit > secondDigit) {
    document.write('The first digit is greater than second digit!')
} else if (firstDigit === secondDigit) {
    document.write('The first digit is equal to the second digit!')
}
