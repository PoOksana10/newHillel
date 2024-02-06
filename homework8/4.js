let data = parseInt(prompt("Please input any number"));
let count = 0
for (let i = 1; i <= data; i++) {
    if (Number.isInteger(data / i)) {
        count = count + 1
    }
}
if (count === 2) {
    alert('Congratulations! Your number is natural number!');
} else {
    alert('Sorry, your number is not natural!')
}
