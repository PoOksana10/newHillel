const arr = [1, 3, '44', -44, 'f', '='];
let sum = 0;
let count = 0;
let averNum;
for (let i of arr) {
    if (i === Number(i)) {
        sum += i;
        count += 1;
    }
}
averNum = sum / count
document.write('The average number of sum of all numbers in array is : ' + averNum.toFixed(2))
