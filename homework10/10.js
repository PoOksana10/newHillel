const userArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let sum1 = 0;
let sum2 = 0;
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let mult = 1;

for (let num of userArray) {
    if (Number(num) > 0) {
        sum += Number(num);//Exercise 10.1
        count += 1; // Exercise 10.1
        mult *= num; // Exercise 10.9
        if ((Number(num) % 2) === 0) {
            sum1 += Number(num) // Exercise 10.7
            count2 += 1;// Exercise 10.6
        } else {
            sum2 += Number(num); // Exercise 10.8
            count3 += 1; // Exercise 10.5
        }
    } else if (Number(num) < 0) {
        count4 += 1; // Exercise 10.4
    }
}

let minValue = Infinity; // Exercise 10.2 & 10.3
let maxValue = -Infinity;
for (let item of userArray) {
    if (item < minValue) {
        minValue = item;
    } else if (item > maxValue) {
        maxValue = item;
    }
}

// Exercise 10.10
for (let i = 0; i <= userArray.length; i++) { 
    if (userArray[i] < maxValue) {
        userArray[i] = 0;
    }
}


document.write('Min value is ', minValue + '<br>' + 'Max value is ' + maxValue + '<br>');
document.write("This is a sum " + sum + ". " + 'We have ' + count + " positive numbers in array <br>");
document.write("This is a multiplication " + mult + '<br>');
document.write("We have " + count2 + " positive numbers than can be divided by 2!<br> And we have " + count3
    + " positive numbers that cannot be divided by 2 <br>");
document.write('We have ' + count4 + " negative numbers in array <br>");
document.write("User array after nullification of values except maximum one <br>" + userArray);
