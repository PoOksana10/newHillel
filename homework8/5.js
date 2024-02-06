let data = parseInt(prompt("Please input number to check if it`s 3 in some degree"));
let i = 3
for (let j = 1; ; j++) {
    if (i ** j === data) {
        document.write("You can use this number: " + i + " in degree " + j + " to get your number ")
        break
    } else if (i ** j > data) {
        document.write('There is no degree for number 3 is found to achieve your input! ')
        break
    }
}
