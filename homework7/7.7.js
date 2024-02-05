/*
Option 1

let a1
let sum1 = 0
for (a1 = 30; a1 <= 80; a1++) {
    if (Number.isInteger(a1 / 2)) {
        sum1 = sum1 + a1;
    }
}
alert("Sum1" + " " + sum1)
*/


// Option 2
let a
let sum2 = 0
for (a = 30; a <= 80; a += 2) {
    sum2 += a
}
alert("Sum2" + " " + sum2)

