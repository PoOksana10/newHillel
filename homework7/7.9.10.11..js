let i = parseInt(prompt("Please input the integer number bellow"))
let count = 0
let sum = 0
for (let a = 1; a <= i; a++) {
    if (Number.isInteger(i / a)) {
        count += 1
        sum += a
        document.write("Your divider is" + " " + a + "<br>")
    }
}
document.write("Total dividers are " + count + "<br>" + "The total sum of the dividers is " + sum)
