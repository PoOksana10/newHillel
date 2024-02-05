let count = 0
document.write('Table of multiplication by 1 is below: <br>')
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        result = i * j
        count += 1
        document.write("Line" + count + ") " + i + " * " + j + " = " + result + "<br>"
        )
    }
}


   