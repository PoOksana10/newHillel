
let number = parseInt(prompt("Please input any number?"));
for (let i = 1; i <= 100; i++) {
    let a = i * i
    if (a <= number) {
        document.write("The following number " + i + " have square value less or equal to " + number + "<br>");
    }

}