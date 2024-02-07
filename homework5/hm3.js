let a = parseInt(prompt("Please input first number"));
let b = parseInt(prompt("Please input second number"));

if (a % b === 0) {
    document.write("Number " + b + " is a divider of number " + a)
} else if (b % a === 0) {
    document.write("Number " + a + " is a divider of number " + b)
} else {
    document.write("There is no divider with remained 0 result!")
}