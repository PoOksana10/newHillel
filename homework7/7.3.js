const a = 7
let count = 0
document.write('Multiplication table by number 7: <br>')
for (let b = 1; b <= 10; b++) {
    let result = a * b
    count += 1
    document.write(count + ") " + a + " * " + b + " = " + result + "<br>")
}
