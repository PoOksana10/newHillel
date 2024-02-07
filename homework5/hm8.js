let num = parseInt(prompt("Please input a number"))
let lastDigit = num % 10;
let fifthDigit = ((num - lastDigit) / 10) % 10;
let fourthDigit = ((((num - lastDigit) / 10) - fifthDigit) / 10) % 10;
let thirdDigit = ((((((num - lastDigit) / 10) - fifthDigit) / 10) - fourthDigit) / 10) % 10;
let secondDigit = (((((((((num - lastDigit) / 10) - fifthDigit) / 10) - fourthDigit) / 10)) - thirdDigit) / 10) % 10;
let firstDigit = parseInt(num / 100000)

if (firstDigit === lastDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit) {
    document.write("The first 3 digits are mirror reflection of the last 3 digits!<br>")
} else {
    document.write("The first 3 digits are not mirror reflection of the last 3 digits!<br>")
}



